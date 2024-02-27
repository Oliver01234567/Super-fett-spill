const characterP = document.querySelector("#character img")

let choosenSkin = 0
choosenSkin = parseInt(localStorage.getItem("choosenSkin")) || 0




//Rasmus er 0
//Anden er 1


if (choosenSkin == 0) {
  characterP.src = "Bilder/Rasmus.png"
}

if (choosenSkin == 1) {
  characterP.src = "Bilder/playerIcon1.png"
}


//variabel for fiender
let opponent = 0
const enemy0 = document.getElementById("enemy0")
enemy0.addEventListener("click", fightAnden)

const enemy1 = document.getElementById("enemy1")
enemy1.addEventListener("click", fightJonas)

//de ulike fiendene
function fightAnden() {
  opponent = 0
  localStorage.setItem("opponent", opponent);

}

function fightJonas() {
  opponent = 1
  localStorage.setItem("opponent", opponent)
}
