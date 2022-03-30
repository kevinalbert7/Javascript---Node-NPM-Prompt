const tableUtils = require("./table-utils")
console.log(tableUtils)

const parameters = process.argv.slice(2)
const parameter1 = parseInt(parameters[0])
const parameter2 = parseInt(parameters[1])

tableUtils.multiply(parameter1)
console.log("")
tableUtils.addition(parameter2)