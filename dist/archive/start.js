'use strict';

var _helpers = require('../shared/helpers');

var _koa = require('../modules/apegroup/server/koa');

var _koa2 = _interopRequireDefault(_koa);

var _package = require('./../../../../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _helpers.debug)('Config rc:', _package.apegrouprc);
(0, _helpers.debug)('Package name:', _package.name);
(0, _helpers.debug)('Package version:', _package.version);

// // // // // // // // // // readFileSync(`shared/ssl-certificates/server.key`)
var packageInfo = require(process.env.PWD + '/package.json');
(0, _helpers.debug)('Config rc:', packageInfo.apegrouprc);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FyY2hpdmUvc3RhcnQuanMiXSwibmFtZXMiOlsicGFja2FnZUluZm8iLCJyZXF1aXJlIiwicHJvY2VzcyIsImVudiIsIlBXRCIsImFwZWdyb3VwcmMiLCJrb2FTZXJ2ZXIiLCJuYW1lIiwidmVyc2lvbiIsImRvbWFpbiIsInBvcnQiLCJpY29uIiwibW9kcmV3cml0ZSIsInN0YXRpYyIsImFjY2Vzc09yaWdpbiJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7QUFFQTs7OztBQUVBOzs7O0FBRUEsb0JBQU0sWUFBTjtBQUNBLG9CQUFNLGVBQU47QUFDQSxvQkFBTSxrQkFBTjs7QUFFQTtBQUNBLElBQUlBLGNBQWNDLFFBQVFDLFFBQVFDLEdBQVIsQ0FBWUMsR0FBWixHQUFrQixlQUExQixDQUFsQjtBQUNBLG9CQUFNLFlBQU4sRUFBb0JKLFlBQVlLLFVBQWhDOztBQUVBO0FBQ0EsSUFBSUMsWUFBWSxrQkFBYztBQUMxQkMsdUJBRDBCO0FBRTFCQyw2QkFGMEI7QUFHMUJDLHVCQUgwQjtBQUkxQkMsVUFBTSxJQUpvQjtBQUsxQkMsVUFBTSxJQUxvQjtBQU0xQkMsZ0JBQVksSUFOYyxFQU1SO0FBQ2xCQyxZQUFRLHNFQVBrQjtBQWExQkMsa0JBQWM7QUFiWSxDQUFkLENBQWhCIiwiZmlsZSI6InN0YXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBERUJVRywgZGVidWcsIGVycm9yLCBpbmZvIH0gZnJvbSAnfi9zaGFyZWQvaGVscGVycydcblxuaW1wb3J0IEtvYVNlcnZlciBmcm9tICd+L21vZHVsZXMvYXBlZ3JvdXAvc2VydmVyL2tvYSdcblxuaW1wb3J0IHsgbmFtZSwgdmVyc2lvbiwgYXBlZ3JvdXByYyB9IGZyb20gJy4vLi4vLi4vLi4vLi4vcGFja2FnZS5qc29uJ1xuXG5kZWJ1ZygnQ29uZmlnIHJjOicsIGFwZWdyb3VwcmMpXG5kZWJ1ZygnUGFja2FnZSBuYW1lOicsIG5hbWUpXG5kZWJ1ZygnUGFja2FnZSB2ZXJzaW9uOicsIHZlcnNpb24pXG5cbi8vIC8vIC8vIC8vIC8vIC8vIC8vIC8vIC8vIC8vIHJlYWRGaWxlU3luYyhgc2hhcmVkL3NzbC1jZXJ0aWZpY2F0ZXMvc2VydmVyLmtleWApXG5sZXQgcGFja2FnZUluZm8gPSByZXF1aXJlKHByb2Nlc3MuZW52LlBXRCArICcvcGFja2FnZS5qc29uJylcbmRlYnVnKCdDb25maWcgcmM6JywgcGFja2FnZUluZm8uYXBlZ3JvdXByYylcblxuLy8gb3B0aW9ucyBhcyB5YW1sIGZpbGVcbnZhciBrb2FTZXJ2ZXIgPSBuZXcgS29hU2VydmVyKHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgZG9tYWluOiBgbG9jYWxob3N0YCxcbiAgICBwb3J0OiAzMDAwLFxuICAgIGljb246IHRydWUsXG4gICAgbW9kcmV3cml0ZTogdHJ1ZSwgLy8gW2BeW15cXFxcLl0qJCAvaW5kZXguaHRtbCBbTF1gXVxuICAgIHN0YXRpYzogW1xuICAgICAgICBgL2Fzc2V0cy9tb2R1bGVzYCxcbiAgICAgICAgYC9hc3NldHMvbWVkaWFgLFxuICAgICAgICBgL2Fzc2V0cy9pY29uc2AsXG4gICAgICAgIGAvYXNzZXRzL2ZvbnRzYFxuICAgIF0sXG4gICAgYWNjZXNzT3JpZ2luOiBbXG4gICAgICAgIGBodHRwczovL2Rldi11c2Utcm9zdC1mb3J0dW0uYXBwc3BvdC5jb21gXG4gICAgXVxufSk7Il19