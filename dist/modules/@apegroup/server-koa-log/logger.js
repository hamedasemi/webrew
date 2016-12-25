'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _chalk = require('chalk');

var _helpers = require('../../../shared/helpers');

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

                        (0, _helpers.debug)((0, _chalk.blue)('[' + ctx.method + ']'), (0, _chalk.magenta)('' + ctx.url), (0, _chalk.cyan)('- ' + ms + 'ms'));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvQGFwZWdyb3VwL3NlcnZlci1rb2EtbG9nL2xvZ2dlci5qcyJdLCJuYW1lcyI6WyJjdHgiLCJuZXh0Iiwic3RhcnQiLCJEYXRlIiwibXMiLCJtZXRob2QiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OzBFQUVlLGlCQUFPQSxHQUFQLEVBQVlDLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0xDLDZCQURLLEdBQ0csSUFBSUMsSUFBSixFQURIO0FBQUE7QUFBQSwrQkFFTEYsTUFGSzs7QUFBQTtBQUdMRywwQkFISyxHQUdBLElBQUlELElBQUosS0FBYUQsS0FIYjs7QUFJWCw0Q0FBTSx1QkFBU0YsSUFBSUssTUFBYixPQUFOLEVBQStCLHlCQUFXTCxJQUFJTSxHQUFmLENBQS9CLEVBQXNELHdCQUFVRixFQUFWLFFBQXREOztBQUpXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEsiLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmxhY2ssIHJlZCwgZ3JlZW4sIHllbGxvdywgYmx1ZSwgbWFnZW50YSwgY3lhbiwgd2hpdGUsIGdyYXkgfSBmcm9tICdjaGFsaydcbmltcG9ydCB7IERFQlVHLCBkZWJ1ZyB9IGZyb20gJ34vc2hhcmVkL2hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChjdHgsIG5leHQpID0+IHtcbiAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKClcbiAgICBhd2FpdCBuZXh0KClcbiAgICBjb25zdCBtcyA9IG5ldyBEYXRlKCkgLSBzdGFydFxuICAgIGRlYnVnKGJsdWUoYFske2N0eC5tZXRob2R9XWApLCBtYWdlbnRhKGAke2N0eC51cmx9YCksIGN5YW4oYC0gJHttc31tc2ApKVxufSJdfQ==