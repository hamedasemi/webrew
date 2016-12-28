'use strict';

var _webrewHelpersLog = require('webrew-helpers-log');

var _crossSpawn = require('cross-spawn');

try {
    (0, _crossSpawn.spawn)('gulp', ['build', '--require', 'babel-register', '--gulpfile=./../webrew/src/gulp/index.js', '--cwd=./'], { stdio: 'inherit' });
} catch (err) {
    (0, _webrewHelpersLog.error)('Gulp spawn error');
    (0, _webrewHelpersLog.error)('Original error:', err);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ndWxwL2J1aWxkL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0ZGlvIiwiZXJyIl0sIm1hcHBpbmdzIjoiOztBQUNBOztBQUNBOztBQUVBLElBQUk7QUFDQSxtQ0FBYyxnR0FBZCxFQU1HLEVBQUVBLGdCQUFGLEVBTkg7QUFPSCxDQVJELENBU0EsT0FBT0MsR0FBUCxFQUFZO0FBQ1I7QUFDQSxvREFBeUJBLEdBQXpCO0FBQ0giLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnd2VicmV3LWhlbHBlcnMtbG9nJ1xuaW1wb3J0IHsgc3Bhd24gfSBmcm9tICdjcm9zcy1zcGF3bidcblxudHJ5IHtcbiAgICBzcGF3bihgZ3VscGAsIFtcbiAgICAgICAgYGJ1aWxkYCxcbiAgICAgICAgYC0tcmVxdWlyZWAsXG4gICAgICAgIGBiYWJlbC1yZWdpc3RlcmAsXG4gICAgICAgIGAtLWd1bHBmaWxlPS4vLi4vd2VicmV3L3NyYy9ndWxwL2luZGV4LmpzYCxcbiAgICAgICAgYC0tY3dkPS4vYCxcbiAgICBdLCB7IHN0ZGlvOiBgaW5oZXJpdGAgfSlcbn1cbmNhdGNoIChlcnIpIHtcbiAgICBlcnJvcihgR3VscCBzcGF3biBlcnJvcmApXG4gICAgZXJyb3IoYE9yaWdpbmFsIGVycm9yOmAsIGVycilcbn0iXX0=