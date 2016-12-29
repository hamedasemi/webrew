import request from 'request'
import { createWriteStream } from 'fs'
import { Parse } from 'unzip'

import { debug, error } from 'webrew-helpers-log'

let WD = process.env.PWD

request
    .get(`https://github.com/webrew/web-essentials/archive/master.zip`)
    .on(`error`, (err) => {
        error(err)
    })
    .pipe(Parse())
    .on(`entry`, (entry) => {
        var entryPath = entry.path
        let fileName = entryPath.split(`/`)[1]
        var type = entry.type // `Directory` or `File`
        var size = entry.size
        debug(`Size:`, size, `Type:`, type)
        if (type === `File` && entryPath !== `this IS the file I'm looking for`) {
            debug(fileName)
            entry.pipe(createWriteStream(WD + `/` + fileName))
        } else {
            entry.autodrain()
        }
    })