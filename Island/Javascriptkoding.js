//interne notater:
//Husk å markere alt i js og css slik at man enklere kan se hva som er hva

//Chests
let nummer = 1
for (let i = 1; i < 30; i++) {
  const creChest = document.createElement("div")
  // square.innerHTML = nummer
  creChest.id = "Chest" + nummer


  creChest.classList.add("InteractiveMaterial")
  creChest.classList.add("Chest")


  document.getElementById("øy").appendChild(creChest)



  const creChestImg = document.createElement("img")
  creChestImg.src = "../Bilder/closedChest.webp"
  creChestImg.alt = "Chest"
  document.getElementById("Chest" + nummer).appendChild(creChestImg)

  nummer++
}



//Fjerner scrolling fra siden
document.body.style.overflow = "hidden";

const moneyAmount = document.getElementById("moneyAmount");
let money = 0
money = parseInt(localStorage.getItem("money")) || 0
setInterval(updateMoneyAmount, 100)


const characterP = document.getElementById("character")


let choosenSkin = 0
choosenSkin = parseInt(sessionStorage.getItem("choosenSkin")) || 0


//matte seiere
let tjentMoney = 0

let matteSeier = 0
matteSeier = localStorage.getItem("matteSeier") || 0
if (matteSeier == 1) {
  matteSeier = 2
  localStorage.setItem("matteSeier", 2)
  tjentMoney = 5000
  money = money + tjentMoney
  showAlert("Du fant " + tjentMoney.toFixed(0) + " penger", "success")
}



let matteUnlocked = 0
matteUnlocked = sessionStorage.getItem("matteUnlocked") || 0


function matteIsUlocked() {
  showAlert("Svampebob er nå tilgjengelig som et Skin", "success")
}

if (matteSeier == 3) {
  matteSeier = 2
  localStorage.setItem("matteSeier", 2)

  matteUnlocked = 1
  sessionStorage.setItem("matteUnlocked", 1)
  tjentMoney = 7000
  money = money + tjentMoney
  showAlert("Svampebob er stolt av deg, de gir deg " + tjentMoney.toFixed(0) + " penger", "success")
  setTimeout(matteIsUlocked, 2100)
}



//Quiz seiere
let quiz1Seier = 0
quiz1Seier = localStorage.getItem("quiz1Seier") || 0
if (quiz1Seier == 1) {
  quiz1Seier = 2
  localStorage.setItem("quiz1Seier", 2)
  tjentMoney = 5000
  money = money + tjentMoney
  showAlert("Du fikk " + tjentMoney.toFixed(0) + " penger av Quizen", "success")

}


let birkUnlocked = 0
birkUnlocked = sessionStorage.getItem("birkUnlocked") || 0


function birkIsUnlocked() {
  showAlert("Birk er nå tilgjengelig som et Skin", "success")
}

if (quiz1Seier == 3) {
  quiz1Seier = 2
  localStorage.setItem("quiz1Seier", 2)

  birkUnlocked = 1
  sessionStorage.setItem("birkUnlocked", 1)
  tjentMoney = 7000
  money = money + tjentMoney
  showAlert("Birk er stolt av deg, han gir deg " + tjentMoney.toFixed(0) + " penger", "success")
  setTimeout(birkIsUnlocked, 2100)
}

//Du vant i Tarzan spillet
let enemyCheckEnabled = true;

let tarzanSeier = localStorage.getItem("tarzanSeier") || 0
if (tarzanSeier == 1) {
  tarzanSeier = 2
  localStorage.setItem("tarzanSeier", 2)
  tjentMoney = 10000
  money = money + tjentMoney
  showAlert("Du fikk " + tjentMoney.toFixed(0) + " penger av siden du hjalp Tarzan", "success")

  disableEnemies();
}


let getMoney = localStorage.getItem("getMoney") || 0
if (getMoney != 0) {
  getMoney = 0
  localStorage.setItem("getMoney", 0)

  tjentMoney = 1000
  money = money + tjentMoney
  showAlert("Du fant " + tjentMoney.toFixed(0) + " penger", "success")
}


//Thorbjorn er 0
//Ramus er 1
//Jonas(skin) er 2
//And er 3
//Monke er 4
//Panda er 5
//Langbein er 6
//Peter Griffin er 7
//Birk er 8
//Kasper er 9
//elon musk er 10
//mario er 11
//Pete Davidson er 12
//Skrue er 13
//The Rock er 14
//Stewie er 15
//Sid er 16

const torbSkin = document.getElementById("torbSkin")
if (choosenSkin == 0) {
  characterP.src = "../Bilder/Torbjorn.png"
  torbSkin.style.backgroundColor = "red"
}

const rasmusSkin = document.getElementById("rasmusSkin")
if (choosenSkin == 1) {
  characterP.src = "../Bilder/Rasmus.png"
  rasmusSkin.innerText = "Rasmus";
  rasmusSkin.style.backgroundColor = "red"
}

const jonasSkin = document.getElementById("jonasSkin")
if (choosenSkin == 2) {
  characterP.src = "../Bilder/Jonas.png"
  jonasSkin.style.backgroundColor = "red"
}

const andSkin = document.getElementById("andSkin")
if (choosenSkin == 3) {
  characterP.src = "../Bilder/playerIcon1.png"
  andSkin.style.backgroundColor = "red"
}

const monkeSkin = document.getElementById("monkeSkin")
if (choosenSkin == 4) {
  characterP.src = "../Bilder/monkeT.png"
  monkeSkin.style.backgroundColor = "red"
}

const pandaSkin = document.getElementById("pandaSkin")
if (choosenSkin == 5) {
  characterP.src = "../Bilder/bPandaT.png"
  pandaSkin.style.backgroundColor = "red"
}

const langbeinSkin = document.getElementById("langbeinSkin")
if (choosenSkin == 6) {
  characterP.src = "../Bilder/langbeinT.png"
  langbeinSkin.style.backgroundColor = "red"
}

const peterSkin = document.getElementById("peterSkin")
if (choosenSkin == 7) {
  characterP.src = "../Bilder/peter.png"
  peterSkin.style.backgroundColor = "red"
}

if (choosenSkin == 8) {
  characterP.src = "../Bilder/Birk.png"
  birkSkin.style.backgroundColor = "red"
}

const kasperSkin = document.getElementById("kasperSkin")
if (choosenSkin == 9) {
  characterP.src = "../Bilder/kasper.png"
  kasperSkin.style.backgroundColor = "red"
}

const elonSkin = document.getElementById("elonSkin")
if (choosenSkin == 10) {
  characterP.src = "../Bilder/elon.png"
  elonSkin.style.backgroundColor = "red"
}

