'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.build = exports.start = exports.font = exports.sync = undefined;

var _gulp = require('gulp');

var _clean = require('./tasks/clean');

var _sync = require('./tasks/sync');

var _font = require('./tasks/font');

var _transpile = require('./tasks/transpile');

exports.sync = _sync.sync;
exports.font = _font.font;
var start = exports.start = (0, _gulp.parallel)((0, _gulp.series)(_transpile.elementMarkupTranspile, _transpile.elementMarkupTranspileWatch), (0, _gulp.series)(_transpile.elementScriptTranspile, _transpile.elementScriptTranspileWatch));

var build = exports.build = (0, _gulp.parallel)(_transpile.elementMarkupTranspile, _transpile.elementScriptTranspile);

exports.default = (0, _gulp.series)(_clean.clean, start);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FyY2hpdmUvZ3VscC9pbmRleC5qcyJdLCJuYW1lcyI6WyJzeW5jIiwiZm9udCIsInN0YXJ0IiwiYnVpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7UUFLUUEsSTtRQUNBQyxJO0FBRUQsSUFBTUMsd0JBQVEsb0JBQ2pCLDRGQURpQixFQUVqQiw0RkFGaUIsQ0FBZDs7QUFLQSxJQUFNQyx3QkFBUSx5RkFBZDs7a0JBS1EsZ0NBQWNELEtBQWQsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2VyaWVzLCBwYXJhbGxlbH0gZnJvbSAnZ3VscCc7XG5cbmltcG9ydCB7Y2xlYW59IGZyb20gJy4vdGFza3MvY2xlYW4nO1xuaW1wb3J0IHtzeW5jfSBmcm9tICcuL3Rhc2tzL3N5bmMnO1xuaW1wb3J0IHtmb250fSBmcm9tICcuL3Rhc2tzL2ZvbnQnO1xuaW1wb3J0IHtcbiAgICBlbGVtZW50TWFya3VwVHJhbnNwaWxlLCBlbGVtZW50TWFya3VwVHJhbnNwaWxlV2F0Y2gsXG4gICAgZWxlbWVudFNjcmlwdFRyYW5zcGlsZSwgZWxlbWVudFNjcmlwdFRyYW5zcGlsZVdhdGNoXG59IGZyb20gJy4vdGFza3MvdHJhbnNwaWxlJztcblxuZXhwb3J0IHtzeW5jfTtcbmV4cG9ydCB7Zm9udH07XG5cbmV4cG9ydCBjb25zdCBzdGFydCA9IHBhcmFsbGVsKFxuICAgIHNlcmllcyhlbGVtZW50TWFya3VwVHJhbnNwaWxlLCBlbGVtZW50TWFya3VwVHJhbnNwaWxlV2F0Y2gpLFxuICAgIHNlcmllcyhlbGVtZW50U2NyaXB0VHJhbnNwaWxlLCBlbGVtZW50U2NyaXB0VHJhbnNwaWxlV2F0Y2gpXG4pO1xuXG5leHBvcnQgY29uc3QgYnVpbGQgPSBwYXJhbGxlbChcbiAgICBlbGVtZW50TWFya3VwVHJhbnNwaWxlLFxuICAgIGVsZW1lbnRTY3JpcHRUcmFuc3BpbGVcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHNlcmllcyhjbGVhbiwgc3RhcnQpOyJdfQ==