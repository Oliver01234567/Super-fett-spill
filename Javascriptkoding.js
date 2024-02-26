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
  console.log(movePlayer)
  speedNivå()
}
function speedNivå(){
  if(movePlayer === 6){
    speed1.style.backgroundColor ="red"
  }
  if(movePlayer === 8){
    speed2.style.backgroundColor ="red"
  }
  if(movePlayer === 10){
    speed3.style.backgroundColor ="red"
  }
  console.log(movePlayer)
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

      showChestPopup(chest);
    }
  });
}

let currentPopup = null;

function showChestPopup(chest) {
  if (currentPopup) {
    document.body.removeChild(currentPopup);
    currentPopup = null;
  }

  const popup = document.createElement("div");
  popup.className = "chest-popup";
  popup.innerHTML = `
    <p>Du fant en kiste! Vil du åpne den??</p>
    <button onclick="openChest('${chest.id}')">Åpne</button>
    <button onclick="declineChest('${chest.id}')">Avslå</button>
  `;

  document.body.appendChild(popup);
  currentPopup = popup;
}

let tilfPenger = 0;

function openChest(chestId) {
  tilfPenger = Math.floor(Math.random() * 9900) + 100;
  showAlert("Du fant " + tilfPenger + " penger", "success");
  money += tilfPenger;
  updateMoneyAmount();
  if (currentPopup) {
    document.body.removeChild(currentPopup);
    currentPopup = null;
  }
}

function declineChest(chestId) {
  if (currentPopup) {
    document.body.removeChild(currentPopup);
    currentPopup = null;
  }
}

function showAlert(message, type) {
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert ' + type;
  alertDiv.textContent = message;
  document.body.appendChild(alertDiv);

  setTimeout(function () {
      alertDiv.remove();
  }, 2000);
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
    character.style.left = "1px";
    character.style.top = "1px";
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

// Npc greier
const npcDialog = document.getElementById("npc-dialog");
const npcMessage = document.getElementById("npc-message");
const npcYesBtn = document.getElementById("npc-yes");
const npcNoBtn = document.getElementById("npc-no");

npc.addEventListener("click", () => {
  showNPCDialog("Hi there! Would you like to talk?");
});

function showNPCDialog(message) {
  console.log("showNPCDialog called");

  npcMessage.textContent = message;
  npcDialog.style.display = "block";
  npcYesBtn.style.display = "block"; 
  npcNoBtn.style.display = "block"; 

  console.log("showNPCDialog completed");
}

function hideNPCDialog() {
  console.log("hideNPCDialog called");

  setTimeout(function () {
    npcDialog.style.display = "none";
    npcYesBtn.style.display = "none"; 
    npcNoBtn.style.display = "none";

    console.log("hideNPCDialog completed");
  }, 1); 
}

function handleNPCResponse(response) {
  console.log("handleNPCResponse triggered with response:", response);

  if (response) {
    console.log("Player said 'Yes'");
    hideNPCDialog(); 

    setTimeout(function () {
      showNPCDialog("Great! Would you like to buy a randomized skin box for 1000 money?");
      npcYesBtn.style.display = "Purchase"; 
      npcNoBtn.textContent = "Cancel"; 
    }, 2);
  } else {
    console.log("Player said 'No'");
    hideNPCDialog();
  }
}

npcYesBtn.addEventListener("click", () => {
  showNPCDialog("Great! Please confirm your purchase.");
  npcYesBtn.style.display = "none"; 
  npcNoBtn.textContent = "Cancel"; 
});

npcNoBtn.addEventListener("click", () => {
  hideNPCDialog();
});

// function buySkinBox() {
  // Logic to deduct money and grant a random skin
  // Update the money variable and call updateMoneyAmount() accordingly
  // You can use setTimeout or other logic to simulate a delay if needed
//  money -= 1000;
//  updateMoneyAmount();
//  showNPCDialog("Congratulations! You got a new skin!");
//  npcYesBtn.style.display = "block"; 
//}