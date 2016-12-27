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

    (0, _webrewHelpersLog.info)('category:', data.category, 'command:', data.command, 'options:', data.options);
    (0, _webrewHelpersLog.debug)(data.category, data.command, data.options);
    try {
        require('./../' + data.category + '/' + data.command);
    } catch (err) {
        (0, _webrewHelpersLog.error)('Make sure command \'' + data.command + '\' and category \'' + data.category + '\' exist.');
        (0, _webrewHelpersLog.error)('Original error:', err);
    }
};

exports.default = Execute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2V4ZWN1dGUuanMiXSwibmFtZXMiOlsiRXhlY3V0ZSIsImRhdGEiLCJjYXRlZ29yeSIsImNvbW1hbmQiLCJvcHRpb25zIiwicmVxdWlyZSIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztJQUVhQSxPLFdBQUFBLE8sR0FDVCxpQkFBWUMsSUFBWixFQUFpQjtBQUFBOztBQUNiLDZDQUFrQkEsS0FBS0MsUUFBdkIsY0FBOENELEtBQUtFLE9BQW5ELGNBQXdFRixLQUFLRyxPQUE3RTtBQUNBLGlDQUFNSCxLQUFLQyxRQUFYLEVBQXFCRCxLQUFLRSxPQUExQixFQUFtQ0YsS0FBS0csT0FBeEM7QUFDQSxRQUFJO0FBQ0FDLDBCQUFnQkosS0FBS0MsUUFBckIsU0FBaUNELEtBQUtFLE9BQXRDO0FBQ0gsS0FGRCxDQUdBLE9BQU1HLEdBQU4sRUFBVTtBQUNOLDhEQUE0QkwsS0FBS0UsT0FBakMsMEJBQTJERixLQUFLQyxRQUFoRTtBQUNBLHdEQUF5QkksR0FBekI7QUFDSDtBQUNKLEM7O2tCQUdVTixPIiwiZmlsZSI6ImV4ZWN1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGRlYnVnLCBlcnJvciwgaW5mbyB9IGZyb20gJ3dlYnJldy1oZWxwZXJzLWxvZydcblxuZXhwb3J0IGNsYXNzIEV4ZWN1dGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpe1xuICAgICAgICBpbmZvKGBjYXRlZ29yeTpgLCBkYXRhLmNhdGVnb3J5LCBgY29tbWFuZDpgLCAgZGF0YS5jb21tYW5kLCBgb3B0aW9uczpgLCBkYXRhLm9wdGlvbnMpXG4gICAgICAgIGRlYnVnKGRhdGEuY2F0ZWdvcnksIGRhdGEuY29tbWFuZCwgZGF0YS5vcHRpb25zKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVxdWlyZShgLi8uLi8ke2RhdGEuY2F0ZWdvcnl9LyR7ZGF0YS5jb21tYW5kfWApXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyKXtcbiAgICAgICAgICAgIGVycm9yKGBNYWtlIHN1cmUgY29tbWFuZCAnJHtkYXRhLmNvbW1hbmR9JyBhbmQgY2F0ZWdvcnkgJyR7ZGF0YS5jYXRlZ29yeX0nIGV4aXN0LmApXG4gICAgICAgICAgICBlcnJvcihgT3JpZ2luYWwgZXJyb3I6YCwgZXJyKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGVjdXRlIl19