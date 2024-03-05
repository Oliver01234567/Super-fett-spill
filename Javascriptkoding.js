//interne notater:
//Husk å markere alt i js og css slik at man enklere kan se hva som er hva
hideWheel();
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
  creChestImg.src = "Bilder/closedChest.webp"
  creChestImg.alt = "Chest"
  document.getElementById("Chest" + nummer).appendChild(creChestImg)

  nummer++
}



//Fjerner scrolling fra siden
//document.body.style.overflow = "hidden";

const moneyAmount = document.getElementById("moneyAmount");
let money = 0
money = parseInt(localStorage.getItem("money")) || 0
setInterval(updateMoneyAmount, 100)


const characterP = document.querySelector("#character img")

let choosenSkin = 0
choosenSkin = parseInt(sessionStorage.getItem("choosenSkin")) || 0


//Quiz seiere
let quiz1Seier = 0
quiz1Seier = localStorage.getItem("quiz1Seier") || 0
if (quiz1Seier == 1) {
  quiz1Seier = 2
  localStorage.setItem("quiz1Seier", 2)
  let tjentMoney = 5000
  money = money + tjentMoney
  showAlert("Du fikk " + tjentMoney.toFixed(0) + " penger av Quizen", "success")

}

let birkUnlocked = 0
birkUnlocked = sessionStorage.getItem("birkUnlocked") || 0

if (quiz1Seier == 3) {
  quiz1Seier = 2
  localStorage.setItem("quiz1Seier", 2)

  birkUnlocked = 1
  sessionStorage.setItem("birkUnlocked", 1)
  let tjentMoney = 4000
  money = money + tjentMoney
  showAlert("Birk er stolt av deg, han gir deg " + tjentMoney.toFixed(0) + " penger", "success")
  setTimeout(birkIsUnlocked, 2100)
}

function birkIsUnlocked() {
  showAlert("Birk er nå tilgjengelig som et Skin", "success")
}


