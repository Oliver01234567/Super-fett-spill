const characterP = document.querySelector("#character img")

let choosenSkin = 0
choosenSkin = parseInt(localStorage.getItem("choosenSkin")) || 0




//Thorbjorn er 0
//Anden er 1


if (choosenSkin == 0) {
  characterP.src = "Bilder/Thorbjorn.png"
}

if (choosenSkin == 1) {
  characterP.src = "Bilder/Rasmus.png"
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

//skjekker om en fiende er beseiret
const island = document.getElementById("øy")

let andenDod = 0
andenDod = localStorage.getItem("andenDod")

if(andenDod == 2) {
    island.removeChild(document.querySelector("#enemy0"));
}

let jonasDod = 0
jonasDod = localStorage.getItem("jonasDod")
if(jonasDod == 2) {
    island.removeChild(document.querySelector("#enemy1"));
}