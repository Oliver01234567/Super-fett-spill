//interne notater:
//Husk å markere alt i js og css slik at man enklere kan se hva som er hva

const moneyAmount = document.getElementById("moneyAmount");
let money = 0
money = parseInt(localStorage.getItem("money")) || 0
setInterval(updateMoneyAmount, 100)


const characterP = document.querySelector("#character img")

let choosenSkin = 0
choosenSkin = parseInt(sessionStorage.getItem("choosenSkin")) || 0




//Thorbjorn er 0
//Ramus er 1
//Jonas(skin) er 2

const torbSkin = document.getElementById("torbSkin")
if (choosenSkin == 0) {
  characterP.src = "Bilder/Torbjorn.png"
  torbSkin.style.backgroundColor = "red"
}

const rasmusSkin = document.getElementById("rasmusSkin")
if (choosenSkin == 1) {
  characterP.src = "Bilder/Rasmus.png"
  rasmusSkin.innerText = "Rasmus";
  rasmusSkin.style.backgroundColor = "red"
}

const jonasSkin = document.getElementById("jonasSkin")
if (choosenSkin == 2) {
  characterP.src = "Bilder/Jonas.png"
  jonasSkin.style.backgroundColor = "red"
}

const andSkin = document.getElementById("andSkin")
if (choosenSkin == 3) {
  characterP.src = "Bilder/playerIcon1.png"
  andSkin.style.backgroundColor = "red"
}

//skins section


function ChoosenTorb() {
  characterP.src = "Bilder/Torbjorn.png"
  choosenSkin = 0
  sessionStorage.setItem("choosenSkin", choosenSkin);
  rasmusSkin.style.backgroundColor = "brown"
  jonasSkin.style.backgroundColor = "brown"
  torbSkin.style.backgroundColor = "red"
  andSkin.style.backgroundColor = "brown"

  showAlert("Byttet skin til Thor Bjørn", "success");
}


let chosenRasmus = 0;

chosenRasmus = sessionStorage.getItem("chosenRasmus", chosenRasmus) || 0


function ChoosenRasmus() {
  if (money >= 5000 && chosenRasmus == 0) {
    characterP.src = "Bilder/Rasmus.png";
    choosenSkin = 1;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    money -= 5000;
    spillAvPengeLyd();
    showAlert("Du har kjøpt Rasmus for 5000 penger", "success")
    chosenRasmus = 10;
    sessionStorage.setItem("chosenRasmus", chosenRasmus)
    rasmusSkin.innerText = "Rasmus";
    rasmusSkin.style.backgroundColor = "red"
    jonasSkin.style.backgroundColor = "brown"
    torbSkin.style.backgroundColor = "brown"
    andSkin.style.backgroundColor = "brown"
  } else if (chosenRasmus == 10) {
    rasmusSkin.innerText = "Rasmus";
    characterP.src = "Bilder/Rasmus.png";
    choosenSkin = 1;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    rasmusSkin.style.backgroundColor = "red"
    jonasSkin.style.backgroundColor = "brown"
    torbSkin.style.backgroundColor = "brown"
    andSkin.style.backgroundColor = "brown"
    showAlert("Byttet skin til Rasmus", "success")
  } else {
    showAlert("Du har ikke nok penger for å kjøpe Rasmus ", "error");
    spillAvError()
  }
}

function ChoosenJonas() {
  characterP.src = "Bilder/Jonas.png"
  choosenSkin = 2
  sessionStorage.setItem("choosenSkin", choosenSkin);
  rasmusSkin.style.backgroundColor = "brown"
  jonasSkin.style.backgroundColor = "red"
  torbSkin.style.backgroundColor = "brown"
  andSkin.style.backgroundColor = "brown"
  showAlert("Byttet skin til Jonas", "success");
}

