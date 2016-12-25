import { DEBUG } from '~/shared/helpers/env'
import { cyan, magenta, dim, yellow, red } from 'chalk'

export const debug = () => {
    let date = new Date().toTimeString(`HH:mm:ss`).replace(/\ .+/, ``)
    let args = [].slice.call(arguments)
    args.unshift(`[${dim(date)}] [${magenta(`DEBUG`)}]`)
    DEBUG && console.log.apply(console, args)
}

export const info = () => {
    let date = new Date().toTimeString(`HH:mm:ss`).replace(/\ .+/, ``)
    let args = [].slice.call(arguments)
    args.unshift(`[${dim(date)}] [${cyan(`INFO`)}]`)
    console.log.apply(console, args)
}

export const warn = () => {
    let date = new Date().toTimeString(`HH:mm:ss`).replace(/\ .+/, ``)
    let args = [].slice.call(arguments)
    args.unshift(`[${dim(date)}] [${yellow(`WARN`)}]`)
    console.log.apply(console, args)
}

export const error = () => {
    let date = new Date().toTimeString(`HH:mm:ss`).replace(/\ .+/, ``)
    let args = [].slice.call(arguments)
    args.unshift(`[${dim(date)}] [${red(`ERROR`)}]`)
    console.log.apply(console, args)
}