const marioSkin = document.getElementById("MarioSkin")
if (choosenSkin == 11) {
  characterP.src = "../Bilder/mario.png"
  marioSkin.style.backgroundColor = "red"
}

const peteSkin = document.getElementById("peteSkin")
if (choosenSkin == 12) {
  characterP.src = "../Bilder/peteD.png"
  peteSkin.style.backgroundColor = "red"
}

const skrueSkin = document.getElementById("skrueSkin")
if (choosenSkin == 13) {
  characterP.src = "../Bilder/skrueMcDuck.png"
  skrueSkin.style.backgroundColor = "red"
}

const rockSKin = document.getElementById("rockSKin")
if (choosenSkin == 14) {
  characterP.src = "../Bilder/The-Rock.png"
  rockSKin.style.backgroundColor = "red"
}

const stewieSkin = document.getElementById("stewieSkin")
if (choosenSkin == 15) {
  characterP.src = "../Bilder/Stewie.png"
  stewieSkin.style.backgroundColor = "red"
}

const sidSkin = document.getElementById("sidSkin")
if (choosenSkin == 16) {
  characterP.src = "../Bilder/SId.png"
  sidSkin.style.backgroundColor = "red"
}

const svampSkin = document.getElementById("svampSkin")
if (choosenSkin == 17) {
  characterP.src = "../Bilder/svanpeBob.png"
  svampSkin.style.backgroundColor = "red"
}


const mButtons = document.querySelectorAll(".Mbuttons")

//skins section
function ChoosenTorb() {
  characterP.src = "../Bilder/Torbjorn.png"
  choosenSkin = 0
  sessionStorage.setItem("choosenSkin", choosenSkin);
  mButtons.forEach((button) => {
    if (button.id !== "torbSkin") {
      button.style.backgroundColor = "brown";
    }
  });
  torbSkin.style.backgroundColor = "red"

  showAlert("Byttet skin til Thor Bjørn", "success");
}

let chosenRasmus = 0;

chosenRasmus = sessionStorage.getItem("chosenRasmus") || 0

if (chosenRasmus == 10) {
  rasmusSkin.innerText = "Rasmus";
}

function choosenRasmus() {
  if (money >= 5000 && chosenRasmus == 0) {
    characterP.src = "../Bilder/Rasmus.png";
    choosenSkin = 1;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    money -= 5000;
    spillAvPengeLyd();
    showAlert("Du har kjøpt Rasmus for 5000 penger", "success")
    chosenRasmus = 10;
    sessionStorage.setItem("chosenRasmus", chosenRasmus)
    rasmusSkin.innerText = "Rasmus";
    mButtons.forEach((button) => {
      if (button.id !== "rasmusSkin") {
        button.style.backgroundColor = "brown";
      }
    });
    rasmusSkin.style.backgroundColor = "red"

  } else if (chosenRasmus == 10) {
    rasmusSkin.innerText = "Rasmus";
    characterP.src = "../Bilder/Rasmus.png";
    choosenSkin = 1;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    mButtons.forEach((button) => {
      if (button.id !== "rasmusSkin") {
        button.style.backgroundColor = "brown";
      }
    });
    rasmusSkin.style.backgroundColor = "red"
    showAlert("Byttet skin til Rasmus", "success")
  } else {
    showAlert("Du har ikke nok penger for å kjøpe Rasmus ", "error");
    spillAvError()
  }
}

let chosenSkrue = 0;

chosenSkrue = sessionStorage.getItem("chosenSkrue") || 0

if (chosenSkrue == 10) {
  skrueSkin.innerText = "Skrue McDuck";
}

function choosenSkrue() {
  if (money >= 2000 && chosenSkrue == 0) {
    characterP.src = "../Bilder/skrueMcDuck.png";
    choosenSkin = 13;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    money -= 2000;
    spillAvPengeLyd();
    showAlert("Du har kjøpt Skrue McDuck for 2000 penger", "success")
    chosenSkrue = 10;
    sessionStorage.setItem("chosenSkrue", chosenSkrue)
    skrueSkin.innerText = "Skrue McDuck";
    mButtons.forEach((button) => {
      if (button.id !== "skrueSkin") {
        button.style.backgroundColor = "brown";
      }
    });
    skrueSkin.style.backgroundColor = "red"

  } else if (chosenSkrue == 10) {
    skrueSkin.innerText = "Skrue McDuck";
    characterP.src = "../Bilder/skrueMcDuck.png";
    choosenSkin = 13;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    mButtons.forEach((button) => {
      if (button.id !== "skrueSkin") {
        button.style.backgroundColor = "brown";
      }
    });
    skrueSkin.style.backgroundColor = "red"
    showAlert("Byttet skin til Skrue McDuck", "success")
  } else {
    showAlert("Du har ikke nok penger for å kjøpe Skrue McDuck ", "error");
    spillAvError()
  }
}

let chosenRock = 0;

chosenRock = sessionStorage.getItem("chosenRock") || 0

if (chosenRock == 10) {
  rockSKin.innerText = "The Rock";
}

function choosenRock() {
  if (money >= 1000 && chosenRock == 0) {
    characterP.src = "../Bilder/The-Rock.png";
    choosenSkin = 14;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    money -= 2000;
    spillAvPengeLyd();
    showAlert("Du har kjøpt Dwanye The Rock Johnson for 1000 penger", "success")
    chosenRock = 10;
    sessionStorage.setItem("chosenRock", chosenRock)
    rockSKin.innerText = "The Rock";
    mButtons.forEach((button) => {
      if (button.id !== "rockSkin") {
        button.style.backgroundColor = "brown";
      }
    });
    rockSkin.style.backgroundColor = "red"

  } else if (chosenRock == 10) {
    rockSKin.innerText = "The Rock";
    characterP.src = "../Bilder/The-Rock.png";
    choosenSkin = 14;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    mButtons.forEach((button) => {
      if (button.id !== "rockSkin") {
        button.style.backgroundColor = "brown";
      }
    });
    rockSkin.style.backgroundColor = "red"
    showAlert("Byttet skin til Dwanye The Rock Johnson", "success")
  } else {
    showAlert("Du har ikke nok penger for å kjøpe Dwanye The Rock Johnson ", "error");
    spillAvError()
  }
}


let chosenStewie = 0;

chosenStewie = sessionStorage.getItem("chosenStewie") || 0

if (chosenStewie == 10) {
  stewieSkin.innerText = "Stewie Griffin";
}

