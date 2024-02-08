//interne notater:
//Husk å markere alt i js og css slik at man enklere kan se hva som er hva

//Bevegelse 

    
document.addEventListener("keydown", function(event) {
    if (event.key === "d") {
      moveLeft(); 
      checkCharacterPosition();
    }
  });

  function moveLeft() {
    var character = document.getElementById("character");
    var currentLeft = parseInt(character.style.left) || 0; 
    character.style.left = (currentLeft + 40) + "px"; 
    character.style.backgroundColor ="red"
  }
  

  document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
      moveRight(); 
      checkCharacterPosition();
    }
  });

  function moveRight() {
    var character = document.getElementById("character");
    var currentRight = parseInt(character.style.left) || 0;
    character.style.left = (currentRight - 40) + "px";
    character.style.backgroundColor ="green"
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "s") {
      moveDown(); 
      checkCharacterPosition();
    }
  });

  function moveDown() {
    var character = document.getElementById("character");
    var currentTop = parseInt(character.style.top) || 0; 
    character.style.top = (currentTop + 40) + "px"; 
    character.style.backgroundColor ="blue"
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "w") {
      moveUp(); 
      checkCharacterPosition();
    }
  });

  function moveUp() {
    var character = document.getElementById("character");
    var currentTop = parseInt(character.style.top) || 0; 
    character.style.top = (currentTop - 40) + "px"; 
    character.style.backgroundColor ="orange"
  }


  //Hav
    function die() {
        console.log("du døde")
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

