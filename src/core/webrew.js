import { debug, info } from 'webrew-helpers-log'

import Execute from './execute'

let processArgumentsList = process.argv
let processArgumentsString = JSON.stringify(process.argv)

debug(`Raw process argv:`, processArgumentsString)

// Extract input list out of process arguments
let inputList = processArgumentsList.filter((input) => {
    return !input.search(/[A-Z,a-z,-]/ig)
})

// Extract commands out of input list
let commandsList = inputList.filter((input) => {
    return input.search(/(--|-)/g)
})

// Extract options out of input list
let optionsList = inputList.filter((input) => {
    return !input.search(/(--|-)/g)
})


let category = commandsList[0] || `default`
let command = commandsList[1] || `default`

debug(`Extracted commands list:`, commandsList)
debug(`Extracted options list:`, optionsList)
info(`Category:`, category, `Command:`, command)


let execute = new Execute({
    category: category,
    command: command,
    options: optionsList
})