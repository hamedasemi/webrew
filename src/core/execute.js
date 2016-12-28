
import { debug, error } from 'webrew-helpers-log'
import { spawn } from 'cross-spawn'

export class Execute {
    constructor(data) {
        debug(`Constructed:`, data)
        try {
            // require(`./../${data.category}/${data.command}`)
            debug(`category:`, data.category, `command:`, data.command, `options:`, data.options)
            debug(`process.argv[1]`, process.argv[1])
            debug(`process.env.PWD`, process.env.PWD)
            debug(`process.env.CWD`, process.env.CWD)
            debug(`process.cwd()`, process.cwd())
            spawn(`gulp`, [
                `${data.command}`,
                `--require`,
                `babel-register`,
                `--gulpfile=./node_modules/webrew/dist/gulp/index.js`,
                `--cwd=./`,
            ], { stdio: `inherit` })
        }
        catch (err) {
            error(`Make sure command '${data.command}' and category '${data.category}' exist.`)
            error(`Original error:`, err)
        }
    }
}

export default Execute