## WebBrew CLI (ALPHA)
###### by Hamed Asemi

-------------------------------------------- <br><br>

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