function choosenStewie() {
  if (money >= 3000 && chosenStewie == 0) {
    characterP.src = "../Bilder/Stewie.png";
    choosenSkin = 15;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    money -= 3000;
    spillAvPengeLyd();
    showAlert("Du har kjøpt Stewie Griffin for 3000 penger", "success")
    chosenStewie = 10;
    sessionStorage.setItem("chosenStewie", chosenStewie)
    stewieSkin.innerText = "Stewie Griffin";
    mButtons.forEach((button) => {
      if (button.id !== "stewieSkin") {
        button.style.backgroundColor = "brown";
      }
    });
    stewieSkin.style.backgroundColor = "red"

  } else if (chosenStewie == 10) {
    stewieSkin.innerText = "Stewie Griffin";
    characterP.src = "../Bilder/Stewie.png";
    choosenSkin = 15;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    mButtons.forEach((button) => {
      if (button.id !== "stewieSkin") {
        button.style.backgroundColor = "brown";
      }
    });
    stewieSkin.style.backgroundColor = "red"
    showAlert("Byttet skin til Stewie Griffin", "success")
  } else {
    showAlert("Du har ikke nok penger for å kjøpe Stewie Griffin ", "error");
    spillAvError()
  }
}

let chosenSid = 0;

chosenSid = sessionStorage.getItem("chosenSid") || 0

if (chosenSid == 10) {
  sidSkin.innerText = "Sid Fra Istid";
}

function choosenSid() {
  if (money >= 1000 && chosenSid == 0) {
    characterP.src = "../Bilder/SId.png";
    choosenSkin = 16;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    money -= 1000;
    spillAvPengeLyd();
    showAlert("Du har kjøpt Sid Fra Istid for 3000 penger", "success")
    chosenSid = 10;
    sessionStorage.setItem("chosenSid", chosenSid)
    sidSkin.innerText = "Sid Fra Istid";
    mButtons.forEach((button) => {
      if (button.id !== "sidSkin") {
        button.style.backgroundColor = "brown";
      }
    });
    sidSkin.style.backgroundColor = "red"

  } else if (chosenSid == 10) {
    sidSkin.innerText = "Sid Fra Istid";
    characterP.src = "../Bilder/SId.png";
    choosenSkin = 16;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    mButtons.forEach((button) => {
      if (button.id !== "sidSkin") {
        button.style.backgroundColor = "brown";
      }
    });
    sidSkin.style.backgroundColor = "red"
    showAlert("Byttet skin til Sid Fra Istid", "success")
  } else {
    showAlert("Du har ikke nok penger for å kjøpe Stewie Griffin ", "error");
    spillAvError()
  }
}

function choosenSvamp() {
  characterP.src = "../Bilder/svanpeBob.png"
  choosenSkin = 17
  sessionStorage.setItem("choosenSkin", choosenSkin);
  mButtons.forEach((button) => {
    if (button.id !== "svampSkin") {
      button.style.backgroundColor = "brown";
    }
  });
  svampSkin.style.backgroundColor = "red"
  showAlert("Byttet skin til Svampebob", "success");
}

function ChoosenJonas() {
  characterP.src = "../Bilder/Jonas.png"
  choosenSkin = 2
  sessionStorage.setItem("choosenSkin", choosenSkin);
  mButtons.forEach((button) => {
    if (button.id !== "jonasSkin") {
      button.style.backgroundColor = "brown";
    }
  });
  jonasSkin.style.backgroundColor = "red"
  showAlert("Byttet skin til Jonas", "success");
}

function ChoosenAnd() {
  characterP.src = "../Bilder/playerIcon1.png"
  choosenSkin = 3
  sessionStorage.setItem("choosenSkin", choosenSkin);
  mButtons.forEach((button) => {
    if (button.id !== "andSkin") {
      button.style.backgroundColor = "brown";
    }
  });
  andSkin.style.backgroundColor = "red"
  showAlert("Byttet skin til Anden", "success");
}

function chosenMonke() {
  if (gotMonke == 10) {
    characterP.src = "../Bilder/monkeT.png";
    choosenSkin = 4;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    mButtons.forEach((button) => {
      if (button.id !== "monkeSkin") {
        button.style.backgroundColor = "brown";
      }
    });
    monkeSkin.style.backgroundColor = "red"
    showAlert("Byttet skin til Monke", "success");
  } else {
    ikkeTilgangSkin();
  }
}

function chosenPanda() {
  if (gotPanda == 10) {
    characterP.src = "../Bilder/bPandaT.png";
    choosenSkin = 5;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    mButtons.forEach((button) => {
      if (button.id !== "pandaSkin") {
        button.style.backgroundColor = "brown";
      }
    });
    pandaSkin.style.backgroundColor = "red"
    showAlert("Byttet skin til Panda", "success");
  } else {
    ikkeTilgangSkin();
  }
}

function chosenLangbein() {
  if (gotLangbein == 10) {
    characterP.src = "../Bilder/langbeinT.png";
    choosenSkin = 6;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    mButtons.forEach((button) => {
      if (button.id !== "langbeinSkin") {
        button.style.backgroundColor = "brown";
      }
    });
    langbeinSkin.style.backgroundColor = "red"
    showAlert("Byttet skin til Langbein", "success");
  } else {
    ikkeTilgangSkin();
  }
}

function chosenPeter() {
  if (gotPeter == 10) {
    characterP.src = "../Bilder/peter.png";
    choosenSkin = 7;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    mButtons.forEach((button) => {
      if (button.id !== "peterSkin") {
        button.style.backgroundColor = "brown";
      }
    });
    peterSkin.style.backgroundColor = "red"
    showAlert("Byttet skin til Peter Griffin", "success");
  } else {
    ikkeTilgangSkin();
  }
}

function ChoosenBirk() {
  characterP.src = "../Bilder/Birk.png"
  choosenSkin = 8
  sessionStorage.setItem("choosenSkin", choosenSkin);
  mButtons.forEach((button) => {
    if (button.id !== "birkSkin") {
      button.style.backgroundColor = "brown";
    }
  });
  birkSkin.style.backgroundColor = "red"
  showAlert("Byttet skin til Birk", "success");
}

function choosenKasper() {
  characterP.src = "../Bilder/kasper.png"
  choosenSkin = 9
  sessionStorage.setItem("choosenSkin", choosenSkin);
  mButtons.forEach((button) => {
    if (button.id !== "kasperSkin") {
      button.style.backgroundColor = "brown";
    }
  });
  kasperSkin.style.backgroundColor = "red"
  showAlert("Byttet skin til Kasper", "success");
}

