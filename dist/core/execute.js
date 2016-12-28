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
        (0, _webrewHelpersLog.debug)('process.argv[1]', process.argv[1]);
        (0, _webrewHelpersLog.debug)('process.env.PWD', process.env.PWD);
        (0, _webrewHelpersLog.debug)('process.env.CWD', process.env.CWD);
        (0, _webrewHelpersLog.debug)('process.cwd()', process.cwd());
        (0, _crossSpawn.spawn)('gulp', ['' + data.command, '--gulpfile=./node_modules/webrew/dist/gulp/index.js', '--cwd=./', '--require', 'babel-register'], { stdio: 'inherit' });
    } catch (err) {
        (0, _webrewHelpersLog.error)('Make sure command \'' + data.command + '\' and category \'' + data.category + '\' exist.');
        (0, _webrewHelpersLog.error)('Original error:', err);
    }
};

exports.default = Execute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2V4ZWN1dGUuanMiXSwibmFtZXMiOlsiRXhlY3V0ZSIsImRhdGEiLCJjYXRlZ29yeSIsImNvbW1hbmQiLCJvcHRpb25zIiwicHJvY2VzcyIsImFyZ3YiLCJlbnYiLCJQV0QiLCJDV0QiLCJjd2QiLCJzdGRpbyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztJQUVhQSxPLFdBQUFBLE8sR0FDVCxpQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNkLGlEQUFzQkEsSUFBdEI7QUFDQSxRQUFJO0FBQ0E7QUFDQSxrREFBbUJBLEtBQUtDLFFBQXhCLGNBQThDRCxLQUFLRSxPQUFuRCxjQUF3RUYsS0FBS0csT0FBN0U7QUFDQSx3REFBeUJDLFFBQVFDLElBQVIsQ0FBYSxDQUFiLENBQXpCO0FBQ0Esd0RBQXlCRCxRQUFRRSxHQUFSLENBQVlDLEdBQXJDO0FBQ0Esd0RBQXlCSCxRQUFRRSxHQUFSLENBQVlFLEdBQXJDO0FBQ0Esc0RBQXVCSixRQUFRSyxHQUFSLEVBQXZCO0FBQ0EsdUNBQWMsTUFDUFQsS0FBS0UsT0FERSxtR0FBZCxFQU1HLEVBQUVRLGdCQUFGLEVBTkg7QUFPSCxLQWRELENBZUEsT0FBT0MsR0FBUCxFQUFZO0FBQ1IsOERBQTRCWCxLQUFLRSxPQUFqQywwQkFBMkRGLEtBQUtDLFFBQWhFO0FBQ0Esd0RBQXlCVSxHQUF6QjtBQUNIO0FBQ0osQzs7a0JBR1VaLE8iLCJmaWxlIjoiZXhlY3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZGVidWcsIGVycm9yIH0gZnJvbSAnd2VicmV3LWhlbHBlcnMtbG9nJ1xuaW1wb3J0IHsgc3Bhd24gfSBmcm9tICdjcm9zcy1zcGF3bidcblxuZXhwb3J0IGNsYXNzIEV4ZWN1dGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZGVidWcoYENvbnN0cnVjdGVkOmAsIGRhdGEpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyByZXF1aXJlKGAuLy4uLyR7ZGF0YS5jYXRlZ29yeX0vJHtkYXRhLmNvbW1hbmR9YClcbiAgICAgICAgICAgIGRlYnVnKGBjYXRlZ29yeTpgLCBkYXRhLmNhdGVnb3J5LCBgY29tbWFuZDpgLCBkYXRhLmNvbW1hbmQsIGBvcHRpb25zOmAsIGRhdGEub3B0aW9ucylcbiAgICAgICAgICAgIGRlYnVnKGBwcm9jZXNzLmFyZ3ZbMV1gLCBwcm9jZXNzLmFyZ3ZbMV0pXG4gICAgICAgICAgICBkZWJ1ZyhgcHJvY2Vzcy5lbnYuUFdEYCwgcHJvY2Vzcy5lbnYuUFdEKVxuICAgICAgICAgICAgZGVidWcoYHByb2Nlc3MuZW52LkNXRGAsIHByb2Nlc3MuZW52LkNXRClcbiAgICAgICAgICAgIGRlYnVnKGBwcm9jZXNzLmN3ZCgpYCwgcHJvY2Vzcy5jd2QoKSlcbiAgICAgICAgICAgIHNwYXduKGBndWxwYCwgW1xuICAgICAgICAgICAgICAgIGAke2RhdGEuY29tbWFuZH1gLFxuICAgICAgICAgICAgICAgIGAtLWd1bHBmaWxlPS4vbm9kZV9tb2R1bGVzL3dlYnJldy9kaXN0L2d1bHAvaW5kZXguanNgLFxuICAgICAgICAgICAgICAgIGAtLWN3ZD0uL2AsXG4gICAgICAgICAgICAgICAgYC0tcmVxdWlyZWAsXG4gICAgICAgICAgICAgICAgYGJhYmVsLXJlZ2lzdGVyYCxcbiAgICAgICAgICAgIF0sIHsgc3RkaW86IGBpbmhlcml0YCB9KVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGVycm9yKGBNYWtlIHN1cmUgY29tbWFuZCAnJHtkYXRhLmNvbW1hbmR9JyBhbmQgY2F0ZWdvcnkgJyR7ZGF0YS5jYXRlZ29yeX0nIGV4aXN0LmApXG4gICAgICAgICAgICBlcnJvcihgT3JpZ2luYWwgZXJyb3I6YCwgZXJyKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGVjdXRlIl19