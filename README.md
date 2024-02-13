![behold my stuff](./behold-no-bg-latest.png)

Jokes aside, I'm a backend developer (mostly, but I do some <i>React</i> from time to time) that does stuff in <i>Javascript/Typescript</i> (95%) and <i>Go</i> (5%, but wanting to do more).

## My current project

### mark my words - A study on chrome extension development.
The user selects a text in a webpage and the extension stores it in the backend (kind of like [Pocket](https://getpocket.com), but with just text selections).
The system has basic auth (usernane/email+password).

- Frontend [markmywords-chrome-extension](https://github.com/thassiov/markmywords-chrome-extension)
    - chrome extension using [React](https://react.dev/).
    - ![](https://github.com/thassiov/markmywords-chrome-extension/actions/workflows/test.yaml/badge.svg)

- Backend: [markmywords-backend](https://github.com/thassiov/markmywords-backend)
    - restful api using [Typescript](https://www.typescriptlang.org/), [Express](https://expressjs.com/) and [Sequelize](https://sequelize.org/), running on a [Docker](https://www.docker.com/) container.
    - ![](https://github.com/thassiov/markmywords-backend/actions/workflows/test.yaml/badge.svg)

--------------- 
<details>
  <summary>The image is updated via gh actions</summary>
  
  The idea behind it is:
  - call GitHub's REST API (using [@octokit/rest](https://octokit.github.io/rest.js/v20)) for the latests public acitivity in my account
  - filter the latest commit (message, sha, date, repo)
  - filter the 5 latest starred/watched repos (repo, date)
  - edit the [base image](./behold-no-bg.png) using [Jimp](https://github.com/jimp-dev/jimp) to place the text in the _correct_ spot
  - save a new copy of that image, making it overwrite [behold-no-bg-latest.png](./behold-no-bg-latest.png)
  - commit the changes via [this little action](.github/workflows/readme.yml)

  It runs every 10 minutes [or so](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule) and when something changes compared to the last data fetch (in this case, the generated image is diff'ed, so there is that), we commit this changes and the new image is published.

  [The code that does it.](./src/index.ts)

Last updated at: Tue Feb 13 20:10:25 UTC 2024
![readme](https://github.com/thassiov/thassiov/actions/workflows/readme.yml/badge.svg)
</details>
