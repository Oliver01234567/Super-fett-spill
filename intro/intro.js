const explButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");
const explText = document.getElementById("content");
const fortsett = document.getElementById("HoppOver");

let currentTextIndex = 0;
const texts = [
    "Hei! Velkommen til Realm Of Riches!",
    'Realm Of Riches er et "open world" spill med masse utfordringer!',
    "For å bevege deg rundt på øya, kan du bruke W, A, S og D.",
    "Men hva enn du gjør...",
    "IKKE FORLAT ØYA!",
    "Beveger du deg videre enn stranden DRUKNER DU!",
    "På øya er det mange kister man kan åpne for å få belønninger!",
    "men i noen kister skjuler det seg noen utfordringer du må løse.",
    "Belønningene du får, kan brukes i menyen oppe i det høyre hjørnet.",
    "Her kan du kjøpe deg oppgraderinger, og nye skins!",
    "Noen av oppgraderingene vil du få bruk for i kamp.",
    "Det er nemlig plassert ut fiender på øya som må beseires i Holmgang!",
    "Du vil få vite mer om dette når du møter på fiendene",
    "Spillet er ferdig når du har:",
    "1. Beseiret alle fiender",
    "2. Åpnet alle kister",
    "3. løst alle oppgaver og utfordringer",
    "4. låst opp alt i menyen",
    "Lykke til!"
];
const previousTexts = [];


let bufferArray = []

function showText(index) {
    explText.innerText = texts[index];
    currentTextIndex = index;
    updateButtonsVisibility();
}

function updateButtonsVisibility() {
    backButton.style.display = currentTextIndex === 0 ? "none" : "block";
    explButton.innerHTML = currentTextIndex === texts.length - 1 ? "Start Spillet" : "Neste";
    fortsett.style.display = currentTextIndex === texts.length - 1 ? "none" : "block";
}

let skrivingPågår = false; // Variabel for å sjekke om skriving pågår. dette er for å unngå at man kan spamme neste og få opp samme tekst flere ganger

explButton.addEventListener("click", () => {
    if (!skrivingPågår) { // Sjekk om skriving ikke allerede pågår
        skrivingPågår = true; // Merk at skrivingen er i gang
        previousTexts.push(explText.innerText);
        explText.innerHTML = ""; // Tømmer innholdet i tekstboksen
        bufferArray = bufferArray.concat(texts[currentTextIndex + 1].split("")); // Deler opp neste tekst i enkeltbokstaver og legger dem til i bufferArray
        skrivNesteTekst(); // Starter skrivingen av neste tekst
    }
});

function skrivNesteTekst() {
    // Sjekker om bufferArray er tom, hvis ikke, skriv ut neste bokstav
    if (bufferArray.length > 0) {
        skrivBokstav(); // Skriv ut neste bokstav
        setTimeout(skrivNesteTekst, 70); // Vent 50 millisekunder før neste bokstav skrives
    } else {
        // Hvis bufferArray er tom, oppdaterer du knappevisibiliteten
        currentTextIndex++;
        updateButtonsVisibility();
        skrivingPågår = false; // Merk at skrivingen er ferdig
    }
}

backButton.addEventListener("click", () => {
    if (previousTexts.length > 0) {
        const previousText = previousTexts.pop();
        explText.innerText = previousText;
        currentTextIndex--;
        updateButtonsVisibility();
    }
});

function skrivBokstav() {
    // Les en bokstav fra starten av arrayet (og "pop" den ut)
    if (bufferArray.length > 0) {
        explText.innerHTML += bufferArray.shift()
    }
}
setInterval(skrivBokstav, 70)

document.addEventListener("DOMContentLoaded", function() {
    const snakkebobleContainer = document.getElementById("snakkeboble-container");
    const snakkeboble = document.getElementById("snakkeboble");
    const nextButton = document.getElementById("nextButton");
    const backButton = document.getElementById("backButton");
    const hoppoverButton = document.getElementById("HoppOver");
    const knappboks = document.getElementById("flexboks");

    function visElementer() {
        snakkebobleContainer.style.display = "block";
        SpillForklaring.style.transform = "scaleX(1)";
        knappboks.style.display = "flex";
        showText(0); // Vis første tekst når elementer vises
    }

    // Gjør snakkeboblen og knappene synlige etter 3 sekunder
    setTimeout(visElementer, 3000);
});