function choosenElon() {
  characterP.src = "../Bilder/elon.png"
  choosenSkin = 10
  sessionStorage.setItem("choosenSkin", choosenSkin);
  mButtons.forEach((button) => {
    if (button.id !== "elonSkin") {
      button.style.backgroundColor = "brown";
    }
  });
  elonSkin.style.backgroundColor = "red"
  showAlert("Byttet skin til Elon Musk", "success");
}

function choosenMario() {
  characterP.src = "../Bilder/elon.png"
  choosenSkin = 11
  sessionStorage.setItem("choosenSkin", choosenSkin);
  mButtons.forEach((button) => {
    if (button.id !== "marioSkin") {
      button.style.backgroundColor = "brown";
    }
  });
  marioSkin.style.backgroundColor = "red"
  showAlert("Byttet skin til Mario", "success");
}

function choosenPete() {
  characterP.src = "../Bilder/peteD.png"
  choosenSkin = 12
  sessionStorage.setItem("choosenSkin", choosenSkin);
  mButtons.forEach((button) => {
    if (button.id !== "peteSkin") {
      button.style.backgroundColor = "brown";
    }
  });
  peteSkin.style.backgroundColor = "red"
  showAlert("Byttet skin til Pete Davidson", "success");
}


//fiender
//oppdager fiender
let fiende = null
let currentEPopup = null;
const Epopup = document.createElement("div");
let npcFound = false
function checkForNPC() {

  let npcs = document.querySelectorAll(".npc");
  let characterPlassering = characterP.getBoundingClientRect();

  let fiendeFunnet = false
  npcs.forEach(function (enemy) {
    let npcPlassering = enemy.getBoundingClientRect();

    if (
      characterPlassering.right > npcPlassering.left &&
      characterPlassering.left < npcPlassering.right &&
      characterPlassering.bottom > npcPlassering.top &&
      characterPlassering.top < npcPlassering.bottom
    ) {
      fiende = enemy.id
      fiendeFunnet = true

      showEnemyPopup(enemy);
    }
  });
  if (!fiendeFunnet && fiende) {
    if (currentEPopup) {
      document.body.removeChild(currentEPopup);
      currentEPopup = null;
      fiende = null
    }
  }
}



function showEnemyPopup(enemy) {
  if (!enemyCheckEnabled) return;
  if (currentEPopup) {
    document.body.removeChild(currentEPopup);
    currentEPopup = null;
  }

  Epopup.className = "enemy-popup";
  Epopup.innerHTML = `
    <p> <span id="enemyOrNot"> Du møtte en fiende!! Vil du utfordre han til Holmgang og få alle pengene hans?? </span> </p>
    <button id = "godtaOrUtfordre">Utfordre</button>
    <button onclick="declineEnemy()">Avslå</button>
  `;




  document.body.appendChild(Epopup);
  currentEPopup = Epopup;


  const enemyOrNot = document.getElementById("enemyOrNot")
  const godtaOrUtfordre = document.getElementById("godtaOrUtfordre")
  if (currentEPopup != Epopup) {
    return;
  } else {
    godtaOrUtfordre.addEventListener("click", utfordreFiende)
    if (fiende == "anden") {
      enemyOrNot.innerText = "Du møtte Anden!! Vil du utfordre han til Holmgang og få alle pengene hans??"
    }

    if (fiende == "jonas") {
      enemyOrNot.innerText = "Du møtte Jonas!! Vil du utfordre han til Holmgang og få alle pengene hans??"
    }

    if (fiende == "birk") {
      enemyOrNot.innerText = "Hei Jeg heter Birk!! Vil du snakke litt??"
      godtaOrUtfordre.innerText = "Ja, gjerne"
    }

    if (fiende == "svamp") {
      enemyOrNot.innerText = "Hei Jeg heter Svampebob!! Vil du snakke litt??"
      godtaOrUtfordre.innerText = "Ja, gjerne"
    }


    if (fiende == "kasper") {
      enemyOrNot.innerText = "Du møtte Kasper!! Vil du utfordre han til Holmgang og få alle pengene hans??"
    }

    if (fiende == "Elon") {
      enemyOrNot.innerText = "Du møtte Elon Musk!! Vil du utfordre han til Holmgang og få alle pengene hans??"
    }

    if (fiende == "mario") {
      enemyOrNot.innerText = "Du møtte Mario!! Vil du utfordre han til Holmgang og få alle pengene hans??"
    }

    if (fiende == "pete") {
      enemyOrNot.innerText = "Du møtte Pete Davidson!! Vil du utfordre han til Holmgang og få alle pengene hans??"
    }

    if (fiende == "tarzan") {
      enemyOrNot.innerText = "Du møtte Tarzan!! Han trenger din hjelp for å plyndre et skattekammer! Vil du hjelpe han og få halvparten av gullet i skattekameret??"
      godtaOrUtfordre.innerText = "Hjelp han!"
    }
  }
}


function utfordreFiende() {
  if (fiende == "anden") {
    fightAnden()
  }

  if (fiende == "jonas") {
    fightJonas()
  }

  if (fiende == "kasper") {
    fightKasper()
  }

  if (fiende == "Elon") {
    fightElonMusk()
  }

  if (fiende == "mario") {
    fightMario()
  }

  if (fiende == "pete") {
    fightPeteDavidson()
  }

  if (fiende == "birk") {
    godtaOrUtfordre.removeEventListener("click", utfordreFiende)
    godtaOrUtfordre.addEventListener("click", birkSinQuiz)
    enemyOrNot.innerText = "Kan du svare på quizen min?? Du får en stor belønning"
    godtaOrUtfordre.innerText = "Godta"
  }

  if (fiende == "svamp") {
    godtaOrUtfordre.removeEventListener("click", utfordreFiende)
    godtaOrUtfordre.addEventListener("click", matte)
    enemyOrNot.innerText = "Kan du svare på matte testen min?? Du får en stor belønning"
    godtaOrUtfordre.innerText = "Godta"
  }

  if (fiende == "tarzan") {
    hjelpTarzan()
  }



}

function birkSinQuiz() {
  godtaOrUtfordre.removeEventListener("click", birkSinQuiz)
  godtaOrUtfordre.addEventListener("click", utfordreFiende)
  opponent = 19
  sessionStorage.setItem("opponent", 19)
  window.location.href = '../Quiz/quiz_3.html';
}

function matte() {
  godtaOrUtfordre.removeEventListener("click", matte)
  godtaOrUtfordre.addEventListener("click", utfordreFiende)
  opponent = 18
  sessionStorage.setItem("opponent", 18)
  window.location.href = '../mattespill/matte.html';
}