let getMoney = localStorage.getItem("getMoney") || 0
if (getMoney != 0) {
  getMoney = 0
  localStorage.setItem("getMoney", 0)

  let tjentMoney = 1000
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

const monkeSkin = document.getElementById("monkeSkin")
if (choosenSkin == 4) {
  characterP.src = "Bilder/monke.jpeg"
  monkeSkin.style.backgroundColor = "red"
}

const pandaSkin = document.getElementById("pandaSkin")
if (choosenSkin == 5) {
  characterP.src = "Bilder/panda.png"
  pandaSkin.style.backgroundColor = "red"
}

const langbeinSkin = document.getElementById("langbeinSkin")
if (choosenSkin == 6) {
  characterP.src = "Bilder/angel.jpeg"
  langbeinSkin.style.backgroundColor = "red"
}

const peterSkin = document.getElementById("peterSkin")
if (choosenSkin == 7) {
  characterP.src = "Bilder/peter.png"
  peterSkin.style.backgroundColor = "red"
}

if (choosenSkin == 8) {
  characterP.src = "Bilder/Birk.png"
  birkSkin.style.backgroundColor = "red"
}

const kasperSkin = document.getElementById("kasperSkin")
if (choosenSkin == 9) {
  characterP.src = "Bilder/kasper.png"
  kasperSkin.style.backgroundColor = "red"
}

const elonSkin = document.getElementById("elonSkin")
if (choosenSkin == 10) {
  characterP.src = "Bilder/elon.png"
  elonSkin.style.backgroundColor = "red"
}

const marioSkin = document.getElementById("MarioSkin")
if (choosenSkin == 11) {
  characterP.src = "Bilder/mario.png"
  marioSkin.style.backgroundColor = "red"
}

const peteSkin = document.getElementById("peteSkin")
if (choosenSkin == 12) {
  characterP.src = "Bilder/peteD.png"
  peteSkin.style.backgroundColor = "red"
}

const skrueSkin = document.getElementById("skrueSkin")
if (choosenSkin == 13) {
  characterP.src = "Bilder/skrueMcDuck.png"
  skrueSkin.style.backgroundColor = "red"
}

const rockSKin = document.getElementById("rockSKin")
if (choosenSkin == 14) {
  characterP.src = "Bilder/The-Rock.png"
  rockSKin.style.backgroundColor = "red"
}

const stewieSkin = document.getElementById("stewieSkin")
if (choosenSkin == 15) {
  characterP.src = "Bilder/Stewie.png"
  stewieSkin.style.backgroundColor = "red"
}

const sidSkin = document.getElementById("sidSkin")
if (choosenSkin == 16) {
  characterP.src = "Bilder/SId.png"
  sidSkin.style.backgroundColor = "red"
}



const mButtons = document.querySelectorAll(".Mbuttons")

//skins section
function ChoosenTorb() {
  characterP.src = "Bilder/Torbjorn.png"
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
    characterP.src = "Bilder/Rasmus.png";
    choosenSkin = 1;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    money -= 5000;
    spillAvPengeLyd();
    showAlert("Du har kjøpt Rasmus for 5000 penger", "success")
    chosenRasmus = 10;
    sessionStorage.setItem("chosenRasmus", chosenRasmus)
    rasmusSkin.innerText = "Rasmus";
    rasmusSkin.style.backgroundColor = "red";
    jonasSkin.style.backgroundColor = "brown";
    torbSkin.style.backgroundColor = "brown";
    andSkin.style.backgroundColor = "brown";
    monkeSkin.style.backgroundColor = "brown";
    pandaSkin.style.backgroundColor = "brown";
    langbeinSkin.style.backgroundColor = "brown";
    peterSkin.style.backgroundColor = "brown";
    birkSkin.style.backgroundColor = "brown"
    kasperSkin.style.backgroundColor = "brown"
    elonSkin.style.backgroundColor = "brown"
    marioSkin.style.backgroundColor = "brown"
    peteSkin.style.backgroundColor = "brown"
    skrueSkin.style.backgroundColor = "brown"
    sidSkin.style.backgroundColor = "brown"
    stewieSkin.style.backgroundColor = "brown"
    rockSKin.style.backgroundColor = "brown"
  } else if (chosenRasmus == 10) {
    rasmusSkin.innerText = "Rasmus";
    characterP.src = "Bilder/Rasmus.png";
    choosenSkin = 1;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    rasmusSkin.style.backgroundColor = "red";
    jonasSkin.style.backgroundColor = "brown";
    torbSkin.style.backgroundColor = "brown";
    andSkin.style.backgroundColor = "brown";
    monkeSkin.style.backgroundColor = "brown";
    pandaSkin.style.backgroundColor = "brown";
    langbeinSkin.style.backgroundColor = "brown";
    peterSkin.style.backgroundColor = "brown";
    birkSkin.style.backgroundColor = "brown"
    kasperSkin.style.backgroundColor = "brown"
    elonSkin.style.backgroundColor = "brown"
    marioSkin.style.backgroundColor = "brown"
    peteSkin.style.backgroundColor = "brown"
    skrueSkin.style.backgroundColor = "brown"
    sidSkin.style.backgroundColor = "brown"
    stewieSkin.style.backgroundColor = "brown"
    rockSKin.style.backgroundColor = "brown"
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
    characterP.src = "Bilder/skrueMcDuck.png";
    choosenSkin = 13;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    money -= 2000;
    spillAvPengeLyd();
    showAlert("Du har kjøpt Skrue McDuck for 2000 penger", "success")
    chosenSkrue = 10;
    sessionStorage.setItem("chosenSkrue", chosenSkrue)
    skrueSkin.innerText = "Skrue McDuck";
    rasmusSkin.style.backgroundColor = "brown";
    jonasSkin.style.backgroundColor = "brown";
    torbSkin.style.backgroundColor = "brown";
    andSkin.style.backgroundColor = "brown";
    monkeSkin.style.backgroundColor = "brown";
    pandaSkin.style.backgroundColor = "brown";
    langbeinSkin.style.backgroundColor = "brown";
    peterSkin.style.backgroundColor = "brown";
    birkSkin.style.backgroundColor = "brown"
    kasperSkin.style.backgroundColor = "brown"
    elonSkin.style.backgroundColor = "brown"
    marioSkin.style.backgroundColor = "brown"
    peteSkin.style.backgroundColor = "brown"
    skrueSkin.style.backgroundColor = "red"
    sidSkin.style.backgroundColor = "brown"
    stewieSkin.style.backgroundColor = "brown"
    rockSKin.style.backgroundColor = "brown"

  } else if (chosenSkrue == 10) {
    skrueSkin.innerText = "Skrue McDuck";
    characterP.src = "Bilder/skrueMcDuck.png";
    choosenSkin = 13;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    rasmusSkin.style.backgroundColor = "brown";
    jonasSkin.style.backgroundColor = "brown";
    torbSkin.style.backgroundColor = "brown";
    andSkin.style.backgroundColor = "brown";
    monkeSkin.style.backgroundColor = "brown";
    pandaSkin.style.backgroundColor = "brown";
    langbeinSkin.style.backgroundColor = "brown";
    peterSkin.style.backgroundColor = "brown";
    birkSkin.style.backgroundColor = "brown"
    kasperSkin.style.backgroundColor = "brown"
    elonSkin.style.backgroundColor = "brown"
    marioSkin.style.backgroundColor = "brown"
    peteSkin.style.backgroundColor = "brown"
    skrueSkin.style.backgroundColor = "red"
    sidSkin.style.backgroundColor = "brown"
    stewieSkin.style.backgroundColor = "brown"
    rockSKin.style.backgroundColor = "brown"
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
    characterP.src = "Bilder/The-Rock.png";
    choosenSkin = 14;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    money -= 2000;
    spillAvPengeLyd();
    showAlert("Du har kjøpt Dwanye The Rock Johnson for 1000 penger", "success")
    chosenRock = 10;
    sessionStorage.setItem("chosenRock", chosenRock)
    rockSKin.innerText = "The Rock";
    rasmusSkin.style.backgroundColor = "brown";
    jonasSkin.style.backgroundColor = "brown";
    torbSkin.style.backgroundColor = "brown";
    andSkin.style.backgroundColor = "brown";
    monkeSkin.style.backgroundColor = "brown";
    pandaSkin.style.backgroundColor = "brown";
    langbeinSkin.style.backgroundColor = "brown";
    peterSkin.style.backgroundColor = "brown";
    birkSkin.style.backgroundColor = "brown"
    kasperSkin.style.backgroundColor = "brown"
    elonSkin.style.backgroundColor = "brown"
    marioSkin.style.backgroundColor = "brown"
    peteSkin.style.backgroundColor = "brown"
    skrueSkin.style.backgroundColor = "brown"
    sidSkin.style.backgroundColor = "brown"
    stewieSkin.style.backgroundColor = "brown"
    rockSKin.style.backgroundColor = "red"

  } else if (chosenRock == 10) {
    rockSKin.innerText = "The Rock";
    characterP.src = "Bilder/The-Rock.png";
    choosenSkin = 14;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    rasmusSkin.style.backgroundColor = "brown";
    jonasSkin.style.backgroundColor = "brown";
    torbSkin.style.backgroundColor = "brown";
    andSkin.style.backgroundColor = "brown";
    monkeSkin.style.backgroundColor = "brown";
    pandaSkin.style.backgroundColor = "brown";
    langbeinSkin.style.backgroundColor = "brown";
    peterSkin.style.backgroundColor = "brown";
    birkSkin.style.backgroundColor = "brown"
    kasperSkin.style.backgroundColor = "brown"
    elonSkin.style.backgroundColor = "brown"
    marioSkin.style.backgroundColor = "brown"
    peteSkin.style.backgroundColor = "brown"
    skrueSkin.style.backgroundColor = "brown"
    sidSkin.style.backgroundColor = "brown"
    stewieSkin.style.backgroundColor = "brown"
    rockSKin.style.backgroundColor = "red"
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
    characterP.src = "Bilder/Stewie.png";
    choosenSkin = 15;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    money -= 3000;
    spillAvPengeLyd();
    showAlert("Du har kjøpt Stewie Griffin for 3000 penger", "success")
    chosenStewie = 10;
    sessionStorage.setItem("chosenStewie", chosenStewie)
    stewieSkin.innerText = "Stewie Griffin";
    rasmusSkin.style.backgroundColor = "brown";
    jonasSkin.style.backgroundColor = "brown";
    torbSkin.style.backgroundColor = "brown";
    andSkin.style.backgroundColor = "brown";
    monkeSkin.style.backgroundColor = "brown";
    pandaSkin.style.backgroundColor = "brown";
    langbeinSkin.style.backgroundColor = "brown";
    peterSkin.style.backgroundColor = "brown";
    birkSkin.style.backgroundColor = "brown"
    kasperSkin.style.backgroundColor = "brown"
    elonSkin.style.backgroundColor = "brown"
    marioSkin.style.backgroundColor = "brown"
    peteSkin.style.backgroundColor = "brown"
    skrueSkin.style.backgroundColor = "brown"
    sidSkin.style.backgroundColor = "brown"
    stewieSkin.style.backgroundColor = "red"
    rockSKin.style.backgroundColor = "brown"

  } else if (chosenStewie == 10) {
    stewieSkin.innerText = "Stewie Griffin";
    characterP.src = "Bilder/Stewie.png";
    choosenSkin = 15;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    rasmusSkin.style.backgroundColor = "brown";
    jonasSkin.style.backgroundColor = "brown";
    torbSkin.style.backgroundColor = "brown";
    andSkin.style.backgroundColor = "brown";
    monkeSkin.style.backgroundColor = "brown";
    pandaSkin.style.backgroundColor = "brown";
    langbeinSkin.style.backgroundColor = "brown";
    peterSkin.style.backgroundColor = "brown";
    birkSkin.style.backgroundColor = "brown"
    kasperSkin.style.backgroundColor = "brown"
    elonSkin.style.backgroundColor = "brown"
    marioSkin.style.backgroundColor = "brown"
    peteSkin.style.backgroundColor = "brown"
    skrueSkin.style.backgroundColor = "brown"
    sidSkin.style.backgroundColor = "brown"
    stewieSkin.style.backgroundColor = "red"
    rockSKin.style.backgroundColor = "brown"
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
    characterP.src = "Bilder/SId.png";
    choosenSkin = 16;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    money -= 1000;
    spillAvPengeLyd();
    showAlert("Du har kjøpt Sid Fra Istid for 3000 penger", "success")
    chosenSid = 10;
    sessionStorage.setItem("chosenSid", chosenSid)
    sidSkin.innerText = "Sid Fra Istid";
    rasmusSkin.style.backgroundColor = "brown";
    jonasSkin.style.backgroundColor = "brown";
    torbSkin.style.backgroundColor = "brown";
    andSkin.style.backgroundColor = "brown";
    monkeSkin.style.backgroundColor = "brown";
    pandaSkin.style.backgroundColor = "brown";
    langbeinSkin.style.backgroundColor = "brown";
    peterSkin.style.backgroundColor = "brown";
    birkSkin.style.backgroundColor = "brown"
    kasperSkin.style.backgroundColor = "brown"
    elonSkin.style.backgroundColor = "brown"
    marioSkin.style.backgroundColor = "brown"
    peteSkin.style.backgroundColor = "brown"
    skrueSkin.style.backgroundColor = "brown"
    sidSkin.style.backgroundColor = "red"
    stewieSkin.style.backgroundColor = "brown"
    rockSKin.style.backgroundColor = "brown"

  } else if (chosenSid == 10) {
    sidSkin.innerText = "Sid Fra Istid";
    characterP.src = "Bilder/SId.png";
    choosenSkin = 16;
    sessionStorage.setItem("choosenSkin", choosenSkin);
    rasmusSkin.style.backgroundColor = "brown";
    jonasSkin.style.backgroundColor = "brown";
    torbSkin.style.backgroundColor = "brown";
    andSkin.style.backgroundColor = "brown";
    monkeSkin.style.backgroundColor = "brown";
    pandaSkin.style.backgroundColor = "brown";
    langbeinSkin.style.backgroundColor = "brown";
    peterSkin.style.backgroundColor = "brown";
    birkSkin.style.backgroundColor = "brown"
    kasperSkin.style.backgroundColor = "brown"
    elonSkin.style.backgroundColor = "brown"
    marioSkin.style.backgroundColor = "brown"
    peteSkin.style.backgroundColor = "brown"
    skrueSkin.style.backgroundColor = "brown"
    sidSkin.style.backgroundColor = "red"
    stewieSkin.style.backgroundColor = "brown"
    rockSKin.style.backgroundColor = "brown"
    showAlert("Byttet skin til Sid Fra Istid", "success")
  } else {
    showAlert("Du har ikke nok penger for å kjøpe Stewie Griffin ", "error");
    spillAvError()
  }
}

