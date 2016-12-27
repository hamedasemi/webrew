import { watch, src, dest, series } from 'gulp'
import { debug } from 'webrew-helpers-log'
import { safeLoad } from 'js-yaml'
import { readFileSync } from 'fs'
import { obj } from 'stream-combiner2'
import rename from 'gulp-rename'
import newer from 'gulp-newer'
import babel from 'gulp-babel'
import autoprefixer from 'autoprefixer'
import polymerPostcss from 'gulp-polymer-postcss'
import polymerBabel from 'gulp-polymer-babel'

const config = safeLoad(readFileSync(`./.webrewrc`, `utf8`))

debug(`config:`, config)

const autoprefixerBrowserList = [
    `chrome >= 40`,
    `Safari >= 9`,
    `iOS >= 8`,
    `Firefox >= 43`,
    `Edge >= 12`,
    `Explorer >= 11`
]

/**
 * ------------------------------------------------------------
 * Polymer elements
 * ------------------------------------------------------------
 */

export function elementScriptTranspile() {
    return obj([
        src(config.elements.scripts),
        newer(config.dest),
        babel({
            presets: [`es2015`]
        }),
        rename({
            extname: `.js`
        }),
        dest(config.dest)
    ]).on(`error`, console.error.bind(console))
}

elementScriptTranspile.description = `Polymer elements scripts transpile.`


export function elementScriptTranspileWatch(next) {
    let watcher = watch(config.elements.scripts, series(elementScriptTranspile))
    watcher.on(`add`, function (path) { debug(`${path} added.`) })
    watcher.on(`change`, function (path) { debug(`${path} changed.`) })
    watcher.on(`unlink`, function (path) { debug(`${path} removed.`) })
    next()
}

elementScriptTranspileWatch.description = `Watch Polymer elements scripts transpile.`


export function elementMarkupTranspile() {
    return obj([
        src(config.elements.markups),
        newer(config.dest),
        polymerPostcss([
            autoprefixer({ browsers: autoprefixerBrowserList })
        ]),
        polymerBabel({
            presets: [`es2015`]
        }),
        rename({
            extname: `.html`
        }),
        dest(config.dest)
    ]).on(`error`, console.error.bind(console))
}

elementMarkupTranspile.description = `Polymer elements markups transpile.`


export function elementMarkupTranspileWatch(next) {
    let watcher = watch(config.elements.markups, series(elementMarkupTranspile))
    watcher.on(`add`, function (path) { debug(`${path} added.`) })
    watcher.on(`change`, function (path) { debug(`${path} changed.`) })
    watcher.on(`unlink`, function (path) { debug(`${path} removed.`) })
    next()
}

elementMarkupTranspileWatch.description = `Watch Polymer elements markups transpile.`
