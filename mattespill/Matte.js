let score = 0
const scoreBoard = document.getElementById("score")
const body = document.getElementById("body")
let opponent = 0
opponent = parseInt(sessionStorage.getItem("opponent")) || 0
let matteSeier = 0

function genererMatteoppgave() {
  let tall1 = Math.floor(Math.random() * 10) + 1; // Tilfeldig tall mellom 1 og 10
  let tall2 = Math.floor(Math.random() * 10) + 1; // Tilfeldig tall mellom 1 og 10

  let operasjon = Math.random() < 0.5 ? '+' : '-'; // 50% sjanse for addisjon, 50% for subtraksjon

  let matteoppgave = tall1 + ' ' + operasjon + ' ' + tall2 + ' = ';
  document.getElementById('matteboks').value = matteoppgave;

  // Tilfeldig farge genereres
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById('midtboks-container').style.backgroundColor = randomColor;
  document.getElementById('midtboks-container').style.display = 'inline-block';
  document.getElementById('resultat-boks').textContent = '';

  pengeknapp.style.display ="none"
}

function sjekkSvar() {
  let brukerSvar = document.getElementById('svar').value;
  let matteoppgaveTekst = document.getElementById('matteboks').value;
  let riktigSvar = eval(matteoppgaveTekst.replace('=', ''));

  let resultatTekst = ' '

  if (parseInt(brukerSvar) === riktigSvar) {
    resultatTekst = 'Riktig svar!';
    score += 1
    
    genererMatteoppgave()
    scoreBoard.innerText = score;
  }

  else if(parseInt(brukerSvar) != riktigSvar) {
    resultatTekst = 'Feil svar! Prøv igjen.';

    score = 0
    scoreBoard.innerText = score;
  }
  console.log(score)

  if(score == 5) {
    console.log("du vant")

    goHome()
  }

  document.getElementById('resultat-boks').textContent = resultatTekst;
}

function goHome() {
  if(opponent != 18) {
    matteSeier = 1
    localStorage.setItem("matteSeier", matteSeier)
    window.location.href = '../Chests/ChestOpen.html';
}

if(opponent == 18) {
    matteSeier = 3
    localStorage.setItem("matteSeier", matteSeier)
    window.location.href = '../Island/index.html';
}
}

function slettResultat() {
  document.getElementById('resultat-boks').textContent = '';
}

function giveUp() {
  window.location.href = '../Island/index.html';
}