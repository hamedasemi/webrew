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
        // require(`./../${data.category}/${data.command}`)
        (0, _webrewHelpersLog.debug)('category:', data.category, 'command:', data.command, 'options:', data.options);
    } catch (err) {
        (0, _webrewHelpersLog.error)('Make sure command \'' + data.command + '\' and category \'' + data.category + '\' exist.');
        (0, _webrewHelpersLog.error)('Original error:', err);
    }
};

exports.default = Execute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2V4ZWN1dGUuanMiXSwibmFtZXMiOlsiRXhlY3V0ZSIsImRhdGEiLCJjYXRlZ29yeSIsImNvbW1hbmQiLCJvcHRpb25zIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0lBRWFBLE8sV0FBQUEsTyxHQUNULGlCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsaURBQXNCQSxJQUF0QjtBQUNBLFFBQUk7QUFDQTtBQUNBLGtEQUFtQkEsS0FBS0MsUUFBeEIsY0FBOENELEtBQUtFLE9BQW5ELGNBQXdFRixLQUFLRyxPQUE3RTtBQUNILEtBSEQsQ0FJQSxPQUFPQyxHQUFQLEVBQVk7QUFDUiw4REFBNEJKLEtBQUtFLE9BQWpDLDBCQUEyREYsS0FBS0MsUUFBaEU7QUFDQSx3REFBeUJHLEdBQXpCO0FBQ0g7QUFDSixDOztrQkFHVUwsTyIsImZpbGUiOiJleGVjdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBkZWJ1ZywgZXJyb3IgfSBmcm9tICd3ZWJyZXctaGVscGVycy1sb2cnXG5cbmV4cG9ydCBjbGFzcyBFeGVjdXRlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGRlYnVnKGBDb25zdHJ1Y3RlZDpgLCBkYXRhKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gcmVxdWlyZShgLi8uLi8ke2RhdGEuY2F0ZWdvcnl9LyR7ZGF0YS5jb21tYW5kfWApXG4gICAgICAgICAgICBkZWJ1ZyhgY2F0ZWdvcnk6YCwgZGF0YS5jYXRlZ29yeSwgYGNvbW1hbmQ6YCwgZGF0YS5jb21tYW5kLCBgb3B0aW9uczpgLCBkYXRhLm9wdGlvbnMpXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgZXJyb3IoYE1ha2Ugc3VyZSBjb21tYW5kICcke2RhdGEuY29tbWFuZH0nIGFuZCBjYXRlZ29yeSAnJHtkYXRhLmNhdGVnb3J5fScgZXhpc3QuYClcbiAgICAgICAgICAgIGVycm9yKGBPcmlnaW5hbCBlcnJvcjpgLCBlcnIpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4ZWN1dGUiXX0=