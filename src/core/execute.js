
import { debug, error, info } from 'webrew-helpers-log'

export class Execute {
    constructor(data){
        debug(data.category, data.command, data.options)
        require(`./../${data.category}/${data.command}`)
    }
}

export default Execute