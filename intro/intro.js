document.addEventListener("DOMContentLoaded", function() {
    const snakkebobleContainer = document.getElementById("snakkeboble-container");
    const snakkeboble = document.getElementById("snakkeboble");
    const nextButton = document.getElementById("nextButton");
    const backButton = document.getElementById("backButton");
    const hoppoverButton = document.getElementById("HoppOver")
    const knappboks = document.getElementById("flexboks")

    function visElementer() {
        snakkebobleContainer.style.display = "block";
        SpillForklaring.style.transform ="scaleX(1)"
        knappboks.style.display = "flex";
    }
    

    // Gjør snakkeboblen og knappene synlige etter 3 sekunder
    setTimeout(visElementer, 3000);
});

//forklaringen av spillet. Når du trylkker på neste kommer det flere forklaringer.

const explButton = document.getElementById("nextButton")
const explText = document.getElementById("content")
const fortsett = document.getElementById("HoppOver")
const tilbakeButton = document.getElementById("backButton")


explButton.addEventListener("click", next1)

function next1() {
    explText.innerText = 'Realm Of Riches er et "open world" spill med masse utfordinger!'
    backButton.style.display = "block";

    explButton.removeEventListener("click", next1)
    explButton.addEventListener("click", next2)

    tilbakeButton.addEventListener("click", back1)


}

function next2() {
    explText.innerText = "For å bevege deg rundt på øya, kan du bruke W, A, S og D."

    explButton.removeEventListener("click", next2)
    explButton.addEventListener("click", next3)

    tilbakeButton.addEventListener("click", back2)
}

function next3() {
    explText.innerText = "Men hva enn du gjør..."

    explButton.removeEventListener("click", next3)
    explButton.addEventListener("click", next4)

    tilbakeButton.addEventListener("click", back3)
}

function next4() {
    explText.innerText = "IKKE FORLAT ØYA!"

    explButton.removeEventListener("click", next4)
    explButton.addEventListener("click", next5)

    tilbakeButton.addEventListener("click", back4)
}

function next5() {
    explText.innerText = "Beveger du deg videre enn stranden DRUKNER DU!."

    explButton.removeEventListener("click", next5)
    explButton.addEventListener("click", next6)

    tilbakeButton.addEventListener("click", back5)
}



function next6() {
    explText.innerText = "På øya er det mange kister man kan åpne for å få belønninger!"

    explButton.removeEventListener("click", next6)
    explButton.addEventListener("click", next7)

    tilbakeButton.addEventListener("click", back6)
}

function next7() {
    explText.innerText = "men i noen kister skjuler det seg noen utfordringer du må løse."

    explButton.removeEventListener("click", next7)
    explButton.addEventListener("click", next8)

    tilbakeButton.addEventListener("click", back7)
}

function next8() {
    explText.innerText = "Belønningene du får, kan brukes i menyen oppe i det høyre hjørnet"

    explButton.removeEventListener("click", next8)
    explButton.addEventListener("click", next9)

    tilbakeButton.addEventListener("click", back8)
}

function next9() {
    explText.innerText = "her kan du kjøpe deg oppgraderinger, og nye skins!"

    explButton.removeEventListener("click", next9)
    explButton.addEventListener("click", next10)

    tilbakeButton.addEventListener("click", back9)
}

function next10() {
    explText.innerText = "Noen av oppgraderingene vil du få bruk for i kamp."

    explButton.removeEventListener("click", next10)
    explButton.addEventListener("click", next11)

    tilbakeButton.addEventListener("click", back10)
}

function next11() {
    explText.innerText = "Det er nemlig plassert ut fiender på øya som må beseires i Holmgang!"

    explButton.removeEventListener("click", next11)
    explButton.addEventListener("click", next12)

    tilbakeButton.addEventListener("click", back11)
}

function next12() {
    explText.innerText = "Du vil få vite mer om dette når du møter på fiendene"

    explButton.removeEventListener("click", next12)
    explButton.addEventListener("click", next13)

    tilbakeButton.addEventListener("click", back12)
}

function next13() {
    explText.innerText = "Spillet er ferdig når du har:"

    explButton.removeEventListener("click", next13)
    explButton.addEventListener("click", next14)

    tilbakeButton.addEventListener("click", back13)
}

function next14() {
    explText.innerText = "1. Beseiret alle fiender"

    explButton.removeEventListener("click", next14)
    explButton.addEventListener("click", next15)

    tilbakeButton.addEventListener("click", back14)
}

function next15() {
    explText.innerText = "2. Åpnet alle kister"

    explButton.removeEventListener("click", next15)
    explButton.addEventListener("click", next16)

    tilbakeButton.addEventListener("click", back15)
}

function next16() {
    explText.innerText = "3. løst alle oppgaver og utfordringer"

    explButton.removeEventListener("click", next16)
    explButton.addEventListener("click", next17)

    tilbakeButton.addEventListener("click", back16)
}

function next17() {
    explText.innerText = "4. låst opp alt i menyen"

    explButton.removeEventListener("click", next17)
    explButton.addEventListener("click", next18)

    tilbakeButton.addEventListener("click", back17)
}

function next18() {
    explText.innerText = "Lykke til!"

    explButton.removeEventListener("click", next18)
    explButton.addEventListener("click", startGame)

    explButton.innerHTML = "Start Spillet"
    fortsett.style.display = "none"

    tilbakeButton.addEventListener("click", back18)

    

    
}


