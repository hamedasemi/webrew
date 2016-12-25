'use strict';

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _fs = require('fs');

var _unzip = require('unzip');

var _helpers = require('../../../shared/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WD = process.env.PWD;

_request2.default.get('https://github.com/apegroup/web-essentials/archive/master.zip').on('error', function (err) {
    (0, _helpers.error)(err);
}).pipe((0, _unzip.Parse)()).on('entry', function (entry) {
    var fileName = entry.path;
    var myname = fileName.split('/')[1];
    var type = entry.type; // 'Directory' or 'File'
    var size = entry.size;
    if (type === 'File' && fileName !== "this IS the file I'm looking for") {
        (0, _helpers.debug)(myname);
        entry.pipe((0, _fs.createWriteStream)(WD + '/' + myname));
    } else {
        entry.autodrain();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvQGFwZWdyb3VwL3NvdXJjZS1hZGQvYWRkLmpzIl0sIm5hbWVzIjpbIldEIiwicHJvY2VzcyIsImVudiIsIlBXRCIsImdldCIsIm9uIiwiZXJyIiwicGlwZSIsImVudHJ5IiwiZmlsZU5hbWUiLCJwYXRoIiwibXluYW1lIiwic3BsaXQiLCJ0eXBlIiwic2l6ZSIsImF1dG9kcmFpbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOztBQUNBOztBQUVBOzs7O0FBRUEsSUFBSUEsS0FBS0MsUUFBUUMsR0FBUixDQUFZQyxHQUFyQjs7QUFFQSxrQkFDS0MsR0FETCxDQUNTLCtEQURULEVBRUtDLEVBRkwsQ0FFUSxPQUZSLEVBRWlCLFVBQUNDLEdBQUQsRUFBUztBQUNsQix3QkFBTUEsR0FBTjtBQUNILENBSkwsRUFLS0MsSUFMTCxDQUtVLG1CQUxWLEVBTUtGLEVBTkwsQ0FNUSxPQU5SLEVBTWlCLFVBQUNHLEtBQUQsRUFBVztBQUNwQixRQUFJQyxXQUFXRCxNQUFNRSxJQUFyQjtBQUNBLFFBQUlDLFNBQVNGLFNBQVNHLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLENBQXBCLENBQWI7QUFDQSxRQUFJQyxPQUFPTCxNQUFNSyxJQUFqQixDQUhvQixDQUdHO0FBQ3ZCLFFBQUlDLE9BQU9OLE1BQU1NLElBQWpCO0FBQ0EsUUFBSUQsU0FBUyxNQUFULElBQW1CSixhQUFhLGtDQUFwQyxFQUF3RTtBQUNwRSw0QkFBTUUsTUFBTjtBQUNBSCxjQUFNRCxJQUFOLENBQVcsMkJBQWtCUCxLQUFLLEdBQUwsR0FBV1csTUFBN0IsQ0FBWDtBQUNILEtBSEQsTUFHTztBQUNISCxjQUFNTyxTQUFOO0FBQ0g7QUFDSixDQWpCTCIsImZpbGUiOiJhZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0J1xuaW1wb3J0IHsgY3JlYXRlV3JpdGVTdHJlYW0gfSBmcm9tICdmcydcbmltcG9ydCB7IFBhcnNlIH0gZnJvbSAndW56aXAnXG5cbmltcG9ydCB7IERFQlVHLCBkZWJ1ZywgZXJyb3IsIGluZm8gfSBmcm9tICd+L3NoYXJlZC9oZWxwZXJzJ1xuXG5sZXQgV0QgPSBwcm9jZXNzLmVudi5QV0RcblxucmVxdWVzdFxuICAgIC5nZXQoJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGVncm91cC93ZWItZXNzZW50aWFscy9hcmNoaXZlL21hc3Rlci56aXAnKVxuICAgIC5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgICAgIGVycm9yKGVycilcbiAgICB9KVxuICAgIC5waXBlKFBhcnNlKCkpXG4gICAgLm9uKCdlbnRyeScsIChlbnRyeSkgPT4ge1xuICAgICAgICB2YXIgZmlsZU5hbWUgPSBlbnRyeS5wYXRoO1xuICAgICAgICBsZXQgbXluYW1lID0gZmlsZU5hbWUuc3BsaXQoJy8nKVsxXVxuICAgICAgICB2YXIgdHlwZSA9IGVudHJ5LnR5cGU7IC8vICdEaXJlY3RvcnknIG9yICdGaWxlJ1xuICAgICAgICB2YXIgc2l6ZSA9IGVudHJ5LnNpemU7XG4gICAgICAgIGlmICh0eXBlID09PSAnRmlsZScgJiYgZmlsZU5hbWUgIT09IFwidGhpcyBJUyB0aGUgZmlsZSBJJ20gbG9va2luZyBmb3JcIikge1xuICAgICAgICAgICAgZGVidWcobXluYW1lKVxuICAgICAgICAgICAgZW50cnkucGlwZShjcmVhdGVXcml0ZVN0cmVhbShXRCArICcvJyArIG15bmFtZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW50cnkuYXV0b2RyYWluKCk7XG4gICAgICAgIH1cbiAgICB9KSJdfQ==