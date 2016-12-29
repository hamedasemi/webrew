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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvZXhlY3V0ZS5qcyJdLCJuYW1lcyI6WyJFeGVjdXRlIiwiZGF0YSIsInJlcXVpcmUiLCJncm91cCIsImNvbW1hbmQiLCJvcHRpb25zIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0lBRWFBLE8sV0FBQUEsTyxHQUNULGlCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsaURBQXNCQSxJQUF0QjtBQUNBLFFBQUk7QUFDQUMsMEJBQWdCRCxLQUFLRSxLQUFyQixTQUE4QkYsS0FBS0csT0FBbkM7QUFDQSwrQ0FBZ0JILEtBQUtFLEtBQXJCLGNBQXdDRixLQUFLRyxPQUE3QyxjQUFrRUgsS0FBS0ksT0FBdkU7QUFDSCxLQUhELENBSUEsT0FBT0MsR0FBUCxFQUFZO0FBQ1IsOERBQTRCTCxLQUFLRyxPQUFqQyx1QkFBd0RILEtBQUtFLEtBQTdEO0FBQ0Esd0RBQXlCRyxHQUF6QjtBQUNIO0FBQ0osQzs7a0JBR1VOLE8iLCJmaWxlIjoiZXhlY3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZGVidWcsIGVycm9yIH0gZnJvbSAnd2VicmV3LWhlbHBlcnMtbG9nJ1xuXG5leHBvcnQgY2xhc3MgRXhlY3V0ZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBkZWJ1ZyhgQ29uc3RydWN0ZWQ6YCwgZGF0YSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlcXVpcmUoYC4vLi4vJHtkYXRhLmdyb3VwfS8ke2RhdGEuY29tbWFuZH1gKVxuICAgICAgICAgICAgZGVidWcoYGdyb3VwOmAsIGRhdGEuZ3JvdXAsIGBjb21tYW5kOmAsIGRhdGEuY29tbWFuZCwgYG9wdGlvbnM6YCwgZGF0YS5vcHRpb25zKVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGVycm9yKGBNYWtlIHN1cmUgY29tbWFuZCAnJHtkYXRhLmNvbW1hbmR9JyBhbmQgZ3JvdXAgJyR7ZGF0YS5ncm91cH0nIGV4aXN0LmApXG4gICAgICAgICAgICBlcnJvcihgT3JpZ2luYWwgZXJyb3I6YCwgZXJyKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGVjdXRlIl19