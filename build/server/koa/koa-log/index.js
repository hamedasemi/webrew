'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _chalk = require('chalk');

var _webrewHelpersLog = require('webrew-helpers-log');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
        var start, ms;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        start = new Date();
                        _context.next = 3;
                        return next();

                    case 3:
                        ms = new Date() - start;

                        (0, _webrewHelpersLog.debug)((0, _chalk.blue)('[' + ctx.method + ']'), (0, _chalk.magenta)('' + ctx.url), (0, _chalk.cyan)('- ' + ms + 'ms'));

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIva29hL2tvYS1sb2cvaW5kZXguanMiXSwibmFtZXMiOlsiY3R4IiwibmV4dCIsInN0YXJ0IiwiRGF0ZSIsIm1zIiwibWV0aG9kIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7OzswRUFFZSxpQkFBT0EsR0FBUCxFQUFZQyxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNMQyw2QkFESyxHQUNHLElBQUlDLElBQUosRUFESDtBQUFBO0FBQUEsK0JBRUxGLE1BRks7O0FBQUE7QUFHTEcsMEJBSEssR0FHQSxJQUFJRCxJQUFKLEtBQWFELEtBSGI7O0FBSVgscURBQU0sdUJBQVNGLElBQUlLLE1BQWIsT0FBTixFQUErQix5QkFBV0wsSUFBSU0sR0FBZixDQUEvQixFQUFzRCx3QkFBVUYsRUFBVixRQUF0RDs7QUFKVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmxhY2ssIHJlZCwgZ3JlZW4sIHllbGxvdywgYmx1ZSwgbWFnZW50YSwgY3lhbiwgd2hpdGUsIGdyYXkgfSBmcm9tICdjaGFsaydcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnd2VicmV3LWhlbHBlcnMtbG9nJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoY3R4LCBuZXh0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSgpXG4gICAgYXdhaXQgbmV4dCgpXG4gICAgY29uc3QgbXMgPSBuZXcgRGF0ZSgpIC0gc3RhcnRcbiAgICBkZWJ1ZyhibHVlKGBbJHtjdHgubWV0aG9kfV1gKSwgbWFnZW50YShgJHtjdHgudXJsfWApLCBjeWFuKGAtICR7bXN9bXNgKSlcbn0iXX0=