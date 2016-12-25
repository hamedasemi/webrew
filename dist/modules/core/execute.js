'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Execute = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _helpersLog = require('../@webrew/helpers-log');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Execute = exports.Execute = function Execute(data) {
    (0, _classCallCheck3.default)(this, Execute);

    (0, _helpersLog.debug)(data.category, data.command, data.options);
    require('./../@webrew/' + data.category + '-' + data.command);
};

exports.default = Execute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vZHVsZXMvY29yZS9leGVjdXRlLmpzIl0sIm5hbWVzIjpbIkV4ZWN1dGUiLCJkYXRhIiwiY2F0ZWdvcnkiLCJjb21tYW5kIiwib3B0aW9ucyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7SUFFYUEsTyxXQUFBQSxPLEdBQ1QsaUJBQVlDLElBQVosRUFBaUI7QUFBQTs7QUFDYiwyQkFBTUEsS0FBS0MsUUFBWCxFQUFxQkQsS0FBS0UsT0FBMUIsRUFBbUNGLEtBQUtHLE9BQXhDO0FBQ0FDLDhCQUF3QkosS0FBS0MsUUFBN0IsU0FBeUNELEtBQUtFLE9BQTlDO0FBQ0gsQzs7a0JBR1VILE8iLCJmaWxlIjoiZXhlY3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZGVidWcsIGVycm9yLCBpbmZvIH0gZnJvbSAnfi9tb2R1bGVzL0B3ZWJyZXcvaGVscGVycy1sb2cnXG5cbmV4cG9ydCBjbGFzcyBFeGVjdXRlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKXtcbiAgICAgICAgZGVidWcoZGF0YS5jYXRlZ29yeSwgZGF0YS5jb21tYW5kLCBkYXRhLm9wdGlvbnMpXG4gICAgICAgIHJlcXVpcmUoYC4vLi4vQHdlYnJldy8ke2RhdGEuY2F0ZWdvcnl9LSR7ZGF0YS5jb21tYW5kfWApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGVjdXRlIl19