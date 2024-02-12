//interne notater:
//Husk å markere alt i js og css slik at man enklere kan se hva som er hva

//Bevegelse 


document.addEventListener("keydown", function (event) {
  if (event.key === "d") {
    moveLeft();
    checkCharacterPosition();
    checkForChests()
  }
});

function moveLeft() {
  var character = document.getElementById("character");
  var currentLeft = parseInt(character.style.left) || 0;
  character.style.left = (currentLeft + 40) + "px";
  character.style.backgroundColor = "red"
}


document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    moveRight();
    checkCharacterPosition();
    checkForChests()
  }
});

function moveRight() {
  var character = document.getElementById("character");
  var currentRight = parseInt(character.style.left) || 0;
  character.style.left = (currentRight - 40) + "px";
  character.style.backgroundColor = "green"
}

document.addEventListener("keydown", function (event) {
  if (event.key === "s") {
    moveDown();
    checkCharacterPosition();
    checkForChests()
  }
});

function moveDown() {
  var character = document.getElementById("character");
  var currentTop = parseInt(character.style.top) || 0;
  character.style.top = (currentTop + 40) + "px";
  character.style.backgroundColor = "blue"
}

document.addEventListener("keydown", function (event) {
  if (event.key === "w") {
    moveUp();
    checkCharacterPosition();
    checkForChests()
  }
});

function moveUp() {
  var character = document.getElementById("character");
  var currentTop = parseInt(character.style.top) || 0;
  character.style.top = (currentTop - 40) + "px";
  character.style.backgroundColor = "orange"
}


//Chest
function checkForChests() {
  var character = document.getElementById("character");
  var chests = document.getElementsByClassName("Chest");
  var characterPlassering = character.getBoundingClientRect();

  for (var i = 0; i < chests.length; i++) {
    var chestPlassering = chests[i].getBoundingClientRect();

    if (
      characterPlassering.right > chestPlassering.left &&
      characterPlassering.left < chestPlassering.right &&
      characterPlassering.bottom > chestPlassering.top &&
      characterPlassering.top < chestPlassering.bottom
    ) {
      chestFound();
    }
  }
}

function chestFound() {
  console.log("Chest found!");
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
  } else {
    flexBoxContainer.style.display = 'none';
  }
}

// teleportering når man går på vannet, Oliver
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

    if (onWater) {
        character.style.left = "500px";
        character.style.top = "500px";
    }
}

