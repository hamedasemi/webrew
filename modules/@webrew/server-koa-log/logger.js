import { black, red, green, yellow, blue, magenta, cyan, white, gray } from 'chalk'
import { DEBUG, debug } from '~/shared/helpers'

export default async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    debug(blue(`[${ctx.method}]`), magenta(`${ctx.url}`), cyan(`- ${ms}ms`))
}