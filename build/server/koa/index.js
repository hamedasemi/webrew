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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9rb2EvaW5kZXguanMiXSwibmFtZXMiOlsiV0QiLCJwcm9jZXNzIiwiZW52IiwiUFdEIiwiYXBwIiwiY3dkIiwidXNlIiwiY3R4IiwibmV4dCIsInN0YXJ0IiwiRGF0ZSIsIm1zIiwic2V0IiwiV1dXIiwiYm9keSIsInN0YXR1cyIsIm9uIiwiZXJyIiwiRXJyb3IiLCJjcmVhdGVTZXJ2ZXIiLCJjYWxsYmFjayIsImxpc3RlbiIsIlBPUlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7O0FBRUE7Ozs7O0FBS0EsSUFBTUEsS0FBS0MsUUFBUUMsR0FBUixDQUFZQyxHQUF2QjtBQUNBLElBQU1DLE1BQU0sbUJBQVo7QUFDQSxJQUFNQyxNQUFNSixRQUFRSSxHQUFSLEVBQVo7O0FBRUE7Ozs7O0FBS0FELElBQUlFLEdBQUo7QUFBQSwwRUFBUSxpQkFBT0MsR0FBUCxFQUFZQyxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQyw2QkFERixHQUNVLElBQUlDLElBQUosRUFEVjtBQUFBO0FBQUEsK0JBRUVGLE1BRkY7O0FBQUE7QUFHRUcsMEJBSEYsR0FHTyxJQUFJRCxJQUFKLEtBQWFELEtBSHBCOztBQUlKRiw0QkFBSUssR0FBSixvQkFBOEJELEVBQTlCOztBQUpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUUE7Ozs7O0FBS0FQLElBQUlFLEdBQUo7O0FBR0E7Ozs7O0FBS0FGLElBQUlFLEdBQUosQ0FBUSx5QkFBTSxDQUFDTCxRQUFRQyxHQUFSLENBQVlXLEdBQVosU0FBRCxPQUFOLENBQVI7QUFDQVQsSUFBSUUsR0FBSixDQUFRLGtDQUFSOztBQUdBOzs7OztBQUtBRixJQUFJRSxHQUFKLENBQVEsZUFBTztBQUNYQyxRQUFJSyxHQUFKO0FBQ0FMLFFBQUlPLElBQUosR0FBVywwQkFBaUIsQ0FBQ2IsUUFBUUMsR0FBUixDQUFZVyxHQUFaLFNBQUQsaUJBQWpCLENBQVg7QUFDQU4sUUFBSVEsTUFBSixHQUFhLEdBQWI7QUFDSCxDQUpEOztBQU9BOzs7OztBQUtBWCxJQUFJWSxFQUFKLFVBQWdCLFVBQUNDLEdBQUQsRUFBTVYsR0FBTixFQUFjO0FBQzFCLDZDQUFrQixJQUFJVyxLQUFKLENBQVVELEdBQVYsQ0FBbEI7QUFDSCxDQUZEOztBQUtBOzs7OztBQUtBLGVBQUtFLFlBQUwsQ0FBa0JmLElBQUlnQixRQUFKLEVBQWxCLEVBQWtDQyxNQUFsQyxDQUF5Q3BCLFFBQVFDLEdBQVIsQ0FBWW9CLElBQVosSUFBb0IsSUFBN0Q7O0FBR0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cCBmcm9tICdodHRwJ1xuaW1wb3J0IHsgY3JlYXRlUmVhZFN0cmVhbSwgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnXG5cbmltcG9ydCBLb2EgZnJvbSAna29hJ1xuaW1wb3J0IHNlcnZlIGZyb20gJ2tvYS1zdGF0aWMnXG5cbmltcG9ydCB7IGRlYnVnLCBlcnJvciB9IGZyb20gJ3dlYnJldy1oZWxwZXJzLWxvZydcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9rb2EtbG9nJ1xuXG4vKipcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogQ29tcG9uZW50c1xuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmNvbnN0IFdEID0gcHJvY2Vzcy5lbnYuUFdEXG5jb25zdCBhcHAgPSBuZXcgS29hKClcbmNvbnN0IGN3ZCA9IHByb2Nlc3MuY3dkKClcblxuLyoqXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qIHgtcmVzcG9uc2UtdGltZVxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmFwcC51c2UoYXN5bmMgKGN0eCwgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoKVxuICAgIGF3YWl0IG5leHQoKVxuICAgIGNvbnN0IG1zID0gbmV3IERhdGUoKSAtIHN0YXJ0XG4gICAgY3R4LnNldChgWC1SZXNwb25zZS1UaW1lYCwgYCR7bXN9bXNgKVxufSlcblxuXG4vKipcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogU2VydmVyIGxvZ2dlclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmFwcC51c2UobG9nZ2VyKVxuXG5cbi8qKlxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiBTdGF0aWMgU3RyZWFtIHNlcnZlclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmFwcC51c2Uoc2VydmUoKHByb2Nlc3MuZW52LldXVyB8fCBgd3d3YCkgKyBgL2ApKVxuYXBwLnVzZShzZXJ2ZShgY2xpZW50YCkpXG5cblxuLyoqXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qIE1vZCByZVdyaXRlXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuYXBwLnVzZShjdHggPT4ge1xuICAgIGN0eC5zZXQoYENvbnRlbnQtVHlwZWAsIGB0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThgKVxuICAgIGN0eC5ib2R5ID0gY3JlYXRlUmVhZFN0cmVhbSgocHJvY2Vzcy5lbnYuV1dXIHx8IGB3d3dgKSArIGAvaW5kZXguaHRtbGApXG4gICAgY3R4LnN0YXR1cyA9IDIwMFxufSlcblxuXG4vKipcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogRXJyb3JcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5hcHAub24oYGVycm9yYCwgKGVyciwgY3R4KSA9PiB7XG4gICAgZXJyb3IoYE9CUyEhICVzYCwgbmV3IEVycm9yKGVycikpXG59KVxuXG5cbi8qKlxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiBDcmVhdGUgU2VydmVyXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwLmNhbGxiYWNrKCkpLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JUIHx8IDgwODApXG5cblxuLyoqXG4gKiBUT0RPOiBgU2V0IFVzZXIgYWdlbnQgcGFyc2VkIHJlc3VsdCBhcyBoZWFkZXJgXG4gKiBUT0RPOiBgU2V0IGNvbmZpZyBhbmQgc21hbGwgc2V0dGluZ3MgYXMgaGVhZGVyYFxuICogVE9ETzogYEFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbmBcbiovIl19