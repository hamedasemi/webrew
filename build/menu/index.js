'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _inquirer = require('inquirer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _inquirer.prompt)([{
    type: 'checkbox',
    message: 'Select packages to download',
    name: 'package',
    choices: [new inquirer.Separator('Base'), {
        name: 'Node.js'
    }, {
        name: 'Aalu'
    }, new inquirer.Separator(' = The Cheeses = '), {
        name: 'Mozzarella',
        checked: true
    }, {
        name: 'Cheddar'
    }, {
        name: 'Parmesan'
    }],
    validate: function validate(answer) {
        if (answer.length < 1) {
            return 'You must choose at least one topping.';
        }
        return true;
    }
}]).then(function (answers) {
    console.log((0, _stringify2.default)(answers, null, '  '));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL21lbnUvaW5kZXguanMiXSwibmFtZXMiOlsidHlwZSIsIm1lc3NhZ2UiLCJuYW1lIiwiY2hvaWNlcyIsImlucXVpcmVyIiwiU2VwYXJhdG9yIiwiY2hlY2tlZCIsInZhbGlkYXRlIiwiYW5zd2VyIiwibGVuZ3RoIiwidGhlbiIsImFuc3dlcnMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUVBLHNCQUFPLENBQ0g7QUFDSUEsb0JBREo7QUFFSUMsMENBRko7QUFHSUMsbUJBSEo7QUFJSUMsYUFBUyxDQUNMLElBQUlDLFNBQVNDLFNBQWIsUUFESyxFQUVMO0FBQ0lIO0FBREosS0FGSyxFQUtMO0FBQ0lBO0FBREosS0FMSyxFQVFMLElBQUlFLFNBQVNDLFNBQWIscUJBUkssRUFTTDtBQUNJSCwwQkFESjtBQUVJSSxpQkFBUztBQUZiLEtBVEssRUFhTDtBQUNJSjtBQURKLEtBYkssRUFnQkw7QUFDSUE7QUFESixLQWhCSyxDQUpiO0FBd0JJSyxjQUFVLGtCQUFVQyxNQUFWLEVBQWtCO0FBQ3hCLFlBQUlBLE9BQU9DLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkI7QUFDSDtBQUNELGVBQU8sSUFBUDtBQUNIO0FBN0JMLENBREcsQ0FBUCxFQWdDR0MsSUFoQ0gsQ0FnQ1EsVUFBVUMsT0FBVixFQUFtQjtBQUN2QkMsWUFBUUMsR0FBUixDQUFZLHlCQUFlRixPQUFmLEVBQXdCLElBQXhCLE9BQVo7QUFDSCxDQWxDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSAnaW5xdWlyZXInXG5cbnByb21wdChbXG4gICAge1xuICAgICAgICB0eXBlOiBgY2hlY2tib3hgLFxuICAgICAgICBtZXNzYWdlOiBgU2VsZWN0IHBhY2thZ2VzIHRvIGRvd25sb2FkYCxcbiAgICAgICAgbmFtZTogYHBhY2thZ2VgLFxuICAgICAgICBjaG9pY2VzOiBbXG4gICAgICAgICAgICBuZXcgaW5xdWlyZXIuU2VwYXJhdG9yKGBCYXNlYCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogYE5vZGUuanNgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGBBYWx1YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5ldyBpbnF1aXJlci5TZXBhcmF0b3IoYCA9IFRoZSBDaGVlc2VzID0gYCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogYE1venphcmVsbGFgLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogYENoZWRkYXJgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGBQYXJtZXNhbmBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uIChhbnN3ZXIpIHtcbiAgICAgICAgICAgIGlmIChhbnN3ZXIubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgWW91IG11c3QgY2hvb3NlIGF0IGxlYXN0IG9uZSB0b3BwaW5nLmBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5dKS50aGVuKGZ1bmN0aW9uIChhbnN3ZXJzKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYW5zd2VycywgbnVsbCwgYCAgYCkpXG59KSJdfQ==