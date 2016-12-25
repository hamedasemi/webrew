'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.elementScriptTranspile = elementScriptTranspile;
exports.elementScriptTranspileWatch = elementScriptTranspileWatch;
exports.elementMarkupTranspile = elementMarkupTranspile;
exports.elementMarkupTranspileWatch = elementMarkupTranspileWatch;

var _gulp = require('gulp');

var _helpersLog = require('../helpers-log');

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

var config = (0, _jsYaml.safeLoad)((0, _fs.readFileSync)('./.apegrouprc', 'utf8'));

(0, _helpersLog.debug)('config:', config);

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
        (0, _helpersLog.debug)(path + ' added.');
    });
    watcher.on('change', function (path) {
        (0, _helpersLog.debug)(path + ' changed.');
    });
    watcher.on('unlink', function (path) {
        (0, _helpersLog.debug)(path + ' removed.');
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
        (0, _helpersLog.debug)(path + ' added.');
    });
    watcher.on('change', function (path) {
        (0, _helpersLog.debug)(path + ' changed.');
    });
    watcher.on('unlink', function (path) {
        (0, _helpersLog.debug)(path + ' removed.');
    });
    next();
}

elementMarkupTranspileWatch.description = 'Watch Polymer elements markups transpile.';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvQGFwZWdyb3VwL2d1bHAtdHJhbnNwaWxlL2luZGV4LmpzIl0sIm5hbWVzIjpbImVsZW1lbnRTY3JpcHRUcmFuc3BpbGUiLCJlbGVtZW50U2NyaXB0VHJhbnNwaWxlV2F0Y2giLCJlbGVtZW50TWFya3VwVHJhbnNwaWxlIiwiZWxlbWVudE1hcmt1cFRyYW5zcGlsZVdhdGNoIiwiY29uZmlnIiwiYXV0b3ByZWZpeGVyQnJvd3Nlckxpc3QiLCJlbGVtZW50cyIsInNjcmlwdHMiLCJkZXN0IiwicHJlc2V0cyIsImV4dG5hbWUiLCJvbiIsImNvbnNvbGUiLCJlcnJvciIsImJpbmQiLCJkZXNjcmlwdGlvbiIsIm5leHQiLCJ3YXRjaGVyIiwicGF0aCIsIm1hcmt1cHMiLCJicm93c2VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFpQ2dCQSxzQixHQUFBQSxzQjtRQWlCQUMsMkIsR0FBQUEsMkI7UUFXQUMsc0IsR0FBQUEsc0I7UUFvQkFDLDJCLEdBQUFBLDJCOztBQWpGaEI7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxTQUFTLHNCQUFTLHNCQUFhLGVBQWIsRUFBOEIsTUFBOUIsQ0FBVCxDQUFmOztBQUVBLHVCQUFNLFNBQU4sRUFBaUJBLE1BQWpCOztBQUVBLElBQU1DLDBCQUEwQiw0RkFBaEM7O0FBU0E7Ozs7OztBQU1PLFNBQVNMLHNCQUFULEdBQWtDO0FBQ3JDLFdBQU8seUJBQUksQ0FDUCxlQUFJSSxPQUFPRSxRQUFQLENBQWdCQyxPQUFwQixDQURPLEVBRVAseUJBQU1ILE9BQU9JLElBQWIsQ0FGTyxFQUdQLHlCQUFNO0FBQ0ZDLGlCQUFTO0FBRFAsS0FBTixDQUhPLEVBTVAsMEJBQU87QUFDSEM7QUFERyxLQUFQLENBTk8sRUFTUCxnQkFBS04sT0FBT0ksSUFBWixDQVRPLENBQUosRUFVSkcsRUFWSSxVQVVRQyxRQUFRQyxLQUFSLENBQWNDLElBQWQsQ0FBbUJGLE9BQW5CLENBVlIsQ0FBUDtBQVdIOztBQUVEWix1QkFBdUJlLFdBQXZCOztBQUdPLFNBQVNkLDJCQUFULENBQXFDZSxJQUFyQyxFQUEyQztBQUM5QyxRQUFJQyxVQUFVLGlCQUFNYixPQUFPRSxRQUFQLENBQWdCQyxPQUF0QixFQUErQixrQkFBT1Asc0JBQVAsQ0FBL0IsQ0FBZDtBQUNBaUIsWUFBUU4sRUFBUixRQUFrQixVQUFVTyxJQUFWLEVBQWdCO0FBQUUsK0JBQVNBLElBQVQ7QUFBMEIsS0FBOUQ7QUFDQUQsWUFBUU4sRUFBUixXQUFxQixVQUFVTyxJQUFWLEVBQWdCO0FBQUUsK0JBQVNBLElBQVQ7QUFBNEIsS0FBbkU7QUFDQUQsWUFBUU4sRUFBUixXQUFxQixVQUFVTyxJQUFWLEVBQWdCO0FBQUUsK0JBQVNBLElBQVQ7QUFBNEIsS0FBbkU7QUFDQUY7QUFDSDs7QUFFRGYsNEJBQTRCYyxXQUE1Qjs7QUFHTyxTQUFTYixzQkFBVCxHQUFrQztBQUNyQyxXQUFPLHlCQUFJLENBQ1AsZUFBSUUsT0FBT0UsUUFBUCxDQUFnQmEsT0FBcEIsQ0FETyxFQUVQLHlCQUFNZixPQUFPSSxJQUFiLENBRk8sRUFHUCxrQ0FBZSxDQUNYLDRCQUFhLEVBQUVZLFVBQVVmLHVCQUFaLEVBQWIsQ0FEVyxDQUFmLENBSE8sRUFNUCxnQ0FBYTtBQUNUSSxpQkFBUztBQURBLEtBQWIsQ0FOTyxFQVNQLDBCQUFPO0FBQ0hDO0FBREcsS0FBUCxDQVRPLEVBWVAsZ0JBQUtOLE9BQU9JLElBQVosQ0FaTyxDQUFKLEVBYUpHLEVBYkksVUFhUUMsUUFBUUMsS0FBUixDQUFjQyxJQUFkLENBQW1CRixPQUFuQixDQWJSLENBQVA7QUFjSDs7QUFFRFYsdUJBQXVCYSxXQUF2Qjs7QUFHTyxTQUFTWiwyQkFBVCxDQUFxQ2EsSUFBckMsRUFBMkM7QUFDOUMsUUFBSUMsVUFBVSxpQkFBTWIsT0FBT0UsUUFBUCxDQUFnQmEsT0FBdEIsRUFBK0Isa0JBQU9qQixzQkFBUCxDQUEvQixDQUFkO0FBQ0FlLFlBQVFOLEVBQVIsUUFBa0IsVUFBVU8sSUFBVixFQUFnQjtBQUFFLCtCQUFTQSxJQUFUO0FBQTBCLEtBQTlEO0FBQ0FELFlBQVFOLEVBQVIsV0FBcUIsVUFBVU8sSUFBVixFQUFnQjtBQUFFLCtCQUFTQSxJQUFUO0FBQTRCLEtBQW5FO0FBQ0FELFlBQVFOLEVBQVIsV0FBcUIsVUFBVU8sSUFBVixFQUFnQjtBQUFFLCtCQUFTQSxJQUFUO0FBQTRCLEtBQW5FO0FBQ0FGO0FBQ0g7O0FBRURiLDRCQUE0QlksV0FBNUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3YXRjaCwgc3JjLCBkZXN0LCBzZXJpZXMgfSBmcm9tICdndWxwJztcblxuaW1wb3J0IHsgZGVidWcgfSBmcm9tICd+L21vZHVsZXMvQGFwZWdyb3VwL2hlbHBlcnMtbG9nJ1xuXG5pbXBvcnQgeyBzYWZlTG9hZCB9IGZyb20gJ2pzLXlhbWwnO1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgb2JqIH0gZnJvbSAnc3RyZWFtLWNvbWJpbmVyMic7XG5pbXBvcnQgcmVuYW1lIGZyb20gJ2d1bHAtcmVuYW1lJztcbmltcG9ydCBuZXdlciBmcm9tICdndWxwLW5ld2VyJztcbmltcG9ydCBiYWJlbCBmcm9tICdndWxwLWJhYmVsJztcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJztcbmltcG9ydCBwb2x5bWVyUG9zdGNzcyBmcm9tICdndWxwLXBvbHltZXItcG9zdGNzcyc7XG5pbXBvcnQgcG9seW1lckJhYmVsIGZyb20gJ2d1bHAtcG9seW1lci1iYWJlbCc7XG5cbmNvbnN0IGNvbmZpZyA9IHNhZmVMb2FkKHJlYWRGaWxlU3luYygnLi8uYXBlZ3JvdXByYycsICd1dGY4JykpXG5cbmRlYnVnKCdjb25maWc6JywgY29uZmlnKVxuXG5jb25zdCBhdXRvcHJlZml4ZXJCcm93c2VyTGlzdCA9IFtcbiAgICBgY2hyb21lID49IDQwYCxcbiAgICBgU2FmYXJpID49IDlgLFxuICAgIGBpT1MgPj0gOGAsXG4gICAgYEZpcmVmb3ggPj0gNDNgLFxuICAgIGBFZGdlID49IDEyYCxcbiAgICBgRXhwbG9yZXIgPj0gMTFgXG5dO1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUG9seW1lciBlbGVtZW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRTY3JpcHRUcmFuc3BpbGUoKSB7XG4gICAgcmV0dXJuIG9iaihbXG4gICAgICAgIHNyYyhjb25maWcuZWxlbWVudHMuc2NyaXB0cyksXG4gICAgICAgIG5ld2VyKGNvbmZpZy5kZXN0KSxcbiAgICAgICAgYmFiZWwoe1xuICAgICAgICAgICAgcHJlc2V0czogW2BlczIwMTVgXVxuICAgICAgICB9KSxcbiAgICAgICAgcmVuYW1lKHtcbiAgICAgICAgICAgIGV4dG5hbWU6IGAuanNgXG4gICAgICAgIH0pLFxuICAgICAgICBkZXN0KGNvbmZpZy5kZXN0KVxuICAgIF0pLm9uKGBlcnJvcmAsIGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKSk7XG59XG5cbmVsZW1lbnRTY3JpcHRUcmFuc3BpbGUuZGVzY3JpcHRpb24gPSBgUG9seW1lciBlbGVtZW50cyBzY3JpcHRzIHRyYW5zcGlsZS5gO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50U2NyaXB0VHJhbnNwaWxlV2F0Y2gobmV4dCkge1xuICAgIGxldCB3YXRjaGVyID0gd2F0Y2goY29uZmlnLmVsZW1lbnRzLnNjcmlwdHMsIHNlcmllcyhlbGVtZW50U2NyaXB0VHJhbnNwaWxlKSk7XG4gICAgd2F0Y2hlci5vbihgYWRkYCwgZnVuY3Rpb24gKHBhdGgpIHsgZGVidWcoYCR7cGF0aH0gYWRkZWQuYCk7IH0pO1xuICAgIHdhdGNoZXIub24oYGNoYW5nZWAsIGZ1bmN0aW9uIChwYXRoKSB7IGRlYnVnKGAke3BhdGh9IGNoYW5nZWQuYCk7IH0pO1xuICAgIHdhdGNoZXIub24oYHVubGlua2AsIGZ1bmN0aW9uIChwYXRoKSB7IGRlYnVnKGAke3BhdGh9IHJlbW92ZWQuYCk7IH0pO1xuICAgIG5leHQoKTtcbn1cblxuZWxlbWVudFNjcmlwdFRyYW5zcGlsZVdhdGNoLmRlc2NyaXB0aW9uID0gYFdhdGNoIFBvbHltZXIgZWxlbWVudHMgc2NyaXB0cyB0cmFuc3BpbGUuYDtcblxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudE1hcmt1cFRyYW5zcGlsZSgpIHtcbiAgICByZXR1cm4gb2JqKFtcbiAgICAgICAgc3JjKGNvbmZpZy5lbGVtZW50cy5tYXJrdXBzKSxcbiAgICAgICAgbmV3ZXIoY29uZmlnLmRlc3QpLFxuICAgICAgICBwb2x5bWVyUG9zdGNzcyhbXG4gICAgICAgICAgICBhdXRvcHJlZml4ZXIoeyBicm93c2VyczogYXV0b3ByZWZpeGVyQnJvd3Nlckxpc3QgfSlcbiAgICAgICAgXSksXG4gICAgICAgIHBvbHltZXJCYWJlbCh7XG4gICAgICAgICAgICBwcmVzZXRzOiBbYGVzMjAxNWBdXG4gICAgICAgIH0pLFxuICAgICAgICByZW5hbWUoe1xuICAgICAgICAgICAgZXh0bmFtZTogYC5odG1sYFxuICAgICAgICB9KSxcbiAgICAgICAgZGVzdChjb25maWcuZGVzdClcbiAgICBdKS5vbihgZXJyb3JgLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSkpO1xufVxuXG5lbGVtZW50TWFya3VwVHJhbnNwaWxlLmRlc2NyaXB0aW9uID0gYFBvbHltZXIgZWxlbWVudHMgbWFya3VwcyB0cmFuc3BpbGUuYDtcblxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudE1hcmt1cFRyYW5zcGlsZVdhdGNoKG5leHQpIHtcbiAgICBsZXQgd2F0Y2hlciA9IHdhdGNoKGNvbmZpZy5lbGVtZW50cy5tYXJrdXBzLCBzZXJpZXMoZWxlbWVudE1hcmt1cFRyYW5zcGlsZSkpO1xuICAgIHdhdGNoZXIub24oYGFkZGAsIGZ1bmN0aW9uIChwYXRoKSB7IGRlYnVnKGAke3BhdGh9IGFkZGVkLmApOyB9KTtcbiAgICB3YXRjaGVyLm9uKGBjaGFuZ2VgLCBmdW5jdGlvbiAocGF0aCkgeyBkZWJ1ZyhgJHtwYXRofSBjaGFuZ2VkLmApOyB9KTtcbiAgICB3YXRjaGVyLm9uKGB1bmxpbmtgLCBmdW5jdGlvbiAocGF0aCkgeyBkZWJ1ZyhgJHtwYXRofSByZW1vdmVkLmApOyB9KTtcbiAgICBuZXh0KCk7XG59XG5cbmVsZW1lbnRNYXJrdXBUcmFuc3BpbGVXYXRjaC5kZXNjcmlwdGlvbiA9IGBXYXRjaCBQb2x5bWVyIGVsZW1lbnRzIG1hcmt1cHMgdHJhbnNwaWxlLmA7XG4iXX0=