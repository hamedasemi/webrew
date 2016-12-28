
import { debug, error } from 'webrew-helpers-log'
import { spawn } from 'cross-spawn'

export class Execute {
    constructor(data) {
        debug(`Constructed:`, data)
        try {
            // require(`./../${data.group}/${data.command}`)
            debug(`group:`, data.group, `command:`, data.command, `options:`, data.options)
            spawn(`gulp`, [
                `${data.command}`,
                `--require`,
                `babel-register`,
                `--gulpfile=./../webrew/src/gulp/index.js`,
                `--cwd=./`,
            ], { stdio: `inherit` })
        }
        catch (err) {
            error(`Make sure command '${data.command}' and group '${data.group}' exist.`)
            error(`Original error:`, err)
        }
    }
}

export default Execute