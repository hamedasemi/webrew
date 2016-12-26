
import { debug, error, info } from '~/modules/@webrew/helpers-log'

export class Execute {
    constructor(data){
        debug(data.category, data.command, data.options)
        require(`./../@webrew/${data.category}-${data.command}`)
    }
}

export default Execute