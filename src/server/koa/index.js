import http from 'http'
import { createReadStream, readFileSync } from 'fs'

import Koa from 'koa'
import serve from 'koa-static'

import { debug, error } from 'webrew-helpers-log'
import logger from './koa-log'

/**
* --------------------------------------------------
* Components
* --------------------------------------------------
*/
const WD = process.env.PWD
const app = new Koa()
const cwd = process.cwd()

/**
* --------------------------------------------------
* x-response-time
* --------------------------------------------------
*/
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    ctx.set(`X-Response-Time`, `${ms}ms`)
})


/**
* --------------------------------------------------
* Server logger
* --------------------------------------------------
*/
app.use(logger)


/**
* --------------------------------------------------
* Static Stream server
* --------------------------------------------------
*/
app.use(serve((process.env.WWW || `www`) + `/`))
app.use(serve(`client`))


/**
* --------------------------------------------------
* Mod reWrite
* --------------------------------------------------
*/
app.use(ctx => {
    ctx.set(`Content-Type`, `text/html; charset=utf-8`)
    ctx.body = createReadStream((process.env.WWW || `www`) + `/index.html`)
    ctx.status = 200
})


/**
* --------------------------------------------------
* Error
* --------------------------------------------------
*/
app.on(`error`, (err, ctx) => {
    error(`OBS!! %s`, new Error(err))
})


/**
* --------------------------------------------------
* Create Server
* --------------------------------------------------
*/
http.createServer(app.callback()).listen(process.env.PORT || 8080)


/**
 * TODO: `Set User agent parsed result as header`
 * TODO: `Set config and small settings as header`
 * TODO: `Access-Control-Allow-Origin`
*/