function ChoosenJonas() {
  characterP.src = "Bilder/Jonas.png"
  choosenSkin = 2
  sessionStorage.setItem("choosenSkin", choosenSkin);
  rasmusSkin.style.backgroundColor = "brown";
  jonasSkin.style.backgroundColor = "red";
  torbSkin.style.backgroundColor = "brown";
  andSkin.style.backgroundColor = "brown";
  monkeSkin.style.backgroundColor = "brown";
  pandaSkin.style.backgroundColor = "brown";
  langbeinSkin.style.backgroundColor = "brown";
  peterSkin.style.backgroundColor = "brown";
  birkSkin.style.backgroundColor = "brown"
  kasperSkin.style.backgroundColor = "brown"
  elonSkin.style.backgroundColor = "brown"
  marioSkin.style.backgroundColor = "brown"
  peteSkin.style.backgroundColor = "brown"
  skrueSkin.style.backgroundColor = "brown"
  sidSkin.style.backgroundColor = "brown"
  stewieSkin.style.backgroundColor = "brown"
  rockSKin.style.backgroundColor = "brown"
  showAlert("Byttet skin til Jonas", "success");
}

function ChoosenAnd() {
  characterP.src = "Bilder/playerIcon1.png"
  choosenSkin = 3
  sessionStorage.setItem("choosenSkin", choosenSkin);
  rasmusSkin.style.backgroundColor = "brown";
  jonasSkin.style.backgroundColor = "brown";
  torbSkin.style.backgroundColor = "brown";
  andSkin.style.backgroundColor = "red";
  monkeSkin.style.backgroundColor = "brown";
  pandaSkin.style.backgroundColor = "brown";
  langbeinSkin.style.backgroundColor = "brown";
  peterSkin.style.backgroundColor = "brown";
  birkSkin.style.backgroundColor = "brown"
  kasperSkin.style.backgroundColor = "brown"
  elonSkin.style.backgroundColor = "brown"
  marioSkin.style.backgroundColor = "brown"
  peteSkin.style.backgroundColor = "brown"
  skrueSkin.style.backgroundColor = "brown"
  sidSkin.style.backgroundColor = "brown"
  stewieSkin.style.backgroundColor = "brown"
  rockSKin.style.backgroundColor = "brown"
  showAlert("Byttet skin til Anden", "success");
}

