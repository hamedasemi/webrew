
import { error } from 'webrew-helpers-log'
import { spawn } from 'cross-spawn'

try {
    spawn(`gulp`, [
        `build`,
        `--require`,
        `babel-register`,
        `--gulpfile=./../webrew/gulp/index.js`,
        `--cwd=./`,
    ], { stdio: `inherit` })
}
catch (err) {
    error(`Gulp spawn error`)
    error(`Original error:`, err)
}