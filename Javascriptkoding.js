//interne notater:
//Husk å markere alt i js og css slik at man enklere kan se hva som er hva

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
};

function move() {
  var character = document.getElementById("character");
  var currentLeft = parseInt(character.style.left) || 0;
  var currentTop = parseInt(character.style.top) || 0;

  if (movement.ArrowLeft || movement.a) {
    character.style.left = (currentLeft - 4) + "px";
    checkCharacterPosition();
    checkForChests()
  }
  if (movement.ArrowRight || movement.d) {
    character.style.left = (currentLeft + 4) + "px";
    checkCharacterPosition();
    checkForChests()
  }
  if (movement.ArrowUp || movement.w) {
    character.style.top = (currentTop - 4) + "px";
    checkCharacterPosition();
    checkForChests()
  }
  if (movement.ArrowDown || movement.s) {
    character.style.top = (currentTop + 4) + "px";
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

move(); // Start continuous movement


//Chest
function checkForChests() {
  var character = document.getElementById("character");
  var chests = document.getElementsByClassName("Chest");
  var characterPlassering = character.getBoundingClientRect();

  for (var i = 0; i < chests.length; i++) {
    var chest = chests[i];
    var chestPlassering = chests[i].getBoundingClientRect();

    if (
      characterPlassering.right > chestPlassering.left &&
      characterPlassering.left < chestPlassering.right &&
      characterPlassering.bottom > chestPlassering.top &&
      characterPlassering.top < chestPlassering.bottom
    ) {
      chestFound();
      showChestPopup(chest);
    } 
  }
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
     menyknapp.innerHTML=("x")
    
  } else {
    flexBoxContainer.style.display = 'none';
    menyknapp.innerHTML=("Menu")

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

const moneyBox = document.createElement("div");
moneyBox.className = "money-box";
moneyBox.innerHTML = "<span>&#x1F4B0</span><span id='money-amount'>0</span>";
document.body.appendChild(moneyBox);

function updateMoneyAmount(amount) {
  const moneyAmountElement = document.getElementById("money-amount");
  if (moneyAmountElement) {
      moneyAmountElement.textContent = amount;
  }
}

updateMoneyAmount(100);