function chosenMonke() {
  characterP.src = "Bilder/monke.jpeg";
  choosenSkin = 4;
  sessionStorage.setItem("choosenSkin", choosenSkin);
  rasmusSkin.style.backgroundColor = "brown";
  jonasSkin.style.backgroundColor = "brown";
  torbSkin.style.backgroundColor = "brown";
  andSkin.style.backgroundColor = "brown";
  monkeSkin.style.backgroundColor = "red";
  pandaSkin.style.backgroundColor = "brown";
  langbeinSkin.style.backgroundColor = "brown";
  peterSkin.style.backgroundColor = "brown";
  birkSkin.style.backgroundColor = "brown"
  kasperSkin.style.backgroundColor = "brown"
  elonSkin.style.backgroundColor = "brown"
  marioSkin.style.backgroundColor = "brown"
  peteSkin.style.backgroundColor = "brown"
  skrueSkin.style.backgroundColor = "brown"
  sidSkin.style.backgroundColor = "brown"
  stewieSkin.style.backgroundColor = "brown"
  rockSKin.style.backgroundColor = "brown"
  showAlert("Byttet skin til Monke", "success");
}

function chosenPanda() {
  characterP.src = "Bilder/panda.png";
  choosenSkin = 5;
  sessionStorage.setItem("choosenSkin", choosenSkin);
  rasmusSkin.style.backgroundColor = "brown";
  jonasSkin.style.backgroundColor = "brown";
  torbSkin.style.backgroundColor = "brown";
  andSkin.style.backgroundColor = "brown";
  monkeSkin.style.backgroundColor = "brown";
  pandaSkin.style.backgroundColor = "red";
  langbeinSkin.style.backgroundColor = "brown";
  peterSkin.style.backgroundColor = "brown";
  birkSkin.style.backgroundColor = "brown"
  kasperSkin.style.backgroundColor = "brown"
  elonSkin.style.backgroundColor = "brown"
  marioSkin.style.backgroundColor = "brown"
  peteSkin.style.backgroundColor = "brown"
  skrueSkin.style.backgroundColor = "brown"
  sidSkin.style.backgroundColor = "brown"
  stewieSkin.style.backgroundColor = "brown"
  rockSKin.style.backgroundColor = "brown"
  showAlert("Byttet skin til Panda", "success");
}