function ChoosenAnd() {
  characterP.src = "Bilder/playerIcon1.png"
  choosenSkin = 3
  sessionStorage.setItem("choosenSkin", choosenSkin);
  rasmusSkin.style.backgroundColor = "brown"
  jonasSkin.style.backgroundColor = "brown"
  torbSkin.style.backgroundColor = "brown"
  andSkin.style.backgroundColor = "red"
  showAlert("Byttet skin til Anden", "success");

}


//fiender
//oppdager fiender
let enemyCheckEnabled = true;
function checkForEnemy() {
  let character = document.getElementById("character");
  let enemies = document.querySelectorAll(".enemy");
  let characterPlassering = character.getBoundingClientRect();
  enemies.forEach(function (enemy) {
    let enemyPlassering = enemy.getBoundingClientRect();

    if (
      characterPlassering.right > enemyPlassering.left &&
      characterPlassering.left < enemyPlassering.right &&
      characterPlassering.bottom > enemyPlassering.top &&
      characterPlassering.top < enemyPlassering.bottom
    ) {
      showEnemyPopup(enemy); // Pass enemy reference to showEnemyPopup
    }
  });
}

let currentEPopup = null;


function showEnemyPopup(enemy) {
  if (!enemyCheckEnabled) return;
  if (currentEPopup) {
    document.body.removeChild(currentEPopup);
    currentEPopup = null;
  }

  const Epopup = document.createElement("div");
  Epopup.className = "enemy-popup";
  Epopup.innerHTML = `
    <p>Du møtte en fiende!! Vil du utfordre han til Holmgang og få alle pengene hans??</p>
    <button onclick="utfordreFiende()">Utfordre</button>
    <button onclick="declineEnemy()">Avslå</button>
  `;

  document.body.appendChild(Epopup);
  currentEPopup = Epopup;
}

function declineEnemy(enemyid) {
  disableEnemies()
  if (currentEPopup) {
    document.body.removeChild(currentEPopup);
    currentEPopup = null;
  }
}

function disableEnemies() {
  enemyCheckEnabled = false;
  setTimeout(enableEnemy, 3000);
}

function enableEnemy() {
  enemyCheckEnabled = true;
}


  //variabler
let opponent = 0
const enemy0 = document.getElementById("enemy0")
enemy0.addEventListener("click", fightAnden)

const enemy1 = document.getElementById("enemy1")
enemy1.addEventListener("click", fightJonas)

//de ulike fiendene
function fightAnden() {
  opponent = 0
  sessionStorage.setItem("opponent", opponent);
  window.location.href = 'Combat/Combat.html';

}

function fightJonas() {
  opponent = 1
  sessionStorage.setItem("opponent", opponent)
  window.location.href = 'Combat/Combat.html';
}



//skjekker om en fiende er beseiret
const island = document.getElementById("øy")

let andenDod = 0
andenDod = sessionStorage.getItem("andenDod")
andSkin.addEventListener("click", ikkeTilgangSkin)

if (andenDod == 2) {
  island.removeChild(document.querySelector("#enemy0"));
  andSkin.addEventListener("click", ChoosenAnd)
  andSkin.removeEventListener("click", ikkeTilgangSkin)
  andSkin.innerText = "Anden"
}

let jonasDod = 0
jonasDod = sessionStorage.getItem("jonasDod")
jonasSkin.addEventListener("click", ikkeTilgangSkin)

function ikkeTilgangSkin() {
  showAlert("Du har ikke tilgang på dette skinnet ennå", "error");

}

if (jonasDod == 2) {
  island.removeChild(document.querySelector("#enemy1"));
  jonasSkin.addEventListener("click", ChoosenJonas)
  jonasSkin.removeEventListener("click", ikkeTilgangSkin)
  jonasSkin.innerText = "Jonas"
}





