
import { debug, error } from 'webrew-helpers-log'

export class Execute {
    constructor(data) {
        debug(`Constructed:`, data)
        try {
            require(`./../${data.group}/${data.command}`)
            debug(`group:`, data.group, `command:`, data.command, `options:`, data.options)
        }
        catch (err) {
            error(`Make sure command '${data.command}' and group '${data.group}' exist.`)
            error(`Original error:`, err)
        }
    }
}

export default Execute