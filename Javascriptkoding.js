

//Bevegelse 

    
document.addEventListener("keydown", function(event) {
    if (event.key === "d") {
      moveLeft(); 
      console.log("d pressed")
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
      console.log("a pressed")
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
      console.log("s pressed")
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
      console.log("w pressed")
    }
  });

  function moveUp() {
    var character = document.getElementById("character");
    var currentTop = parseInt(character.style.top) || 0; 
    character.style.top = (currentTop - 40) + "px"; 
    character.style.backgroundColor ="orange"
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

