![behold my stuff](./behold-no-bg-latest.png)

Jokes aside, I'm a backend developer (mostly, but I do some <i>React</i> from time to time) that does stuff in <i>Javascript/Typescript</i> (95%) and <i>Go</i> (5%, but wanting to do more).

## My current project: aps - accounts and profiles service

This is an exercise on developing a service for creating accounts (the thing with `id`, `email`, `phone`, `roles`) and profiles (`name`, `age`, `gender`) that you could use to integrate with another service. For instance, an ecommerce website.

There's nothing new or inovative about this service in terms of features. Its purpose is to run as a standalone service in a container that responds to http requests, but also having the option to be imported as a lib in a codebase.

It will have versions in Nodejs and Go.


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

### Tooling
![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue)
![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white)
![Terraform](https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white)

### Databases
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)

### Cloud
![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

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

Last updated at: Sun May 18 11:23:28 UTC 2025
![readme](https://github.com/thassiov/thassiov/actions/workflows/readme.yml/badge.svg)
</details>
