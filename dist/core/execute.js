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
        // require(`./../${data.group}/${data.command}`)
        (0, _webrewHelpersLog.debug)('group:', data.group, 'command:', data.command, 'options:', data.options);
        (0, _crossSpawn.spawn)('gulp', ['' + data.command, '--require', 'babel-register', '--gulpfile=./../webrew/src/gulp/index.js', '--cwd=./'], { stdio: 'inherit' });
    } catch (err) {
        (0, _webrewHelpersLog.error)('Make sure command \'' + data.command + '\' and group \'' + data.group + '\' exist.');
        (0, _webrewHelpersLog.error)('Original error:', err);
    }
};

exports.default = Execute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2V4ZWN1dGUuanMiXSwibmFtZXMiOlsiRXhlY3V0ZSIsImRhdGEiLCJncm91cCIsImNvbW1hbmQiLCJvcHRpb25zIiwic3RkaW8iLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7SUFFYUEsTyxXQUFBQSxPLEdBQ1QsaUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDZCxpREFBc0JBLElBQXRCO0FBQ0EsUUFBSTtBQUNBO0FBQ0EsK0NBQWdCQSxLQUFLQyxLQUFyQixjQUF3Q0QsS0FBS0UsT0FBN0MsY0FBa0VGLEtBQUtHLE9BQXZFO0FBQ0EsdUNBQWMsTUFDUEgsS0FBS0UsT0FERSx3RkFBZCxFQU1HLEVBQUVFLGdCQUFGLEVBTkg7QUFPSCxLQVZELENBV0EsT0FBT0MsR0FBUCxFQUFZO0FBQ1IsOERBQTRCTCxLQUFLRSxPQUFqQyx1QkFBd0RGLEtBQUtDLEtBQTdEO0FBQ0Esd0RBQXlCSSxHQUF6QjtBQUNIO0FBQ0osQzs7a0JBR1VOLE8iLCJmaWxlIjoiZXhlY3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZGVidWcsIGVycm9yIH0gZnJvbSAnd2VicmV3LWhlbHBlcnMtbG9nJ1xuaW1wb3J0IHsgc3Bhd24gfSBmcm9tICdjcm9zcy1zcGF3bidcblxuZXhwb3J0IGNsYXNzIEV4ZWN1dGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZGVidWcoYENvbnN0cnVjdGVkOmAsIGRhdGEpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyByZXF1aXJlKGAuLy4uLyR7ZGF0YS5ncm91cH0vJHtkYXRhLmNvbW1hbmR9YClcbiAgICAgICAgICAgIGRlYnVnKGBncm91cDpgLCBkYXRhLmdyb3VwLCBgY29tbWFuZDpgLCBkYXRhLmNvbW1hbmQsIGBvcHRpb25zOmAsIGRhdGEub3B0aW9ucylcbiAgICAgICAgICAgIHNwYXduKGBndWxwYCwgW1xuICAgICAgICAgICAgICAgIGAke2RhdGEuY29tbWFuZH1gLFxuICAgICAgICAgICAgICAgIGAtLXJlcXVpcmVgLFxuICAgICAgICAgICAgICAgIGBiYWJlbC1yZWdpc3RlcmAsXG4gICAgICAgICAgICAgICAgYC0tZ3VscGZpbGU9Li8uLi93ZWJyZXcvc3JjL2d1bHAvaW5kZXguanNgLFxuICAgICAgICAgICAgICAgIGAtLWN3ZD0uL2AsXG4gICAgICAgICAgICBdLCB7IHN0ZGlvOiBgaW5oZXJpdGAgfSlcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBlcnJvcihgTWFrZSBzdXJlIGNvbW1hbmQgJyR7ZGF0YS5jb21tYW5kfScgYW5kIGdyb3VwICcke2RhdGEuZ3JvdXB9JyBleGlzdC5gKVxuICAgICAgICAgICAgZXJyb3IoYE9yaWdpbmFsIGVycm9yOmAsIGVycilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhlY3V0ZSJdfQ==