var prompt = require("prompt")

prompt.start()

const min = 1
const max = 100
const mysteryNum = Math.floor(Math.random() * (max - min + 1) + min)

const play = () => {

  prompt.get({ name: "play", description: "Quel est le nombre mystere" }, function(err, res) {

    const myNumber = parseInt(res.play)

    if (typeof myNumber !== "number") {
      console.log("Error")
      play()
    } else if (myNumber < mysteryNum) {
      console.log("C'est plus")
      play()
    } else if (myNumber > mysteryNum) {
      console.log("C'est moins")
      play()
    } else if (myNumber === mysteryNum) {
      console.log("Bravo")
    }
    
  })
}

play()