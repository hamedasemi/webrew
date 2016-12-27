import {series, parallel} from 'gulp'

// import {clean} from './tasks/clean'
// import {sync} from './tasks/sync'
// import {font} from './tasks/font'
import {
    elementMarkupTranspile, elementMarkupTranspileWatch,
    elementScriptTranspile, elementScriptTranspileWatch
} from './transpile'

// export {sync}
// export {font}

export const start = parallel(
    series(elementMarkupTranspile, elementMarkupTranspileWatch),
    series(elementScriptTranspile, elementScriptTranspileWatch)
)

export const build = parallel(
    elementMarkupTranspile,
    elementScriptTranspile
)

export default series(start)