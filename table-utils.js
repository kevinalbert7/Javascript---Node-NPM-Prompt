// ## 03 - Separate Table

// - Créez un fichier `table-utils.js`
// - Mettez votre fonction `multiply` dans ce fichier, et ajouter en une deuxième `addition` qui reprend le même principe mais avec une addition au lieu d'une multiplication
// - Exportez les deux fonctions graces aux modules
// - Créer un fichier `index.js` et importez les les fonctions de `table-utils.js`
// - Affichez la table d'addition et multiplication en executant le fichier `index.js`avec les bons arguments dans le terminal

function multiply(number) {
    
    for(var i = 1; i <= 10; i++) {
       var result = number * i
        console.log(`${number} * ${i} = ${result}`)
    }
}

function addition(number){
    for(var i = 1; i <= 10; i++) {
        var result = number + i
         console.log(`${number} + ${i} = ${result}`)
     }
 }

 module.exports = {
     multiply,
     addition
 }

