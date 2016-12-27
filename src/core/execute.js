
import { debug, error } from 'webrew-helpers-log'
import { spawn } from 'cross-spawn'

export class Execute {
    constructor(data){
        debug(`Constructed:`, data)
        try {
            require(`./../${data.category}/${data.command}`)
            debug(`category:`, data.category, `command:`,  data.command, `options:`, data.options)

            spawn(`gulp`, [
                `${data.command}`,
                `--gulpfile=./src/gulp/index.js`,
                `--cwd=./`,
                `--require`,
                `babel-register`,
                `--require`,
                `babel-polyfill`
            ], { stdio: `inherit` })
        }
        catch(err){
            error(`Make sure command '${data.command}' and category '${data.category}' exist.`)
            error(`Original error:`, err)
        }
    }
}

export default Execute