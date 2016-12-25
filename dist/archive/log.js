'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.error = exports.warn = exports.info = exports.debug = undefined;
var _arguments = arguments;

var _env = require('../shared/helpers/env');

var _chalk = require('chalk');

var debug = exports.debug = function debug() {
    var date = new Date().toTimeString('HH:mm:ss').replace(/\ .+/, '');
    var args = [].slice.call(_arguments);
    args.unshift('[' + (0, _chalk.dim)(date) + '] [' + (0, _chalk.magenta)('DEBUG') + ']');
    _env.DEBUG && console.log.apply(console, args);
};

var info = exports.info = function info() {
    var date = new Date().toTimeString('HH:mm:ss').replace(/\ .+/, '');
    var args = [].slice.call(_arguments);
    args.unshift('[' + (0, _chalk.dim)(date) + '] [' + (0, _chalk.cyan)('INFO') + ']');
    console.log.apply(console, args);
};

var warn = exports.warn = function warn() {
    var date = new Date().toTimeString('HH:mm:ss').replace(/\ .+/, '');
    var args = [].slice.call(_arguments);
    args.unshift('[' + (0, _chalk.dim)(date) + '] [' + (0, _chalk.yellow)('WARN') + ']');
    console.log.apply(console, args);
};

var error = exports.error = function error() {
    var date = new Date().toTimeString('HH:mm:ss').replace(/\ .+/, '');
    var args = [].slice.call(_arguments);
    args.unshift('[' + (0, _chalk.dim)(date) + '] [' + (0, _chalk.red)('ERROR') + ']');
    console.log.apply(console, args);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FyY2hpdmUvbG9nLmpzIl0sIm5hbWVzIjpbImRlYnVnIiwiZGF0ZSIsIkRhdGUiLCJ0b1RpbWVTdHJpbmciLCJyZXBsYWNlIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsInVuc2hpZnQiLCJjb25zb2xlIiwibG9nIiwiYXBwbHkiLCJpbmZvIiwid2FybiIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOztBQUVPLElBQU1BLHdCQUFRLFNBQVJBLEtBQVEsR0FBTTtBQUN2QixRQUFJQyxPQUFPLElBQUlDLElBQUosR0FBV0MsWUFBWCxhQUFvQ0MsT0FBcEMsQ0FBNEMsTUFBNUMsS0FBWDtBQUNBLFFBQUlDLE9BQU8sR0FBR0MsS0FBSCxDQUFTQyxJQUFULFlBQVg7QUFDQUYsU0FBS0csT0FBTCxPQUFpQixnQkFBSVAsSUFBSixDQUFqQixXQUFnQyw0QkFBaEM7QUFDQSxrQkFBU1EsUUFBUUMsR0FBUixDQUFZQyxLQUFaLENBQWtCRixPQUFsQixFQUEyQkosSUFBM0IsQ0FBVDtBQUNILENBTE07O0FBT0EsSUFBTU8sc0JBQU8sU0FBUEEsSUFBTyxHQUFNO0FBQ3RCLFFBQUlYLE9BQU8sSUFBSUMsSUFBSixHQUFXQyxZQUFYLGFBQW9DQyxPQUFwQyxDQUE0QyxNQUE1QyxLQUFYO0FBQ0EsUUFBSUMsT0FBTyxHQUFHQyxLQUFILENBQVNDLElBQVQsWUFBWDtBQUNBRixTQUFLRyxPQUFMLE9BQWlCLGdCQUFJUCxJQUFKLENBQWpCLFdBQWdDLHdCQUFoQztBQUNBUSxZQUFRQyxHQUFSLENBQVlDLEtBQVosQ0FBa0JGLE9BQWxCLEVBQTJCSixJQUEzQjtBQUNILENBTE07O0FBT0EsSUFBTVEsc0JBQU8sU0FBUEEsSUFBTyxHQUFNO0FBQ3RCLFFBQUlaLE9BQU8sSUFBSUMsSUFBSixHQUFXQyxZQUFYLGFBQW9DQyxPQUFwQyxDQUE0QyxNQUE1QyxLQUFYO0FBQ0EsUUFBSUMsT0FBTyxHQUFHQyxLQUFILENBQVNDLElBQVQsWUFBWDtBQUNBRixTQUFLRyxPQUFMLE9BQWlCLGdCQUFJUCxJQUFKLENBQWpCLFdBQWdDLDBCQUFoQztBQUNBUSxZQUFRQyxHQUFSLENBQVlDLEtBQVosQ0FBa0JGLE9BQWxCLEVBQTJCSixJQUEzQjtBQUNILENBTE07O0FBT0EsSUFBTVMsd0JBQVEsU0FBUkEsS0FBUSxHQUFNO0FBQ3ZCLFFBQUliLE9BQU8sSUFBSUMsSUFBSixHQUFXQyxZQUFYLGFBQW9DQyxPQUFwQyxDQUE0QyxNQUE1QyxLQUFYO0FBQ0EsUUFBSUMsT0FBTyxHQUFHQyxLQUFILENBQVNDLElBQVQsWUFBWDtBQUNBRixTQUFLRyxPQUFMLE9BQWlCLGdCQUFJUCxJQUFKLENBQWpCLFdBQWdDLHdCQUFoQztBQUNBUSxZQUFRQyxHQUFSLENBQVlDLEtBQVosQ0FBa0JGLE9BQWxCLEVBQTJCSixJQUEzQjtBQUNILENBTE0iLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgREVCVUcgfSBmcm9tICd+L3NoYXJlZC9oZWxwZXJzL2VudidcbmltcG9ydCB7IGN5YW4sIG1hZ2VudGEsIGRpbSwgeWVsbG93LCByZWQgfSBmcm9tICdjaGFsaydcblxuZXhwb3J0IGNvbnN0IGRlYnVnID0gKCkgPT4ge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKS50b1RpbWVTdHJpbmcoYEhIOm1tOnNzYCkucmVwbGFjZSgvXFwgLisvLCBgYClcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgIGFyZ3MudW5zaGlmdChgWyR7ZGltKGRhdGUpfV0gWyR7bWFnZW50YShgREVCVUdgKX1dYClcbiAgICBERUJVRyAmJiBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKVxufVxuXG5leHBvcnQgY29uc3QgaW5mbyA9ICgpID0+IHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCkudG9UaW1lU3RyaW5nKGBISDptbTpzc2ApLnJlcGxhY2UoL1xcIC4rLywgYGApXG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICBhcmdzLnVuc2hpZnQoYFske2RpbShkYXRlKX1dIFske2N5YW4oYElORk9gKX1dYClcbiAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKVxufVxuXG5leHBvcnQgY29uc3Qgd2FybiA9ICgpID0+IHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCkudG9UaW1lU3RyaW5nKGBISDptbTpzc2ApLnJlcGxhY2UoL1xcIC4rLywgYGApXG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICBhcmdzLnVuc2hpZnQoYFske2RpbShkYXRlKX1dIFske3llbGxvdyhgV0FSTmApfV1gKVxuICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpXG59XG5cbmV4cG9ydCBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCkudG9UaW1lU3RyaW5nKGBISDptbTpzc2ApLnJlcGxhY2UoL1xcIC4rLywgYGApXG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICBhcmdzLnVuc2hpZnQoYFske2RpbShkYXRlKX1dIFske3JlZChgRVJST1JgKX1dYClcbiAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKVxufSJdfQ==