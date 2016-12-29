'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _webrewHelpersLog = require('webrew-helpers-log');

var _koaLog = require('./koa-log');

var _koaLog2 = _interopRequireDefault(_koaLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* --------------------------------------------------
* Components
* --------------------------------------------------
*/
var WD = process.env.PWD;
var app = new _koa2.default();
var cwd = process.cwd();

/**
* --------------------------------------------------
* x-response-time
* --------------------------------------------------
*/
app.use(function () {
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

                        ctx.set('X-Response-Time', ms + 'ms');

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
}());

/**
* --------------------------------------------------
* Server logger
* --------------------------------------------------
*/
app.use(_koaLog2.default);

/**
* --------------------------------------------------
* Static Stream server
* --------------------------------------------------
*/
app.use((0, _koaStatic2.default)((process.env.WWW || 'www') + '/'));
app.use((0, _koaStatic2.default)('client'));

/**
* --------------------------------------------------
* Mod reWrite
* --------------------------------------------------
*/
app.use(function (ctx) {
    ctx.set('Content-Type', 'text/html; charset=utf-8');
    ctx.body = (0, _fs.createReadStream)((process.env.WWW || 'www') + '/index.html');
    ctx.status = 200;
});

/**
* --------------------------------------------------
* Error
* --------------------------------------------------
*/
app.on('error', function (err, ctx) {
    (0, _webrewHelpersLog.error)('OBS!! %s', new Error(err));
});

/**
* --------------------------------------------------
* Create Server
* --------------------------------------------------
*/
_http2.default.createServer(app.callback()).listen(process.env.PORT || 8080);

/**
 * TODO: `Set User agent parsed result as header`
 * TODO: `Set config and small settings as header`
 * TODO: `Access-Control-Allow-Origin`
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIva29hL2luZGV4LmpzIl0sIm5hbWVzIjpbIldEIiwicHJvY2VzcyIsImVudiIsIlBXRCIsImFwcCIsImN3ZCIsInVzZSIsImN0eCIsIm5leHQiLCJzdGFydCIsIkRhdGUiLCJtcyIsInNldCIsIldXVyIsImJvZHkiLCJzdGF0dXMiLCJvbiIsImVyciIsIkVycm9yIiwiY3JlYXRlU2VydmVyIiwiY2FsbGJhY2siLCJsaXN0ZW4iLCJQT1JUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtBLElBQU1BLEtBQUtDLFFBQVFDLEdBQVIsQ0FBWUMsR0FBdkI7QUFDQSxJQUFNQyxNQUFNLG1CQUFaO0FBQ0EsSUFBTUMsTUFBTUosUUFBUUksR0FBUixFQUFaOztBQUVBOzs7OztBQUtBRCxJQUFJRSxHQUFKO0FBQUEsMEVBQVEsaUJBQU9DLEdBQVAsRUFBWUMsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUMsNkJBREYsR0FDVSxJQUFJQyxJQUFKLEVBRFY7QUFBQTtBQUFBLCtCQUVFRixNQUZGOztBQUFBO0FBR0VHLDBCQUhGLEdBR08sSUFBSUQsSUFBSixLQUFhRCxLQUhwQjs7QUFJSkYsNEJBQUlLLEdBQUosb0JBQThCRCxFQUE5Qjs7QUFKSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFSOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFBOzs7OztBQUtBUCxJQUFJRSxHQUFKOztBQUdBOzs7OztBQUtBRixJQUFJRSxHQUFKLENBQVEseUJBQU0sQ0FBQ0wsUUFBUUMsR0FBUixDQUFZVyxHQUFaLFNBQUQsT0FBTixDQUFSO0FBQ0FULElBQUlFLEdBQUosQ0FBUSxrQ0FBUjs7QUFHQTs7Ozs7QUFLQUYsSUFBSUUsR0FBSixDQUFRLGVBQU87QUFDWEMsUUFBSUssR0FBSjtBQUNBTCxRQUFJTyxJQUFKLEdBQVcsMEJBQWlCLENBQUNiLFFBQVFDLEdBQVIsQ0FBWVcsR0FBWixTQUFELGlCQUFqQixDQUFYO0FBQ0FOLFFBQUlRLE1BQUosR0FBYSxHQUFiO0FBQ0gsQ0FKRDs7QUFPQTs7Ozs7QUFLQVgsSUFBSVksRUFBSixVQUFnQixVQUFDQyxHQUFELEVBQU1WLEdBQU4sRUFBYztBQUMxQiw2Q0FBa0IsSUFBSVcsS0FBSixDQUFVRCxHQUFWLENBQWxCO0FBQ0gsQ0FGRDs7QUFLQTs7Ozs7QUFLQSxlQUFLRSxZQUFMLENBQWtCZixJQUFJZ0IsUUFBSixFQUFsQixFQUFrQ0MsTUFBbEMsQ0FBeUNwQixRQUFRQyxHQUFSLENBQVlvQixJQUFaLElBQW9CLElBQTdEOztBQUdBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCdcbmltcG9ydCB7IGNyZWF0ZVJlYWRTdHJlYW0sIHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJ1xuXG5pbXBvcnQgS29hIGZyb20gJ2tvYSdcbmltcG9ydCBzZXJ2ZSBmcm9tICdrb2Etc3RhdGljJ1xuXG5pbXBvcnQgeyBkZWJ1ZywgZXJyb3IgfSBmcm9tICd3ZWJyZXctaGVscGVycy1sb2cnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4va29hLWxvZydcblxuLyoqXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qIENvbXBvbmVudHNcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5jb25zdCBXRCA9IHByb2Nlc3MuZW52LlBXRFxuY29uc3QgYXBwID0gbmV3IEtvYSgpXG5jb25zdCBjd2QgPSBwcm9jZXNzLmN3ZCgpXG5cbi8qKlxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiB4LXJlc3BvbnNlLXRpbWVcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5hcHAudXNlKGFzeW5jIChjdHgsIG5leHQpID0+IHtcbiAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKClcbiAgICBhd2FpdCBuZXh0KClcbiAgICBjb25zdCBtcyA9IG5ldyBEYXRlKCkgLSBzdGFydFxuICAgIGN0eC5zZXQoYFgtUmVzcG9uc2UtVGltZWAsIGAke21zfW1zYClcbn0pXG5cblxuLyoqXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qIFNlcnZlciBsb2dnZXJcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5hcHAudXNlKGxvZ2dlcilcblxuXG4vKipcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogU3RhdGljIFN0cmVhbSBzZXJ2ZXJcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5hcHAudXNlKHNlcnZlKChwcm9jZXNzLmVudi5XV1cgfHwgYHd3d2ApICsgYC9gKSlcbmFwcC51c2Uoc2VydmUoYGNsaWVudGApKVxuXG5cbi8qKlxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiBNb2QgcmVXcml0ZVxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmFwcC51c2UoY3R4ID0+IHtcbiAgICBjdHguc2V0KGBDb250ZW50LVR5cGVgLCBgdGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04YClcbiAgICBjdHguYm9keSA9IGNyZWF0ZVJlYWRTdHJlYW0oKHByb2Nlc3MuZW52LldXVyB8fCBgd3d3YCkgKyBgL2luZGV4Lmh0bWxgKVxuICAgIGN0eC5zdGF0dXMgPSAyMDBcbn0pXG5cblxuLyoqXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qIEVycm9yXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuYXBwLm9uKGBlcnJvcmAsIChlcnIsIGN0eCkgPT4ge1xuICAgIGVycm9yKGBPQlMhISAlc2AsIG5ldyBFcnJvcihlcnIpKVxufSlcblxuXG4vKipcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogQ3JlYXRlIFNlcnZlclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmh0dHAuY3JlYXRlU2VydmVyKGFwcC5jYWxsYmFjaygpKS5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwKVxuXG5cbi8qKlxuICogVE9ETzogYFNldCBVc2VyIGFnZW50IHBhcnNlZCByZXN1bHQgYXMgaGVhZGVyYFxuICogVE9ETzogYFNldCBjb25maWcgYW5kIHNtYWxsIHNldHRpbmdzIGFzIGhlYWRlcmBcbiAqIFRPRE86IGBBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5gXG4qLyJdfQ==