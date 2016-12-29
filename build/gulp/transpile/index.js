'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.elementScriptTranspile = elementScriptTranspile;
exports.elementScriptTranspileWatch = elementScriptTranspileWatch;
exports.elementMarkupTranspile = elementMarkupTranspile;
exports.elementMarkupTranspileWatch = elementMarkupTranspileWatch;

var _gulp = require('gulp');

var _webrewHelpersLog = require('webrew-helpers-log');

var _jsYaml = require('js-yaml');

var _fs = require('fs');

var _streamCombiner = require('stream-combiner2');

var _gulpRename = require('gulp-rename');

var _gulpRename2 = _interopRequireDefault(_gulpRename);

var _gulpNewer = require('gulp-newer');

var _gulpNewer2 = _interopRequireDefault(_gulpNewer);

var _gulpBabel = require('gulp-babel');

var _gulpBabel2 = _interopRequireDefault(_gulpBabel);

var _autoprefixer = require('autoprefixer');

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _gulpPolymerPostcss = require('gulp-polymer-postcss');

var _gulpPolymerPostcss2 = _interopRequireDefault(_gulpPolymerPostcss);

var _gulpPolymerBabel = require('gulp-polymer-babel');

var _gulpPolymerBabel2 = _interopRequireDefault(_gulpPolymerBabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = (0, _jsYaml.safeLoad)((0, _fs.readFileSync)('./.webrewrc', 'utf8'));

(0, _webrewHelpersLog.debug)('config:', config);

var autoprefixerBrowserList = ['chrome >= 40', 'Safari >= 9', 'iOS >= 8', 'Firefox >= 43', 'Edge >= 12', 'Explorer >= 11'];

/**
 * ------------------------------------------------------------
 * Polymer elements
 * ------------------------------------------------------------
 */

function elementScriptTranspile() {
    return (0, _streamCombiner.obj)([(0, _gulp.src)(config.elements.scripts), (0, _gulpNewer2.default)(config.dest), (0, _gulpBabel2.default)({
        presets: ['es2015']
    }), (0, _gulpRename2.default)({
        extname: '.js'
    }), (0, _gulp.dest)(config.dest)]).on('error', console.error.bind(console));
}

elementScriptTranspile.description = 'Polymer elements scripts transpile.';

function elementScriptTranspileWatch(next) {
    var watcher = (0, _gulp.watch)(config.elements.scripts, (0, _gulp.series)(elementScriptTranspile));
    watcher.on('add', function (path) {
        (0, _webrewHelpersLog.debug)(path + ' added.');
    });
    watcher.on('change', function (path) {
        (0, _webrewHelpersLog.debug)(path + ' changed.');
    });
    watcher.on('unlink', function (path) {
        (0, _webrewHelpersLog.debug)(path + ' removed.');
    });
    next();
}

elementScriptTranspileWatch.description = 'Watch Polymer elements scripts transpile.';

function elementMarkupTranspile() {
    return (0, _streamCombiner.obj)([(0, _gulp.src)(config.elements.markups), (0, _gulpNewer2.default)(config.dest), (0, _gulpPolymerPostcss2.default)([(0, _autoprefixer2.default)({ browsers: autoprefixerBrowserList })]), (0, _gulpPolymerBabel2.default)({
        presets: ['es2015']
    }), (0, _gulpRename2.default)({
        extname: '.html'
    }), (0, _gulp.dest)(config.dest)]).on('error', console.error.bind(console));
}

elementMarkupTranspile.description = 'Polymer elements markups transpile.';

function elementMarkupTranspileWatch(next) {
    var watcher = (0, _gulp.watch)(config.elements.markups, (0, _gulp.series)(elementMarkupTranspile));
    watcher.on('add', function (path) {
        (0, _webrewHelpersLog.debug)(path + ' added.');
    });
    watcher.on('change', function (path) {
        (0, _webrewHelpersLog.debug)(path + ' changed.');
    });
    watcher.on('unlink', function (path) {
        (0, _webrewHelpersLog.debug)(path + ' removed.');
    });
    next();
}

elementMarkupTranspileWatch.description = 'Watch Polymer elements markups transpile.';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2d1bHAvdHJhbnNwaWxlL2luZGV4LmpzIl0sIm5hbWVzIjpbImVsZW1lbnRTY3JpcHRUcmFuc3BpbGUiLCJlbGVtZW50U2NyaXB0VHJhbnNwaWxlV2F0Y2giLCJlbGVtZW50TWFya3VwVHJhbnNwaWxlIiwiZWxlbWVudE1hcmt1cFRyYW5zcGlsZVdhdGNoIiwiY29uZmlnIiwiYXV0b3ByZWZpeGVyQnJvd3Nlckxpc3QiLCJlbGVtZW50cyIsInNjcmlwdHMiLCJkZXN0IiwicHJlc2V0cyIsImV4dG5hbWUiLCJvbiIsImNvbnNvbGUiLCJlcnJvciIsImJpbmQiLCJkZXNjcmlwdGlvbiIsIm5leHQiLCJ3YXRjaGVyIiwicGF0aCIsIm1hcmt1cHMiLCJicm93c2VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUErQmdCQSxzQixHQUFBQSxzQjtRQWlCQUMsMkIsR0FBQUEsMkI7UUFXQUMsc0IsR0FBQUEsc0I7UUFvQkFDLDJCLEdBQUFBLDJCOztBQS9FaEI7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxTQUFTLHNCQUFTLDRDQUFULENBQWY7O0FBRUEsd0NBQWlCQSxNQUFqQjs7QUFFQSxJQUFNQywwQkFBMEIsNEZBQWhDOztBQVNBOzs7Ozs7QUFNTyxTQUFTTCxzQkFBVCxHQUFrQztBQUNyQyxXQUFPLHlCQUFJLENBQ1AsZUFBSUksT0FBT0UsUUFBUCxDQUFnQkMsT0FBcEIsQ0FETyxFQUVQLHlCQUFNSCxPQUFPSSxJQUFiLENBRk8sRUFHUCx5QkFBTTtBQUNGQyxpQkFBUztBQURQLEtBQU4sQ0FITyxFQU1QLDBCQUFPO0FBQ0hDO0FBREcsS0FBUCxDQU5PLEVBU1AsZ0JBQUtOLE9BQU9JLElBQVosQ0FUTyxDQUFKLEVBVUpHLEVBVkksVUFVUUMsUUFBUUMsS0FBUixDQUFjQyxJQUFkLENBQW1CRixPQUFuQixDQVZSLENBQVA7QUFXSDs7QUFFRFosdUJBQXVCZSxXQUF2Qjs7QUFHTyxTQUFTZCwyQkFBVCxDQUFxQ2UsSUFBckMsRUFBMkM7QUFDOUMsUUFBSUMsVUFBVSxpQkFBTWIsT0FBT0UsUUFBUCxDQUFnQkMsT0FBdEIsRUFBK0Isa0JBQU9QLHNCQUFQLENBQS9CLENBQWQ7QUFDQWlCLFlBQVFOLEVBQVIsUUFBa0IsVUFBVU8sSUFBVixFQUFnQjtBQUFFLHFDQUFTQSxJQUFUO0FBQXlCLEtBQTdEO0FBQ0FELFlBQVFOLEVBQVIsV0FBcUIsVUFBVU8sSUFBVixFQUFnQjtBQUFFLHFDQUFTQSxJQUFUO0FBQTJCLEtBQWxFO0FBQ0FELFlBQVFOLEVBQVIsV0FBcUIsVUFBVU8sSUFBVixFQUFnQjtBQUFFLHFDQUFTQSxJQUFUO0FBQTJCLEtBQWxFO0FBQ0FGO0FBQ0g7O0FBRURmLDRCQUE0QmMsV0FBNUI7O0FBR08sU0FBU2Isc0JBQVQsR0FBa0M7QUFDckMsV0FBTyx5QkFBSSxDQUNQLGVBQUlFLE9BQU9FLFFBQVAsQ0FBZ0JhLE9BQXBCLENBRE8sRUFFUCx5QkFBTWYsT0FBT0ksSUFBYixDQUZPLEVBR1Asa0NBQWUsQ0FDWCw0QkFBYSxFQUFFWSxVQUFVZix1QkFBWixFQUFiLENBRFcsQ0FBZixDQUhPLEVBTVAsZ0NBQWE7QUFDVEksaUJBQVM7QUFEQSxLQUFiLENBTk8sRUFTUCwwQkFBTztBQUNIQztBQURHLEtBQVAsQ0FUTyxFQVlQLGdCQUFLTixPQUFPSSxJQUFaLENBWk8sQ0FBSixFQWFKRyxFQWJJLFVBYVFDLFFBQVFDLEtBQVIsQ0FBY0MsSUFBZCxDQUFtQkYsT0FBbkIsQ0FiUixDQUFQO0FBY0g7O0FBRURWLHVCQUF1QmEsV0FBdkI7O0FBR08sU0FBU1osMkJBQVQsQ0FBcUNhLElBQXJDLEVBQTJDO0FBQzlDLFFBQUlDLFVBQVUsaUJBQU1iLE9BQU9FLFFBQVAsQ0FBZ0JhLE9BQXRCLEVBQStCLGtCQUFPakIsc0JBQVAsQ0FBL0IsQ0FBZDtBQUNBZSxZQUFRTixFQUFSLFFBQWtCLFVBQVVPLElBQVYsRUFBZ0I7QUFBRSxxQ0FBU0EsSUFBVDtBQUF5QixLQUE3RDtBQUNBRCxZQUFRTixFQUFSLFdBQXFCLFVBQVVPLElBQVYsRUFBZ0I7QUFBRSxxQ0FBU0EsSUFBVDtBQUEyQixLQUFsRTtBQUNBRCxZQUFRTixFQUFSLFdBQXFCLFVBQVVPLElBQVYsRUFBZ0I7QUFBRSxxQ0FBU0EsSUFBVDtBQUEyQixLQUFsRTtBQUNBRjtBQUNIOztBQUVEYiw0QkFBNEJZLFdBQTVCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2F0Y2gsIHNyYywgZGVzdCwgc2VyaWVzIH0gZnJvbSAnZ3VscCdcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnd2VicmV3LWhlbHBlcnMtbG9nJ1xuaW1wb3J0IHsgc2FmZUxvYWQgfSBmcm9tICdqcy15YW1sJ1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnXG5pbXBvcnQgeyBvYmogfSBmcm9tICdzdHJlYW0tY29tYmluZXIyJ1xuaW1wb3J0IHJlbmFtZSBmcm9tICdndWxwLXJlbmFtZSdcbmltcG9ydCBuZXdlciBmcm9tICdndWxwLW5ld2VyJ1xuaW1wb3J0IGJhYmVsIGZyb20gJ2d1bHAtYmFiZWwnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcbmltcG9ydCBwb2x5bWVyUG9zdGNzcyBmcm9tICdndWxwLXBvbHltZXItcG9zdGNzcydcbmltcG9ydCBwb2x5bWVyQmFiZWwgZnJvbSAnZ3VscC1wb2x5bWVyLWJhYmVsJ1xuXG5jb25zdCBjb25maWcgPSBzYWZlTG9hZChyZWFkRmlsZVN5bmMoYC4vLndlYnJld3JjYCwgYHV0ZjhgKSlcblxuZGVidWcoYGNvbmZpZzpgLCBjb25maWcpXG5cbmNvbnN0IGF1dG9wcmVmaXhlckJyb3dzZXJMaXN0ID0gW1xuICAgIGBjaHJvbWUgPj0gNDBgLFxuICAgIGBTYWZhcmkgPj0gOWAsXG4gICAgYGlPUyA+PSA4YCxcbiAgICBgRmlyZWZveCA+PSA0M2AsXG4gICAgYEVkZ2UgPj0gMTJgLFxuICAgIGBFeHBsb3JlciA+PSAxMWBcbl1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBvbHltZXIgZWxlbWVudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50U2NyaXB0VHJhbnNwaWxlKCkge1xuICAgIHJldHVybiBvYmooW1xuICAgICAgICBzcmMoY29uZmlnLmVsZW1lbnRzLnNjcmlwdHMpLFxuICAgICAgICBuZXdlcihjb25maWcuZGVzdCksXG4gICAgICAgIGJhYmVsKHtcbiAgICAgICAgICAgIHByZXNldHM6IFtgZXMyMDE1YF1cbiAgICAgICAgfSksXG4gICAgICAgIHJlbmFtZSh7XG4gICAgICAgICAgICBleHRuYW1lOiBgLmpzYFxuICAgICAgICB9KSxcbiAgICAgICAgZGVzdChjb25maWcuZGVzdClcbiAgICBdKS5vbihgZXJyb3JgLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSkpXG59XG5cbmVsZW1lbnRTY3JpcHRUcmFuc3BpbGUuZGVzY3JpcHRpb24gPSBgUG9seW1lciBlbGVtZW50cyBzY3JpcHRzIHRyYW5zcGlsZS5gXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRTY3JpcHRUcmFuc3BpbGVXYXRjaChuZXh0KSB7XG4gICAgbGV0IHdhdGNoZXIgPSB3YXRjaChjb25maWcuZWxlbWVudHMuc2NyaXB0cywgc2VyaWVzKGVsZW1lbnRTY3JpcHRUcmFuc3BpbGUpKVxuICAgIHdhdGNoZXIub24oYGFkZGAsIGZ1bmN0aW9uIChwYXRoKSB7IGRlYnVnKGAke3BhdGh9IGFkZGVkLmApIH0pXG4gICAgd2F0Y2hlci5vbihgY2hhbmdlYCwgZnVuY3Rpb24gKHBhdGgpIHsgZGVidWcoYCR7cGF0aH0gY2hhbmdlZC5gKSB9KVxuICAgIHdhdGNoZXIub24oYHVubGlua2AsIGZ1bmN0aW9uIChwYXRoKSB7IGRlYnVnKGAke3BhdGh9IHJlbW92ZWQuYCkgfSlcbiAgICBuZXh0KClcbn1cblxuZWxlbWVudFNjcmlwdFRyYW5zcGlsZVdhdGNoLmRlc2NyaXB0aW9uID0gYFdhdGNoIFBvbHltZXIgZWxlbWVudHMgc2NyaXB0cyB0cmFuc3BpbGUuYFxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50TWFya3VwVHJhbnNwaWxlKCkge1xuICAgIHJldHVybiBvYmooW1xuICAgICAgICBzcmMoY29uZmlnLmVsZW1lbnRzLm1hcmt1cHMpLFxuICAgICAgICBuZXdlcihjb25maWcuZGVzdCksXG4gICAgICAgIHBvbHltZXJQb3N0Y3NzKFtcbiAgICAgICAgICAgIGF1dG9wcmVmaXhlcih7IGJyb3dzZXJzOiBhdXRvcHJlZml4ZXJCcm93c2VyTGlzdCB9KVxuICAgICAgICBdKSxcbiAgICAgICAgcG9seW1lckJhYmVsKHtcbiAgICAgICAgICAgIHByZXNldHM6IFtgZXMyMDE1YF1cbiAgICAgICAgfSksXG4gICAgICAgIHJlbmFtZSh7XG4gICAgICAgICAgICBleHRuYW1lOiBgLmh0bWxgXG4gICAgICAgIH0pLFxuICAgICAgICBkZXN0KGNvbmZpZy5kZXN0KVxuICAgIF0pLm9uKGBlcnJvcmAsIGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKSlcbn1cblxuZWxlbWVudE1hcmt1cFRyYW5zcGlsZS5kZXNjcmlwdGlvbiA9IGBQb2x5bWVyIGVsZW1lbnRzIG1hcmt1cHMgdHJhbnNwaWxlLmBcblxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudE1hcmt1cFRyYW5zcGlsZVdhdGNoKG5leHQpIHtcbiAgICBsZXQgd2F0Y2hlciA9IHdhdGNoKGNvbmZpZy5lbGVtZW50cy5tYXJrdXBzLCBzZXJpZXMoZWxlbWVudE1hcmt1cFRyYW5zcGlsZSkpXG4gICAgd2F0Y2hlci5vbihgYWRkYCwgZnVuY3Rpb24gKHBhdGgpIHsgZGVidWcoYCR7cGF0aH0gYWRkZWQuYCkgfSlcbiAgICB3YXRjaGVyLm9uKGBjaGFuZ2VgLCBmdW5jdGlvbiAocGF0aCkgeyBkZWJ1ZyhgJHtwYXRofSBjaGFuZ2VkLmApIH0pXG4gICAgd2F0Y2hlci5vbihgdW5saW5rYCwgZnVuY3Rpb24gKHBhdGgpIHsgZGVidWcoYCR7cGF0aH0gcmVtb3ZlZC5gKSB9KVxuICAgIG5leHQoKVxufVxuXG5lbGVtZW50TWFya3VwVHJhbnNwaWxlV2F0Y2guZGVzY3JpcHRpb24gPSBgV2F0Y2ggUG9seW1lciBlbGVtZW50cyBtYXJrdXBzIHRyYW5zcGlsZS5gXG4iXX0=