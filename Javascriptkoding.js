//javacode fete greier jeg vet
//Jeg skal fikse skins
//Jeg skal fikse alerts 

document.addEventListener("keydown", function(event) {
    if (event.key === "d") {
      moveLeft(); // Call the moveLeft function when "d" is pressed
      console.log("d pressed")
    }
  });

  function moveLeft() {
    var character = document.getElementById("character");
    var currentLeft = parseInt(character.style.left) || 0; // Get the current left position (or default to 0)
    character.style.left = (currentLeft + 100) + "px"; // Move the div one pixel to the left
    character.style.backgroundColor ="red"
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
      moveRight(); // Call the moveLeft function when "d" is pressed
      console.log("a pressed")
    }
  });

  function moveRight() {
    var character = document.getElementById("character");
    var currentLeft = parseInt(character.style.left) || 0; // Get the current left position (or default to 0)
    character.style.left = (currentLeft - 100) + "px"; // Move the div one pixel to the left
    character.style.backgroundColor ="green"
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "s") {
      moveDown(); // Call the moveLeft function when "d" is pressed
      console.log("s pressed")
    }
  });

  function moveDown() {
    var character = document.getElementById("character");
    var currentTop = parseInt(character.style.top) || 0; // Get the current left position (or default to 0)
    character.style.top = (currentTop + 100) + "px"; // Move the div one pixel to the left
    character.style.backgroundColor ="blue"
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "w") {
      moveUp(); // Call the moveLeft function when "d" is pressed
      console.log("w pressed")
    }
  });

  function moveUp() {
    var character = document.getElementById("character");
    var currentTop = parseInt(character.style.top) || 0; // Get the current left position (or default to 0)
    character.style.top = (currentTop - 100) + "px"; // Move the div one pixel to the left
    character.style.backgroundColor ="orange"
  }