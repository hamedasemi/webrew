'use strict';

var _helpers = require('../shared/helpers');

var _koa = require('../modules/webrew/server/koa');

var _koa2 = _interopRequireDefault(_koa);

var _package = require('./../../../../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _helpers.debug)('Config rc:', _package.webrewrc);
(0, _helpers.debug)('Package name:', _package.name);
(0, _helpers.debug)('Package version:', _package.version);

// // // // // // // // // // readFileSync(`shared/ssl-certificates/server.key`)
var packageInfo = require(process.env.PWD + '/package.json');
(0, _helpers.debug)('Config rc:', packageInfo.webrewrc);

// options as yaml file
var koaServer = new _koa2.default({
    name: _package.name,
    version: _package.version,
    domain: 'localhost',
    port: 3000,
    icon: true,
    modrewrite: true, // [`^[^\\.]*$ /index.html [L]`]
    static: ['/assets/modules', '/assets/media', '/assets/icons', '/assets/fonts'],
    accessOrigin: ['https://dev-use-rost-fortum.appspot.com']
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FyY2hpdmUvc3RhcnQuanMiXSwibmFtZXMiOlsicGFja2FnZUluZm8iLCJyZXF1aXJlIiwicHJvY2VzcyIsImVudiIsIlBXRCIsIndlYnJld3JjIiwia29hU2VydmVyIiwibmFtZSIsInZlcnNpb24iLCJkb21haW4iLCJwb3J0IiwiaWNvbiIsIm1vZHJld3JpdGUiLCJzdGF0aWMiLCJhY2Nlc3NPcmlnaW4iXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBRUE7Ozs7QUFFQTs7OztBQUVBLG9CQUFNLFlBQU47QUFDQSxvQkFBTSxlQUFOO0FBQ0Esb0JBQU0sa0JBQU47O0FBRUE7QUFDQSxJQUFJQSxjQUFjQyxRQUFRQyxRQUFRQyxHQUFSLENBQVlDLEdBQVosR0FBa0IsZUFBMUIsQ0FBbEI7QUFDQSxvQkFBTSxZQUFOLEVBQW9CSixZQUFZSyxRQUFoQzs7QUFFQTtBQUNBLElBQUlDLFlBQVksa0JBQWM7QUFDMUJDLHVCQUQwQjtBQUUxQkMsNkJBRjBCO0FBRzFCQyx1QkFIMEI7QUFJMUJDLFVBQU0sSUFKb0I7QUFLMUJDLFVBQU0sSUFMb0I7QUFNMUJDLGdCQUFZLElBTmMsRUFNUjtBQUNsQkMsWUFBUSxzRUFQa0I7QUFhMUJDLGtCQUFjO0FBYlksQ0FBZCxDQUFoQiIsImZpbGUiOiJzdGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgREVCVUcsIGRlYnVnLCBlcnJvciwgaW5mbyB9IGZyb20gJ34vc2hhcmVkL2hlbHBlcnMnXG5cbmltcG9ydCBLb2FTZXJ2ZXIgZnJvbSAnfi9tb2R1bGVzL3dlYnJldy9zZXJ2ZXIva29hJ1xuXG5pbXBvcnQgeyBuYW1lLCB2ZXJzaW9uLCB3ZWJyZXdyYyB9IGZyb20gJy4vLi4vLi4vLi4vLi4vcGFja2FnZS5qc29uJ1xuXG5kZWJ1ZygnQ29uZmlnIHJjOicsIHdlYnJld3JjKVxuZGVidWcoJ1BhY2thZ2UgbmFtZTonLCBuYW1lKVxuZGVidWcoJ1BhY2thZ2UgdmVyc2lvbjonLCB2ZXJzaW9uKVxuXG4vLyAvLyAvLyAvLyAvLyAvLyAvLyAvLyAvLyAvLyByZWFkRmlsZVN5bmMoYHNoYXJlZC9zc2wtY2VydGlmaWNhdGVzL3NlcnZlci5rZXlgKVxubGV0IHBhY2thZ2VJbmZvID0gcmVxdWlyZShwcm9jZXNzLmVudi5QV0QgKyAnL3BhY2thZ2UuanNvbicpXG5kZWJ1ZygnQ29uZmlnIHJjOicsIHBhY2thZ2VJbmZvLndlYnJld3JjKVxuXG4vLyBvcHRpb25zIGFzIHlhbWwgZmlsZVxudmFyIGtvYVNlcnZlciA9IG5ldyBLb2FTZXJ2ZXIoe1xuICAgIG5hbWU6IG5hbWUsXG4gICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICBkb21haW46IGBsb2NhbGhvc3RgLFxuICAgIHBvcnQ6IDMwMDAsXG4gICAgaWNvbjogdHJ1ZSxcbiAgICBtb2RyZXdyaXRlOiB0cnVlLCAvLyBbYF5bXlxcXFwuXSokIC9pbmRleC5odG1sIFtMXWBdXG4gICAgc3RhdGljOiBbXG4gICAgICAgIGAvYXNzZXRzL21vZHVsZXNgLFxuICAgICAgICBgL2Fzc2V0cy9tZWRpYWAsXG4gICAgICAgIGAvYXNzZXRzL2ljb25zYCxcbiAgICAgICAgYC9hc3NldHMvZm9udHNgXG4gICAgXSxcbiAgICBhY2Nlc3NPcmlnaW46IFtcbiAgICAgICAgYGh0dHBzOi8vZGV2LXVzZS1yb3N0LWZvcnR1bS5hcHBzcG90LmNvbWBcbiAgICBdXG59KTsiXX0=