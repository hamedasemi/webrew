
import { DEBUG, debug, error, info } from '~/shared/helpers'

import KoaServer from '~/modules/webrew/server/koa'

import { name, version, webrewrc } from './../../../../package.json'

debug('Config rc:', webrewrc)
debug('Package name:', name)
debug('Package version:', version)

// // // // // // // // // // readFileSync(`shared/ssl-certificates/server.key`)
let packageInfo = require(process.env.PWD + '/package.json')
debug('Config rc:', packageInfo.webrewrc)

// options as yaml file
var koaServer = new KoaServer({
    name: name,
    version: version,
    domain: `localhost`,
    port: 3000,
    icon: true,
    modrewrite: true, // [`^[^\\.]*$ /index.html [L]`]
    static: [
        `/assets/modules`,
        `/assets/media`,
        `/assets/icons`,
        `/assets/fonts`
    ],
    accessOrigin: [
        `https://dev-use-rost-fortum.appspot.com`
    ]
});