
import { prompt } from 'inquirer'

prompt([
    {
        type: `checkbox`,
        message: `Select packages to download`,
        name: `package`,
        choices: [
            new inquirer.Separator(`Base`),
            {
                name: `Node.js`
            },
            {
                name: `Aalu`
            },
            new inquirer.Separator(` = The Cheeses = `),
            {
                name: `Mozzarella`,
                checked: true
            },
            {
                name: `Cheddar`
            },
            {
                name: `Parmesan`
            }
        ],
        validate: function (answer) {
            if (answer.length < 1) {
                return `You must choose at least one topping.`
            }
            return true
        }
    }
]).then(function (answers) {
    console.log(JSON.stringify(answers, null, `  `))
})