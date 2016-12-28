'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Execute = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _webrewHelpersLog = require('webrew-helpers-log');

var _crossSpawn = require('cross-spawn');

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Execute = exports.Execute = function Execute(data) {
    (0, _classCallCheck3.default)(this, Execute);

    (0, _webrewHelpersLog.debug)('Constructed:', data);
    (0, _inquirer.prompt)([{
        type: 'checkbox',
        message: 'Select toppings',
        name: 'toppings',
        choices: [new _inquirer2.default.Separator(' = The Meats = '), {
            name: 'Pepperoni'
        }, {
            name: 'Bacon'
        }, new _inquirer2.default.Separator(' = The Cheeses = '), {
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

    try {
        // require(`./../${data.group}/${data.command}`)
        (0, _webrewHelpersLog.debug)('group:', data.group, 'command:', data.command, 'options:', data.options);
        (0, _crossSpawn.spawn)('gulp', ['' + data.command, '--require', 'babel-register', '--gulpfile=./../webrew/src/gulp/index.js', '--cwd=./'], { stdio: 'inherit' });
    } catch (err) {
        (0, _webrewHelpersLog.error)('Make sure command \'' + data.command + '\' and group \'' + data.group + '\' exist.');
        (0, _webrewHelpersLog.error)('Original error:', err);
    }
};

exports.default = Execute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2V4ZWN1dGUuanMiXSwibmFtZXMiOlsiRXhlY3V0ZSIsImRhdGEiLCJ0eXBlIiwibWVzc2FnZSIsIm5hbWUiLCJjaG9pY2VzIiwiU2VwYXJhdG9yIiwiY2hlY2tlZCIsInZhbGlkYXRlIiwiYW5zd2VyIiwibGVuZ3RoIiwidGhlbiIsImFuc3dlcnMiLCJjb25zb2xlIiwibG9nIiwiZ3JvdXAiLCJjb21tYW5kIiwib3B0aW9ucyIsInN0ZGlvIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRWFBLE8sV0FBQUEsTyxHQUNULGlCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsaURBQXNCQSxJQUF0QjtBQUNBLDBCQUFPLENBQ0g7QUFDSUMsd0JBREo7QUFFSUMsa0NBRko7QUFHSUMsd0JBSEo7QUFJSUMsaUJBQVMsQ0FDTCxJQUFJLG1CQUFTQyxTQUFiLG1CQURLLEVBRUw7QUFDSUY7QUFESixTQUZLLEVBS0w7QUFDSUE7QUFESixTQUxLLEVBUUwsSUFBSSxtQkFBU0UsU0FBYixxQkFSSyxFQVNMO0FBQ0lGLDhCQURKO0FBRUlHLHFCQUFTO0FBRmIsU0FUSyxFQWFMO0FBQ0lIO0FBREosU0FiSyxFQWdCTDtBQUNJQTtBQURKLFNBaEJLLENBSmI7QUF3QklJLGtCQUFVLGtCQUFVQyxNQUFWLEVBQWtCO0FBQ3hCLGdCQUFJQSxPQUFPQyxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ25CO0FBQ0g7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7QUE3QkwsS0FERyxDQUFQLEVBZ0NHQyxJQWhDSCxDQWdDUSxVQUFVQyxPQUFWLEVBQW1CO0FBQ3ZCQyxnQkFBUUMsR0FBUixDQUFZLHlCQUFlRixPQUFmLEVBQXdCLElBQXhCLE9BQVo7QUFDSCxLQWxDRDs7QUFxQ0EsUUFBSTtBQUNBO0FBQ0EsK0NBQWdCWCxLQUFLYyxLQUFyQixjQUF3Q2QsS0FBS2UsT0FBN0MsY0FBa0VmLEtBQUtnQixPQUF2RTtBQUNBLHVDQUFjLE1BQ1BoQixLQUFLZSxPQURFLHdGQUFkLEVBTUcsRUFBRUUsZ0JBQUYsRUFOSDtBQU9ILEtBVkQsQ0FXQSxPQUFPQyxHQUFQLEVBQVk7QUFDUiw4REFBNEJsQixLQUFLZSxPQUFqQyx1QkFBd0RmLEtBQUtjLEtBQTdEO0FBQ0Esd0RBQXlCSSxHQUF6QjtBQUNIO0FBQ0osQzs7a0JBR1VuQixPIiwiZmlsZSI6ImV4ZWN1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGRlYnVnLCBlcnJvciB9IGZyb20gJ3dlYnJldy1oZWxwZXJzLWxvZydcbmltcG9ydCB7IHNwYXduIH0gZnJvbSAnY3Jvc3Mtc3Bhd24nXG5pbXBvcnQgaW5xdWlyZXIsIHsgcHJvbXB0IH0gZnJvbSAnaW5xdWlyZXInXG5cbmV4cG9ydCBjbGFzcyBFeGVjdXRlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGRlYnVnKGBDb25zdHJ1Y3RlZDpgLCBkYXRhKVxuICAgICAgICBwcm9tcHQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IGBjaGVja2JveGAsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFNlbGVjdCB0b3BwaW5nc2AsXG4gICAgICAgICAgICAgICAgbmFtZTogYHRvcHBpbmdzYCxcbiAgICAgICAgICAgICAgICBjaG9pY2VzOiBbXG4gICAgICAgICAgICAgICAgICAgIG5ldyBpbnF1aXJlci5TZXBhcmF0b3IoYCA9IFRoZSBNZWF0cyA9IGApLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgUGVwcGVyb25pYFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgQmFjb25gXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5ldyBpbnF1aXJlci5TZXBhcmF0b3IoYCA9IFRoZSBDaGVlc2VzID0gYCksXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGBNb3p6YXJlbGxhYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYENoZWRkYXJgXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGBQYXJtZXNhbmBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uIChhbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlci5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFlvdSBtdXN0IGNob29zZSBhdCBsZWFzdCBvbmUgdG9wcGluZy5gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF0pLnRoZW4oZnVuY3Rpb24gKGFuc3dlcnMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGFuc3dlcnMsIG51bGwsIGAgIGApKVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIHJlcXVpcmUoYC4vLi4vJHtkYXRhLmdyb3VwfS8ke2RhdGEuY29tbWFuZH1gKVxuICAgICAgICAgICAgZGVidWcoYGdyb3VwOmAsIGRhdGEuZ3JvdXAsIGBjb21tYW5kOmAsIGRhdGEuY29tbWFuZCwgYG9wdGlvbnM6YCwgZGF0YS5vcHRpb25zKVxuICAgICAgICAgICAgc3Bhd24oYGd1bHBgLCBbXG4gICAgICAgICAgICAgICAgYCR7ZGF0YS5jb21tYW5kfWAsXG4gICAgICAgICAgICAgICAgYC0tcmVxdWlyZWAsXG4gICAgICAgICAgICAgICAgYGJhYmVsLXJlZ2lzdGVyYCxcbiAgICAgICAgICAgICAgICBgLS1ndWxwZmlsZT0uLy4uL3dlYnJldy9zcmMvZ3VscC9pbmRleC5qc2AsXG4gICAgICAgICAgICAgICAgYC0tY3dkPS4vYCxcbiAgICAgICAgICAgIF0sIHsgc3RkaW86IGBpbmhlcml0YCB9KVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGVycm9yKGBNYWtlIHN1cmUgY29tbWFuZCAnJHtkYXRhLmNvbW1hbmR9JyBhbmQgZ3JvdXAgJyR7ZGF0YS5ncm91cH0nIGV4aXN0LmApXG4gICAgICAgICAgICBlcnJvcihgT3JpZ2luYWwgZXJyb3I6YCwgZXJyKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGVjdXRlIl19