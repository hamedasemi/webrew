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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvd2VicmV3LnRlc3QuanMiXSwibmFtZXMiOlsicmVzIiwic3RhdHVzQ29kZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxnQ0FBb0IsWUFBTTtBQUN0QixzQkFBTSxZQUFNLENBRVgsQ0FGRDtBQUdBLHNEQUFzQyxZQUFNO0FBQ3hDLGdEQUE2QixVQUFDQSxHQUFELEVBQVM7QUFDbEMsK0JBQU1BLElBQUlDLFVBQVYsRUFBc0IsR0FBdEI7QUFDSCxTQUZEO0FBR0gsS0FKRDtBQUtILENBVEQiLCJmaWxlIjoid2VicmV3LnRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXQgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgc3VpdGUsIHNldHVwLCB0ZXN0IH0gZnJvbSAnbW9jaGEnXG5pbXBvcnQgeyBlcXVhbCB9IGZyb20gJ2Fzc2VydCdcblxuc3VpdGUoYHdlYnJldyBjbGlgLCAoKSA9PiB7XG4gICAgc2V0dXAoKCkgPT4ge1xuXG4gICAgfSlcbiAgICB0ZXN0KGBTZXJ2ZXIgc2hvdWxkIHJlcG9uZCB3aXRoIDIwMGAsICgpID0+IHtcbiAgICAgICAgZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODBgLCAocmVzKSA9PiB7XG4gICAgICAgICAgICBlcXVhbChyZXMuc3RhdHVzQ29kZSwgMjAwKVxuICAgICAgICB9KVxuICAgIH0pXG59KSJdfQ==