function startGame() {
    document.location = '../Island/index.html'
}

tilbakeButton.addEventListener("click", back1)

function back1() {
    explText.innerText = 'Velkommen til Realm of Riches!'
    explButton.removeEventListener("click", next2)
    explButton.addEventListener("click", next1)

    tilbakeButton.removeEventListener("click", back1)

}

function back2() {
    explText.innerText = 'Realm Of Riches er et "open world" spill med masse utfordinger!'
    explButton.removeEventListener("click", next3)
    explButton.addEventListener("click", next2)

    tilbakeButton.removeEventListener("click", back2)
    tilbakeButton.addEventListener("click", back1)
}

function back3() {
    explText.innerText = 'For å bevege deg rundt på øya, kan du bruke W, A, S og D.'
    explButton.removeEventListener("click", next4)
    explButton.addEventListener("click", next3)

    tilbakeButton.removeEventListener("click", back3)
    tilbakeButton.addEventListener("click", back2)
}

function back4() {
    explText.innerText = 'Men hva enn du gjør...'
    explButton.removeEventListener("click", next5)
    explButton.addEventListener("click", next4)

    tilbakeButton.removeEventListener("click", back4)
    tilbakeButton.addEventListener("click", back3)
}

function back5() {
    explText.innerText = 'IKKE FORLAT ØYA!'
    explButton.removeEventListener("click", next6)
    explButton.addEventListener("click", next5)

    tilbakeButton.removeEventListener("click", back5)
    tilbakeButton.addEventListener("click", back4)
}

function back6() {
    explText.innerText = 'Da drukner du eller blir spist av sjømonsteret.'
    explButton.removeEventListener("click", next7)
    explButton.addEventListener("click", next6)

    tilbakeButton.removeEventListener("click", back6)
    tilbakeButton.addEventListener("click", back5)
}

function back7() {
    explText.innerText = 'På øya er det mange kister man kan åpne for å få belønninger!'
    explButton.removeEventListener("click", next8)
    explButton.addEventListener("click", next7)

    tilbakeButton.removeEventListener("click", back7)
    tilbakeButton.addEventListener("click", back6)
}

function back8() {
    explText.innerText = 'men i noen kister skjuler det seg noen utfordringer du må løse.'
    explButton.removeEventListener("click", next9)
    explButton.addEventListener("click", next8)

    tilbakeButton.removeEventListener("click", back8)
    tilbakeButton.addEventListener("click", back7)
}

function back9() {
    explText.innerText = 'Belønningene du får, kan brukes i menyen oppe i det høyre hjørnet'
    explButton.removeEventListener("click", next10)
    explButton.addEventListener("click", next9)

    tilbakeButton.removeEventListener("click", back9)
    tilbakeButton.addEventListener("click", back8)
}

function back10() {
    explText.innerText = 'her kan du kjøpe deg oppgraderinger, og nye skins!'
    explButton.removeEventListener("click", next11)
    explButton.addEventListener("click", next10)

    tilbakeButton.removeEventListener("click", back10)
    tilbakeButton.addEventListener("click", back9)
}

function back11() {
    explText.innerText = 'Noen av oppgraderingene vil du få bruk for i kamp.'
    explButton.removeEventListener("click", next12)
    explButton.addEventListener("click", next11)

    tilbakeButton.removeEventListener("click", back11)
    tilbakeButton.addEventListener("click", back10)
}

function back12() {
    explText.innerText = 'Det er nemlig plassert ut fiender på øya som må beseires i Holmgang!'
    explButton.removeEventListener("click", next13)
    explButton.addEventListener("click", next12)

    tilbakeButton.removeEventListener("click", back12)
    tilbakeButton.addEventListener("click", back11)
}

function back13() {
    explText.innerText = 'Du vil få vite mer om dette når du møter på fiendene'
    explButton.removeEventListener("click", next14)
    explButton.addEventListener("click", next13)

    tilbakeButton.removeEventListener("click", back13)
    tilbakeButton.addEventListener("click", back12)
}

function back14() {
    explText.innerText = 'Spillet er ferdig når du har:'
    explButton.removeEventListener("click", next15)
    explButton.addEventListener("click", next14)

    tilbakeButton.removeEventListener("click", back14)
    tilbakeButton.addEventListener("click", back13)
}

function back15() {
    explText.innerText = '1. Beseiret alle fiender'
    explButton.removeEventListener("click", next16)
    explButton.addEventListener("click", next15)

    tilbakeButton.removeEventListener("click", back15)
    tilbakeButton.addEventListener("click", back14)
}

function back16() {
    explText.innerText = '2. Åpnet alle kister'
    explButton.removeEventListener("click", next17)
    explButton.addEventListener("click", next16)

    tilbakeButton.removeEventListener("click", back16)
    tilbakeButton.addEventListener("click", back15)
}

function back17() {
    explText.innerText = '3. løst alle oppgaver og utfordringer'
    explButton.removeEventListener("click", next18)
    explButton.addEventListener("click", next17)

    tilbakeButton.removeEventListener("click", back17)
    tilbakeButton.addEventListener("click", back16)
}

function back18() {
    explText.innerText = '4. låst opp alt i menyen'
    explButton.removeEventListener("click", startGame)
    explButton.addEventListener("click", next18)


    tilbakeButton.removeEventListener("click", back18)
    tilbakeButton.addEventListener("click", back17)

    explButton.innerHTML = "Neste"
    fortsett.style.display = "block"
}