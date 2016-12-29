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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2d1bHAvaW5kZXguanMiXSwibmFtZXMiOlsic3RhcnQiLCJidWlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUtBOztBQUtBO0FBQ0E7O0FBRU8sSUFBTUEsd0JBQVEsb0JBQ2pCLDRGQURpQixFQUVqQiw0RkFGaUIsQ0FBZDs7QUFYUDtBQUNBO0FBQ0E7QUFjTyxJQUFNQyx3QkFBUSx5RkFBZDs7a0JBS1Esa0JBQU9ELEtBQVAsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2VyaWVzLCBwYXJhbGxlbH0gZnJvbSAnZ3VscCdcblxuLy8gaW1wb3J0IHtjbGVhbn0gZnJvbSAnLi90YXNrcy9jbGVhbidcbi8vIGltcG9ydCB7c3luY30gZnJvbSAnLi90YXNrcy9zeW5jJ1xuLy8gaW1wb3J0IHtmb250fSBmcm9tICcuL3Rhc2tzL2ZvbnQnXG5pbXBvcnQge1xuICAgIGVsZW1lbnRNYXJrdXBUcmFuc3BpbGUsIGVsZW1lbnRNYXJrdXBUcmFuc3BpbGVXYXRjaCxcbiAgICBlbGVtZW50U2NyaXB0VHJhbnNwaWxlLCBlbGVtZW50U2NyaXB0VHJhbnNwaWxlV2F0Y2hcbn0gZnJvbSAnLi90cmFuc3BpbGUnXG5cbi8vIGV4cG9ydCB7c3luY31cbi8vIGV4cG9ydCB7Zm9udH1cblxuZXhwb3J0IGNvbnN0IHN0YXJ0ID0gcGFyYWxsZWwoXG4gICAgc2VyaWVzKGVsZW1lbnRNYXJrdXBUcmFuc3BpbGUsIGVsZW1lbnRNYXJrdXBUcmFuc3BpbGVXYXRjaCksXG4gICAgc2VyaWVzKGVsZW1lbnRTY3JpcHRUcmFuc3BpbGUsIGVsZW1lbnRTY3JpcHRUcmFuc3BpbGVXYXRjaClcbilcblxuZXhwb3J0IGNvbnN0IGJ1aWxkID0gcGFyYWxsZWwoXG4gICAgZWxlbWVudE1hcmt1cFRyYW5zcGlsZSxcbiAgICBlbGVtZW50U2NyaXB0VHJhbnNwaWxlXG4pXG5cbmV4cG9ydCBkZWZhdWx0IHNlcmllcyhzdGFydCkiXX0=