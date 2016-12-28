
import { debug, error } from 'webrew-helpers-log'
import { spawn } from 'cross-spawn'

export class Execute {
    constructor(data) {
        debug(`Constructed:`, data)
        try {
            // require(`./../${data.category}/${data.command}`)
            debug(`category:`, data.category, `command:`, data.command, `options:`, data.options)
            debug(process.argv[1])
            debug(`--gulpfile=${process.argv[1]}/../dist/gulp/index.js`)
            spawn(`gulp`, [
                `${data.command}`,
                `--gulpfile=${process.argv[1]}/dist/gulp/index.js`,
                `--cwd=./`,
                `--require`,
                `babel-register`,
            ], { stdio: `inherit` })
        }
        catch (err) {
            error(`Make sure command '${data.command}' and category '${data.category}' exist.`)
            error(`Original error:`, err)
        }
    }
}

export default Execute