function chosenLangbein() {
  characterP.src = "Bilder/angel.jpeg";
  choosenSkin = 6;
  sessionStorage.setItem("choosenSkin", choosenSkin);
  rasmusSkin.style.backgroundColor = "brown";
  jonasSkin.style.backgroundColor = "brown";
  torbSkin.style.backgroundColor = "brown";
  andSkin.style.backgroundColor = "brown";
  monkeSkin.style.backgroundColor = "brown";
  pandaSkin.style.backgroundColor = "brown";
  langbeinSkin.style.backgroundColor = "red";
  peterSkin.style.backgroundColor = "brown";
  birkSkin.style.backgroundColor = "brown"
  kasperSkin.style.backgroundColor = "brown"
  elonSkin.style.backgroundColor = "brown"
  marioSkin.style.backgroundColor = "brown"
  peteSkin.style.backgroundColor = "brown"
  skrueSkin.style.backgroundColor = "brown"
  sidSkin.style.backgroundColor = "brown"
  stewieSkin.style.backgroundColor = "brown"
  rockSKin.style.backgroundColor = "brown"
  showAlert("Byttet skin til Langbein", "success");
}

function chosenPeter() {
  characterP.src = "Bilder/peter.png";
  choosenSkin = 7;
  sessionStorage.setItem("choosenSkin", choosenSkin);
  rasmusSkin.style.backgroundColor = "brown";
  jonasSkin.style.backgroundColor = "brown";
  torbSkin.style.backgroundColor = "brown";
  andSkin.style.backgroundColor = "brown";
  monkeSkin.style.backgroundColor = "brown";
  pandaSkin.style.backgroundColor = "brown";
  langbeinSkin.style.backgroundColor = "brown";
  peterSkin.style.backgroundColor = "red";
  birkSkin.style.backgroundColor = "brown"
  kasperSkin.style.backgroundColor = "brown"
  elonSkin.style.backgroundColor = "brown"
  marioSkin.style.backgroundColor = "brown"
  peteSkin.style.backgroundColor = "brown"
  skrueSkin.style.backgroundColor = "brown"
  sidSkin.style.backgroundColor = "brown"
  stewieSkin.style.backgroundColor = "brown"
  rockSKin.style.backgroundColor = "brown"
  showAlert("Byttet skin til Peter Griffin", "success");
}

