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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbInR5cGUiLCJtZXNzYWdlIiwibmFtZSIsImNob2ljZXMiLCJpbnF1aXJlciIsIlNlcGFyYXRvciIsImNoZWNrZWQiLCJ2YWxpZGF0ZSIsImFuc3dlciIsImxlbmd0aCIsInRoZW4iLCJhbnN3ZXJzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7QUFFQSxzQkFBTyxDQUNIO0FBQ0lBLG9CQURKO0FBRUlDLDBDQUZKO0FBR0lDLG1CQUhKO0FBSUlDLGFBQVMsQ0FDTCxJQUFJQyxTQUFTQyxTQUFiLFFBREssRUFFTDtBQUNJSDtBQURKLEtBRkssRUFLTDtBQUNJQTtBQURKLEtBTEssRUFRTCxJQUFJRSxTQUFTQyxTQUFiLHFCQVJLLEVBU0w7QUFDSUgsMEJBREo7QUFFSUksaUJBQVM7QUFGYixLQVRLLEVBYUw7QUFDSUo7QUFESixLQWJLLEVBZ0JMO0FBQ0lBO0FBREosS0FoQkssQ0FKYjtBQXdCSUssY0FBVSxrQkFBVUMsTUFBVixFQUFrQjtBQUN4QixZQUFJQSxPQUFPQyxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ25CO0FBQ0g7QUFDRCxlQUFPLElBQVA7QUFDSDtBQTdCTCxDQURHLENBQVAsRUFnQ0dDLElBaENILENBZ0NRLFVBQVVDLE9BQVYsRUFBbUI7QUFDdkJDLFlBQVFDLEdBQVIsQ0FBWSx5QkFBZUYsT0FBZixFQUF3QixJQUF4QixPQUFaO0FBQ0gsQ0FsQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHByb21wdCB9IGZyb20gJ2lucXVpcmVyJ1xuXG5wcm9tcHQoW1xuICAgIHtcbiAgICAgICAgdHlwZTogYGNoZWNrYm94YCxcbiAgICAgICAgbWVzc2FnZTogYFNlbGVjdCBwYWNrYWdlcyB0byBkb3dubG9hZGAsXG4gICAgICAgIG5hbWU6IGBwYWNrYWdlYCxcbiAgICAgICAgY2hvaWNlczogW1xuICAgICAgICAgICAgbmV3IGlucXVpcmVyLlNlcGFyYXRvcihgQmFzZWApLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGBOb2RlLmpzYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBgQWFsdWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXcgaW5xdWlyZXIuU2VwYXJhdG9yKGAgPSBUaGUgQ2hlZXNlcyA9IGApLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGBNb3p6YXJlbGxhYCxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGBDaGVkZGFyYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBgUGFybWVzYW5gXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAoYW5zd2VyKSB7XG4gICAgICAgICAgICBpZiAoYW5zd2VyLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYFlvdSBtdXN0IGNob29zZSBhdCBsZWFzdCBvbmUgdG9wcGluZy5gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXSkudGhlbihmdW5jdGlvbiAoYW5zd2Vycykge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGFuc3dlcnMsIG51bGwsIGAgIGApKVxufSkiXX0=