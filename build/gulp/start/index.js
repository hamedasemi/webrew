'use strict';

var _webrewHelpersLog = require('webrew-helpers-log');

var _crossSpawn = require('cross-spawn');

try {
    (0, _crossSpawn.spawn)('gulp', ['start', '--require', 'babel-register', '--gulpfile=./../webrew/gulp/index.js', '--cwd=./'], { stdio: 'inherit' });
} catch (err) {
    (0, _webrewHelpersLog.error)('Gulp spawn error');
    (0, _webrewHelpersLog.error)('Original error:', err);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2d1bHAvc3RhcnQvaW5kZXguanMiXSwibmFtZXMiOlsic3RkaW8iLCJlcnIiXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBSTtBQUNBLG1DQUFjLDRGQUFkLEVBTUcsRUFBRUEsZ0JBQUYsRUFOSDtBQU9ILENBUkQsQ0FTQSxPQUFPQyxHQUFQLEVBQVk7QUFDUjtBQUNBLG9EQUF5QkEsR0FBekI7QUFDSCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICd3ZWJyZXctaGVscGVycy1sb2cnXG5pbXBvcnQgeyBzcGF3biB9IGZyb20gJ2Nyb3NzLXNwYXduJ1xuXG50cnkge1xuICAgIHNwYXduKGBndWxwYCwgW1xuICAgICAgICBgc3RhcnRgLFxuICAgICAgICBgLS1yZXF1aXJlYCxcbiAgICAgICAgYGJhYmVsLXJlZ2lzdGVyYCxcbiAgICAgICAgYC0tZ3VscGZpbGU9Li8uLi93ZWJyZXcvZ3VscC9pbmRleC5qc2AsXG4gICAgICAgIGAtLWN3ZD0uL2AsXG4gICAgXSwgeyBzdGRpbzogYGluaGVyaXRgIH0pXG59XG5jYXRjaCAoZXJyKSB7XG4gICAgZXJyb3IoYEd1bHAgc3Bhd24gZXJyb3JgKVxuICAgIGVycm9yKGBPcmlnaW5hbCBlcnJvcjpgLCBlcnIpXG59Il19