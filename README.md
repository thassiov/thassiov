<details>
  <summary>My stuff</summary>

[![behold my stuff](./behold-no-bg-latest.png)](https://www.youtube.com/watch?v=kAiDGQAncGE)

</details>

[thassio.dev](https://thassio.dev)

Backend developer with 10+ years building cloud-native APIs, data pipelines, and integrations at scale.

### What I'm Building

- **[cmdvault](https://github.com/thassiov/cmdvault)** — CLI snippet manager written in Go
- **[sump](https://github.com/thassiov/sump)** — Self-hosted identity provider (OpenID Connect)
- **[relay](https://github.com/thassiov/relay)** — Backend-agnostic web interface for LLM CLIs

### Tech

TypeScript · Node.js · Go · PostgreSQL · AWS · Kubernetes · Docker

### Links

[LinkedIn](https://linkedin.com/in/thassiov) · [CV](./thassio-victor-cv.pdf)

---------------
<details>
  <summary>The image (my stuff) is updated via a small script I wrote and is run via gh actions.</summary>

  The idea behind it is:
  - call GitHub's REST API (using [@octokit/rest](https://octokit.github.io/rest.js/v20)) for the latests public acitivity in my account
  - filter the latest commit (message, sha, date, repo)
  - filter the 5 latest starred/watched repos (repo, date)
  - edit the [base image](./behold-no-bg.png) using [Jimp](https://github.com/jimp-dev/jimp) to place the text in the _correct_ spot
  - save a new copy of that image, making it overwrite [behold-no-bg-latest.png](./behold-no-bg-latest.png)
  - commit the changes via [this little action](.github/workflows/readme.yml)

  It runs every 10 minutes [or so](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule) and when something changes compared to the last data fetch (in this case, the generated image is diff'ed, so there is that), we commit this changes and the new image is published.

  [The code that does it.](./src/index.ts)

Last updated at: Sat Dec  6 02:44:38 UTC 2025
![readme](https://github.com/thassiov/thassiov/actions/workflows/readme.yml/badge.svg)
</details>
