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

/* funskjon for busk og tre
function generateTreesAndBushes() {
  var map = document.getElementById('øy');
  var mapWidth = map.offsetWidth;
  var mapHeight = map.offsetHeight;
  
  for (var i = 0; i < 20; i++) {
      // randomly velger tre eller busk
      var elementType = Math.random() < 0.5 ? 'tre' : 'busk';
      
      // Create element
      var element = document.createElement('div');
      element.classList.add(elementType);
      
      // Random posisjon
      var xPos = Math.random() * (mapWidth - 50); // subtracting width of element
      var yPos = Math.random() * (mapHeight - 50); // subtracting height of element
      element.style.left = xPos + 'px';
      element.style.top = yPos + 'px';
      
      // Random størrelse
      var sizeVariation = Math.random() * 0.5 + 0.5; // range: 0.5 to 1
      element.style.width = (sizeVariation * (elementType === 'tre' ? 20 : 30)) + 'px';
      element.style.height = (sizeVariation * (elementType === 'tre' ? 40 : 20)) + 'px';
      
      map.appendChild(element);
  }
} */


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

  if (movement.ArrowLeft || movement.a) {
    character.style.left = (currentLeft - movePlayer) + "px";
    character.style.transform = "scaleX(-1)"
    checkCharacterPosition();
    checkForChests()
  }
  if (movement.ArrowRight || movement.d) {
    character.style.left = (currentLeft + movePlayer) + "px";
    character.style.transform = "scaleX(1)"
    checkCharacterPosition();
    checkForChests()
  }
  if (movement.ArrowUp || movement.w) {
    character.style.top = (currentTop - movePlayer) + "px";
    checkCharacterPosition();
    checkForChests()
  }
  if (movement.ArrowDown || movement.s) {
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
    skinSelect.style.display ="none"
    statsSelect.style.display ="none"

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
const characterP = document.querySelector("#character img")

function ChoosenDuck() {
  characterP.src = "Bilder/playerIcon1.png"
}

function ChoosenRasmus() {
  characterP.src = "Bilder/Rasmus.png"
}

const skinsS = document.getElementById("skins")
const statsS = document.getElementById("stats")



//skins section
function showSkins() {
  skinSelect.style.display ="block"
  skinSelect.style.display ="flex"
  
  
}

function showStats() {
  statsSelect.style.display = "block"
 statsSelect.style.display = "flex"

}

function backToGame() {

  skinSelect.style.display = "none"
  statsSelect.style.display = "none"
  
}