function ChoosenBirk() {
  characterP.src = "Bilder/Birk.png"
  choosenSkin = 8
  sessionStorage.setItem("choosenSkin", choosenSkin);
  rasmusSkin.style.backgroundColor = "brown";
  jonasSkin.style.backgroundColor = "brown";
  torbSkin.style.backgroundColor = "brown";
  andSkin.style.backgroundColor = "brown";
  monkeSkin.style.backgroundColor = "brown";
  pandaSkin.style.backgroundColor = "brown";
  langbeinSkin.style.backgroundColor = "brown";
  peterSkin.style.backgroundColor = "brown";
  birkSkin.style.backgroundColor = "red"
  kasperSkin.style.backgroundColor = "brown"
  elonSkin.style.backgroundColor = "brown"
  marioSkin.style.backgroundColor = "brown"
  peteSkin.style.backgroundColor = "brown"
  skrueSkin.style.backgroundColor = "brown"
  sidSkin.style.backgroundColor = "brown"
  stewieSkin.style.backgroundColor = "brown"
  rockSKin.style.backgroundColor = "brown"
  showAlert("Byttet skin til Birk", "success");
}

function choosenKasper() {
  characterP.src = "Bilder/kasper.png"
  choosenSkin = 9
  sessionStorage.setItem("choosenSkin", choosenSkin);
  rasmusSkin.style.backgroundColor = "brown";
  jonasSkin.style.backgroundColor = "brown";
  torbSkin.style.backgroundColor = "brown";
  andSkin.style.backgroundColor = "brown";
  monkeSkin.style.backgroundColor = "brown";
  pandaSkin.style.backgroundColor = "brown";
  langbeinSkin.style.backgroundColor = "brown";
  peterSkin.style.backgroundColor = "brown";
  birkSkin.style.backgroundColor = "brown"
  kasperSkin.style.backgroundColor = "red"
  elonSkin.style.backgroundColor = "brown"
  marioSkin.style.backgroundColor = "brown"
  peteSkin.style.backgroundColor = "brown"
  skrueSkin.style.backgroundColor = "brown"
  sidSkin.style.backgroundColor = "brown"
  stewieSkin.style.backgroundColor = "brown"
  rockSKin.style.backgroundColor = "brown"
  showAlert("Byttet skin til Kasper", "success");
}

function choosenElon() {
  characterP.src = "Bilder/elon.png"
  choosenSkin = 10
  sessionStorage.setItem("choosenSkin", choosenSkin);
  rasmusSkin.style.backgroundColor = "brown";
  jonasSkin.style.backgroundColor = "brown";
  torbSkin.style.backgroundColor = "brown";
  andSkin.style.backgroundColor = "brown";
  monkeSkin.style.backgroundColor = "brown";
  pandaSkin.style.backgroundColor = "brown";
  langbeinSkin.style.backgroundColor = "brown";
  peterSkin.style.backgroundColor = "brown";
  birkSkin.style.backgroundColor = "brown"
  kasperSkin.style.backgroundColor = "brown"
  elonSkin.style.backgroundColor = "red"
  marioSkin.style.backgroundColor = "brown"
  peteSkin.style.backgroundColor = "brown"
  skrueSkin.style.backgroundColor = "brown"
  sidSkin.style.backgroundColor = "brown"
  stewieSkin.style.backgroundColor = "brown"
  rockSKin.style.backgroundColor = "brown"
  showAlert("Byttet skin til Elon Musk", "success");
}

function choosenMario() {
  characterP.src = "Bilder/elon.png"
  choosenSkin = 11
  sessionStorage.setItem("choosenSkin", choosenSkin);
  rasmusSkin.style.backgroundColor = "brown";
  jonasSkin.style.backgroundColor = "brown";
  torbSkin.style.backgroundColor = "brown";
  andSkin.style.backgroundColor = "brown";
  monkeSkin.style.backgroundColor = "brown";
  pandaSkin.style.backgroundColor = "brown";
  langbeinSkin.style.backgroundColor = "brown";
  peterSkin.style.backgroundColor = "brown";
  birkSkin.style.backgroundColor = "brown"
  kasperSkin.style.backgroundColor = "brown"
  elonSkin.style.backgroundColor = "brown"
  marioSkin.style.backgroundColor = "red"
  skrueSkin.style.backgroundColor = "brown"
  sidSkin.style.backgroundColor = "brown"
  stewieSkin.style.backgroundColor = "brown"
  rockSKin.style.backgroundColor = "brown"
  showAlert("Byttet skin til Mario", "success");
}

