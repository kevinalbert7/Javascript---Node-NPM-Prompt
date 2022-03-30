//## 01 - Calculator

// - Créez un fichier `calculate.js`
// - Créez une fonction `calculate` qui recevra trois paramètres (deux nombres entiers et un opérateur `+`, `-`, `x`, `/` ou `%`)
// - Créez une condition pour chaque valeur possible de l'opérateur qui retournera le résultat du calcul
// - Affichez le résultat dans la console (vérifiez que pour les arguments `5`, `x` et `4` vous obtenez bien `20`)
// - Vous devrez donner les arguments dans le terminal en appelant le programme alors attention aux paramètres !
    
//     ⇒ Si vous ne donnez pas trois arguments, le programme doit afficher "error" dans la console


const calculate = (a, b, c) => {

    switch (c) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "x":
            return a * b
        case "/":
            return a / b
        case "%":
            return a % b
        default:
            return "error"
    }
}

console.log(calculate(20, 4, "/"))
console.log(calculate(5, 4))







// function calculate(number1, operator, number2){
//     var result = "number1" + "operator" + "number2"

//     switch (operator) {
//         case "+":
//             result = number1 + number2
//             break;
//         case "-":
//             result = number1 - number2
//             break;
//         case "*":
//             result = number1 * number2
//             break;
//         case "/":
//             result = number1 / number2
//             break;
//         case "%":
//             result = number1 % number2
//             break;
//     }
// }

// console.log(calculate(`${number1} + ${operator} + ${number2}`))
