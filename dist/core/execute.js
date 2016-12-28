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
        require('./../' + data.category + '/' + data.command);
    } catch (err) {
        (0, _webrewHelpersLog.error)('Make sure command \'' + data.command + '\' and category \'' + data.category + '\' exist.');
        (0, _webrewHelpersLog.error)('Original error:', err);
    }
};

exports.default = Execute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2V4ZWN1dGUuanMiXSwibmFtZXMiOlsiRXhlY3V0ZSIsImRhdGEiLCJyZXF1aXJlIiwiY2F0ZWdvcnkiLCJjb21tYW5kIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0lBRWFBLE8sV0FBQUEsTyxHQUNULGlCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsaURBQXNCQSxJQUF0QjtBQUNBLFFBQUk7QUFDQUMsMEJBQWdCRCxLQUFLRSxRQUFyQixTQUFpQ0YsS0FBS0csT0FBdEM7QUFDSCxLQUZELENBR0EsT0FBT0MsR0FBUCxFQUFZO0FBQ1IsOERBQTRCSixLQUFLRyxPQUFqQywwQkFBMkRILEtBQUtFLFFBQWhFO0FBQ0Esd0RBQXlCRSxHQUF6QjtBQUNIO0FBQ0osQzs7a0JBR1VMLE8iLCJmaWxlIjoiZXhlY3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZGVidWcsIGVycm9yIH0gZnJvbSAnd2VicmV3LWhlbHBlcnMtbG9nJ1xuaW1wb3J0IHsgc3Bhd24gfSBmcm9tICdjcm9zcy1zcGF3bidcblxuZXhwb3J0IGNsYXNzIEV4ZWN1dGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZGVidWcoYENvbnN0cnVjdGVkOmAsIGRhdGEpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXF1aXJlKGAuLy4uLyR7ZGF0YS5jYXRlZ29yeX0vJHtkYXRhLmNvbW1hbmR9YClcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBlcnJvcihgTWFrZSBzdXJlIGNvbW1hbmQgJyR7ZGF0YS5jb21tYW5kfScgYW5kIGNhdGVnb3J5ICcke2RhdGEuY2F0ZWdvcnl9JyBleGlzdC5gKVxuICAgICAgICAgICAgZXJyb3IoYE9yaWdpbmFsIGVycm9yOmAsIGVycilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhlY3V0ZSJdfQ==