'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clean = clean;

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

var _config = require('./../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clean() {
    return (0, _del2.default)([_config2.default.dest]);
}

clean.description = 'clean dest folder recursively.';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FyY2hpdmUvZ3VscC9jbGVhbi5qcyJdLCJuYW1lcyI6WyJjbGVhbiIsImRlc3QiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFHZ0JBLEssR0FBQUEsSzs7QUFIaEI7Ozs7QUFDQTs7Ozs7O0FBRU8sU0FBU0EsS0FBVCxHQUFpQjtBQUNwQixXQUFPLG1CQUFJLENBQ1AsaUJBQU9DLElBREEsQ0FBSixDQUFQO0FBR0g7O0FBRURELE1BQU1FLFdBQU4iLCJmaWxlIjoiY2xlYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVsIGZyb20gJ2RlbCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vLi4vY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuKCkge1xuICAgIHJldHVybiBkZWwoW1xuICAgICAgICBjb25maWcuZGVzdFxuICAgIF0pO1xufVxuXG5jbGVhbi5kZXNjcmlwdGlvbiA9IGBjbGVhbiBkZXN0IGZvbGRlciByZWN1cnNpdmVseS5gOyJdfQ==