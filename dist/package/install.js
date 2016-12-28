'use strict';

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _fs = require('fs');

var _unzip = require('unzip');

var _webrewHelpersLog = require('webrew-helpers-log');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WD = process.env.PWD;

_request2.default.get('https://github.com/webrew/web-essentials/archive/master.zip').on('error', function (err) {
    (0, _webrewHelpersLog.error)(err);
}).pipe((0, _unzip.Parse)()).on('entry', function (entry) {
    var entryPath = entry.path;
    var fileName = entryPath.split('/')[1];
    var type = entry.type; // `Directory` or `File`
    var size = entry.size;
    (0, _webrewHelpersLog.debug)('Size:', size, 'Type:', type);
    if (type === 'File' && entryPath !== 'this IS the file I\'m looking for') {
        (0, _webrewHelpersLog.debug)(fileName);
        entry.pipe((0, _fs.createWriteStream)(WD + '/' + fileName));
    } else {
        entry.autodrain();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWNrYWdlL2luc3RhbGwuanMiXSwibmFtZXMiOlsiV0QiLCJwcm9jZXNzIiwiZW52IiwiUFdEIiwiZ2V0Iiwib24iLCJlcnIiLCJwaXBlIiwiZW50cnkiLCJlbnRyeVBhdGgiLCJwYXRoIiwiZmlsZU5hbWUiLCJzcGxpdCIsInR5cGUiLCJzaXplIiwiYXV0b2RyYWluIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFJQSxLQUFLQyxRQUFRQyxHQUFSLENBQVlDLEdBQXJCOztBQUVBLGtCQUNLQyxHQURMLGdFQUVLQyxFQUZMLFVBRWlCLFVBQUNDLEdBQUQsRUFBUztBQUNsQixpQ0FBTUEsR0FBTjtBQUNILENBSkwsRUFLS0MsSUFMTCxDQUtVLG1CQUxWLEVBTUtGLEVBTkwsVUFNaUIsVUFBQ0csS0FBRCxFQUFXO0FBQ3BCLFFBQUlDLFlBQVlELE1BQU1FLElBQXRCO0FBQ0EsUUFBSUMsV0FBV0YsVUFBVUcsS0FBVixNQUFxQixDQUFyQixDQUFmO0FBQ0EsUUFBSUMsT0FBT0wsTUFBTUssSUFBakIsQ0FIb0IsQ0FHRTtBQUN0QixRQUFJQyxPQUFPTixNQUFNTSxJQUFqQjtBQUNBLDBDQUFlQSxJQUFmLFdBQThCRCxJQUE5QjtBQUNBLFFBQUlBLG1CQUFtQkosaURBQXZCLEVBQXlFO0FBQ3JFLHFDQUFNRSxRQUFOO0FBQ0FILGNBQU1ELElBQU4sQ0FBVywyQkFBa0JQLFdBQVdXLFFBQTdCLENBQVg7QUFDSCxLQUhELE1BR087QUFDSEgsY0FBTU8sU0FBTjtBQUNIO0FBQ0osQ0FsQkwiLCJmaWxlIjoiaW5zdGFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gJ3JlcXVlc3QnXG5pbXBvcnQgeyBjcmVhdGVXcml0ZVN0cmVhbSB9IGZyb20gJ2ZzJ1xuaW1wb3J0IHsgUGFyc2UgfSBmcm9tICd1bnppcCdcblxuaW1wb3J0IHsgZGVidWcsIGVycm9yIH0gZnJvbSAnd2VicmV3LWhlbHBlcnMtbG9nJ1xuXG5sZXQgV0QgPSBwcm9jZXNzLmVudi5QV0RcblxucmVxdWVzdFxuICAgIC5nZXQoYGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJyZXcvd2ViLWVzc2VudGlhbHMvYXJjaGl2ZS9tYXN0ZXIuemlwYClcbiAgICAub24oYGVycm9yYCwgKGVycikgPT4ge1xuICAgICAgICBlcnJvcihlcnIpXG4gICAgfSlcbiAgICAucGlwZShQYXJzZSgpKVxuICAgIC5vbihgZW50cnlgLCAoZW50cnkpID0+IHtcbiAgICAgICAgdmFyIGVudHJ5UGF0aCA9IGVudHJ5LnBhdGhcbiAgICAgICAgbGV0IGZpbGVOYW1lID0gZW50cnlQYXRoLnNwbGl0KGAvYClbMV1cbiAgICAgICAgdmFyIHR5cGUgPSBlbnRyeS50eXBlIC8vIGBEaXJlY3RvcnlgIG9yIGBGaWxlYFxuICAgICAgICB2YXIgc2l6ZSA9IGVudHJ5LnNpemVcbiAgICAgICAgZGVidWcoYFNpemU6YCwgc2l6ZSwgYFR5cGU6YCwgdHlwZSlcbiAgICAgICAgaWYgKHR5cGUgPT09IGBGaWxlYCAmJiBlbnRyeVBhdGggIT09IGB0aGlzIElTIHRoZSBmaWxlIEknbSBsb29raW5nIGZvcmApIHtcbiAgICAgICAgICAgIGRlYnVnKGZpbGVOYW1lKVxuICAgICAgICAgICAgZW50cnkucGlwZShjcmVhdGVXcml0ZVN0cmVhbShXRCArIGAvYCArIGZpbGVOYW1lKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVudHJ5LmF1dG9kcmFpbigpXG4gICAgICAgIH1cbiAgICB9KSJdfQ==