//funksjon random numre
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// randome trær
function generateTrees(numTrees) {
  let map = document.getElementById('øy');
  let mapWidth = map.offsetWidth;
  let mapHeight = map.offsetHeight;

  // definer pÅ grønt område av map
  let greenAreaWidth = mapWidth * 0.75;
  let greenAreaHeight = mapHeight * 0.75;

  for (let i = 0; i < numTrees; i++) {
    let tree = document.createElement('div');
    tree.classList.add('tree');

    let img = document.createElement('img');
    img.src = 'Bilder/tre.png';
    img.alt = 'tree';

    // random posisjon
    // let xPos = getRandomNumber(0, greenAreaWidth - 30);
    // let yPos = getRandomNumber(0, greenAreaHeight - 30);
    let xPos = ( (i+1) * 53773) % (greenAreaWidth - 30);
    let yPos = ( (i+1) * 767765) % (greenAreaHeight - 30);
    img.style.left = xPos + 'px';
    img.style.top = yPos + 'px';
  
    tree.appendChild(img);
    map.appendChild(tree);
  }
}

// random tre når siden loader
window.onload = function () {
  generateTrees(20);
};


//Bevegelse 
let movement = {
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

let upgradeSpeed = 1000;

const speedUpg = document.getElementById("speedUpg");

function SpeedIncrease() {
  if (movePlayer < 10 && money >= upgradeSpeed) {
    movePlayer += 2;
    money -= upgradeSpeed;
    upgradeSpeed *= 2;
    speedNivå()
    spillAvPengeLyd()
  } else if (movePlayer == 10) {
    showAlert("Maksfart er nådd ", "error")
  } else {
    showAlert("Du har ikke nok penger", "error")
  }
  console.log(movePlayer)
}
function speedNivå() {
  if (movePlayer === 6) {
    speed1.style.backgroundColor = "blue"
    showAlert("Fart oppgradert for " + upgradeSpeed + " penger. Ny fart: " + movePlayer, "success")
    speedUpg.innerText = formatNumber(upgradeSpeed);
  }
  if (movePlayer === 8) {
    speed2.style.backgroundColor = "blue"
    showAlert("Fart oppgradert for " + upgradeSpeed + " penger. Ny fart: " + movePlayer, "success")
    speedUpg.innerText = formatNumber(upgradeSpeed);
  }
  if (movePlayer === 10) {
    speed3.style.backgroundColor = "blue"
    showAlert("Fart oppgradert for " + upgradeSpeed + " penger. Ny fart: " + movePlayer, "success")
    const speedButton = document.getElementById("speedButton")
    speedUpg.innerText = formatNumber(upgradeSpeed);
    speedButton.innerHTML = "Maksfart er nådd"
  }
  console.log(movePlayer)
}

let posisjonHoyde = 1
let posisjonBredde = 1
posisjonHoyde = sessionStorage.getItem("posisjonHoyde") || 1
posisjonBredde = sessionStorage.getItem("posisjonBredde") || 1
character.style.left = posisjonBredde + "px";
character.style.top = posisjonHoyde + "px";


function move() {
  let character = document.getElementById("character");
  let currentLeft = parseInt(character.style.left) || 0;
  let currentTop = parseInt(character.style.top) || 0;

  if (movement.ArrowLeft || movement.a || movement.A) {
    posisjonBredde = currentLeft - movePlayer
    sessionStorage.setItem("posisjonBredde", posisjonBredde)
    character.style.left = posisjonBredde + "px";
    character.style.transform = "scaleX(-1)"
    checkCharacterPosition();
    checkForChests()
    checkForEnemy()
  }
  if (movement.ArrowRight || movement.d || movement.D) {
    posisjonBredde = currentLeft + movePlayer
    sessionStorage.setItem("posisjonBredde", posisjonBredde)
    character.style.left = posisjonBredde + "px";
    character.style.transform = "scaleX(1)"
    checkCharacterPosition();
    checkForChests()
    checkForEnemy()
  }
  if (movement.ArrowUp || movement.w || movement.W) {
    posisjonHoyde = currentTop - movePlayer
    sessionStorage.setItem("posisjonHoyde", posisjonHoyde)
    character.style.top = posisjonHoyde + "px";
    checkCharacterPosition();
    checkForChests()
    checkForEnemy()
  }
  if (movement.ArrowDown || movement.s || movement.S) {
    posisjonHoyde = currentTop + movePlayer
    sessionStorage.setItem("posisjonHoyde", posisjonHoyde)
    character.style.top = posisjonHoyde + "px";
    checkCharacterPosition();
    checkForChests()
    checkForEnemy()
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

// Health

let plyHealth = parseInt(sessionStorage.getItem("healthIs")) || 30

let upgradeHealth = 1000;

const healthUpg = document.getElementById("healthUpg");

function healthLevelIndicator() {
  if (plyHealth >= 33) {
    health1.style.backgroundColor = "green"
  }
  if (plyHealth >= 36) {
    health2.style.backgroundColor = "green"
  }
  if (plyHealth >= 39) {
    health3.style.backgroundColor = "green"
  }
  if (plyHealth >= 42) {
    health4.style.backgroundColor = "green"
  }
  if (plyHealth >= 45) {
    health5.style.backgroundColor = "green"
    const healthButton = document.getElementById("healthButton")
    healthButton.innerHTML = "Maks health er nådd"
  }

}
document.addEventListener('DOMContentLoaded', function () {
  healthLevelIndicator()
});


healthButton.addEventListener("click", healthIncrease)

function healthIncrease() {
  if (plyHealth < 45 && money >= upgradeHealth) {
    plyHealth += 3;
    money -= upgradeHealth;
    upgradeHealth += 2000;
    healthLevelIndicator()
    spillAvPengeLyd()
    sessionStorage.setItem("healthIs", plyHealth);
    showAlert("Liv oppgradert for " + upgradeHealth + " penger. Ny liv: " + plyHealth, "success")
    healthUpg.innerText = formatNumber(upgradeHealth);
  } else if (plyHealth == 45) {
    showAlert("Maks liv er nådd ", "error")
  } else {
    showAlert("Du har ikke nok penger", "error")
  }
}

liv0.addEventListener("click", healthblir0)

function healthblir0() {
  plyHealth = 30
  health1.style.backgroundColor = "white"
  health2.style.backgroundColor = "white"
  health3.style.backgroundColor = "white"
  health4.style.backgroundColor = "white"
  health5.style.backgroundColor = "white"
  console.log("trykk " + plyHealth)
  sessionStorage.setItem("healthIs", plyHealth);

}

// damage
let playerDamage = parseInt(sessionStorage.getItem("damageIs")) || 1
damageButton.addEventListener("click", damageIncrease)

let upgradeDmg = 1000;
const dmgUpg = document.getElementById("dmgUpg");

function damageIndicator() {
  if (playerDamage >= 1.25) {
    damage1.style.backgroundColor = "red";
  } else {
    damage1.style.backgroundColor = "white";
  }
  if (playerDamage >= 1.5) {
    damage2.style.backgroundColor = "red";
  } else {
    damage2.style.backgroundColor = "white";
  }
  if (playerDamage >= 1.75) {
    damage3.style.backgroundColor = "red";
  } else {
    damage3.style.backgroundColor = "white";
  }
  if (playerDamage >= 2) {
    damage.removeEventListener("click", damageIncrease);
    damage4.style.backgroundColor = "red";
    const healthButton = document.getElementById("damageButton")
    healthButton.innerHTML = "Maks skade er nådd"
  } else {
    damage4.style.backgroundColor = "white";
  }
}

function damageIncrease(){
  if (playerDamage < 2 && money >= upgradeDmg) {
    playerDamage += 0.25;
    money -= upgradeDmg;
    upgradeDmg *= 2;
    damageIndicator();
    spillAvPengeLyd();
    sessionStorage.setItem("damageIs", playerDamage);
    showAlert("Skade oppgradert for " + upgradeHealth + " penger. Ny skade: " + playerDamage, "success")
    dmgUpg.innerText = formatNumber(upgradeDmg);
  } else if (playerDamage == 2) {
    showAlert("Maks skade er nådd ", "error")
  } else {
    showAlert("Du har ikke nok penger", "error")
  }
}


damageer0.addEventListener("click", damageReset)
function damageReset(){
    playerDamage = 1
    damage1.style.backgroundColor ="white"
    damage2.style.backgroundColor ="white"
    damage3.style.backgroundColor ="white"
    damage4.style.backgroundColor ="white"
    console.log("damage trykk")
    sessionStorage.setItem("damageIs", playerDamage);
}

document.addEventListener('DOMContentLoaded', function () {
  playerDamage = parseFloat(sessionStorage.getItem("damageIs")) || 1; // Oppdater playerDamage fra sessionStorage
  damageIndicator();
  console.log(sessionStorage.getItem('damageIs'));
});

//Chest


const chests = document.querySelectorAll('.Chest');
chests.forEach(chest => {
  const chestId = chest.id;
  if (sessionStorage.getItem(chestId) == 1) {
    chest.classList.add('opened');
  }
});



function checkForChests() {
  let character = document.getElementById("character");
  let chests = document.querySelectorAll(".Chest");
  let characterPlassering = character.getBoundingClientRect();
  chests.forEach(function (chest) {
    let chestPlassering = chest.getBoundingClientRect();

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

let chestCheckEnabled = true;

function showChestPopup(chest) {
  if (!chestCheckEnabled) return; // ! betyr ikke, skjekker om den ikke er true
  if (currentPopup) {
    document.body.removeChild(currentPopup);
    currentPopup = null;
  }


  if (chest.classList.contains('opened')) {
    return;
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

setInterval(checkOpenChests, 100)
function checkOpenChests() {
  const openedChests = document.querySelectorAll(".opened img")
  openedChests.forEach(chest => {
    chest.src = "Bilder/openedChest.webp";
  })
  
}




function openChest(chestId) {

  const chest = document.getElementById(chestId);

  chest.classList.add('opened');
  tilfPenger = Math.floor(Math.random() * 90) + 1;
  showAlert("Du fant " + tilfPenger + " penger", "success");
  money += tilfPenger;
  updateMoneyAmount();

  sessionStorage.setItem(chestId, 1);
  if (currentPopup) {
    document.body.removeChild(currentPopup);
    currentPopup = null;
  }
}

function disableChests() {
  chestCheckEnabled = false;
  setTimeout(enableChests, 3000);
}

function enableChests() {
  chestCheckEnabled = true;
}

function declineChest(chestId) {
  disableChests()
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
  showPopup("Du drukna, suger å suge")
  resetCharacterPosition();
}

function checkCharacterPosition() {
  let character = document.getElementById("character");
  let island = document.getElementById("øy");
  let characterPlassering = character.getBoundingClientRect();
  let islandPlassering = island.getBoundingClientRect();

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
  let flexBoxContainer = document.getElementById('flexBoxContainer');
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
  let tapPenger = money * 0.1;
  money = money * 0.9
  sessionStorage.setItem("money", money);
  showAlert("Du tapte " + tapPenger.toFixed(0) + " penger", "error")



  // Endre antall pixler for å endre hvor man blir teleportert
  if (onWater) {
    character.style.left = "1px";
    character.style.top = "1px";
  }
}

//Penger

const moneyBox = document.getElementById("moneyBox");
const freeMoneyBtn = document.getElementById("freeMoneyButton");

function updateMoneyAmount() {
  moneyAmount.innerText = formatNumber(money);
  localStorage.setItem("money", money);
}

function spillAvPengeLyd() {
  let lydElement = document.getElementById('moneySound');
  lydElement.currentTime = 0;
  lydElement.play();
}

function spillAvError() {
  let lydElement2 = document.getElementById('ErrorSound');
  lydElement2.currentTime = 0;
  lydElement2.play();
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
  spillAvPengeLyd()
}


const skinsS = document.getElementById("skins")
const statsS = document.getElementById("stats")



//Menu selection
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