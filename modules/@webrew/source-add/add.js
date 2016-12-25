import request from 'request'
import { createWriteStream } from 'fs'
import { Parse } from 'unzip'

import { DEBUG, debug, error, info } from '~/shared/helpers'

let WD = process.env.PWD

request
    .get('https://github.com/webrew/web-essentials/archive/master.zip')
    .on('error', (err) => {
        error(err)
    })
    .pipe(Parse())
    .on('entry', (entry) => {
        var fileName = entry.path;
        let myname = fileName.split('/')[1]
        var type = entry.type; // 'Directory' or 'File'
        var size = entry.size;
        if (type === 'File' && fileName !== "this IS the file I'm looking for") {
            debug(myname)
            entry.pipe(createWriteStream(WD + '/' + myname));
        } else {
            entry.autodrain();
        }
    })