function choosenPete() {
  characterP.src = "Bilder/peteD.png"
  choosenSkin = 12
  sessionStorage.setItem("choosenSkin", choosenSkin);
  rasmusSkin.style.backgroundColor = "brown";
  jonasSkin.style.backgroundColor = "brown";
  torbSkin.style.backgroundColor = "brown";
  andSkin.style.backgroundColor = "brown";
  monkeSkin.style.backgroundColor = "brown";
  pandaSkin.style.backgroundColor = "brown";
  langbeinSkin.style.backgroundColor = "brown";
  peterSkin.style.backgroundColor = "brown";
  birkSkin.style.backgroundColor = "brown"
  kasperSkin.style.backgroundColor = "brown"
  elonSkin.style.backgroundColor = "brown"
  marioSkin.style.backgroundColor = "brown"
  peteSkin.style.backgroundColor = "red"
  skrueSkin.style.backgroundColor = "brown"
  sidSkin.style.backgroundColor = "brown"
  stewieSkin.style.backgroundColor = "brown"
  rockSKin.style.backgroundColor = "brown"
  showAlert("Byttet skin til Pete Davidson", "success");
}


//fiender
//oppdager fiender
let fiende = 0
let enemyCheckEnabled = true;
function checkForNPC() {
  let npcs = document.querySelectorAll(".npc");
  let characterPlassering = character.getBoundingClientRect();
  npcs.forEach(function (enemy) {
    let npcPlassering = enemy.getBoundingClientRect();

    if (
      characterPlassering.right > npcPlassering.left &&
      characterPlassering.left < npcPlassering.right &&
      characterPlassering.bottom > npcPlassering.top &&
      characterPlassering.top < npcPlassering.bottom
    ) {
      fiende = enemy.id

      showEnemyPopup(enemy);

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
    if (fiende == "tarzan"){
      enemyOrNot.innerText = "Du møtte Tarzan!! Han trenger din hjelp for å plyndre et skattekammer! Vil du hjelpe han og få halvparten av gullet i skattekameret??"
      godtaOrUtfordre.innerText ="Hjelp han!"
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
  if (fiende == "tarzan"){
    hjelpTarzan()
  }



}

function birkSinQuiz() {
  godtaOrUtfordre.addEventListener("click", utfordreFiende)
  godtaOrUtfordre.removeEventListener("click", birkSinQuiz)
  opponent = 19
  sessionStorage.setItem("opponent", 19)
  window.location.href = 'Quiz/quiz_3.html';
}


function declineEnemy(enemyid) {
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
  window.location.href = 'Combat/Combat.html';

}

function fightJonas() {
  opponent = 1
  sessionStorage.setItem("opponent", opponent)
  window.location.href = 'Combat/Combat.html';
}

function fightKasper() {
  opponent = 2
  sessionStorage.setItem("opponent", opponent)
  window.location.href = 'Combat/Combat.html';
}

function fightElonMusk() {
  opponent = 3
  sessionStorage.setItem("opponent", opponent)
  window.location.href = 'Combat/Combat.html';
}

function fightMario() {
  opponent = 4
  sessionStorage.setItem("opponent", opponent)
  window.location.href = 'Combat/Combat.html';
}

function fightPeteDavidson() {
  opponent = 5
  sessionStorage.setItem("opponent", opponent)
  window.location.href = 'Combat/Combat.html';
}
function hjelpTarzan(){
  window.location.href = 'TarzanJumpIsland/TarzanJumpIsland.html';
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
    img.src = 'Bilder/tre.png';
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
let movePlayer = sessionStorage.getItem("movePlayer") || 4

let upgradeSpeed = 1000;

const speedUpg = document.getElementById("speedUpg");

function SpeedIncrease() {
  if (movePlayer < 10 && money >= upgradeSpeed) {
    movePlayer += 2;
    sessionStorage.setItem("movePlayer", movePlayer)
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
  let currentLeft = parseInt(character.style.left) || 0;
  let currentTop = parseInt(character.style.top) || 0;

  if (movement.ArrowLeft || movement.a || movement.A) {
    posisjonBredde = currentLeft - movePlayer
    sessionStorage.setItem("posisjonBredde", posisjonBredde)
    character.style.left = posisjonBredde + "px";
    character.style.transform = "scaleX(-1)"
    checkCharacterPosition();
    checkForChests()
    checkForNPC()
    updateScreenPositionLeft()
  }
  if (movement.ArrowRight || movement.d || movement.D) {
    posisjonBredde = currentLeft + movePlayer
    sessionStorage.setItem("posisjonBredde", posisjonBredde)
    character.style.left = posisjonBredde + "px";
    character.style.transform = "scaleX(1)"
    checkCharacterPosition();
    checkForChests()
    checkForNPC()
    updateScreenPositionRight()
  }
  if (movement.ArrowUp || movement.w || movement.W) {
    posisjonHoyde = currentTop - movePlayer
    sessionStorage.setItem("posisjonHoyde", posisjonHoyde)
    character.style.top = posisjonHoyde + "px";
    checkCharacterPosition();
    checkForChests()
    checkForNPC()
    updateScreenPositionTop()
  }
  if (movement.ArrowDown || movement.s || movement.S) {
    posisjonHoyde = currentTop + movePlayer
    sessionStorage.setItem("posisjonHoyde", posisjonHoyde)
    character.style.top = posisjonHoyde + "px";
    checkCharacterPosition();
    checkForChests()
    checkForNPC()
    updateScreenPositionDown()
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



function checkForChests() {
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

  let chestsId = chest.id

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
  }


}
function consoleLog() {
  console.log(chestsId) }


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


  sessionStorage.setItem(chestId, 1);
  if (currentPopup) {
    document.body.removeChild(currentPopup);
    currentPopup = null;
  }

  if (chestId != "Chest1" && chestId != "Chest2" && chestId != "Chest25") {
    window.location.href = 'Chests/ChestOpen.html'
  }

  if (chestId == "Chest1") {
    window.location.href = 'Quiz/js_quiz.html';
  }

  if (chestId == "Chest2") {
    window.location.href = 'Quiz/quiz_2.html';
  }

  if (chestId == "Chest25") {
    window.location.href = 'Quiz/quiz_4.html';
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

  showPopup("Du drukna, suger å suge")
  resetCharacterPosition();
}

function checkCharacterPosition() {
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
  const island = document.getElementById("øy");
  const onWater = isCharacterOnWater(character, island);


  // Endre antall pixler for å endre hvor man blir teleportert
  if (onWater) {
    character.style.left = "350px";
    character.style.top = "350px";
    //character.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

  npcYesBtn.textContent = "Yes";
  npcNoBtn.textContent = "No";

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
      showNPCDialog("Great! Would you like to spin the wheel to get a random skin for 1000 money?");
      npcYesBtn.textContent = "Sure";
      npcNoBtn.textContent = "Decline";

      npcYesBtn.addEventListener("click", handlePurchase);
    }, 2);
  } else {
    console.log("Player said 'No'");
    hideNPCDialog();
  }
}

npcNoBtn.addEventListener("click", () => {
  hideNPCDialog();
});

function handlePurchase() {
  console.log("Player wants to purchase");
  hideNPCDialog();

  setTimeout(function () {
    showNPCDialog("Great! Please confirm your purchase.");

    npcYesBtn.textContent = "Confirm";
    npcNoBtn.textContent = "Cancel";


    npcYesBtn.addEventListener("click", buyRandomSkin);
  }, 2);
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
    showAlert("Ikke nok penger til å spinne skin wheel", "error");
    spillAvError();
  }
}

function spinWheel() {
  const spinner = document.getElementById('skinWheel');
  console.log("Spinning wheel...");

  const arrow = document.createElement('div');
  arrow.classList.add('arrow-down');
  document.body.appendChild(arrow);

  const randomDegree = 360 * (Math.random() * 5 + 1);
  console.log("Random degree:", randomDegree);

  const rotateValue = `rotate(${randomDegree}deg)`;
  console.log("Rotate value:", rotateValue);

  spinner.style.display = 'block';
  spinner.style.transform = rotateValue;

  setTimeout(() => {
    console.log("Spinning complete!");
    checkResult(randomDegree % 360);
    hideWheel();
    spinning = false;
  }, 1000);
}

let gotPeter = 0;
let gotPanda = 0;
let gotMonke = 0;
let gotLangbein = 0;

function checkResult(angle) {
  console.log("Checking result for angle:", angle);
  const sectionSize = 18;

  if (angle <= sectionSize) {
    showAlert("Congratulations! You landed on Section 1, langbein", "success");
    if (gotLangbein == 10) {
      money += 1000;
      showAlert("You got back 1000 money since you already have Langbein", "success")
    } else {
      gotLangbein = 10;
    }
  } else if (angle <= 4 * sectionSize) {
    showAlert("Congratulations! You landed on Section 2, monke", "success");
    if (gotMonke == 10) {
      money += 500;
      showAlert("You got back 500 money since you already have Monke", "success")
    } else {
      gotMonke = 10;
    }
  } else if (angle <= 10 * sectionSize) {
    showAlert("Congratulations! You landed on Section 3, panda", "success");
    if (gotPanda == 10) {
      money += 250;
      showAlert("You got back 250 money since you already have Panda", "success")
    } else {
      gotPanda = 10;
    }
  } else {
    showAlert("Congratulations! You landed on Section 4, peter", "success");
    if (gotPeter == 10) {
      money += 100;
      showAlert("You got back 100 money since you already have Peter", "success")
    } else {
      gotPeter = 10;
    }
  }
}

function hideWheel() {
  const spinner = document.getElementById('skinWheel');
  spinner.style.display = 'none';
  spinner.style.animation = ''; // Clear any existing animation
  const arrow = document.querySelector('.arrow-down');
  if (arrow) {
    arrow.remove();
  }
}
