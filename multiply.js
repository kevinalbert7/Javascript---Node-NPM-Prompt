// ## 02 - Table

// - Créez un fichier `multiply.js`
// - Créez une fonction `multiply` qui recevra un paramètre (un nombre entier)
// - Faites en sorte que la fonction affiche la table de multiplication de ce nombre dans la console (de 1 à 10) ligne par ligne
// - Vous devrez donner l'argument dans le terminal en appelant le programme
    
//     ⇒ Si vous ne donnez pas d'argument, le programme doit afficher "error" dans la console

const multiply = (n) => {
    // const result = 0

    for (var i = 0; i <= 10; i++) {
        var result = n * i
        console.log(`${i} x ${n} = ${result}`)
    }
}

const parameters = process.argv.slice(2)
const parameter = parseInt(parameters[0])

if (parameters.length === 0) {
  console.log("Error")
} else {
  multiply(parameter)
}














// function multiply(number) {
    
//     for(var i = 1; i <= 10; i++) {
//        var result = number * i
//         console.log(`${number} x ${i} = ${result}`)
//     }
// }

// var parameters = process.argv.slice(2)

// var parameter = parseInt(paramater[0])

// multiply(parameter1)
