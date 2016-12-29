'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Execute = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _webrewHelpersLog = require('webrew-helpers-log');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Execute = exports.Execute = function Execute(data) {
    (0, _classCallCheck3.default)(this, Execute);

    (0, _webrewHelpersLog.debug)('Constructed:', data);
    try {
        require('./../' + data.group + '/' + data.command);
        (0, _webrewHelpersLog.debug)('group:', data.group, 'command:', data.command, 'options:', data.options);
    } catch (err) {
        (0, _webrewHelpersLog.error)('Make sure command \'' + data.command + '\' and group \'' + data.group + '\' exist.');
        (0, _webrewHelpersLog.error)('Original error:', err);
    }
};

exports.default = Execute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2V4ZWN1dGUuanMiXSwibmFtZXMiOlsiRXhlY3V0ZSIsImRhdGEiLCJyZXF1aXJlIiwiZ3JvdXAiLCJjb21tYW5kIiwib3B0aW9ucyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztJQUVhQSxPLFdBQUFBLE8sR0FDVCxpQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNkLGlEQUFzQkEsSUFBdEI7QUFDQSxRQUFJO0FBQ0FDLDBCQUFnQkQsS0FBS0UsS0FBckIsU0FBOEJGLEtBQUtHLE9BQW5DO0FBQ0EsK0NBQWdCSCxLQUFLRSxLQUFyQixjQUF3Q0YsS0FBS0csT0FBN0MsY0FBa0VILEtBQUtJLE9BQXZFO0FBQ0gsS0FIRCxDQUlBLE9BQU9DLEdBQVAsRUFBWTtBQUNSLDhEQUE0QkwsS0FBS0csT0FBakMsdUJBQXdESCxLQUFLRSxLQUE3RDtBQUNBLHdEQUF5QkcsR0FBekI7QUFDSDtBQUNKLEM7O2tCQUdVTixPIiwiZmlsZSI6ImV4ZWN1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGRlYnVnLCBlcnJvciB9IGZyb20gJ3dlYnJldy1oZWxwZXJzLWxvZydcblxuZXhwb3J0IGNsYXNzIEV4ZWN1dGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZGVidWcoYENvbnN0cnVjdGVkOmAsIGRhdGEpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXF1aXJlKGAuLy4uLyR7ZGF0YS5ncm91cH0vJHtkYXRhLmNvbW1hbmR9YClcbiAgICAgICAgICAgIGRlYnVnKGBncm91cDpgLCBkYXRhLmdyb3VwLCBgY29tbWFuZDpgLCBkYXRhLmNvbW1hbmQsIGBvcHRpb25zOmAsIGRhdGEub3B0aW9ucylcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBlcnJvcihgTWFrZSBzdXJlIGNvbW1hbmQgJyR7ZGF0YS5jb21tYW5kfScgYW5kIGdyb3VwICcke2RhdGEuZ3JvdXB9JyBleGlzdC5gKVxuICAgICAgICAgICAgZXJyb3IoYE9yaWdpbmFsIGVycm9yOmAsIGVycilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhlY3V0ZSJdfQ==