'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sync = sync;

var _config = require('./../config');

var _config2 = _interopRequireDefault(_config);

var _browserSync = require('browser-sync');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sync() {
    return (0, _browserSync.init)({
        ui: {
            port: 4001,
            weinre: {
                port: 8080
            }
        },
        https: false,
        files: _config2.default.dest,
        watchOptions: {},
        server: false,
        proxy: 'http://localhost:3000',
        port: 4000,
        middleware: false,
        serveStatic: [],
        ghostMode: {
            clicks: true,
            scroll: true,
            forms: {
                submit: true,
                inputs: true,
                toggles: true
            }
        },
        logLevel: 'debug',
        logPrefix: 'BS',
        logConnections: false,
        logFileChanges: true,
        logSnippet: true,
        rewriteRules: false,
        open: 'external',
        browser: 'Google Chrome',
        xip: false,
        hostnameSuffix: false,
        reloadOnRestart: false,
        notify: true,
        scrollProportionally: true,
        scrollThrottle: 0,
        scrollRestoreTechnique: 'window.name',
        scrollElements: [],
        scrollElementMapping: [],
        reloadDelay: 0,
        reloadDebounce: 0,
        plugins: [],
        injectChanges: false,
        startPath: null,
        minify: true,
        host: null,
        codeSync: true,
        timestamps: true,
        clientEvents: ['scroll', 'scroll:element', 'input:text', 'input:toggles', 'form:submit', 'form:reset', 'click'],
        socket: {
            socketIoOptions: {
                log: false
            },
            socketIoClientConfig: {
                reconnectionAttempts: 50
            },
            path: '/browser-sync/socket.io',
            clientPath: '/browser-sync',
            namespace: '/browser-sync',
            clients: {
                heartbeatTimeout: 5000
            }
        },
        tagNames: {
            less: 'link',
            scss: 'link',
            css: 'link',
            jpg: 'img',
            jpeg: 'img',
            png: 'img',
            svg: 'img',
            gif: 'img',
            js: 'script'
        }
    });
}

