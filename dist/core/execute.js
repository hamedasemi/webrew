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

    (0, _webrewHelpersLog.debug)(data.category, data.command, data.options);
    require('./../' + data.category + '/' + data.command);
};

exports.default = Execute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2V4ZWN1dGUuanMiXSwibmFtZXMiOlsiRXhlY3V0ZSIsImRhdGEiLCJjYXRlZ29yeSIsImNvbW1hbmQiLCJvcHRpb25zIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztJQUVhQSxPLFdBQUFBLE8sR0FDVCxpQkFBWUMsSUFBWixFQUFpQjtBQUFBOztBQUNiLGlDQUFNQSxLQUFLQyxRQUFYLEVBQXFCRCxLQUFLRSxPQUExQixFQUFtQ0YsS0FBS0csT0FBeEM7QUFDQUMsc0JBQWdCSixLQUFLQyxRQUFyQixTQUFpQ0QsS0FBS0UsT0FBdEM7QUFDSCxDOztrQkFHVUgsTyIsImZpbGUiOiJleGVjdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBkZWJ1ZywgZXJyb3IsIGluZm8gfSBmcm9tICd3ZWJyZXctaGVscGVycy1sb2cnXG5cbmV4cG9ydCBjbGFzcyBFeGVjdXRlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKXtcbiAgICAgICAgZGVidWcoZGF0YS5jYXRlZ29yeSwgZGF0YS5jb21tYW5kLCBkYXRhLm9wdGlvbnMpXG4gICAgICAgIHJlcXVpcmUoYC4vLi4vJHtkYXRhLmNhdGVnb3J5fS8ke2RhdGEuY29tbWFuZH1gKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhlY3V0ZSJdfQ==