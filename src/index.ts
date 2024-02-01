import { Octokit, RestEndpointMethodTypes } from '@octokit/rest';
import { config } from 'dotenv';

config();

const gh = new Octokit({
  auth: process.env.PERSONAL_TOKEN as string,
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
  const result = await gh.rest.activity.listEventsForAuthenticatedUser({
    username: 'thassiov',
  });

  return result.data;
}

/**
 * Gets my latest commit
 */
function getLatestCommit(response: GHActivityResponseList): Commit | string {
  const latestCommit = response.find(
    (item) => item.type === 'PushEvent' && item.public === true
  );

  if (!latestCommit) {
    return "Looks like I've been AFK. I'm probably sim racing.";
  }

  return {
    repo: latestCommit!.repo.name,
    commitSha: (latestCommit!.payload as any).commits[0].sha as string,
    message: (latestCommit!.payload as any).commits[0].message as string,
    pushedAt: latestCommit.created_at as string,
  };
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

  return watched.slice(0, 3);
}

(async () => {
  const resp = await getRecentActivity();

  const latestCommit = getLatestCommit(resp);
  const watchedRepos = getLatestWatchedRepos(resp);

  console.log(latestCommit);
  console.log(watchedRepos);
})();
