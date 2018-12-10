<br/>
<p align="center">
  <a href="https://lepage.cc">
    <img src="https://user-images.githubusercontent.com/1711854/46634061-b79fe680-cb1d-11e8-9d83-32f563fa8acc.png" width=180 alt>
  </a>
  <p align="center">
    Resume, CV, about and portfolio
    <br/>
    <a href="https://lepage.cc" alt="Guy Lepage">
      <strong>Lepage.cc</strong>
    </a>
    &nbsp;
    <a href="https://github.com/guylepage3" alt="GitHub guylepage3 (Guy Lepage)">
      <strong>GitHub</strong></a>
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~guylepage3" alt="npm guylepage3 (Guy Lepage)">
      <strong>npm</strong></a>
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/guylepage/" alt="Guy Lepage | LinkedIn">
      <strong>LinkedIn</strong></a>
    </a>
    &nbsp;
    <a href="https://medium.com/@guylepage3" alt="Guy Lepage – Medium">
      <strong>Medium</strong></a>
    </a>
    <br />
    <a href="https://github.com/guylepage3/lepage.cc/issues/new" alt="Report a Bug (Lepage.cc)">
      Report bug
    </a>
    &nbsp;
    <a href="https://goo.gl/forms/2LvYYCg1VViD6FWm2" alt="Contact Guy Lepage">
      Contact
    </a>
    <br/>
    <br/>
    <a href="https://twitter.com/intent/follow?screen_name=guylepage3">
      <img src="https://img.shields.io/twitter/url/https/twitter.com/guylepage3.svg?style=social&label=Follow%20%40guylepage3&logo=twitter" alt="follow on Twitter">
    </a>
    &nbsp;
    <a href="https://github.com/guylepage3/lepage.cc/stargazers">
      <img src="https://img.shields.io/github/stars/guylepage3/lepage.cc.svg?style=social&label=Star&maxAge=2592000" alt="Star Repo">
    </a>
  </p>
</p>
<br/>
<p align="center">
  <img width="700" alt="lepage.cc-v2.1.26" src="https://user-images.githubusercontent.com/1711854/48869530-8e74a600-edab-11e8-9cd7-cf19e366a9dd.png">
</p>
<br/>


## Table of contents

- [Status](#status)
- [What's included](#whats-included)
- [Quick Start](#quick-start)
- [Maintainers](#maintainers)

## Status
- Installed [React Router DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) and [React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router).
- Added more components to support content.
- Upgraded to [Create React App `v2.0.5`](https://github.com/facebook/create-react-app/releases/tag/v2.0.5).
- Added https enforcement with downgrade attack prevention.
- Added new typography testing environment for custom design system building 
  on `Lepage UI`.
- Major update to [`Lepage UI`](https://github.com/guylepage3/lepage.cc/blob/master/src/styles/Custom.scss).
  - Color System
  - Spacing Rules
  - Communication Typography System
    - Calculations for a `1rem` and `1.0625rem` base `font-size`.
    - Full definition of Base Typography, Headings, Display Headings, Leads, 
      and Paragraphs.
- Upgraded to [Create React App `v2.1.1`](https://github.com/facebook/create-react-app/releases/tag/v2.1.1).
- Installed Font Awesome fonts.

[![Lepage.cc version](https://img.shields.io/badge/dynamic/json.svg?label=Lepage.cc+version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fguylepage3%2Flepage.cc%2Fmaster%2Fpackage.json&query=%24.version&colorA=%23212121&colorB=%2300BB00)](https://github.com/guylepage3/lepage.cc)
[![Build status](https://img.shields.io/circleci/project/github/guylepage3/lepage.cc.svg?label=Build+status&colorA=%23212121)](https://circleci.com/gh/guylepage3/lepage.cc)
[![dependencies status](https://img.shields.io/david/guylepage3/lepage.cc.svg?label=dependencies&colorA=%23212121)](https://david-dm.org/guylepage3/lepage.cc)
[![devDependencies status](https://img.shields.io/david/dev/guylepage3/lepage.cc.svg?label=devDependencies&colorA=%23212121)](https://david-dm.org/guylepage3/lepage.cc?type=dev)


## What's included

This project was bootstrapped with [Create React App `v2`](https://github.com/facebookincubator/create-react-app) and uses the [Meta](https://github.com/universelabs/meta) UI framework with [Bootstrap](https://github.com/twbs/bootstrap) as it's foundational base.

```text
Lepage.cc
├── .circleci/
│   └── config.yml
├── .gitignore
├── package-lock.json
├── package.json
├── public/
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
├── README.md
└── src/
│   └── App.js
│   └── App.test.js
│   └── components/
|   │   └── Footer.js
|   │   └── Header.js
│   └── index.js
│   └── pages/
|   │   └── Home.js
|   │   └── Intro.js
|   │   └── Landing.js
|   │   └── NoMatch.js
|   │   └── Page404.js
|   │   └── Splash.js
│   └── serviceWorker.js
│   └── styles/
|       └── App.css
|       └── Custom.scss (Lepage UI)
|       └── index.css
└── static.json
```


## Quick start

Quickly start by cloning the repository to your local machine

```
$ git clone git@github.com:guylepage3/lepage.cc.git
```

Install [`npm`](https://www.npmjs.com/get-npm). `npm` is installed and comes bundled with [Node.js](https://nodejs.org/en/download/package-manager/)

```
$ brew install node
```

Add dependencies

```
$ npm install
```

Start the local client side server and run the app. The app will automatically open your web browser and navigate to http://localhost:3000/ for you

```
$ npm start
```


## Maintainers

**Guy Lepage**

[![Follow on Twitter](https://img.shields.io/badge/Twitter-@guylepage3-blue.svg?colorA=212121&colorB=007BFF)](https://twitter.com/intent/follow?screen_name=guylepage3)
[![Github](https://img.shields.io/badge/GitHub-guylepage3-blue.svg?colorA=212121&colorB=007BFF)](https://github.com/guylepage3)
[![npm](https://img.shields.io/badge/npm-~guylepage3-red.svg?colorA=212121&colorB=FF0000)](https://www.npmjs.com/~guylepage3)
[![Medium](https://img.shields.io/badge/Medium-@guylepage3-green.svg?colorA=212121&colorB=00BB00)](https://medium.com/@guylepage3)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-in/guylepage/-blue.svg?colorA=212121&colorB=007BFF)](https://www.linkedin.com/in/guylepage/)

- <https://twitter.com/guylepage3>
- <https://github.com/guylepage3>

<div align="right">
  <a href="https://opensource.guide/how-to-contribute/#why-contribute-to-open-source">
    <img src="https://badges.frapsoft.com/os/v3/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/" alt="Open Source">
  </a>
</div>