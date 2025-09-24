<details>
  <summary>My stuff</summary>
  
[![behold my stuff](./behold-no-bg-latest.png)](https://www.youtube.com/watch?v=kAiDGQAncGE)

</details>

[thassio.dev](https://thassio.dev)
  
I'm a backend developer (mostly, but I do some <i>React</i> from time to time) that does stuff in <i>Javascript/Typescript</i> (95%) and <i>Go</i> (5%, but wanting to do more).

Right now I'm working freelance and building open source projects.

### Environment
![xps](https://img.shields.io/badge/dell-XPS%209320%20-007DB8?style=for-the-badge&logo=dell&logoColor=white)
![Archbtw](https://img.shields.io/badge/Arch_Linux-1793D1?style=for-the-badge&logo=arch-linux&logoColor=white)
![Neovim](https://img.shields.io/badge/NeoVim-%2357A143.svg?&style=for-the-badge&logo=neovim&logoColor=white)
![Alacritty](https://img.shields.io/badge/alacritty-F46D01?style=for-the-badge&logo=alacritty&logoColor=white)
![Tmux](https://img.shields.io/badge/tmux-1BB91F?style=for-the-badge&logo=tmux&logoColor=white)

### Languages
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)

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

Last updated at: Wed Sep 24 03:10:29 UTC 2025
![readme](https://github.com/thassiov/thassiov/actions/workflows/readme.yml/badge.svg)
</details>
