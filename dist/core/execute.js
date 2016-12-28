'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Execute = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _webrewHelpersLog = require('webrew-helpers-log');

var _crossSpawn = require('cross-spawn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Execute = exports.Execute = function Execute(data) {
    (0, _classCallCheck3.default)(this, Execute);

    (0, _webrewHelpersLog.debug)('Constructed:', data);
    try {
        // require(`./../${data.category}/${data.command}`)
        (0, _webrewHelpersLog.debug)('category:', data.category, 'command:', data.command, 'options:', data.options);
        (0, _crossSpawn.spawn)('gulp', ['--require', 'babel-register', '--gulpfile=./../webrew/src/gulp/index.js', '--cwd=./'], { stdio: 'inherit' });
    } catch (err) {
        (0, _webrewHelpersLog.error)('Make sure command \'' + data.command + '\' and category \'' + data.category + '\' exist.');
        (0, _webrewHelpersLog.error)('Original error:', err);
    }
};

exports.default = Execute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2V4ZWN1dGUuanMiXSwibmFtZXMiOlsiRXhlY3V0ZSIsImRhdGEiLCJjYXRlZ29yeSIsImNvbW1hbmQiLCJvcHRpb25zIiwic3RkaW8iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7SUFFYUEsTyxXQUFBQSxPLEdBQ1QsaUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDZCxpREFBc0JBLElBQXRCO0FBQ0EsUUFBSTtBQUNBO0FBQ0Esa0RBQW1CQSxLQUFLQyxRQUF4QixjQUE4Q0QsS0FBS0UsT0FBbkQsY0FBd0VGLEtBQUtHLE9BQTdFO0FBQ0EsdUNBQWMsdUZBQWQsRUFLRyxFQUFFQyxnQkFBRixFQUxIO0FBTUgsS0FURCxDQVVBLE9BQU9DLEdBQVAsRUFBWTtBQUNSLDhEQUE0QkwsS0FBS0UsT0FBakMsMEJBQTJERixLQUFLQyxRQUFoRTtBQUNBLHdEQUF5QkksR0FBekI7QUFDSDtBQUNKLEM7O2tCQUdVTixPIiwiZmlsZSI6ImV4ZWN1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGRlYnVnLCBlcnJvciB9IGZyb20gJ3dlYnJldy1oZWxwZXJzLWxvZydcbmltcG9ydCB7IHNwYXduIH0gZnJvbSAnY3Jvc3Mtc3Bhd24nXG5cbmV4cG9ydCBjbGFzcyBFeGVjdXRlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGRlYnVnKGBDb25zdHJ1Y3RlZDpgLCBkYXRhKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gcmVxdWlyZShgLi8uLi8ke2RhdGEuY2F0ZWdvcnl9LyR7ZGF0YS5jb21tYW5kfWApXG4gICAgICAgICAgICBkZWJ1ZyhgY2F0ZWdvcnk6YCwgZGF0YS5jYXRlZ29yeSwgYGNvbW1hbmQ6YCwgZGF0YS5jb21tYW5kLCBgb3B0aW9uczpgLCBkYXRhLm9wdGlvbnMpXG4gICAgICAgICAgICBzcGF3bihgZ3VscGAsIFtcbiAgICAgICAgICAgICAgICBgLS1yZXF1aXJlYCxcbiAgICAgICAgICAgICAgICBgYmFiZWwtcmVnaXN0ZXJgLFxuICAgICAgICAgICAgICAgIGAtLWd1bHBmaWxlPS4vLi4vd2VicmV3L3NyYy9ndWxwL2luZGV4LmpzYCxcbiAgICAgICAgICAgICAgICBgLS1jd2Q9Li9gLFxuICAgICAgICAgICAgXSwgeyBzdGRpbzogYGluaGVyaXRgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgZXJyb3IoYE1ha2Ugc3VyZSBjb21tYW5kICcke2RhdGEuY29tbWFuZH0nIGFuZCBjYXRlZ29yeSAnJHtkYXRhLmNhdGVnb3J5fScgZXhpc3QuYClcbiAgICAgICAgICAgIGVycm9yKGBPcmlnaW5hbCBlcnJvcjpgLCBlcnIpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4ZWN1dGUiXX0=