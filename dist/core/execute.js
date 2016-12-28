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
        (0, _crossSpawn.spawn)('gulp', ['' + data.command, '--require', 'babel-register', '--require', 'babel-polyfill ', '--gulpfile=./node_modules/webrew/src/gulp/index.js', '--cwd=./'], { stdio: 'inherit' });
    } catch (err) {
        (0, _webrewHelpersLog.error)('Make sure command \'' + data.command + '\' and category \'' + data.category + '\' exist.');
        (0, _webrewHelpersLog.error)('Original error:', err);
    }
};

exports.default = Execute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2V4ZWN1dGUuanMiXSwibmFtZXMiOlsiRXhlY3V0ZSIsImRhdGEiLCJjYXRlZ29yeSIsImNvbW1hbmQiLCJvcHRpb25zIiwicHJvY2VzcyIsImFyZ3YiLCJlbnYiLCJQV0QiLCJDV0QiLCJjd2QiLCJzdGRpbyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztJQUVhQSxPLFdBQUFBLE8sR0FDVCxpQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNkLGlEQUFzQkEsSUFBdEI7QUFDQSxRQUFJO0FBQ0E7QUFDQSxrREFBbUJBLEtBQUtDLFFBQXhCLGNBQThDRCxLQUFLRSxPQUFuRCxjQUF3RUYsS0FBS0csT0FBN0U7QUFDQSx3REFBeUJDLFFBQVFDLElBQVIsQ0FBYSxDQUFiLENBQXpCO0FBQ0Esd0RBQXlCRCxRQUFRRSxHQUFSLENBQVlDLEdBQXJDO0FBQ0Esd0RBQXlCSCxRQUFRRSxHQUFSLENBQVlFLEdBQXJDO0FBQ0Esc0RBQXVCSixRQUFRSyxHQUFSLEVBQXZCO0FBQ0EsdUNBQWMsTUFDUFQsS0FBS0UsT0FERSxrSUFBZCxFQVFHLEVBQUVRLGdCQUFGLEVBUkg7QUFTSCxLQWhCRCxDQWlCQSxPQUFPQyxHQUFQLEVBQVk7QUFDUiw4REFBNEJYLEtBQUtFLE9BQWpDLDBCQUEyREYsS0FBS0MsUUFBaEU7QUFDQSx3REFBeUJVLEdBQXpCO0FBQ0g7QUFDSixDOztrQkFHVVosTyIsImZpbGUiOiJleGVjdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBkZWJ1ZywgZXJyb3IgfSBmcm9tICd3ZWJyZXctaGVscGVycy1sb2cnXG5pbXBvcnQgeyBzcGF3biB9IGZyb20gJ2Nyb3NzLXNwYXduJ1xuXG5leHBvcnQgY2xhc3MgRXhlY3V0ZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBkZWJ1ZyhgQ29uc3RydWN0ZWQ6YCwgZGF0YSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIHJlcXVpcmUoYC4vLi4vJHtkYXRhLmNhdGVnb3J5fS8ke2RhdGEuY29tbWFuZH1gKVxuICAgICAgICAgICAgZGVidWcoYGNhdGVnb3J5OmAsIGRhdGEuY2F0ZWdvcnksIGBjb21tYW5kOmAsIGRhdGEuY29tbWFuZCwgYG9wdGlvbnM6YCwgZGF0YS5vcHRpb25zKVxuICAgICAgICAgICAgZGVidWcoYHByb2Nlc3MuYXJndlsxXWAsIHByb2Nlc3MuYXJndlsxXSlcbiAgICAgICAgICAgIGRlYnVnKGBwcm9jZXNzLmVudi5QV0RgLCBwcm9jZXNzLmVudi5QV0QpXG4gICAgICAgICAgICBkZWJ1ZyhgcHJvY2Vzcy5lbnYuQ1dEYCwgcHJvY2Vzcy5lbnYuQ1dEKVxuICAgICAgICAgICAgZGVidWcoYHByb2Nlc3MuY3dkKClgLCBwcm9jZXNzLmN3ZCgpKVxuICAgICAgICAgICAgc3Bhd24oYGd1bHBgLCBbXG4gICAgICAgICAgICAgICAgYCR7ZGF0YS5jb21tYW5kfWAsXG4gICAgICAgICAgICAgICAgYC0tcmVxdWlyZWAsXG4gICAgICAgICAgICAgICAgYGJhYmVsLXJlZ2lzdGVyYCxcbiAgICAgICAgICAgICAgICBgLS1yZXF1aXJlYCxcbiAgICAgICAgICAgICAgICBgYmFiZWwtcG9seWZpbGwgYCxcbiAgICAgICAgICAgICAgICBgLS1ndWxwZmlsZT0uL25vZGVfbW9kdWxlcy93ZWJyZXcvc3JjL2d1bHAvaW5kZXguanNgLFxuICAgICAgICAgICAgICAgIGAtLWN3ZD0uL2AsXG4gICAgICAgICAgICBdLCB7IHN0ZGlvOiBgaW5oZXJpdGAgfSlcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBlcnJvcihgTWFrZSBzdXJlIGNvbW1hbmQgJyR7ZGF0YS5jb21tYW5kfScgYW5kIGNhdGVnb3J5ICcke2RhdGEuY2F0ZWdvcnl9JyBleGlzdC5gKVxuICAgICAgICAgICAgZXJyb3IoYE9yaWdpbmFsIGVycm9yOmAsIGVycilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhlY3V0ZSJdfQ==