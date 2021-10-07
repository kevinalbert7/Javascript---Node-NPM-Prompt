var tableUtils = require("./table-utils")

console.log(tableUtils)

var parameters = process.argv.slice(2)
var paremeter1 = parseInt(parameter[0])
var parameter2 = parseInt(parameter[1])

tableUtils.multiply(parameter1)
console.log("")
tableUtils.addition(parameter2)