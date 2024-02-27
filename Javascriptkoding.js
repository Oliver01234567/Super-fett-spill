//interne notater:
//Husk å markere alt i js og css slik at man enklere kan se hva som er hva

const moneyAmount = document.getElementById("moneyAmount");
let money = 0
money = parseInt(localStorage.getItem("money")) || 0
setInterval(updateMoneyAmount, 1)

// Function to generate random number within a range
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to generate trees with random positions and smaller size
function generateTrees(numTrees) {
  var map = document.getElementById('øy');
  var mapWidth = map.offsetWidth;
  var mapHeight = map.offsetHeight;

  for (var i = 0; i < numTrees; i++) {
      var tree = document.createElement('div');
      tree.classList.add('tree');

      var img = document.createElement('img');
      img.src = 'Bilder/tre.png';
      img.alt = 'tree';

      // Generate random position for the tree
      var xPos = getRandomNumber(0, mapWidth - 30); // Random x position within the map width
      var yPos = getRandomNumber(0, mapHeight - 60); // Random y position within the map height
      img.style.left = xPos + 'px';
      img.style.top = yPos + 'px';

      // Set smaller size for the tree
      img.style.width = '30px';
      img.style.height = 'auto';

      tree.appendChild(img);
      map.appendChild(tree);
  }
}

// Generate trees when the page loads
window.onload = function() {
  generateTrees(10); // Change the number as desired
};


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

// Health

let plyHealth = parseInt(localStorage.getItem("healthIs")) || 30

let upgradeHealth = 1000;

const healthUpg = document.getElementById("healthUpg");

function healthLevelIndicator() {
  if (plyHealth >= 33) {
    health1.style.backgroundColor = "green"
    showAlert("Health oppgradert for " + upgradeHealth + " penger. Ny health: " + plyHealth, "success")
    healthUpg.innerText = formatNumber(upgradeHealth);
  }
  if (plyHealth >= 36) {
    health2.style.backgroundColor = "green"
    showAlert("Health oppgradert for " + upgradeHealth + " penger. Ny health: " + plyHealth, "success")
    healthUpg.innerText = formatNumber(upgradeHealth);
  }
  if (plyHealth >= 39) {
    health3.style.backgroundColor = "green"
    showAlert("Health oppgradert for " + upgradeHealth + " penger. Ny health: " + plyHealth, "success")
    healthUpg.innerText = formatNumber(upgradeHealth);
  }
  if (plyHealth >= 42) {
    health4.style.backgroundColor = "green"
    showAlert("Health oppgradert for " + upgradeHealth + " penger. Ny health: " + plyHealth, "success")
    healthUpg.innerText = formatNumber(upgradeHealth);
  }
  if (plyHealth >= 45) {
    health5.style.backgroundColor = "green"
    showAlert("Health oppgradert for " + upgradeHealth + " penger. Ny health: " + plyHealth, "success")
    const healthButton = document.getElementById("healthButton")
    healthUpg.innerText = formatNumber(upgradeHealth);
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
  } else if (plyHealth == 45) {
    showAlert("Makshealth er nådd ", "error")
  } else {
    showAlert("Du har ikke nok penger", "error")
  }
  plyHealth = plyHealth + 3
  spillAvPengeLyd()
  console.log("plyhealth er " + plyHealth)
  console.log("klikk")

  healthLevelIndicator()

  localStorage.setItem("healthIs", plyHealth);
  console.log(localStorage.getItem('healthIs'));
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
  localStorage.setItem("healthIs", plyHealth);

}








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
  showPopup("Du drukna, suger å suge")
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
  let tapPenger = money * 0.1;
  money = money * 0.9
  localStorage.setItem("money", money);
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
  var lydElement = document.getElementById('moneySound');
  lydElement.currentTime = 0;
  lydElement.play();
}

function spillAvError() {
  var lydElement2 = document.getElementById('ErrorSound');
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
  if (money >= 2500) {
    money -= 2500;
    updateMoneyAmount();
    spillAvPengeLyd()
    showAlert("Du har kjøpt Rasmus for 2500 penger ", "success");
  } else {
    showAlert("Du har ikke nok penger for å kjøpe Rasmus ", "error");
    spillAvError()
  }
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