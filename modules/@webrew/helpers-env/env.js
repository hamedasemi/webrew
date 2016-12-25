export const ENV = typeof process.env.ENV !== `undefined` ? false : process.env.ENV

let module = {
    ENV
}

export default module