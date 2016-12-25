import { black, red, green, yellow, blue, magenta, cyan, white, gray, dim } from 'chalk'


export const ENV = typeof process.env.ENV !== `undefined` ? false : process.env.ENV
export const DEBUG = typeof process.env.DEBUG !== `undefined`

export function debug() {
    let date = new Date().toTimeString(`HH:mm:ss`).replace(/\ .+/, ``)
    let args = Array.prototype.slice.call(arguments)
    args = args.map((arg) => {
        if (typeof arg === 'string' && arg.search(/:/g) > 0) return `${dim(arg)}`
        else return arg
    })
    args.unshift(`[${dim(date)}] [${magenta(`DEBUG`)}]`)
    DEBUG && console.log.apply(console, args)
}

export function info() {
    let date = new Date().toTimeString(`HH:mm:ss`).replace(/\ .+/, ``)
    let args = Array.prototype.slice.call(arguments)
    args = args.map((arg) => {
        if (typeof arg === 'string' && arg.search(/:/g) > 0) return `${dim(arg)}`
        else return arg
    })
    args.unshift(`[${dim(date)}] [${cyan(`INFO`)}]`)
    console.log.apply(console, args)
}

export function warn() {
    let date = new Date().toTimeString(`HH:mm:ss`).replace(/\ .+/, ``)
    let args = Array.prototype.slice.call(arguments)
    args = args.map((arg) => {
        if (typeof arg === 'string' && arg.search(/:/g) > 0) return `${dim(arg)}`
        else return arg
    })
    args.unshift(`[${dim(date)}] [${yellow(`WARN`)}]`)
    console.log.apply(console, args)
}

export function error() {
    let date = new Date().toTimeString(`HH:mm:ss`).replace(/\ .+/, ``)
    let args = Array.prototype.slice.call(arguments)
    args = args.map((arg) => {
        if (typeof arg === 'string' && arg.search(/:/g) > 0) return `${dim(arg)}`
        else return arg
    })
    args.unshift(`[${dim(date)}] [${red(`ERROR`)}]`)
    console.log.apply(console, args)
}