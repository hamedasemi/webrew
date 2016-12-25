'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.font = font;

var _gulp = require('gulp');

var _gulpFont = require('gulp-font');

var _gulpFont2 = _interopRequireDefault(_gulpFont);

var _config = require('./../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fontConfig = {
    ext: '.css',
    fontface: _config2.default.src + '/assets/fonts',
    relative: '/assets/fonts',
    dest: _config2.default.dest + '/assets/fonts',
    embed: ['woff'],
    collate: false
};

function font() {
    return (0, _gulp.src)(_config2.default.src + '/assets/fonts/**/*.{ttf,otf}', { read: false }).pipe((0, _gulpFont2.default)(fontConfig)).pipe((0, _gulp.dest)(_config2.default.dest));
}

font.description = 'Generate web font package from ttf and otf files.';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FyY2hpdmUvZ3VscC9mb250LmpzIl0sIm5hbWVzIjpbImZvbnQiLCJmb250Q29uZmlnIiwiZXh0IiwiZm9udGZhY2UiLCJzcmMiLCJyZWxhdGl2ZSIsImRlc3QiLCJlbWJlZCIsImNvbGxhdGUiLCJyZWFkIiwicGlwZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OztRQWdCZ0JBLEksR0FBQUEsSTs7QUFoQmhCOztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLElBQUlDLGFBQWE7QUFDYkMsZUFEYTtBQUViQyxjQUFhLGlCQUFPQyxHQUFwQixrQkFGYTtBQUdiQyw2QkFIYTtBQUliQyxVQUFTLGlCQUFPQSxJQUFoQixrQkFKYTtBQUtiQyxXQUFPLFFBTE07QUFRYkMsYUFBUztBQVJJLENBQWpCOztBQVdPLFNBQVNSLElBQVQsR0FBZ0I7QUFDbkIsV0FBTyxlQUFPLGlCQUFPSSxHQUFkLG1DQUFpRCxFQUFFSyxNQUFNLEtBQVIsRUFBakQsRUFDRkMsSUFERSxDQUNHLHdCQUFTVCxVQUFULENBREgsRUFFRlMsSUFGRSxDQUVHLGdCQUFLLGlCQUFPSixJQUFaLENBRkgsQ0FBUDtBQUdIOztBQUVETixLQUFLVyxXQUFMIiwiZmlsZSI6ImZvbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NyYywgZGVzdH0gZnJvbSAnZ3VscCc7XG5pbXBvcnQgZ3VscEZvbnQgZnJvbSAnZ3VscC1mb250JztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLy4uL2NvbmZpZyc7XG5cbmxldCBmb250Q29uZmlnID0ge1xuICAgIGV4dDogYC5jc3NgLFxuICAgIGZvbnRmYWNlOiBgJHtjb25maWcuc3JjfS9hc3NldHMvZm9udHNgLFxuICAgIHJlbGF0aXZlOiBgL2Fzc2V0cy9mb250c2AsXG4gICAgZGVzdDogYCR7Y29uZmlnLmRlc3R9L2Fzc2V0cy9mb250c2AsXG4gICAgZW1iZWQ6IFtcbiAgICAgICAgYHdvZmZgXG4gICAgXSxcbiAgICBjb2xsYXRlOiBmYWxzZVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvbnQoKSB7XG4gICAgcmV0dXJuIHNyYyhgJHtjb25maWcuc3JjfS9hc3NldHMvZm9udHMvKiovKi57dHRmLG90Zn1gLCB7IHJlYWQ6IGZhbHNlIH0pXG4gICAgICAgIC5waXBlKGd1bHBGb250KGZvbnRDb25maWcpKVxuICAgICAgICAucGlwZShkZXN0KGNvbmZpZy5kZXN0KSk7XG59XG5cbmZvbnQuZGVzY3JpcHRpb24gPSBgR2VuZXJhdGUgd2ViIGZvbnQgcGFja2FnZSBmcm9tIHR0ZiBhbmQgb3RmIGZpbGVzLmA7Il19