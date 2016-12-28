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
        (0, _webrewHelpersLog.debug)(process.argv[1]);
        (0, _webrewHelpersLog.debug)('--gulpfile=' + process.argv[1] + '/../dist/gulp/index.js');
        (0, _crossSpawn.spawn)('gulp', ['' + data.command, '--gulpfile=' + process.argv[1] + '/dist/gulp/index.js', '--cwd=./', '--require', 'babel-register'], { stdio: 'inherit' });
    } catch (err) {
        (0, _webrewHelpersLog.error)('Make sure command \'' + data.command + '\' and category \'' + data.category + '\' exist.');
        (0, _webrewHelpersLog.error)('Original error:', err);
    }
};

exports.default = Execute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2V4ZWN1dGUuanMiXSwibmFtZXMiOlsiRXhlY3V0ZSIsImRhdGEiLCJjYXRlZ29yeSIsImNvbW1hbmQiLCJvcHRpb25zIiwicHJvY2VzcyIsImFyZ3YiLCJzdGRpbyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztJQUVhQSxPLFdBQUFBLE8sR0FDVCxpQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNkLGlEQUFzQkEsSUFBdEI7QUFDQSxRQUFJO0FBQ0E7QUFDQSxrREFBbUJBLEtBQUtDLFFBQXhCLGNBQThDRCxLQUFLRSxPQUFuRCxjQUF3RUYsS0FBS0csT0FBN0U7QUFDQSxxQ0FBTUMsUUFBUUMsSUFBUixDQUFhLENBQWIsQ0FBTjtBQUNBLHFEQUFvQkQsUUFBUUMsSUFBUixDQUFhLENBQWIsQ0FBcEI7QUFDQSx1Q0FBYyxNQUNQTCxLQUFLRSxPQURFLGtCQUVJRSxRQUFRQyxJQUFSLENBQWEsQ0FBYixDQUZKLG9FQUFkLEVBTUcsRUFBRUMsZ0JBQUYsRUFOSDtBQU9ILEtBWkQsQ0FhQSxPQUFPQyxHQUFQLEVBQVk7QUFDUiw4REFBNEJQLEtBQUtFLE9BQWpDLDBCQUEyREYsS0FBS0MsUUFBaEU7QUFDQSx3REFBeUJNLEdBQXpCO0FBQ0g7QUFDSixDOztrQkFHVVIsTyIsImZpbGUiOiJleGVjdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBkZWJ1ZywgZXJyb3IgfSBmcm9tICd3ZWJyZXctaGVscGVycy1sb2cnXG5pbXBvcnQgeyBzcGF3biB9IGZyb20gJ2Nyb3NzLXNwYXduJ1xuXG5leHBvcnQgY2xhc3MgRXhlY3V0ZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBkZWJ1ZyhgQ29uc3RydWN0ZWQ6YCwgZGF0YSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIHJlcXVpcmUoYC4vLi4vJHtkYXRhLmNhdGVnb3J5fS8ke2RhdGEuY29tbWFuZH1gKVxuICAgICAgICAgICAgZGVidWcoYGNhdGVnb3J5OmAsIGRhdGEuY2F0ZWdvcnksIGBjb21tYW5kOmAsIGRhdGEuY29tbWFuZCwgYG9wdGlvbnM6YCwgZGF0YS5vcHRpb25zKVxuICAgICAgICAgICAgZGVidWcocHJvY2Vzcy5hcmd2WzFdKVxuICAgICAgICAgICAgZGVidWcoYC0tZ3VscGZpbGU9JHtwcm9jZXNzLmFyZ3ZbMV19Ly4uL2Rpc3QvZ3VscC9pbmRleC5qc2ApXG4gICAgICAgICAgICBzcGF3bihgZ3VscGAsIFtcbiAgICAgICAgICAgICAgICBgJHtkYXRhLmNvbW1hbmR9YCxcbiAgICAgICAgICAgICAgICBgLS1ndWxwZmlsZT0ke3Byb2Nlc3MuYXJndlsxXX0vZGlzdC9ndWxwL2luZGV4LmpzYCxcbiAgICAgICAgICAgICAgICBgLS1jd2Q9Li9gLFxuICAgICAgICAgICAgICAgIGAtLXJlcXVpcmVgLFxuICAgICAgICAgICAgICAgIGBiYWJlbC1yZWdpc3RlcmAsXG4gICAgICAgICAgICBdLCB7IHN0ZGlvOiBgaW5oZXJpdGAgfSlcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBlcnJvcihgTWFrZSBzdXJlIGNvbW1hbmQgJyR7ZGF0YS5jb21tYW5kfScgYW5kIGNhdGVnb3J5ICcke2RhdGEuY2F0ZWdvcnl9JyBleGlzdC5gKVxuICAgICAgICAgICAgZXJyb3IoYE9yaWdpbmFsIGVycm9yOmAsIGVycilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhlY3V0ZSJdfQ==