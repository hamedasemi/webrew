'use strict';

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _fs = require('fs');

var _unzip = require('unzip');

var _helpers = require('../../../shared/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WD = process.env.PWD;

_request2.default.get('https://github.com/webrew/web-essentials/archive/master.zip').on('error', function (err) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvQHdlYnJldy9zb3VyY2UtYWRkL2FkZC5qcyJdLCJuYW1lcyI6WyJXRCIsInByb2Nlc3MiLCJlbnYiLCJQV0QiLCJnZXQiLCJvbiIsImVyciIsInBpcGUiLCJlbnRyeSIsImZpbGVOYW1lIiwicGF0aCIsIm15bmFtZSIsInNwbGl0IiwidHlwZSIsInNpemUiLCJhdXRvZHJhaW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUVBLElBQUlBLEtBQUtDLFFBQVFDLEdBQVIsQ0FBWUMsR0FBckI7O0FBRUEsa0JBQ0tDLEdBREwsQ0FDUyw2REFEVCxFQUVLQyxFQUZMLENBRVEsT0FGUixFQUVpQixVQUFDQyxHQUFELEVBQVM7QUFDbEIsd0JBQU1BLEdBQU47QUFDSCxDQUpMLEVBS0tDLElBTEwsQ0FLVSxtQkFMVixFQU1LRixFQU5MLENBTVEsT0FOUixFQU1pQixVQUFDRyxLQUFELEVBQVc7QUFDcEIsUUFBSUMsV0FBV0QsTUFBTUUsSUFBckI7QUFDQSxRQUFJQyxTQUFTRixTQUFTRyxLQUFULENBQWUsR0FBZixFQUFvQixDQUFwQixDQUFiO0FBQ0EsUUFBSUMsT0FBT0wsTUFBTUssSUFBakIsQ0FIb0IsQ0FHRztBQUN2QixRQUFJQyxPQUFPTixNQUFNTSxJQUFqQjtBQUNBLFFBQUlELFNBQVMsTUFBVCxJQUFtQkosYUFBYSxrQ0FBcEMsRUFBd0U7QUFDcEUsNEJBQU1FLE1BQU47QUFDQUgsY0FBTUQsSUFBTixDQUFXLDJCQUFrQlAsS0FBSyxHQUFMLEdBQVdXLE1BQTdCLENBQVg7QUFDSCxLQUhELE1BR087QUFDSEgsY0FBTU8sU0FBTjtBQUNIO0FBQ0osQ0FqQkwiLCJmaWxlIjoiYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdCdcbmltcG9ydCB7IGNyZWF0ZVdyaXRlU3RyZWFtIH0gZnJvbSAnZnMnXG5pbXBvcnQgeyBQYXJzZSB9IGZyb20gJ3VuemlwJ1xuXG5pbXBvcnQgeyBERUJVRywgZGVidWcsIGVycm9yLCBpbmZvIH0gZnJvbSAnfi9zaGFyZWQvaGVscGVycydcblxubGV0IFdEID0gcHJvY2Vzcy5lbnYuUFdEXG5cbnJlcXVlc3RcbiAgICAuZ2V0KCdodHRwczovL2dpdGh1Yi5jb20vd2VicmV3L3dlYi1lc3NlbnRpYWxzL2FyY2hpdmUvbWFzdGVyLnppcCcpXG4gICAgLm9uKCdlcnJvcicsIChlcnIpID0+IHtcbiAgICAgICAgZXJyb3IoZXJyKVxuICAgIH0pXG4gICAgLnBpcGUoUGFyc2UoKSlcbiAgICAub24oJ2VudHJ5JywgKGVudHJ5KSA9PiB7XG4gICAgICAgIHZhciBmaWxlTmFtZSA9IGVudHJ5LnBhdGg7XG4gICAgICAgIGxldCBteW5hbWUgPSBmaWxlTmFtZS5zcGxpdCgnLycpWzFdXG4gICAgICAgIHZhciB0eXBlID0gZW50cnkudHlwZTsgLy8gJ0RpcmVjdG9yeScgb3IgJ0ZpbGUnXG4gICAgICAgIHZhciBzaXplID0gZW50cnkuc2l6ZTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdGaWxlJyAmJiBmaWxlTmFtZSAhPT0gXCJ0aGlzIElTIHRoZSBmaWxlIEknbSBsb29raW5nIGZvclwiKSB7XG4gICAgICAgICAgICBkZWJ1ZyhteW5hbWUpXG4gICAgICAgICAgICBlbnRyeS5waXBlKGNyZWF0ZVdyaXRlU3RyZWFtKFdEICsgJy8nICsgbXluYW1lKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbnRyeS5hdXRvZHJhaW4oKTtcbiAgICAgICAgfVxuICAgIH0pIl19