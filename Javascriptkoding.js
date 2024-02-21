//interne notater:
//Husk å markere alt i js og css slik at man enklere kan se hva som er hva

//variabel for skins
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



//Anden er 0
//Jonas er 1




//Bevegelse 
var movement = {
  "ArrowLeft": false,
  "ArrowRight": false,
  "ArrowUp": false,
  "ArrowDown": false,
  "a": false,
  "d": false,
  "w": false,
  "s": false,
  "A": false,
  "D": false,
  "W": false,
  "S": false,

};

//Variabel for movement
let movePlayer = 4

function checkForMove10() {
  if (movePlayer >= 9) {
    clearInterval(move10)

    const speedButton = document.getElementById("speedButton")
    speedButton.innerHTML = "Maksfart er nådd"
  }
}

function SpeedIncrease() {

  if (movePlayer >= 9) {
    movePlayer = 10

  }
  else {
    movePlayer = movePlayer + 2
  }
}

const move10 = setInterval(checkForMove10, 1)


function move() {
  var character = document.getElementById("character");
  var currentLeft = parseInt(character.style.left) || 0;
  var currentTop = parseInt(character.style.top) || 0;

  if (movement.ArrowLeft || movement.a || movement.A) {
    character.style.left = (currentLeft - movePlayer) + "px";
    character.style.transform = "scaleX(-1)"
    checkCharacterPosition();
    checkForChests()
  }
  if (movement.ArrowRight || movement.d || movement.D) {
    character.style.left = (currentLeft + movePlayer) + "px";
    character.style.transform = "scaleX(1)"
    checkCharacterPosition();
    checkForChests()
  }
  if (movement.ArrowUp || movement.w || movement.W) {
    character.style.top = (currentTop - movePlayer) + "px";
    checkCharacterPosition();
    checkForChests()
  }
  if (movement.ArrowDown || movement.s || movement.S) {
    character.style.top = (currentTop + movePlayer) + "px";
    checkCharacterPosition();
    checkForChests()
  }

  requestAnimationFrame(move);
}

document.addEventListener("keydown", function (event) {
  movement[event.key] = true;
});

document.addEventListener("keyup", function (event) {
  movement[event.key] = false;
});

move();


//Chest
function checkForChests() {
  var character = document.getElementById("character");
  var chests = document.querySelectorAll(".Chest");
  var characterPlassering = character.getBoundingClientRect();
  chests.forEach(function (chest) {
    var chestPlassering = chest.getBoundingClientRect();

    if (
      characterPlassering.right > chestPlassering.left &&
      characterPlassering.left < chestPlassering.right &&
      characterPlassering.bottom > chestPlassering.top &&
      characterPlassering.top < chestPlassering.bottom
    ) {
      chestFound();
      showChestPopup(chest);
    }
  });
}


function chestFound() {
  console.log("Chest found!");
}

function showChestPopup(chest) {
  var popup = document.createElement("div");
  popup.className = "chest-popup";
  popup.innerHTML = `
    <p>You found a chest! Do you want to open it?</p>
    <button onclick="openChest('${chest.id}')">Open</button>
    <button onclick="declineChest('${chest.id}')">Decline</button>
  `;

  document.body.appendChild(popup);
}

function openChest(chestId) {
  // Add your logic for what happens when the chest is opened
  console.log(`Opened chest with ID: ${chestId}`);
  document.body.removeChild(document.querySelector(".chest-popup"));
}

function declineChest(chestId) {
  // Add your logic for what happens when the chest is declined
  console.log(`Declined chest with ID: ${chestId}`);
  document.body.removeChild(document.querySelector(".chest-popup"));
}


//Hav
function die() {
  console.log("du døde")
  showPopup("Du kan ikke forlatte øya, GÅ TILBAKE")
  resetCharacterPosition();
}

function checkCharacterPosition() {
  var character = document.getElementById("character");
  var island = document.getElementById("øy");
  var characterPlassering = character.getBoundingClientRect();
  var islandPlassering = island.getBoundingClientRect();

  if (
    characterPlassering.right > islandPlassering.right ||
    characterPlassering.left < islandPlassering.left ||
    characterPlassering.bottom > islandPlassering.bottom ||
    characterPlassering.top < islandPlassering.top
  ) {
    die();
  }
}

// Popup, Oliver
function showPopup(message) {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = message;

  document.body.appendChild(popup);

  // Lukk popup etter 2 sekunder
  setTimeout(function () {
    document.body.removeChild(popup);
  }, 2000);
}


//meny

function toggleFlexBox() {
  console.log("trykk")
  var flexBoxContainer = document.getElementById('flexBoxContainer');
  if (flexBoxContainer.style.display === 'none' || flexBoxContainer.style.display === '') {
    flexBoxContainer.style.display = 'flex';
    menyknapp.innerHTML = ("x")
    


  } else {
    flexBoxContainer.style.display = 'none';
    menyknapp.innerHTML = ("Menu")
    skinSelect.style.display = "none"
    statsSelect.style.display = "none"

  }

}




// Teleportering når man går på vannet, Oliver
function isCharacterOnWater(character, island) {
  const characterPlassering = character.getBoundingClientRect();
  const islandPlassering = island.getBoundingClientRect();

  // Sjekk om karakteren er på det lyseblå området
  return (
    characterPlassering.right > islandPlassering.right ||
    characterPlassering.left < islandPlassering.left ||
    characterPlassering.bottom > islandPlassering.bottom ||
    characterPlassering.top < islandPlassering.top
  );
}

function resetCharacterPosition() {
  const character = document.getElementById("character");
  const island = document.getElementById("øy");
  const onWater = isCharacterOnWater(character, island);


  // Endre antall pixler for å endre hvor man blir teleportert
  if (onWater) {
    character.style.left = "500px";
    character.style.top = "500px";
  }
}

//Penger
let money = 100;

const moneyAmount = document.getElementById("moneyAmount");
const moneyBox = document.getElementById("moneyBox");
const freeMoneyBtn = document.getElementById("freeMoneyButton");

function updateMoneyAmount() {
  moneyAmount.innerText = formatNumber(money);
}

function formatNumber(number) {
  if (number >= 1000000) {
    return number.toExponential(2);
  }
  else {
    return number.toFixed(0);
  }
}

freeMoneyBtn.addEventListener('click', freeMoney);

function freeMoney() {
  money += 10000;
  updateMoneyAmount();
}


//skins section


function ChoosenDuck() {
  characterP.src = "Bilder/playerIcon1.png"
  choosenSkin = 1
  localStorage.setItem("choosenSkin", choosenSkin);

}

function ChoosenRasmus() {
  characterP.src = "Bilder/Rasmus.png"
  choosenSkin = 0
  localStorage.setItem("choosenSkin", choosenSkin);
}

const skinsS = document.getElementById("skins")
const statsS = document.getElementById("stats")



//skins section
function showSkins() {
  skinSelect.style.display = "block"
  skinSelect.style.display = "flex"


}

function showStats() {
  statsSelect.style.display = "block"
  statsSelect.style.display = "flex"

}

function backToGame() {

  skinSelect.style.display = "none"
  statsSelect.style.display = "none"

}