function declineEnemy() {
  disableEnemies()
  if (currentEPopup) {
    document.body.removeChild(currentEPopup);
    currentEPopup = null;
    fiende = null
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


//de ulike fiendene
function fightAnden() {
  opponent = 0
  sessionStorage.setItem("opponent", opponent);
  window.location.href = '../Combat/Combat.html';

}

function fightJonas() {
  opponent = 1
  sessionStorage.setItem("opponent", opponent)
  window.location.href = '../Combat/Combat.html';
}

function fightKasper() {
  opponent = 2
  sessionStorage.setItem("opponent", opponent)
  window.location.href = '../Combat/Combat.html';
}

function fightElonMusk() {
  opponent = 3
  sessionStorage.setItem("opponent", opponent)
  window.location.href = '../Combat/Combat.html';
}

function fightMario() {
  opponent = 4
  sessionStorage.setItem("opponent", opponent)
  window.location.href = '../Combat/Combat.html';
}

function fightPeteDavidson() {
  opponent = 5
  sessionStorage.setItem("opponent", opponent)
  window.location.href = '../Combat/Combat.html';
}
function hjelpTarzan() {
  window.location.href = '../TarzanJumpIsland/TarzanJumpIsland.html';
}



//skjekker om en fiende er beseiret
const enemyDiv = document.getElementById("Enemies")
const island = document.getElementById("øy")

let andenDod = 0
andenDod = sessionStorage.getItem("andenDod") || 0
andSkin.addEventListener("click", ikkeTilgangSkin)

let firstTimeAnd = sessionStorage.getItem("firstTimeAnd") || 0

if (andenDod == 2) {
  if (firstTimeAnd == 1) {
    setTimeout(andUnlocked, 2500)
    firstTimeAnd = 2
    sessionStorage.setItem("firstTimeAnd", firstTimeAnd)
  }
  const andElement = document.querySelector("#anden");
  if (andElement && island.contains(andElement)) {
    enemyDiv.removeChild(andElement);
  }
  andSkin.addEventListener("click", ChoosenAnd)
  andSkin.removeEventListener("click", ikkeTilgangSkin)
  andSkin.innerText = "Anden"
}

function andUnlocked() {
  showAlert("Anden er nå låst opp som et skin", "success");
}




let jonasDod = 0
jonasDod = sessionStorage.getItem("jonasDod") || 0
jonasSkin.addEventListener("click", ikkeTilgangSkin)

function ikkeTilgangSkin() {
  showAlert("Du har ikke tilgang på dette skinnet ennå", "error");

}

let firstTimeJonas = sessionStorage.getItem("firstTimeJonas") || 0

if (jonasDod == 2) {
  if (firstTimeJonas == 1) {
    setTimeout(jonasUnlocked, 2500)
    firstTimeJonas = 2
    sessionStorage.setItem("firstTimeJonas", firstTimeJonas)
  }
  enemyDiv.removeChild(document.querySelector("#jonas"));
  jonasSkin.addEventListener("click", ChoosenJonas)
  jonasSkin.removeEventListener("click", ikkeTilgangSkin)
  jonasSkin.innerText = "Jonas"
}

function jonasUnlocked() {
  showAlert("Jonas er nå låst opp som et skin", "success");
}


let kasperDod = 0
kasperDod = sessionStorage.getItem("kasperDod") || 0
kasperSkin.addEventListener("click", ikkeTilgangSkin)

let firstTimeKasper = sessionStorage.getItem("firstTimeKasper") || 0

if (kasperDod == 2) {
  if (firstTimeKasper == 1) {
    setTimeout(kasperUnlocked, 2500)
    firstTimeKasper = 2
    sessionStorage.setItem("firstTimeKasper", firstTimeKasper)
  }
  enemyDiv.removeChild(document.querySelector("#kasper"));
  kasperSkin.addEventListener("click", choosenKasper)
  kasperSkin.removeEventListener("click", ikkeTilgangSkin)
  kasperSkin.innerText = "Kasper"
}

function kasperUnlocked() {
  showAlert("Kasper er nå låst opp som et skin", "success");
}



let elonDod = 0
elonDod = sessionStorage.getItem("elonDod") || 0
elonSkin.addEventListener("click", ikkeTilgangSkin)

let firstTimeElon = sessionStorage.getItem("firstTimeElon") || 0

if (elonDod == 2) {
  if (firstTimeElon == 1) {
    setTimeout(elonUnlocked, 2500)
    firstTimeElon = 2
    sessionStorage.setItem("firstTimeElon", firstTimeElon)
  }
  enemyDiv.removeChild(document.querySelector("#Elon"));
  elonSkin.addEventListener("click", choosenElon)
  elonSkin.removeEventListener("click", ikkeTilgangSkin)
  elonSkin.innerText = "Elon Musk"
}

function elonUnlocked() {
  showAlert("Elon Musk er nå låst opp som et skin", "success");
}


let marioDod = 0
marioDod = sessionStorage.getItem("marioDod") || 0
marioSkin.addEventListener("click", ikkeTilgangSkin)

let firstTimeMario = sessionStorage.getItem("firstTimeMario") || 0

if (marioDod == 2) {
  if (firstTimeMario == 1) {
    setTimeout(marioUnlocked, 2500)
    firstTimeMario = 2
    sessionStorage.setItem("firstTimeMario", firstTimeMario)
  }
  enemyDiv.removeChild(document.querySelector("#mario"));
  marioSkin.addEventListener("click", choosenMario)
  marioSkin.removeEventListener("click", ikkeTilgangSkin)
  marioSkin.innerText = "Mario"
}

function marioUnlocked() {
  showAlert("Mario er nå låst opp som et skin", "success");
}


let peteDod = 0
peteDod = sessionStorage.getItem("peteDod") || 0
peteSkin.addEventListener("click", ikkeTilgangSkin)

let firstTimePete = sessionStorage.getItem("firstTimePete") || 0

if (peteDod == 2) {
  if (firstTimePete == 1) {
    setTimeout(peteUnlocked, 2500)
    firstTimePete = 2
    sessionStorage.setItem("firstTimePete", firstTimePete)
  }
  const peteElement = document.querySelector("#pete");
  if (peteElement && island.contains(peteElement)) {
    enemyDiv.removeChild(peteElement);
  }

  peteSkin.addEventListener("click", choosenPete)
  peteSkin.removeEventListener("click", ikkeTilgangSkin)
  peteSkin.innerText = "Pete"
}

function peteUnlocked() {
  showAlert("Pete Davidson er nå låst opp som et skin", "success");
}

if (peteDod == 2 && marioDod == 2 && elonDod == 2 && kasperDod == 2 && jonasDod == 2 && andenDod == 2) {
  setTimeout(allEnemiesDefeat, 5000)
}

function allEnemiesDefeat() {
  showAlert("Du har nå beseiret alle fiender, Gratulerer", "success");
}


birkSkin.addEventListener("click", ikkeTilgangSkin)

if (birkUnlocked == 1) {
  const birkElement = document.querySelector("#birk");
  if (birkElement && island.contains(birkElement)) {
    enemyDiv.removeChild(birkElement);
  }
  birkSkin.removeEventListener("click", ikkeTilgangSkin)
  birkSkin.addEventListener("click", ChoosenBirk)
  birkSkin.innerText = "Birk"
}

svampSkin.addEventListener("click", ikkeTilgangSkin)

if (matteUnlocked == 1) {
  const svampeElement = document.querySelector("#svamp");
  if (svampeElement && island.contains(svampeElement)) {
    enemyDiv.removeChild(svampeElement);
  }
  svampSkin.removeEventListener("click", ikkeTilgangSkin)
  svampSkin.addEventListener("click", choosenSvamp)
  svampSkin.innerText = "Svampebob"
}

//du har vunnet en fight i combat.js
let combatSeier = 0
combatSeier = sessionStorage.getItem("combatSeier") || 0

if (combatSeier == 1) {
  combatSeier = 2
  sessionStorage.setItem("combatSeier", combatSeier)

  money = money + 5000
  localStorage.setItem("money", money);
  let tjentPenger = 5000;
  showAlert("Du fikk " + tjentPenger.toFixed(0) + " penger", "success")
  updateMoneyAmount();
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
    img.src = '../Bilder/tre.png';
    img.alt = 'tree';

    // random posisjon
    // let xPos = getRandomNumber(0, greenAreaWidth - 30);
    // let yPos = getRandomNumber(0, greenAreaHeight - 30);
    let xPos = ((i + 1) * 345676667) % (greenAreaWidth - 30);
    let yPos = ((i + 1) * 34567) % (greenAreaHeight - 30);
    img.style.left = xPos + 'px';
    img.style.top = yPos + 'px';

    tree.appendChild(img);
    map.appendChild(tree);
  }
}
// random tre når siden loader
window.onload = function () {
  generateTrees(30);
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
let movePlayer = parseInt(sessionStorage.getItem("movePlayer")) || 4;

let upgradeSpeed = 1000;

const speedUpg = document.getElementById("speedUpg");

function ScreenOnCharacter(){
  window.scrollTo(posisjonBredde, posisjonHoyde);
}


function SpeedIncrease() {
  if (movePlayer < 10 && money >= upgradeSpeed) {
    movePlayer += 2;
    sessionStorage.setItem("movePlayer", movePlayer)
    money -= upgradeSpeed;
    upgradeSpeed *= 2;
    speedNivå()
    speedAlerts();
    spillAvPengeLyd()
  } else if (movePlayer == 10) {
    showAlert("Maksfart er nådd ", "error")
  } else {
    showAlert("Du har ikke nok penger", "error")
  }
  console.log(movePlayer)
}

function speedAlerts() {
  if (movePlayer >= 6) {
    showAlert("Fart oppgradert for " + upgradeSpeed + " penger. Ny fart: " + movePlayer, "success")
  }
  if (movePlayer >= 8) {
    showAlert("Fart oppgradert for " + upgradeSpeed + " penger. Ny fart: " + movePlayer, "success")
  }
  if (movePlayer === 10) {
    showAlert("Fart oppgradert for " + upgradeSpeed + " penger. Ny fart: " + movePlayer, "success")
  }
}
function speedNivå() {
  if (movePlayer >= 6) {
    speed1.style.backgroundColor = "blue"
    speedUpg.innerText = formatNumber(upgradeSpeed);
  }
  if (movePlayer >= 8) {
    speed2.style.backgroundColor = "blue"
    speedUpg.innerText = formatNumber(upgradeSpeed);
  }
  if (movePlayer === 10) {
    speed3.style.backgroundColor = "blue"
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
characterP.style.left = posisjonBredde + "px";
characterP.style.top = posisjonHoyde + "px";

function updateScreenPositionLeft() {
  scrollBy(-movePlayer, 0)
}
function updateScreenPositionRight() {
  scrollBy(movePlayer, 0)
}
function updateScreenPositionTop() {
  scrollBy(0, -movePlayer)
}
function updateScreenPositionDown() {
  scrollBy(0, movePlayer)
}


function move() {
  let currentLeft = parseInt(characterP.style.left) || 0;
  let currentTop = parseInt(characterP.style.top) || 0;

  if (movement.ArrowLeft || movement.a || movement.A) {
    posisjonBredde = currentLeft - movePlayer
    sessionStorage.setItem("posisjonBredde", posisjonBredde)
    characterP.style.left = posisjonBredde + "px";
    characterP.style.transform = "scaleX(-1)"
    checkCharacterPosition();
    checkForChests()
    checkForNPC()
    checkForNpc();
    updateScreenPositionLeft()
    ScreenOnCharacter()
  }
  if (movement.ArrowRight || movement.d || movement.D) {
    posisjonBredde = currentLeft + movePlayer
    sessionStorage.setItem("posisjonBredde", posisjonBredde)
    characterP.style.left = posisjonBredde + "px";
    characterP.style.transform = "scaleX(1)"
    checkCharacterPosition();
    checkForChests()
    checkForNPC()
    updateScreenPositionRight()
    ScreenOnCharacter()
  }
  if (movement.ArrowUp || movement.w || movement.W) {
    posisjonHoyde = currentTop - movePlayer
    sessionStorage.setItem("posisjonHoyde", posisjonHoyde)
    characterP.style.top = posisjonHoyde + "px";
    checkCharacterPosition();
    checkForChests()
    checkForNPC()
    updateScreenPositionTop()
    ScreenOnCharacter()
  }
  if (movement.ArrowDown || movement.s || movement.S) {
    posisjonHoyde = currentTop + movePlayer
    sessionStorage.setItem("posisjonHoyde", posisjonHoyde)
    characterP.style.top = posisjonHoyde + "px";
    checkCharacterPosition();
    checkForChests()
    checkForNPC()
    updateScreenPositionDown()
    ScreenOnCharacter()
  }

  requestAnimationFrame(move);
}

document.addEventListener("keydown", function (event) {
  movement[event.key] = true;
});

document.addEventListener("keyup", function (event) {
  movement[event.key] = false;
});

document.addEventListener('DOMContentLoaded', function () {
  ScreenOnCharacter()
  speedNivå()
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

function damageIncrease() {
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
function damageReset() {
  playerDamage = 1
  damage1.style.backgroundColor = "white"
  damage2.style.backgroundColor = "white"
  damage3.style.backgroundColor = "white"
  damage4.style.backgroundColor = "white"
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


let che

function checkForChests() {
  let chests = document.querySelectorAll(".Chest");
  let characterPlassering = characterP.getBoundingClientRect();
  let chestFunnet = false
  chests.forEach(function (chest) {
    let chestPlassering = chest.getBoundingClientRect();

    if (
      characterPlassering.right > chestPlassering.left &&
      characterPlassering.left < chestPlassering.right &&
      characterPlassering.bottom > chestPlassering.top &&
      characterPlassering.top < chestPlassering.bottom
    ) {

      chestFunnet = true
      showChestPopup(chest);
    }
  });
  if (!chestFunnet && chestsId) {
    if (currentPopup) {
      document.body.removeChild(currentPopup);
      currentPopup = null;
    }
  }
}

let currentPopup = null;
let chestCheckEnabled = true;
let chestsId = null


const challenge = document.getElementById("challenge")

function showChestPopup(chest) {
  if (!chestCheckEnabled) return; // ! betyr ikke, skjekker om den ikke er true
  if (currentPopup) {
    document.body.removeChild(currentPopup);
    currentPopup = null;
  }


  if (chest.classList.contains('opened')) {
    return;
  }

  chestsId = chest.id

  const popup = document.createElement("div");
  popup.className = "chest-popup";
  popup.innerHTML = `
    <p>Du fant en kiste! <span id="challenge"> Vil du Åpne den???</span></p>
    <button onclick="openChest('${chest.id}')">Åpne</button>
    <button onclick="declineChest('${chest.id}')">Avslå</button>
  `;



  document.body.appendChild(popup);
  currentPopup = popup;

  const challenge = document.getElementById("challenge")
  if (currentPopup != popup) {
    return;
  } else {

    if (chestsId == "Chest1") {
      challenge.innerText = "For å åpne den må du løse en quiz"
    }

    if (chestsId == "Chest2") {
      challenge.innerText = "For å åpne den må du løse en quiz"
    }

    if (chestsId == "Chest25") {
      challenge.innerText = "For å åpne den må du løse en quiz"
    }

    if (chestsId == "Chest19") {
      challenge.innerText = "For å åpne den må du klare matte testen"
    }

    if (chestsId == "Chest11") {
      challenge.innerText = "For å åpne den må du klare matte testen"
    }

    if (chestsId == "Chest16") {
      challenge.innerText = "For å åpne den må du klare matte testen"
    }

    if (chestsId == "Chest2") {
      challenge.innerText = "For å åpne den må du klare matte testen"
    }
  }


}


let tilfPenger = 0;

setInterval(checkOpenChests, 100)
function checkOpenChests() {
  const openedChests = document.querySelectorAll(".opened img")
  openedChests.forEach(chest => {
    chest.src = "../Bilder/openedChest.webp";
  })

}

function openChest(chestId) {

  const chest = document.getElementById(chestId);

  chest.classList.add('opened');


  sessionStorage.setItem(chestId, 1);
  if (currentPopup) {
    document.body.removeChild(currentPopup);
    currentPopup = null;
  }

  if (chestId != "Chest1" &&
    chestId != "Chest2" &&
    chestId != "Chest25" &&
    chestId != "Chest19" &&
    chestId != "Chest11" &&
    chestId != "Chest16" &&
    chestId != "Chest2") {
    window.location.href = '../Chests/ChestOpen.html'
  }

  if (chestId == "Chest1") {
    window.location.href = '../Quiz/js_quiz.html';
  }

  if (chestId == "Chest2") {
    window.location.href = '../Quiz/quiz_2.html';
  }

  if (chestId == "Chest25") {
    window.location.href = '../Quiz/quiz_4.html';
  }

  if (chestId == "Chest19") {
    window.location.href = '../mattespill/matte.html';
  }

  if (chestId == "Chest11") {
    window.location.href = '../mattespill/matte.html';
  }

  if (chestId == "Chest16") {
    window.location.href = '../mattespill/matte.html';
  }

  if (chestId == "Chest2") {
    window.location.href = '../mattespill/matte.html';
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
  let tapPenger = money * 0.1;
  money = money * 0.9
  sessionStorage.setItem("money", money);
  showAlert("Du tapte " + tapPenger.toFixed(0) + " penger", "error")

  showPopup("Du druknet")
  resetCharacterPosition()
  ScreenOnCharacter()
}

function checkCharacterPosition() {
  let island = document.getElementById("øy");
  let characterPlassering = characterP.getBoundingClientRect();
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

// Popup
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
document.addEventListener("keydown", function(event) {
    if (event.key === "m") {
       
        toggleFlexBox();
    }
});





// Teleportering når man går på vannet, Oliver
function isCharacterOnWater(character, island) {
  const characterPlassering = characterP.getBoundingClientRect();
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
  const island = document.getElementById("øy");
  const onWater = isCharacterOnWater(character, island);


  // Endre antall pixler for å endre hvor man blir teleportert
  if (onWater) {
    characterP.style.left = "350px";
    characterP.style.top = "350px";
    //characterP.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

function checkForNpc() {
  let characterP = document.getElementById('character');
  let characterPlassering = characterP.getBoundingClientRect();
  let npc = document.getElementById('npc');
  let npcPlassering = npc.getBoundingClientRect();
  
  if (
    characterPlassering.right > npcPlassering.left &&
    characterPlassering.left < npcPlassering.right &&
    characterPlassering.bottom > npcPlassering.top &&
    characterPlassering.top < npcPlassering.bottom
  ) {
    showFirstNpcDialog();
  } else {
    hideNpcDialog();
  }
}

function showFirstNpcDialog() {
  npcMessage.textContent = "Hei der! Vil du snakke litt?";
  npcDialog.style.display = "block";
  npcYesBtn.style.display = "block";
  npcNoBtn.style.display = "block";
  
  npcYesBtn.textContent = "Jaa";
  npcNoBtn.textContent = "Nei";

  npcYesBtn.onclick = function() {
    hideNpcDialog();
    showSecondNpcDialog();
  };

  npcNoBtn.onclick = function() {
    hideNpcDialog();
  };
}

function showSecondNpcDialog() {
  npcMessage.textContent = "Så fint! Vil du spinne hjullet for et tilfeldig skin for 1000 penger?";
  npcDialog.style.display = "block";
  npcYesBtn.style.display = "block";
  npcNoBtn.style.display = "block";

  npcYesBtn.textContent = "Greit";
  npcNoBtn.textContent = "Avslå";

  npcYesBtn.onclick = function() {
    hideNpcDialog();
    showThirdNpcDialog();
  };

  npcNoBtn.onclick = function() {
    hideNpcDialog();
  };
}

function showThirdNpcDialog() {
  npcMessage.textContent = "Perfekt! Vennligst bekreft kjøpet.";
  npcDialog.style.display = "block";
  npcYesBtn.style.display = "block";
  npcNoBtn.style.display = "block";

  npcYesBtn.textContent = "Bekreft";
  npcNoBtn.textContent = "Avbryt";

  npcYesBtn.onclick = function() {
    buyRandomSkin();
  };

  npcNoBtn.onclick = function() {
    hideNpcDialog();
  };
}

function hideNpcDialog() {
  npcDialog.style.display = "none";
  npcYesBtn.style.display = "none";
  npcNoBtn.style.display = "none";
}

let spinning = false;
const cost = 1000;

function buyRandomSkin() {
  console.log("kjører funksjonen")
  if (!spinning && money >= cost) {
    console.log("nok penger og ikke spinner")
    money -= cost;
    spinning = true;
    spinWheel();
  } else if (money >= cost) {
    showAlert("Vent til forrige spin er ferdig", "error")
  } else {
    showAlert("Ikke nok penger til å spinne hjullet", "error");
    spillAvError();
  }
}

function spinWheel() {
  const spinner = document.getElementById('skinWheel');
  console.log("Spinning wheel...");

  spinner.classList.add('visible');

  const arrow = document.createElement('div');
  arrow.classList.add('arrow-down');
  document.body.appendChild(arrow);

  const randomDegree = 360 * (Math.random() * 5 + 1);
  console.log("Random degree:", randomDegree);

  const rotateValue = `rotate(${randomDegree}deg)`;
  console.log("Rotate value:", rotateValue);

  
  spinner.style.transform = rotateValue;

  let styleElement = document.getElementById('spinKeyframes');

  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'spinKeyframes';
    document.head.appendChild(styleElement);
  }

  styleElement.innerHTML = `
      @keyframes spin {
          0% {
              transform: rotate(0deg);
          }
          100% {
              transform: ${rotateValue};
          }
      }
  `;

  spinner.style.animation = 'none';

  spinner.style.animation = 'spin 3s ease-in-out';

  setTimeout(() => {
    console.log("Spinning complete!");
    checkResult(randomDegree % 360);
    setTimeout(() => {
      hideWheel();
      spinning = false;
    }, 500);
  }, 3000); 
}

let gotPeter = sessionStorage.getItem("gotPeter") || 0
if(gotPeter == 10) {
  peterSkin.innerText = "Peter Griffin"
}

let gotPanda = sessionStorage.getItem("gotPanda") || 0
if(gotPanda == 10) {
  pandaSkin.innerText = "Panda"
}

let gotMonke = sessionStorage.getItem("gotMonke") || 0
if(gotMonke == 10) {
  monkeSkin.innerText = "Monke"
}

let gotLangbein = sessionStorage.getItem("gotLangbein") || 0
if(gotLangbein == 10) {
  langbeinSkin.innerText = "Langbein"
}

function checkResult(angle) {
  console.log("Checking result for angle:", angle);
  const sectionSize = 18;

  if (angle <= sectionSize) {
    showAlert("Gratulerer! Du fikk skinnet Langbein", "success");
    langbeinSkin.innerText = "Langbein"
    if (gotLangbein == 10) {
      money += 1000;
      showAlert("Du fikk tilbake 1000 penger siden du allerede har Langbein", "success")
    } else {
      gotLangbein = 10;
      sessionStorage.setItem("gotLangbein", 10)
    }
  } else if (angle <= 4 * sectionSize) {
    showAlert("Gratulerer! Du fikk skinnet Monke", "success");
    monkeSkin.innerText = "Monke"
    if (gotMonke == 10) {
      money += 500;
      showAlert("Du fikk tilbake 500 penger siden du allerede har Monke", "success")
    } else {
      gotMonke = 10;
      sessionStorage.setItem("gotMonke", gotMonke)
    }
  } else if (angle <= 10 * sectionSize) {
    showAlert("Gratulerer! Du fikk skinnet Panda", "success");
    pandaSkin.innerText = "Panda"
    if (gotPanda == 10) {
      money += 250;
      showAlert("Du fikk tilbake 250 penger siden du allerede har Panda", "success")
    } else {
      gotPanda = 10;
      sessionStorage.setItem("gotPanda", gotPanda)
    }
  } else if (angle <= 19.9 * sectionSize) {
    showAlert("Gratulerer! Du fikk skinnet Peter Griffin", "success");
    peterSkin.innerText = "Peter Griffin"
    if (gotPeter == 10) {
      money += 100;
      showAlert("Du fikk tilbake 100 penger siden du allerede har Peter Griffin", "success")
    } else {
      gotPeter = 10;
      sessionStorage.setItem("gotPeter", 10)
    }
  } else {
    money *= 100;
    showAlert("DU VANT DEN HEMMELIGE PREMIEN (0,5% sjanse), DU HAR NÅ 100 GANGER SÅ MANGE PENGER");
  }
  setTimeout(() => {
    console.log("Spinning complete!");
    showObtainedSkin(); // Show the obtained skin modal
    spinning = false;
  }, 3000);
}

function hideWheel() {
  const spinner = document.getElementById('skinWheel');
  spinner.classList.remove('visible'); 
  spinner.style.animation = ''; 
  const arrow = document.querySelector('.arrow-down');
  if (arrow) {
      arrow.remove();
  }
}

function showObtainedSkin() {
  const modal = document.getElementById('skinModal');
  const obtainedSkinImage = document.getElementById('obtainedSkinImage');
  const sectionSize = 18;

  let skinImage;

  if (angle <= sectionSize) {
    skinImage = 'langbeinT.png';
  } else if (angle <= 4 * sectionSize) {
    skinImage = 'monke.jpeg';
  } else if (angle <= 10 * sectionSize) {
    skinImage = 'panda.png';
  } else if (angle <= 19.9 * sectionSize) {
    skinImage = 'peter.png';
  } else {
    skinImage = 'pengesekk.png'
  }

  obtainedSkinImage.src = `../Bilder/${skinImage}`;
  modal.style.display = 'block';
}