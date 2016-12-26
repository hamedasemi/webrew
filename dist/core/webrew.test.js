'use strict';

var _http = require('http');

var _mocha = require('mocha');

var _assert = require('assert');

(0, _mocha.suite)('webrew cli', function () {
    (0, _mocha.setup)(function () {});
    (0, _mocha.test)('Server should repond with 200', function () {
        (0, _http.get)('http://localhost:8080', function (res) {
            (0, _assert.equal)(res.statusCode, 200);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3dlYnJldy50ZXN0LmpzIl0sIm5hbWVzIjpbInJlcyIsInN0YXR1c0NvZGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsZ0NBQW9CLFlBQU07QUFDdEIsc0JBQU0sWUFBTSxDQUVYLENBRkQ7QUFHQSxzREFBc0MsWUFBTTtBQUN4QyxnREFBNkIsVUFBQ0EsR0FBRCxFQUFTO0FBQ2xDLCtCQUFNQSxJQUFJQyxVQUFWLEVBQXNCLEdBQXRCO0FBQ0gsU0FGRDtBQUdILEtBSkQ7QUFLSCxDQVREIiwiZmlsZSI6IndlYnJldy50ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IHN1aXRlLCBzZXR1cCwgdGVzdCB9IGZyb20gJ21vY2hhJ1xuaW1wb3J0IHsgZXF1YWwgfSBmcm9tICdhc3NlcnQnXG5cbnN1aXRlKGB3ZWJyZXcgY2xpYCwgKCkgPT4ge1xuICAgIHNldHVwKCgpID0+IHtcblxuICAgIH0pXG4gICAgdGVzdChgU2VydmVyIHNob3VsZCByZXBvbmQgd2l0aCAyMDBgLCAoKSA9PiB7XG4gICAgICAgIGdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwYCwgKHJlcykgPT4ge1xuICAgICAgICAgICAgZXF1YWwocmVzLnN0YXR1c0NvZGUsIDIwMClcbiAgICAgICAgfSlcbiAgICB9KVxufSkiXX0=