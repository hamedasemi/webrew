'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Execute = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _helpersLog = require('../modules/@webrew/helpers-log');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Execute = exports.Execute = function Execute(data) {
    (0, _classCallCheck3.default)(this, Execute);

    (0, _helpersLog.debug)(data.category, data.command, data.options);
    require('./../@webrew/' + data.category + '-' + data.command);
};

exports.default = Execute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvZXhlY3V0ZS5qcyJdLCJuYW1lcyI6WyJFeGVjdXRlIiwiZGF0YSIsImNhdGVnb3J5IiwiY29tbWFuZCIsIm9wdGlvbnMiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0lBRWFBLE8sV0FBQUEsTyxHQUNULGlCQUFZQyxJQUFaLEVBQWlCO0FBQUE7O0FBQ2IsMkJBQU1BLEtBQUtDLFFBQVgsRUFBcUJELEtBQUtFLE9BQTFCLEVBQW1DRixLQUFLRyxPQUF4QztBQUNBQyw4QkFBd0JKLEtBQUtDLFFBQTdCLFNBQXlDRCxLQUFLRSxPQUE5QztBQUNILEM7O2tCQUdVSCxPIiwiZmlsZSI6ImV4ZWN1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGRlYnVnLCBlcnJvciwgaW5mbyB9IGZyb20gJ34vbW9kdWxlcy9Ad2VicmV3L2hlbHBlcnMtbG9nJ1xuXG5leHBvcnQgY2xhc3MgRXhlY3V0ZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSl7XG4gICAgICAgIGRlYnVnKGRhdGEuY2F0ZWdvcnksIGRhdGEuY29tbWFuZCwgZGF0YS5vcHRpb25zKVxuICAgICAgICByZXF1aXJlKGAuLy4uL0B3ZWJyZXcvJHtkYXRhLmNhdGVnb3J5fS0ke2RhdGEuY29tbWFuZH1gKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhlY3V0ZSJdfQ==