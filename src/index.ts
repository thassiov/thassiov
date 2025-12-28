import { Octokit, RestEndpointMethodTypes } from '@octokit/rest';
import { config } from 'dotenv';
import Jimp from 'jimp';
import { resolve } from 'path';

import { GHAPICallError, ImageEditorError } from './errors';

config();

const BASE_IMAGE_PATH = resolve('behold-no-bg.png');

const gh = new Octokit({
  auth: process.env.GITHUB_TOKEN as string,
});

type GHActivityResponseList =
  RestEndpointMethodTypes['activity']['listEventsForAuthenticatedUser']['response']['data'];

type Commit = {
  repo: string;
  commitSha: string;
  message: string;
  pushedAt: string;
};

type WatchedRepo = {
  name: string;
  starredAt: string;
};

async function getRecentActivity(): Promise<GHActivityResponseList> {
  try {
    const result = await gh.rest.activity.listEventsForAuthenticatedUser({
      username: 'thassiov',
    });

    return result.data;
  } catch (error) {
    throw new GHAPICallError('Could not get latests activity from GitHub', {
      cause: error as Error,
    });
  }
}

/**
 * Gets my latest commit
 */
async function getLatestCommit(
  response: GHActivityResponseList
): Promise<Commit | string> {
  const latestPushEvent = response.find(
    (item) => item.type === 'PushEvent' && item.public === true
  );

  if (!latestPushEvent) {
    return "Looks like I've been AFK. I'm probably sim racing.";
  }

  const [owner, repo] = latestPushEvent.repo.name.split('/') as [string, string];
  const sha = (latestPushEvent.payload as any).head as string;

  try {
    const commitDetails = await gh.rest.repos.getCommit({
      owner,
      repo,
      ref: sha,
    });

    return {
      repo: latestPushEvent.repo.name,
      commitSha: sha,
      message: commitDetails.data.commit.message,
      pushedAt: latestPushEvent.created_at as string,
    };
  } catch (error) {
    throw new GHAPICallError('Could not fetch commit details from GitHub', {
      cause: error as Error,
    });
  }
}

/**
 * Gets the last 4 repos I watched/starred
 */
function getLatestWatchedRepos(
  response: GHActivityResponseList
): WatchedRepo[] | string {
  const watched = response
    .filter(
      (item) =>
        item.type === 'WatchEvent' &&
        item.payload.action === 'started' &&
        !item.repo.name.startsWith('thassiov/')
    )
    .map(
      (item) =>
        ({
          name: item.repo.name,
          starredAt: item.created_at,
        }) as WatchedRepo
    );

  if (!watched.length) {
    return "Didn't starred any repo in a while...";
  }

  return watched.slice(0, 5);
}

async function readBaseImage(): Promise<Jimp> {
  try {
    const image = await Jimp.read(BASE_IMAGE_PATH);
    return image;
  } catch (error) {
    throw new ImageEditorError('Could not load base image', {
      cause: error as Error,
    });
  }
}

async function addLatestCommitInfoToImage(
  image: Jimp,
  commit: Commit | string
): Promise<Jimp> {
  const MAX_WIDTH_COMMIT_MESSAGE = 300;
  const MAX_WIDTH_COMMIT_INFO = 265;
  const sans32black = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
  const sans32white = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
  const sans16white = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);

  image.print(sans32black, 360, 500, 'My latest commit');

  if (typeof commit === 'string') {
    image.print(sans32white, 360, 567, `"${commit}"`, MAX_WIDTH_COMMIT_MESSAGE);
    return image;
  }

  // commit message
  image.print(
    sans32white,
    360,
    567,
    `"${commit.message}"`,
    MAX_WIDTH_COMMIT_MESSAGE
  );

  // commit info - sha
  image.print(
    sans16white,
    395,
    747,
    `${commit.commitSha.slice(0, 6)}`,
    MAX_WIDTH_COMMIT_INFO
  );

  // commit info - time
  image.print(
    sans16white,
    395,
    768,
    `${commit.pushedAt}`,
    MAX_WIDTH_COMMIT_INFO
  );

  // commit info - repo
  image.print(sans16white, 395, 788, `${commit.repo}`, MAX_WIDTH_COMMIT_INFO);

  return image;
}

async function addStarredReposToImage(
  image: Jimp,
  watched: WatchedRepo[] | string
): Promise<Jimp> {
  const MAX_WIDTH_REPO_INFO = 265;
  const sans16black = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
  const sans16white = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);

  image.print(sans16black, 20, 567, "I've been liking this repos also");

  if (typeof watched === 'string') {
    image.print(sans16white, 14, 612, watched, MAX_WIDTH_REPO_INFO);
    return image;
  }

  let textStartAt = 610;

  watched.forEach((repo) => {
    if (repo.name.length > 30) {
      const [username, repoName] = repo.name.split('/');

      image.print(sans16white, 30, textStartAt, username, MAX_WIDTH_REPO_INFO);
      textStartAt += 20;
      image.print(
        sans16white,
        30,
        textStartAt,
        `/${repoName}`,
        MAX_WIDTH_REPO_INFO
      );
    } else {
      image.print(sans16white, 30, textStartAt, repo.name, MAX_WIDTH_REPO_INFO);
    }
    textStartAt += 25;
    image.print(
      sans16white,
      30,
      textStartAt,
      repo.starredAt,
      MAX_WIDTH_REPO_INFO
    );
    textStartAt += 40;
  });

  return image;
}

async function addFontSizeNotice(image: Jimp): Promise<Jimp> {
  const MAX_WIDTH_FONT_NOTICE = 320;
  const sans16white = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);

  image.print(
    sans16white,
    15,
    490,
    "tHiS fOnT iS tOo SmAlL i CaN't Re- I know the font is not good. I'll fix it later",
    MAX_WIDTH_FONT_NOTICE
  );

  return image;
}

async function saveNewimage(image: Jimp): Promise<void> {
  try {
    // lol
    const newFilename =
      (BASE_IMAGE_PATH.split('/').reverse()[0]!.split('.')[0] as string) +
      '-latest.png';

    const filePath =
      BASE_IMAGE_PATH.split('/').slice(0, -1).join('/') + `/${newFilename}`;

    await image.writeAsync(filePath);
  } catch (error) {
    throw new ImageEditorError('Could not write edited image', {
      cause: error as Error,
    });
  }
}

(async () => {
  try {
    const resp = await getRecentActivity();

    let image = await readBaseImage();

    image = await addFontSizeNotice(image);
    image = await addLatestCommitInfoToImage(image, await getLatestCommit(resp));
    image = await addStarredReposToImage(image, getLatestWatchedRepos(resp));

    await saveNewimage(image);
  } catch (error) {
    console.error(
      'A problem happened during the creation of the new image and the operation could not finish. More details below.'
    );
    console.error((error as Error).message);
    console.error((error as Error).stack);
    console.error('Exiting...');
    process.exit(1);
  }
})();
