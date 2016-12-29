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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3BhY2thZ2UvaW5zdGFsbC5qcyJdLCJuYW1lcyI6WyJXRCIsInByb2Nlc3MiLCJlbnYiLCJQV0QiLCJnZXQiLCJvbiIsImVyciIsInBpcGUiLCJlbnRyeSIsImVudHJ5UGF0aCIsInBhdGgiLCJmaWxlTmFtZSIsInNwbGl0IiwidHlwZSIsInNpemUiLCJhdXRvZHJhaW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUVBLElBQUlBLEtBQUtDLFFBQVFDLEdBQVIsQ0FBWUMsR0FBckI7O0FBRUEsa0JBQ0tDLEdBREwsZ0VBRUtDLEVBRkwsVUFFaUIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2xCLGlDQUFNQSxHQUFOO0FBQ0gsQ0FKTCxFQUtLQyxJQUxMLENBS1UsbUJBTFYsRUFNS0YsRUFOTCxVQU1pQixVQUFDRyxLQUFELEVBQVc7QUFDcEIsUUFBSUMsWUFBWUQsTUFBTUUsSUFBdEI7QUFDQSxRQUFJQyxXQUFXRixVQUFVRyxLQUFWLE1BQXFCLENBQXJCLENBQWY7QUFDQSxRQUFJQyxPQUFPTCxNQUFNSyxJQUFqQixDQUhvQixDQUdFO0FBQ3RCLFFBQUlDLE9BQU9OLE1BQU1NLElBQWpCO0FBQ0EsMENBQWVBLElBQWYsV0FBOEJELElBQTlCO0FBQ0EsUUFBSUEsbUJBQW1CSixpREFBdkIsRUFBeUU7QUFDckUscUNBQU1FLFFBQU47QUFDQUgsY0FBTUQsSUFBTixDQUFXLDJCQUFrQlAsV0FBV1csUUFBN0IsQ0FBWDtBQUNILEtBSEQsTUFHTztBQUNISCxjQUFNTyxTQUFOO0FBQ0g7QUFDSixDQWxCTCIsImZpbGUiOiJpbnN0YWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdCdcbmltcG9ydCB7IGNyZWF0ZVdyaXRlU3RyZWFtIH0gZnJvbSAnZnMnXG5pbXBvcnQgeyBQYXJzZSB9IGZyb20gJ3VuemlwJ1xuXG5pbXBvcnQgeyBkZWJ1ZywgZXJyb3IgfSBmcm9tICd3ZWJyZXctaGVscGVycy1sb2cnXG5cbmxldCBXRCA9IHByb2Nlc3MuZW52LlBXRFxuXG5yZXF1ZXN0XG4gICAgLmdldChgaHR0cHM6Ly9naXRodWIuY29tL3dlYnJldy93ZWItZXNzZW50aWFscy9hcmNoaXZlL21hc3Rlci56aXBgKVxuICAgIC5vbihgZXJyb3JgLCAoZXJyKSA9PiB7XG4gICAgICAgIGVycm9yKGVycilcbiAgICB9KVxuICAgIC5waXBlKFBhcnNlKCkpXG4gICAgLm9uKGBlbnRyeWAsIChlbnRyeSkgPT4ge1xuICAgICAgICB2YXIgZW50cnlQYXRoID0gZW50cnkucGF0aFxuICAgICAgICBsZXQgZmlsZU5hbWUgPSBlbnRyeVBhdGguc3BsaXQoYC9gKVsxXVxuICAgICAgICB2YXIgdHlwZSA9IGVudHJ5LnR5cGUgLy8gYERpcmVjdG9yeWAgb3IgYEZpbGVgXG4gICAgICAgIHZhciBzaXplID0gZW50cnkuc2l6ZVxuICAgICAgICBkZWJ1ZyhgU2l6ZTpgLCBzaXplLCBgVHlwZTpgLCB0eXBlKVxuICAgICAgICBpZiAodHlwZSA9PT0gYEZpbGVgICYmIGVudHJ5UGF0aCAhPT0gYHRoaXMgSVMgdGhlIGZpbGUgSSdtIGxvb2tpbmcgZm9yYCkge1xuICAgICAgICAgICAgZGVidWcoZmlsZU5hbWUpXG4gICAgICAgICAgICBlbnRyeS5waXBlKGNyZWF0ZVdyaXRlU3RyZWFtKFdEICsgYC9gICsgZmlsZU5hbWUpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW50cnkuYXV0b2RyYWluKClcbiAgICAgICAgfVxuICAgIH0pIl19