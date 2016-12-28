'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.build = exports.start = undefined;

var _gulp = require('gulp');

var _transpile = require('./transpile');

// export {sync}
// export {font}

var start = exports.start = (0, _gulp.parallel)((0, _gulp.series)(_transpile.elementMarkupTranspile, _transpile.elementMarkupTranspileWatch), (0, _gulp.series)(_transpile.elementScriptTranspile, _transpile.elementScriptTranspileWatch));

// import {clean} from './tasks/clean'
// import {sync} from './tasks/sync'
// import {font} from './tasks/font'
var build = exports.build = (0, _gulp.parallel)(_transpile.elementMarkupTranspile, _transpile.elementScriptTranspile);

exports.default = (0, _gulp.series)(start);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ndWxwL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0YXJ0IiwiYnVpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFLQTs7QUFLQTtBQUNBOztBQUVPLElBQU1BLHdCQUFRLG9CQUNqQiw0RkFEaUIsRUFFakIsNEZBRmlCLENBQWQ7O0FBWFA7QUFDQTtBQUNBO0FBY08sSUFBTUMsd0JBQVEseUZBQWQ7O2tCQUtRLGtCQUFPRCxLQUFQLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NlcmllcywgcGFyYWxsZWx9IGZyb20gJ2d1bHAnXG5cbi8vIGltcG9ydCB7Y2xlYW59IGZyb20gJy4vdGFza3MvY2xlYW4nXG4vLyBpbXBvcnQge3N5bmN9IGZyb20gJy4vdGFza3Mvc3luYydcbi8vIGltcG9ydCB7Zm9udH0gZnJvbSAnLi90YXNrcy9mb250J1xuaW1wb3J0IHtcbiAgICBlbGVtZW50TWFya3VwVHJhbnNwaWxlLCBlbGVtZW50TWFya3VwVHJhbnNwaWxlV2F0Y2gsXG4gICAgZWxlbWVudFNjcmlwdFRyYW5zcGlsZSwgZWxlbWVudFNjcmlwdFRyYW5zcGlsZVdhdGNoXG59IGZyb20gJy4vdHJhbnNwaWxlJ1xuXG4vLyBleHBvcnQge3N5bmN9XG4vLyBleHBvcnQge2ZvbnR9XG5cbmV4cG9ydCBjb25zdCBzdGFydCA9IHBhcmFsbGVsKFxuICAgIHNlcmllcyhlbGVtZW50TWFya3VwVHJhbnNwaWxlLCBlbGVtZW50TWFya3VwVHJhbnNwaWxlV2F0Y2gpLFxuICAgIHNlcmllcyhlbGVtZW50U2NyaXB0VHJhbnNwaWxlLCBlbGVtZW50U2NyaXB0VHJhbnNwaWxlV2F0Y2gpXG4pXG5cbmV4cG9ydCBjb25zdCBidWlsZCA9IHBhcmFsbGVsKFxuICAgIGVsZW1lbnRNYXJrdXBUcmFuc3BpbGUsXG4gICAgZWxlbWVudFNjcmlwdFRyYW5zcGlsZVxuKVxuXG5leHBvcnQgZGVmYXVsdCBzZXJpZXMoc3RhcnQpIl19