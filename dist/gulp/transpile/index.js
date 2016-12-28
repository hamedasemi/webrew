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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ndWxwL3RyYW5zcGlsZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJlbGVtZW50U2NyaXB0VHJhbnNwaWxlIiwiZWxlbWVudFNjcmlwdFRyYW5zcGlsZVdhdGNoIiwiZWxlbWVudE1hcmt1cFRyYW5zcGlsZSIsImVsZW1lbnRNYXJrdXBUcmFuc3BpbGVXYXRjaCIsImNvbmZpZyIsImF1dG9wcmVmaXhlckJyb3dzZXJMaXN0IiwiZWxlbWVudHMiLCJzY3JpcHRzIiwiZGVzdCIsInByZXNldHMiLCJleHRuYW1lIiwib24iLCJjb25zb2xlIiwiZXJyb3IiLCJiaW5kIiwiZGVzY3JpcHRpb24iLCJuZXh0Iiwid2F0Y2hlciIsInBhdGgiLCJtYXJrdXBzIiwiYnJvd3NlcnMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBK0JnQkEsc0IsR0FBQUEsc0I7UUFpQkFDLDJCLEdBQUFBLDJCO1FBV0FDLHNCLEdBQUFBLHNCO1FBb0JBQywyQixHQUFBQSwyQjs7QUEvRWhCOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsU0FBUyxzQkFBUyw0Q0FBVCxDQUFmOztBQUVBLHdDQUFpQkEsTUFBakI7O0FBRUEsSUFBTUMsMEJBQTBCLDRGQUFoQzs7QUFTQTs7Ozs7O0FBTU8sU0FBU0wsc0JBQVQsR0FBa0M7QUFDckMsV0FBTyx5QkFBSSxDQUNQLGVBQUlJLE9BQU9FLFFBQVAsQ0FBZ0JDLE9BQXBCLENBRE8sRUFFUCx5QkFBTUgsT0FBT0ksSUFBYixDQUZPLEVBR1AseUJBQU07QUFDRkMsaUJBQVM7QUFEUCxLQUFOLENBSE8sRUFNUCwwQkFBTztBQUNIQztBQURHLEtBQVAsQ0FOTyxFQVNQLGdCQUFLTixPQUFPSSxJQUFaLENBVE8sQ0FBSixFQVVKRyxFQVZJLFVBVVFDLFFBQVFDLEtBQVIsQ0FBY0MsSUFBZCxDQUFtQkYsT0FBbkIsQ0FWUixDQUFQO0FBV0g7O0FBRURaLHVCQUF1QmUsV0FBdkI7O0FBR08sU0FBU2QsMkJBQVQsQ0FBcUNlLElBQXJDLEVBQTJDO0FBQzlDLFFBQUlDLFVBQVUsaUJBQU1iLE9BQU9FLFFBQVAsQ0FBZ0JDLE9BQXRCLEVBQStCLGtCQUFPUCxzQkFBUCxDQUEvQixDQUFkO0FBQ0FpQixZQUFRTixFQUFSLFFBQWtCLFVBQVVPLElBQVYsRUFBZ0I7QUFBRSxxQ0FBU0EsSUFBVDtBQUF5QixLQUE3RDtBQUNBRCxZQUFRTixFQUFSLFdBQXFCLFVBQVVPLElBQVYsRUFBZ0I7QUFBRSxxQ0FBU0EsSUFBVDtBQUEyQixLQUFsRTtBQUNBRCxZQUFRTixFQUFSLFdBQXFCLFVBQVVPLElBQVYsRUFBZ0I7QUFBRSxxQ0FBU0EsSUFBVDtBQUEyQixLQUFsRTtBQUNBRjtBQUNIOztBQUVEZiw0QkFBNEJjLFdBQTVCOztBQUdPLFNBQVNiLHNCQUFULEdBQWtDO0FBQ3JDLFdBQU8seUJBQUksQ0FDUCxlQUFJRSxPQUFPRSxRQUFQLENBQWdCYSxPQUFwQixDQURPLEVBRVAseUJBQU1mLE9BQU9JLElBQWIsQ0FGTyxFQUdQLGtDQUFlLENBQ1gsNEJBQWEsRUFBRVksVUFBVWYsdUJBQVosRUFBYixDQURXLENBQWYsQ0FITyxFQU1QLGdDQUFhO0FBQ1RJLGlCQUFTO0FBREEsS0FBYixDQU5PLEVBU1AsMEJBQU87QUFDSEM7QUFERyxLQUFQLENBVE8sRUFZUCxnQkFBS04sT0FBT0ksSUFBWixDQVpPLENBQUosRUFhSkcsRUFiSSxVQWFRQyxRQUFRQyxLQUFSLENBQWNDLElBQWQsQ0FBbUJGLE9BQW5CLENBYlIsQ0FBUDtBQWNIOztBQUVEVix1QkFBdUJhLFdBQXZCOztBQUdPLFNBQVNaLDJCQUFULENBQXFDYSxJQUFyQyxFQUEyQztBQUM5QyxRQUFJQyxVQUFVLGlCQUFNYixPQUFPRSxRQUFQLENBQWdCYSxPQUF0QixFQUErQixrQkFBT2pCLHNCQUFQLENBQS9CLENBQWQ7QUFDQWUsWUFBUU4sRUFBUixRQUFrQixVQUFVTyxJQUFWLEVBQWdCO0FBQUUscUNBQVNBLElBQVQ7QUFBeUIsS0FBN0Q7QUFDQUQsWUFBUU4sRUFBUixXQUFxQixVQUFVTyxJQUFWLEVBQWdCO0FBQUUscUNBQVNBLElBQVQ7QUFBMkIsS0FBbEU7QUFDQUQsWUFBUU4sRUFBUixXQUFxQixVQUFVTyxJQUFWLEVBQWdCO0FBQUUscUNBQVNBLElBQVQ7QUFBMkIsS0FBbEU7QUFDQUY7QUFDSDs7QUFFRGIsNEJBQTRCWSxXQUE1QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdhdGNoLCBzcmMsIGRlc3QsIHNlcmllcyB9IGZyb20gJ2d1bHAnXG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJ3dlYnJldy1oZWxwZXJzLWxvZydcbmltcG9ydCB7IHNhZmVMb2FkIH0gZnJvbSAnanMteWFtbCdcbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJ1xuaW1wb3J0IHsgb2JqIH0gZnJvbSAnc3RyZWFtLWNvbWJpbmVyMidcbmltcG9ydCByZW5hbWUgZnJvbSAnZ3VscC1yZW5hbWUnXG5pbXBvcnQgbmV3ZXIgZnJvbSAnZ3VscC1uZXdlcidcbmltcG9ydCBiYWJlbCBmcm9tICdndWxwLWJhYmVsJ1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInXG5pbXBvcnQgcG9seW1lclBvc3Rjc3MgZnJvbSAnZ3VscC1wb2x5bWVyLXBvc3Rjc3MnXG5pbXBvcnQgcG9seW1lckJhYmVsIGZyb20gJ2d1bHAtcG9seW1lci1iYWJlbCdcblxuY29uc3QgY29uZmlnID0gc2FmZUxvYWQocmVhZEZpbGVTeW5jKGAuLy53ZWJyZXdyY2AsIGB1dGY4YCkpXG5cbmRlYnVnKGBjb25maWc6YCwgY29uZmlnKVxuXG5jb25zdCBhdXRvcHJlZml4ZXJCcm93c2VyTGlzdCA9IFtcbiAgICBgY2hyb21lID49IDQwYCxcbiAgICBgU2FmYXJpID49IDlgLFxuICAgIGBpT1MgPj0gOGAsXG4gICAgYEZpcmVmb3ggPj0gNDNgLFxuICAgIGBFZGdlID49IDEyYCxcbiAgICBgRXhwbG9yZXIgPj0gMTFgXG5dXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQb2x5bWVyIGVsZW1lbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudFNjcmlwdFRyYW5zcGlsZSgpIHtcbiAgICByZXR1cm4gb2JqKFtcbiAgICAgICAgc3JjKGNvbmZpZy5lbGVtZW50cy5zY3JpcHRzKSxcbiAgICAgICAgbmV3ZXIoY29uZmlnLmRlc3QpLFxuICAgICAgICBiYWJlbCh7XG4gICAgICAgICAgICBwcmVzZXRzOiBbYGVzMjAxNWBdXG4gICAgICAgIH0pLFxuICAgICAgICByZW5hbWUoe1xuICAgICAgICAgICAgZXh0bmFtZTogYC5qc2BcbiAgICAgICAgfSksXG4gICAgICAgIGRlc3QoY29uZmlnLmRlc3QpXG4gICAgXSkub24oYGVycm9yYCwgY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpKVxufVxuXG5lbGVtZW50U2NyaXB0VHJhbnNwaWxlLmRlc2NyaXB0aW9uID0gYFBvbHltZXIgZWxlbWVudHMgc2NyaXB0cyB0cmFuc3BpbGUuYFxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50U2NyaXB0VHJhbnNwaWxlV2F0Y2gobmV4dCkge1xuICAgIGxldCB3YXRjaGVyID0gd2F0Y2goY29uZmlnLmVsZW1lbnRzLnNjcmlwdHMsIHNlcmllcyhlbGVtZW50U2NyaXB0VHJhbnNwaWxlKSlcbiAgICB3YXRjaGVyLm9uKGBhZGRgLCBmdW5jdGlvbiAocGF0aCkgeyBkZWJ1ZyhgJHtwYXRofSBhZGRlZC5gKSB9KVxuICAgIHdhdGNoZXIub24oYGNoYW5nZWAsIGZ1bmN0aW9uIChwYXRoKSB7IGRlYnVnKGAke3BhdGh9IGNoYW5nZWQuYCkgfSlcbiAgICB3YXRjaGVyLm9uKGB1bmxpbmtgLCBmdW5jdGlvbiAocGF0aCkgeyBkZWJ1ZyhgJHtwYXRofSByZW1vdmVkLmApIH0pXG4gICAgbmV4dCgpXG59XG5cbmVsZW1lbnRTY3JpcHRUcmFuc3BpbGVXYXRjaC5kZXNjcmlwdGlvbiA9IGBXYXRjaCBQb2x5bWVyIGVsZW1lbnRzIHNjcmlwdHMgdHJhbnNwaWxlLmBcblxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudE1hcmt1cFRyYW5zcGlsZSgpIHtcbiAgICByZXR1cm4gb2JqKFtcbiAgICAgICAgc3JjKGNvbmZpZy5lbGVtZW50cy5tYXJrdXBzKSxcbiAgICAgICAgbmV3ZXIoY29uZmlnLmRlc3QpLFxuICAgICAgICBwb2x5bWVyUG9zdGNzcyhbXG4gICAgICAgICAgICBhdXRvcHJlZml4ZXIoeyBicm93c2VyczogYXV0b3ByZWZpeGVyQnJvd3Nlckxpc3QgfSlcbiAgICAgICAgXSksXG4gICAgICAgIHBvbHltZXJCYWJlbCh7XG4gICAgICAgICAgICBwcmVzZXRzOiBbYGVzMjAxNWBdXG4gICAgICAgIH0pLFxuICAgICAgICByZW5hbWUoe1xuICAgICAgICAgICAgZXh0bmFtZTogYC5odG1sYFxuICAgICAgICB9KSxcbiAgICAgICAgZGVzdChjb25maWcuZGVzdClcbiAgICBdKS5vbihgZXJyb3JgLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSkpXG59XG5cbmVsZW1lbnRNYXJrdXBUcmFuc3BpbGUuZGVzY3JpcHRpb24gPSBgUG9seW1lciBlbGVtZW50cyBtYXJrdXBzIHRyYW5zcGlsZS5gXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRNYXJrdXBUcmFuc3BpbGVXYXRjaChuZXh0KSB7XG4gICAgbGV0IHdhdGNoZXIgPSB3YXRjaChjb25maWcuZWxlbWVudHMubWFya3Vwcywgc2VyaWVzKGVsZW1lbnRNYXJrdXBUcmFuc3BpbGUpKVxuICAgIHdhdGNoZXIub24oYGFkZGAsIGZ1bmN0aW9uIChwYXRoKSB7IGRlYnVnKGAke3BhdGh9IGFkZGVkLmApIH0pXG4gICAgd2F0Y2hlci5vbihgY2hhbmdlYCwgZnVuY3Rpb24gKHBhdGgpIHsgZGVidWcoYCR7cGF0aH0gY2hhbmdlZC5gKSB9KVxuICAgIHdhdGNoZXIub24oYHVubGlua2AsIGZ1bmN0aW9uIChwYXRoKSB7IGRlYnVnKGAke3BhdGh9IHJlbW92ZWQuYCkgfSlcbiAgICBuZXh0KClcbn1cblxuZWxlbWVudE1hcmt1cFRyYW5zcGlsZVdhdGNoLmRlc2NyaXB0aW9uID0gYFdhdGNoIFBvbHltZXIgZWxlbWVudHMgbWFya3VwcyB0cmFuc3BpbGUuYFxuIl19