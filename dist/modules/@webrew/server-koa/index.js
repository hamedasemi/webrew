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

var _logger = require('../../webrew/server/koa/logger');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvQHdlYnJldy9zZXJ2ZXIta29hL2luZGV4LmpzIl0sIm5hbWVzIjpbIktvYVNlcnZlciIsImRhdGEiLCJuYW1lIiwiV0QiLCJwcm9jZXNzIiwiZW52IiwiUFdEIiwiYXBwIiwiY3dkIiwidXNlIiwiY3R4IiwibmV4dCIsInN0YXJ0IiwiRGF0ZSIsIm1zIiwic2V0IiwiV1dXIiwiYm9keSIsInN0YXR1cyIsIm9uIiwiZXJyIiwiRXJyb3IiLCJjcmVhdGVTZXJ2ZXIiLCJjYWxsYmFjayIsImxpc3RlbiIsIlBPUlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7O0lBRWFBLFMsV0FBQUEsUyxHQUNULG1CQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2Qsd0JBQU1BLEtBQUtDLElBQVg7QUFDSCxDOztrQkFHVUYsUzs7QUFFZjs7Ozs7O0FBS0EsSUFBTUcsS0FBS0MsUUFBUUMsR0FBUixDQUFZQyxHQUF2QjtBQUNBLElBQU1DLE1BQU0sbUJBQVo7QUFDQSxJQUFNQyxNQUFNSixRQUFRSSxHQUFSLEVBQVo7O0FBRUE7Ozs7O0FBS0FELElBQUlFLEdBQUo7QUFBQSwwRUFBUSxpQkFBT0MsR0FBUCxFQUFZQyxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQyw2QkFERixHQUNVLElBQUlDLElBQUosRUFEVjtBQUFBO0FBQUEsK0JBRUVGLE1BRkY7O0FBQUE7QUFHRUcsMEJBSEYsR0FHTyxJQUFJRCxJQUFKLEtBQWFELEtBSHBCOztBQUlKRiw0QkFBSUssR0FBSixvQkFBOEJELEVBQTlCOztBQUpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUUE7Ozs7O0FBS0FQLElBQUlFLEdBQUo7O0FBR0E7Ozs7O0FBS0FGLElBQUlFLEdBQUosQ0FBUSx5QkFBTSxDQUFDTCxRQUFRQyxHQUFSLENBQVlXLEdBQVosU0FBRCxPQUFOLENBQVI7O0FBR0E7Ozs7O0FBS0FULElBQUlFLEdBQUosQ0FBUSxlQUFPO0FBQ1hDLFFBQUlLLEdBQUo7QUFDQUwsUUFBSU8sSUFBSixHQUFXLDBCQUFpQixDQUFDYixRQUFRQyxHQUFSLENBQVlXLEdBQVosU0FBRCxpQkFBakIsQ0FBWDtBQUNBTixRQUFJUSxNQUFKLEdBQWEsR0FBYjtBQUNILENBSkQ7O0FBT0E7Ozs7O0FBS0FYLElBQUlZLEVBQUosVUFBZ0IsVUFBQ0MsR0FBRCxFQUFNVixHQUFOLEVBQWM7QUFDMUIsb0NBQWtCLElBQUlXLEtBQUosQ0FBVUQsR0FBVixDQUFsQjtBQUNILENBRkQ7O0FBS0E7Ozs7O0FBS0EsZUFBS0UsWUFBTCxDQUFrQmYsSUFBSWdCLFFBQUosRUFBbEIsRUFBa0NDLE1BQWxDLENBQXlDcEIsUUFBUUMsR0FBUixDQUFZb0IsSUFBWixJQUFvQixJQUE3RDs7QUFHQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwIGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBjcmVhdGVSZWFkU3RyZWFtLCByZWFkRmlsZVN5bmMgfSBmcm9tICdmcydcblxuaW1wb3J0IEtvYSBmcm9tICdrb2EnXG5pbXBvcnQgc2VydmUgZnJvbSAna29hLXN0YXRpYydcblxuaW1wb3J0IHsgREVCVUcsIGRlYnVnLCBlcnJvciB9IGZyb20gJ34vc2hhcmVkL2hlbHBlcnMnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ34vbW9kdWxlcy93ZWJyZXcvc2VydmVyL2tvYS9sb2dnZXInXG5cbmV4cG9ydCBjbGFzcyBLb2FTZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZGVidWcoZGF0YS5uYW1lKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS29hU2VydmVyXG5cbi8qKlxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiBDb21wb25lbnRzXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuY29uc3QgV0QgPSBwcm9jZXNzLmVudi5QV0RcbmNvbnN0IGFwcCA9IG5ldyBLb2EoKVxuY29uc3QgY3dkID0gcHJvY2Vzcy5jd2QoKVxuXG4vKipcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogeC1yZXNwb25zZS10aW1lXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuYXBwLnVzZShhc3luYyAoY3R4LCBuZXh0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSgpXG4gICAgYXdhaXQgbmV4dCgpXG4gICAgY29uc3QgbXMgPSBuZXcgRGF0ZSgpIC0gc3RhcnRcbiAgICBjdHguc2V0KGBYLVJlc3BvbnNlLVRpbWVgLCBgJHttc31tc2ApXG59KVxuXG5cbi8qKlxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiBTZXJ2ZXIgbG9nZ2VyXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuYXBwLnVzZShsb2dnZXIpXG5cblxuLyoqXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qIFN0YXRpYyBTdHJlYW0gc2VydmVyXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuYXBwLnVzZShzZXJ2ZSgocHJvY2Vzcy5lbnYuV1dXIHx8IGB3d3dgKSArIGAvYCkpXG5cblxuLyoqXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qIE1vZCByZVdyaXRlXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuYXBwLnVzZShjdHggPT4ge1xuICAgIGN0eC5zZXQoYENvbnRlbnQtVHlwZWAsIGB0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThgKVxuICAgIGN0eC5ib2R5ID0gY3JlYXRlUmVhZFN0cmVhbSgocHJvY2Vzcy5lbnYuV1dXIHx8IGB3d3dgKSArIGAvaW5kZXguaHRtbGApXG4gICAgY3R4LnN0YXR1cyA9IDIwMFxufSlcblxuXG4vKipcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogRXJyb3JcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5hcHAub24oYGVycm9yYCwgKGVyciwgY3R4KSA9PiB7XG4gICAgZXJyb3IoYE9CUyEhICVzYCwgbmV3IEVycm9yKGVycikpXG59KVxuXG5cbi8qKlxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiBDcmVhdGUgU2VydmVyXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwLmNhbGxiYWNrKCkpLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JUIHx8IDgwODApXG5cblxuLyoqXG4gKiBUT0RPOiBgU2V0IFVzZXIgYWdlbnQgcGFyc2VkIHJlc3VsdCBhcyBoZWFkZXJgXG4gKiBUT0RPOiBgU2V0IGNvbmZpZyBhbmQgc21hbGwgc2V0dGluZ3MgYXMgaGVhZGVyYFxuICogVE9ETzogYEFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbmBcbiovIl19