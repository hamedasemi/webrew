'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KoaServer = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _helpers = require('../../../shared/helpers');

var _logger = require('../../apegroup/server/koa/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KoaServer = exports.KoaServer = function KoaServer(data) {
    (0, _classCallCheck3.default)(this, KoaServer);

    (0, _helpers.debug)(data.name);
};

exports.default = KoaServer;

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
app.use(_logger2.default);

/**
* --------------------------------------------------
* Static Stream server
* --------------------------------------------------
*/
app.use((0, _koaStatic2.default)((process.env.WWW || 'www') + '/'));

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
    (0, _helpers.error)('OBS!! %s', new Error(err));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvQGFwZWdyb3VwL3NlcnZlci1rb2EvaW5kZXguanMiXSwibmFtZXMiOlsiS29hU2VydmVyIiwiZGF0YSIsIm5hbWUiLCJXRCIsInByb2Nlc3MiLCJlbnYiLCJQV0QiLCJhcHAiLCJjd2QiLCJ1c2UiLCJjdHgiLCJuZXh0Iiwic3RhcnQiLCJEYXRlIiwibXMiLCJzZXQiLCJXV1ciLCJib2R5Iiwic3RhdHVzIiwib24iLCJlcnIiLCJFcnJvciIsImNyZWF0ZVNlcnZlciIsImNhbGxiYWNrIiwibGlzdGVuIiwiUE9SVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7SUFFYUEsUyxXQUFBQSxTLEdBQ1QsbUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDZCx3QkFBTUEsS0FBS0MsSUFBWDtBQUNILEM7O2tCQUdVRixTOztBQUVmOzs7Ozs7QUFLQSxJQUFNRyxLQUFLQyxRQUFRQyxHQUFSLENBQVlDLEdBQXZCO0FBQ0EsSUFBTUMsTUFBTSxtQkFBWjtBQUNBLElBQU1DLE1BQU1KLFFBQVFJLEdBQVIsRUFBWjs7QUFFQTs7Ozs7QUFLQUQsSUFBSUUsR0FBSjtBQUFBLDBFQUFRLGlCQUFPQyxHQUFQLEVBQVlDLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VDLDZCQURGLEdBQ1UsSUFBSUMsSUFBSixFQURWO0FBQUE7QUFBQSwrQkFFRUYsTUFGRjs7QUFBQTtBQUdFRywwQkFIRixHQUdPLElBQUlELElBQUosS0FBYUQsS0FIcEI7O0FBSUpGLDRCQUFJSyxHQUFKLG9CQUE4QkQsRUFBOUI7O0FBSkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQTs7Ozs7QUFLQVAsSUFBSUUsR0FBSjs7QUFHQTs7Ozs7QUFLQUYsSUFBSUUsR0FBSixDQUFRLHlCQUFNLENBQUNMLFFBQVFDLEdBQVIsQ0FBWVcsR0FBWixTQUFELE9BQU4sQ0FBUjs7QUFHQTs7Ozs7QUFLQVQsSUFBSUUsR0FBSixDQUFRLGVBQU87QUFDWEMsUUFBSUssR0FBSjtBQUNBTCxRQUFJTyxJQUFKLEdBQVcsMEJBQWlCLENBQUNiLFFBQVFDLEdBQVIsQ0FBWVcsR0FBWixTQUFELGlCQUFqQixDQUFYO0FBQ0FOLFFBQUlRLE1BQUosR0FBYSxHQUFiO0FBQ0gsQ0FKRDs7QUFPQTs7Ozs7QUFLQVgsSUFBSVksRUFBSixVQUFnQixVQUFDQyxHQUFELEVBQU1WLEdBQU4sRUFBYztBQUMxQixvQ0FBa0IsSUFBSVcsS0FBSixDQUFVRCxHQUFWLENBQWxCO0FBQ0gsQ0FGRDs7QUFLQTs7Ozs7QUFLQSxlQUFLRSxZQUFMLENBQWtCZixJQUFJZ0IsUUFBSixFQUFsQixFQUFrQ0MsTUFBbEMsQ0FBeUNwQixRQUFRQyxHQUFSLENBQVlvQixJQUFaLElBQW9CLElBQTdEOztBQUdBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCdcbmltcG9ydCB7IGNyZWF0ZVJlYWRTdHJlYW0sIHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJ1xuXG5pbXBvcnQgS29hIGZyb20gJ2tvYSdcbmltcG9ydCBzZXJ2ZSBmcm9tICdrb2Etc3RhdGljJ1xuXG5pbXBvcnQgeyBERUJVRywgZGVidWcsIGVycm9yIH0gZnJvbSAnfi9zaGFyZWQvaGVscGVycydcbmltcG9ydCBsb2dnZXIgZnJvbSAnfi9tb2R1bGVzL2FwZWdyb3VwL3NlcnZlci9rb2EvbG9nZ2VyJ1xuXG5leHBvcnQgY2xhc3MgS29hU2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGRlYnVnKGRhdGEubmFtZSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtvYVNlcnZlclxuXG4vKipcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogQ29tcG9uZW50c1xuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmNvbnN0IFdEID0gcHJvY2Vzcy5lbnYuUFdEXG5jb25zdCBhcHAgPSBuZXcgS29hKClcbmNvbnN0IGN3ZCA9IHByb2Nlc3MuY3dkKClcblxuLyoqXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qIHgtcmVzcG9uc2UtdGltZVxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmFwcC51c2UoYXN5bmMgKGN0eCwgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoKVxuICAgIGF3YWl0IG5leHQoKVxuICAgIGNvbnN0IG1zID0gbmV3IERhdGUoKSAtIHN0YXJ0XG4gICAgY3R4LnNldChgWC1SZXNwb25zZS1UaW1lYCwgYCR7bXN9bXNgKVxufSlcblxuXG4vKipcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogU2VydmVyIGxvZ2dlclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmFwcC51c2UobG9nZ2VyKVxuXG5cbi8qKlxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiBTdGF0aWMgU3RyZWFtIHNlcnZlclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmFwcC51c2Uoc2VydmUoKHByb2Nlc3MuZW52LldXVyB8fCBgd3d3YCkgKyBgL2ApKVxuXG5cbi8qKlxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiBNb2QgcmVXcml0ZVxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmFwcC51c2UoY3R4ID0+IHtcbiAgICBjdHguc2V0KGBDb250ZW50LVR5cGVgLCBgdGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04YClcbiAgICBjdHguYm9keSA9IGNyZWF0ZVJlYWRTdHJlYW0oKHByb2Nlc3MuZW52LldXVyB8fCBgd3d3YCkgKyBgL2luZGV4Lmh0bWxgKVxuICAgIGN0eC5zdGF0dXMgPSAyMDBcbn0pXG5cblxuLyoqXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qIEVycm9yXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuYXBwLm9uKGBlcnJvcmAsIChlcnIsIGN0eCkgPT4ge1xuICAgIGVycm9yKGBPQlMhISAlc2AsIG5ldyBFcnJvcihlcnIpKVxufSlcblxuXG4vKipcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogQ3JlYXRlIFNlcnZlclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmh0dHAuY3JlYXRlU2VydmVyKGFwcC5jYWxsYmFjaygpKS5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwKVxuXG5cbi8qKlxuICogVE9ETzogYFNldCBVc2VyIGFnZW50IHBhcnNlZCByZXN1bHQgYXMgaGVhZGVyYFxuICogVE9ETzogYFNldCBjb25maWcgYW5kIHNtYWxsIHNldHRpbmdzIGFzIGhlYWRlcmBcbiAqIFRPRE86IGBBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5gXG4qLyJdfQ==