sync.description = 'sync changes with browsers.';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FyY2hpdmUvZ3VscC9zeW5jLmpzIl0sIm5hbWVzIjpbInN5bmMiLCJ1aSIsInBvcnQiLCJ3ZWlucmUiLCJodHRwcyIsImZpbGVzIiwiZGVzdCIsIndhdGNoT3B0aW9ucyIsInNlcnZlciIsInByb3h5IiwibWlkZGxld2FyZSIsInNlcnZlU3RhdGljIiwiZ2hvc3RNb2RlIiwiY2xpY2tzIiwic2Nyb2xsIiwiZm9ybXMiLCJzdWJtaXQiLCJpbnB1dHMiLCJ0b2dnbGVzIiwibG9nTGV2ZWwiLCJsb2dQcmVmaXgiLCJsb2dDb25uZWN0aW9ucyIsImxvZ0ZpbGVDaGFuZ2VzIiwibG9nU25pcHBldCIsInJld3JpdGVSdWxlcyIsIm9wZW4iLCJicm93c2VyIiwieGlwIiwiaG9zdG5hbWVTdWZmaXgiLCJyZWxvYWRPblJlc3RhcnQiLCJub3RpZnkiLCJzY3JvbGxQcm9wb3J0aW9uYWxseSIsInNjcm9sbFRocm90dGxlIiwic2Nyb2xsUmVzdG9yZVRlY2huaXF1ZSIsInNjcm9sbEVsZW1lbnRzIiwic2Nyb2xsRWxlbWVudE1hcHBpbmciLCJyZWxvYWREZWxheSIsInJlbG9hZERlYm91bmNlIiwicGx1Z2lucyIsImluamVjdENoYW5nZXMiLCJzdGFydFBhdGgiLCJtaW5pZnkiLCJob3N0IiwiY29kZVN5bmMiLCJ0aW1lc3RhbXBzIiwiY2xpZW50RXZlbnRzIiwic29ja2V0Iiwic29ja2V0SW9PcHRpb25zIiwibG9nIiwic29ja2V0SW9DbGllbnRDb25maWciLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsInBhdGgiLCJjbGllbnRQYXRoIiwibmFtZXNwYWNlIiwiY2xpZW50cyIsImhlYXJ0YmVhdFRpbWVvdXQiLCJ0YWdOYW1lcyIsImxlc3MiLCJzY3NzIiwiY3NzIiwianBnIiwianBlZyIsInBuZyIsInN2ZyIsImdpZiIsImpzIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7O1FBR2dCQSxJLEdBQUFBLEk7O0FBSGhCOzs7O0FBQ0E7Ozs7QUFFTyxTQUFTQSxJQUFULEdBQWdCO0FBQ25CLFdBQU8sdUJBQUs7QUFDUkMsWUFBSTtBQUNBQyxrQkFBTSxJQUROO0FBRUFDLG9CQUFRO0FBQ0pELHNCQUFNO0FBREY7QUFGUixTQURJO0FBT1JFLGVBQU8sS0FQQztBQVFSQyxlQUFPLGlCQUFPQyxJQVJOO0FBU1JDLHNCQUFjLEVBVE47QUFVUkMsZ0JBQVEsS0FWQTtBQVdSQyxzQ0FYUTtBQVlSUCxjQUFNLElBWkU7QUFhUlEsb0JBQVksS0FiSjtBQWNSQyxxQkFBYSxFQWRMO0FBZVJDLG1CQUFXO0FBQ1BDLG9CQUFRLElBREQ7QUFFUEMsb0JBQVEsSUFGRDtBQUdQQyxtQkFBTztBQUNIQyx3QkFBUSxJQURMO0FBRUhDLHdCQUFRLElBRkw7QUFHSEMseUJBQVM7QUFITjtBQUhBLFNBZkg7QUF3QlJDLHlCQXhCUTtBQXlCUkMsdUJBekJRO0FBMEJSQyx3QkFBZ0IsS0ExQlI7QUEyQlJDLHdCQUFnQixJQTNCUjtBQTRCUkMsb0JBQVksSUE1Qko7QUE2QlJDLHNCQUFjLEtBN0JOO0FBOEJSQyx3QkE5QlE7QUErQlJDLGdDQS9CUTtBQWdDUkMsYUFBSyxLQWhDRztBQWlDUkMsd0JBQWdCLEtBakNSO0FBa0NSQyx5QkFBaUIsS0FsQ1Q7QUFtQ1JDLGdCQUFRLElBbkNBO0FBb0NSQyw4QkFBc0IsSUFwQ2Q7QUFxQ1JDLHdCQUFnQixDQXJDUjtBQXNDUkMsNkNBdENRO0FBdUNSQyx3QkFBZ0IsRUF2Q1I7QUF3Q1JDLDhCQUFzQixFQXhDZDtBQXlDUkMscUJBQWEsQ0F6Q0w7QUEwQ1JDLHdCQUFnQixDQTFDUjtBQTJDUkMsaUJBQVMsRUEzQ0Q7QUE0Q1JDLHVCQUFlLEtBNUNQO0FBNkNSQyxtQkFBVyxJQTdDSDtBQThDUkMsZ0JBQVEsSUE5Q0E7QUErQ1JDLGNBQU0sSUEvQ0U7QUFnRFJDLGtCQUFVLElBaERGO0FBaURSQyxvQkFBWSxJQWpESjtBQWtEUkMsc0JBQWMsaUdBbEROO0FBMkRSQyxnQkFBUTtBQUNKQyw2QkFBaUI7QUFDYkMscUJBQUs7QUFEUSxhQURiO0FBSUpDLGtDQUFzQjtBQUNsQkMsc0NBQXNCO0FBREosYUFKbEI7QUFPSkMsMkNBUEk7QUFRSkMsdUNBUkk7QUFTSkMsc0NBVEk7QUFVSkMscUJBQVM7QUFDTEMsa0NBQWtCO0FBRGI7QUFWTCxTQTNEQTtBQXlFUkMsa0JBQVU7QUFDTkMsd0JBRE07QUFFTkMsd0JBRk07QUFHTkMsdUJBSE07QUFJTkMsc0JBSk07QUFLTkMsdUJBTE07QUFNTkMsc0JBTk07QUFPTkMsc0JBUE07QUFRTkMsc0JBUk07QUFTTkM7QUFUTTtBQXpFRixLQUFMLENBQVA7QUFxRkg7O0FBRURqRSxLQUFLa0UsV0FBTCIsImZpbGUiOiJzeW5jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuLy4uL2NvbmZpZyc7XG5pbXBvcnQge2luaXR9IGZyb20gJ2Jyb3dzZXItc3luYyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzeW5jKCkge1xuICAgIHJldHVybiBpbml0KHtcbiAgICAgICAgdWk6IHtcbiAgICAgICAgICAgIHBvcnQ6IDQwMDEsXG4gICAgICAgICAgICB3ZWlucmU6IHtcbiAgICAgICAgICAgICAgICBwb3J0OiA4MDgwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGh0dHBzOiBmYWxzZSxcbiAgICAgICAgZmlsZXM6IGNvbmZpZy5kZXN0LFxuICAgICAgICB3YXRjaE9wdGlvbnM6IHt9LFxuICAgICAgICBzZXJ2ZXI6IGZhbHNlLFxuICAgICAgICBwcm94eTogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMGAsXG4gICAgICAgIHBvcnQ6IDQwMDAsXG4gICAgICAgIG1pZGRsZXdhcmU6IGZhbHNlLFxuICAgICAgICBzZXJ2ZVN0YXRpYzogW10sXG4gICAgICAgIGdob3N0TW9kZToge1xuICAgICAgICAgICAgY2xpY2tzOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgZm9ybXM6IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5wdXRzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvZ2dsZXM6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbG9nTGV2ZWw6IGBkZWJ1Z2AsXG4gICAgICAgIGxvZ1ByZWZpeDogYEJTYCxcbiAgICAgICAgbG9nQ29ubmVjdGlvbnM6IGZhbHNlLFxuICAgICAgICBsb2dGaWxlQ2hhbmdlczogdHJ1ZSxcbiAgICAgICAgbG9nU25pcHBldDogdHJ1ZSxcbiAgICAgICAgcmV3cml0ZVJ1bGVzOiBmYWxzZSxcbiAgICAgICAgb3BlbjogYGV4dGVybmFsYCxcbiAgICAgICAgYnJvd3NlcjogYEdvb2dsZSBDaHJvbWVgLFxuICAgICAgICB4aXA6IGZhbHNlLFxuICAgICAgICBob3N0bmFtZVN1ZmZpeDogZmFsc2UsXG4gICAgICAgIHJlbG9hZE9uUmVzdGFydDogZmFsc2UsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgc2Nyb2xsUHJvcG9ydGlvbmFsbHk6IHRydWUsXG4gICAgICAgIHNjcm9sbFRocm90dGxlOiAwLFxuICAgICAgICBzY3JvbGxSZXN0b3JlVGVjaG5pcXVlOiBgd2luZG93Lm5hbWVgLFxuICAgICAgICBzY3JvbGxFbGVtZW50czogW10sXG4gICAgICAgIHNjcm9sbEVsZW1lbnRNYXBwaW5nOiBbXSxcbiAgICAgICAgcmVsb2FkRGVsYXk6IDAsXG4gICAgICAgIHJlbG9hZERlYm91bmNlOiAwLFxuICAgICAgICBwbHVnaW5zOiBbXSxcbiAgICAgICAgaW5qZWN0Q2hhbmdlczogZmFsc2UsXG4gICAgICAgIHN0YXJ0UGF0aDogbnVsbCxcbiAgICAgICAgbWluaWZ5OiB0cnVlLFxuICAgICAgICBob3N0OiBudWxsLFxuICAgICAgICBjb2RlU3luYzogdHJ1ZSxcbiAgICAgICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgICAgICAgY2xpZW50RXZlbnRzOiBbXG4gICAgICAgICAgICBgc2Nyb2xsYCxcbiAgICAgICAgICAgIGBzY3JvbGw6ZWxlbWVudGAsXG4gICAgICAgICAgICBgaW5wdXQ6dGV4dGAsXG4gICAgICAgICAgICBgaW5wdXQ6dG9nZ2xlc2AsXG4gICAgICAgICAgICBgZm9ybTpzdWJtaXRgLFxuICAgICAgICAgICAgYGZvcm06cmVzZXRgLFxuICAgICAgICAgICAgYGNsaWNrYFxuICAgICAgICBdLFxuICAgICAgICBzb2NrZXQ6IHtcbiAgICAgICAgICAgIHNvY2tldElvT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGxvZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzb2NrZXRJb0NsaWVudENvbmZpZzoge1xuICAgICAgICAgICAgICAgIHJlY29ubmVjdGlvbkF0dGVtcHRzOiA1MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IGAvYnJvd3Nlci1zeW5jL3NvY2tldC5pb2AsXG4gICAgICAgICAgICBjbGllbnRQYXRoOiBgL2Jyb3dzZXItc3luY2AsXG4gICAgICAgICAgICBuYW1lc3BhY2U6IGAvYnJvd3Nlci1zeW5jYCxcbiAgICAgICAgICAgIGNsaWVudHM6IHtcbiAgICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0OiA1MDAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRhZ05hbWVzOiB7XG4gICAgICAgICAgICBsZXNzOiBgbGlua2AsXG4gICAgICAgICAgICBzY3NzOiBgbGlua2AsXG4gICAgICAgICAgICBjc3M6IGBsaW5rYCxcbiAgICAgICAgICAgIGpwZzogYGltZ2AsXG4gICAgICAgICAgICBqcGVnOiBgaW1nYCxcbiAgICAgICAgICAgIHBuZzogYGltZ2AsXG4gICAgICAgICAgICBzdmc6IGBpbWdgLFxuICAgICAgICAgICAgZ2lmOiBgaW1nYCxcbiAgICAgICAgICAgIGpzOiBgc2NyaXB0YFxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnN5bmMuZGVzY3JpcHRpb24gPSBgc3luYyBjaGFuZ2VzIHdpdGggYnJvd3NlcnMuYDtcbiJdfQ==