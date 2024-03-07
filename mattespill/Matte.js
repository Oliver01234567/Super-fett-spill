let penger = 0
oppdaterPenger()

function genererMatteoppgave() {
  var tall1 = Math.floor(Math.random() * 10) + 1; // Tilfeldig tall mellom 1 og 10
  var tall2 = Math.floor(Math.random() * 10) + 1; // Tilfeldig tall mellom 1 og 10

  var operasjon = Math.random() < 0.5 ? '+' : '-'; // 50% sjanse for addisjon, 50% for subtraksjon

  var matteoppgave = tall1 + ' ' + operasjon + ' ' + tall2 + ' = ';
  document.getElementById('matteboks').value = matteoppgave;

  // Tilfeldig farge genereres
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById('midtboks-container').style.backgroundColor = randomColor;
  document.getElementById('midtboks-container').style.display = 'inline-block';
  document.getElementById('resultat-boks').textContent = '';

  pengeknapp.style.display ="none"
}

function sjekkSvar() {
  var brukerSvar = document.getElementById('svar').value;
  var matteoppgaveTekst = document.getElementById('matteboks').value;
  var riktigSvar = eval(matteoppgaveTekst.replace('=', ''));

  var resultatTekst = 'Feil svar! Prøv igjen.';
  if (parseInt(brukerSvar) === riktigSvar) {
    resultatTekst = 'Riktig svar!';
    penger += 100
    oppdaterPenger()
    genererMatteoppgave()
    spillAvPengeLyd()
  }

  document.getElementById('resultat-boks').textContent = resultatTekst;
}

function slettResultat() {
  document.getElementById('resultat-boks').textContent = '';
}

function oppdaterPenger() {
  document.getElementById("penger").innerHTML = penger;
  spillAvPengeLyd();
  function spillAvPengeLyd() {
    var lydElement = document.getElementById('moneySound');
    lydElement.currentTime = 0; 
    lydElement.play();
  }
}


function avsluttMatteoppgave() {
  document.getElementById('midtboks-container').style.display = 'none';
  slettResultat();
  pengeknapp.style.display ="block"
}