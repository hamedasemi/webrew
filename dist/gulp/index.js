#!/usr/bin/env gulp
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ndWxwL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0YXJ0IiwiYnVpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFLQTs7QUFLQTtBQUNBOztBQUVPLElBQU1BLHdCQUFRLG9CQUNqQiw0RkFEaUIsRUFFakIsNEZBRmlCLENBQWQ7O0FBWFA7QUFDQTtBQUNBO0FBY08sSUFBTUMsd0JBQVEseUZBQWQ7O2tCQUtRLGtCQUFPRCxLQUFQLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHtzZXJpZXMsIHBhcmFsbGVsfSBmcm9tICdndWxwJ1xuXG4vLyBpbXBvcnQge2NsZWFufSBmcm9tICcuL3Rhc2tzL2NsZWFuJ1xuLy8gaW1wb3J0IHtzeW5jfSBmcm9tICcuL3Rhc2tzL3N5bmMnXG4vLyBpbXBvcnQge2ZvbnR9IGZyb20gJy4vdGFza3MvZm9udCdcbmltcG9ydCB7XG4gICAgZWxlbWVudE1hcmt1cFRyYW5zcGlsZSwgZWxlbWVudE1hcmt1cFRyYW5zcGlsZVdhdGNoLFxuICAgIGVsZW1lbnRTY3JpcHRUcmFuc3BpbGUsIGVsZW1lbnRTY3JpcHRUcmFuc3BpbGVXYXRjaFxufSBmcm9tICcuL3RyYW5zcGlsZSdcblxuLy8gZXhwb3J0IHtzeW5jfVxuLy8gZXhwb3J0IHtmb250fVxuXG5leHBvcnQgY29uc3Qgc3RhcnQgPSBwYXJhbGxlbChcbiAgICBzZXJpZXMoZWxlbWVudE1hcmt1cFRyYW5zcGlsZSwgZWxlbWVudE1hcmt1cFRyYW5zcGlsZVdhdGNoKSxcbiAgICBzZXJpZXMoZWxlbWVudFNjcmlwdFRyYW5zcGlsZSwgZWxlbWVudFNjcmlwdFRyYW5zcGlsZVdhdGNoKVxuKVxuXG5leHBvcnQgY29uc3QgYnVpbGQgPSBwYXJhbGxlbChcbiAgICBlbGVtZW50TWFya3VwVHJhbnNwaWxlLFxuICAgIGVsZW1lbnRTY3JpcHRUcmFuc3BpbGVcbilcblxuZXhwb3J0IGRlZmF1bHQgc2VyaWVzKHN0YXJ0KSJdfQ==