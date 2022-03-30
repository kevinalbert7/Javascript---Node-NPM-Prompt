//## 01 - Calculator

// - Créez un fichier `calculate.js`
// - Créez une fonction `calculate` qui recevra trois paramètres (deux nombres entiers et un opérateur `+`, `-`, `x`, `/` ou `%`)
// - Créez une condition pour chaque valeur possible de l'opérateur qui retournera le résultat du calcul
// - Affichez le résultat dans la console (vérifiez que pour les arguments `5`, `x` et `4` vous obtenez bien `20`)
// - Vous devrez donner les arguments dans le terminal en appelant le programme alors attention aux paramètres !
    
//     ⇒ Si vous ne donnez pas trois arguments, le programme doit afficher "error" dans la console


const calculate = (n1, n2, op) => {

    switch (op) {
        case "+":
            console.log(n1 + n2)
        case "-":
            console.log(n1 - n2)
        case "x":
            console.log(n1 * n2)
        case "/":
            console.log(n1 / n2)
        case "%":
            console.log(n1 % n2)
        default:
            console.log("Error")
    }
}

const parameters = process.argv.slice(2)
const parameter1 = parseInt(parameters[0])
const parameter2 = parseInt(parameters[1])
const parameter3 = parameters[2]

calculate(parameter1, parameter2, parameter3)
