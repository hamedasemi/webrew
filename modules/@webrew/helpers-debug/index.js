export const DEBUG = typeof process.env.DEBUG !== `undefined`

let module = {
    DEBUG
}

export default module