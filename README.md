## WebBrew CLI (ALPHA)

![Version](https://img.shields.io/npm/v/webrew.svg)
![Download](https://img.shields.io/npm/dm/webrew.svg)
[![Build Status](https://travis-ci.org/hamedasemi/webrew.svg?branch=mainline)](https://travis-ci.org/hamedasemi/webrew)
![License](https://img.shields.io/npm/l/webrew.svg)
![License](https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg)

###### by Hamed Asemi

![webrew](https://raw.githubusercontent.com/hamedasemi/webrew/mainline/assets/images/webrew.png)


## Features 1.0

- HTTP/2.0 compatible server for both development and production
- Built in Koa@2.0 server and middleware support
- Stream static content
- HTML5 push state support and Mod ReWrtie
- Gulp transpile ES201x Polymer2 and Angular2 to ES5 JavaScript
- Browser sync changes while development


## Features 2.0
- Protects resource share cross origin
- Nginx HTTP, HTTPS proxy server to secure and accelerates Nodejs apps
- A user GUI to prompt and read settings and prefrences
- Explicit cuncorrent commands capture
- Auto setup Test environment
- Auto setup development environments(Docker, Local)
- Enhance Github project start up
- Auto setup CI(Travis CI), CD(Trunk Based Development) and pipeline
- Using multiple repositories to compose & build up the project
- Render the project template usin srting replace
- Log remotely using web sockets
- etc.


## Simple usage

__Installation__ the latest version globally

```sh
npm install webrew --global
```

__Usage__
```sh
DEBUG=true webrew
```


__Uninstall__ :( remove the global version

```sh
npm uninstall webrew --global
```

<br><br><br><br><br><br><br><br>








## Advanced usage


__Installation:__ a local specific version

```sh
npm install webrew@v1.0.0
```


__Usage:__
```sh
DEBUG=true webrew server start --koa --port=8080
```


__Config:__
Add in package json

```json
"webrewrc": {
    "port": "1165"
}
```




__Uninstall__ :( remove the global version
```sh
npm uninstall webrew@v1.0.0
```
