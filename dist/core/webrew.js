'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _webrewHelpersLog = require('webrew-helpers-log');

var _execute = require('./execute');

var _execute2 = _interopRequireDefault(_execute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processArgumentsList = process.argv;
var processArgumentsString = (0, _stringify2.default)(process.argv);

(0, _webrewHelpersLog.debug)('Raw process argv:', processArgumentsString);

// Extract input list out of process arguments
var inputList = processArgumentsList.filter(function (input) {
    return !input.search(/[A-Z,a-z,-]/ig);
});

// Extract commands out of input list
var commandsList = inputList.filter(function (input) {
    return input.search(/(--|-)/g);
});

// Extract options out of input list
var optionsList = inputList.filter(function (input) {
    return !input.search(/(--|-)/g);
});

var category = commandsList[0] || 'default';
var command = commandsList[1] || 'default';

(0, _webrewHelpersLog.debug)('Extracted commands list:', commandsList);
(0, _webrewHelpersLog.debug)('Extracted options list:', optionsList);
(0, _webrewHelpersLog.info)('Category:', category, 'Command:', command, __filename);

var execute = new _execute2.default({
    category: category,
    command: command,
    options: optionsList
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3dlYnJldy5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzQXJndW1lbnRzTGlzdCIsInByb2Nlc3MiLCJhcmd2IiwicHJvY2Vzc0FyZ3VtZW50c1N0cmluZyIsImlucHV0TGlzdCIsImZpbHRlciIsImlucHV0Iiwic2VhcmNoIiwiY29tbWFuZHNMaXN0Iiwib3B0aW9uc0xpc3QiLCJjYXRlZ29yeSIsImNvbW1hbmQiLCJfX2ZpbGVuYW1lIiwiZXhlY3V0ZSIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBOzs7Ozs7QUFFQSxJQUFJQSx1QkFBdUJDLFFBQVFDLElBQW5DO0FBQ0EsSUFBSUMseUJBQXlCLHlCQUFlRixRQUFRQyxJQUF2QixDQUE3Qjs7QUFFQSxrREFBMkJDLHNCQUEzQjs7QUFFQTtBQUNBLElBQUlDLFlBQVlKLHFCQUFxQkssTUFBckIsQ0FBNEIsVUFBQ0MsS0FBRCxFQUFXO0FBQ25ELFdBQU8sQ0FBQ0EsTUFBTUMsTUFBTixDQUFhLGVBQWIsQ0FBUjtBQUNILENBRmUsQ0FBaEI7O0FBSUE7QUFDQSxJQUFJQyxlQUFlSixVQUFVQyxNQUFWLENBQWlCLFVBQUNDLEtBQUQsRUFBVztBQUMzQyxXQUFPQSxNQUFNQyxNQUFOLENBQWEsU0FBYixDQUFQO0FBQ0gsQ0FGa0IsQ0FBbkI7O0FBSUE7QUFDQSxJQUFJRSxjQUFjTCxVQUFVQyxNQUFWLENBQWlCLFVBQUNDLEtBQUQsRUFBVztBQUMxQyxXQUFPLENBQUNBLE1BQU1DLE1BQU4sQ0FBYSxTQUFiLENBQVI7QUFDSCxDQUZpQixDQUFsQjs7QUFLQSxJQUFJRyxXQUFXRixhQUFhLENBQWIsY0FBZjtBQUNBLElBQUlHLFVBQVVILGFBQWEsQ0FBYixjQUFkOztBQUVBLHlEQUFrQ0EsWUFBbEM7QUFDQSx3REFBaUNDLFdBQWpDO0FBQ0EseUNBQWtCQyxRQUFsQixjQUF3Q0MsT0FBeEMsRUFBaURDLFVBQWpEOztBQUdBLElBQUlDLFVBQVUsc0JBQVk7QUFDdEJILGNBQVVBLFFBRFk7QUFFdEJDLGFBQVNBLE9BRmE7QUFHdEJHLGFBQVNMO0FBSGEsQ0FBWixDQUFkIiwiZmlsZSI6IndlYnJldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlYnVnLCBpbmZvIH0gZnJvbSAnd2VicmV3LWhlbHBlcnMtbG9nJ1xuXG5pbXBvcnQgRXhlY3V0ZSBmcm9tICcuL2V4ZWN1dGUnXG5cbmxldCBwcm9jZXNzQXJndW1lbnRzTGlzdCA9IHByb2Nlc3MuYXJndlxubGV0IHByb2Nlc3NBcmd1bWVudHNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmFyZ3YpXG5cbmRlYnVnKGBSYXcgcHJvY2VzcyBhcmd2OmAsIHByb2Nlc3NBcmd1bWVudHNTdHJpbmcpXG5cbi8vIEV4dHJhY3QgaW5wdXQgbGlzdCBvdXQgb2YgcHJvY2VzcyBhcmd1bWVudHNcbmxldCBpbnB1dExpc3QgPSBwcm9jZXNzQXJndW1lbnRzTGlzdC5maWx0ZXIoKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuICFpbnB1dC5zZWFyY2goL1tBLVosYS16LC1dL2lnKVxufSlcblxuLy8gRXh0cmFjdCBjb21tYW5kcyBvdXQgb2YgaW5wdXQgbGlzdFxubGV0IGNvbW1hbmRzTGlzdCA9IGlucHV0TGlzdC5maWx0ZXIoKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIGlucHV0LnNlYXJjaCgvKC0tfC0pL2cpXG59KVxuXG4vLyBFeHRyYWN0IG9wdGlvbnMgb3V0IG9mIGlucHV0IGxpc3RcbmxldCBvcHRpb25zTGlzdCA9IGlucHV0TGlzdC5maWx0ZXIoKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuICFpbnB1dC5zZWFyY2goLygtLXwtKS9nKVxufSlcblxuXG5sZXQgY2F0ZWdvcnkgPSBjb21tYW5kc0xpc3RbMF0gfHwgYGRlZmF1bHRgXG5sZXQgY29tbWFuZCA9IGNvbW1hbmRzTGlzdFsxXSB8fCBgZGVmYXVsdGBcblxuZGVidWcoYEV4dHJhY3RlZCBjb21tYW5kcyBsaXN0OmAsIGNvbW1hbmRzTGlzdClcbmRlYnVnKGBFeHRyYWN0ZWQgb3B0aW9ucyBsaXN0OmAsIG9wdGlvbnNMaXN0KVxuaW5mbyhgQ2F0ZWdvcnk6YCwgY2F0ZWdvcnksIGBDb21tYW5kOmAsIGNvbW1hbmQsIF9fZmlsZW5hbWUpXG5cblxubGV0IGV4ZWN1dGUgPSBuZXcgRXhlY3V0ZSh7XG4gICAgY2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgIGNvbW1hbmQ6IGNvbW1hbmQsXG4gICAgb3B0aW9uczogb3B0aW9uc0xpc3Rcbn0pIl19