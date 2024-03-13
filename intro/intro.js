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


explButton.addEventListener("click", Next1)

function Next1() {
    explText.innerText = 'Realm Of Riches er et "open world" spill med masse utfordinger!'
    backButton.style.display = "block";

    explButton.removeEventListener("click", Next1)
    explButton.addEventListener("click", Next2)

    tilbakeButton.addEventListener("click", Back1)


}

function Next2() {
    explText.innerText = "For å bevege deg rundt på øya, kan du bruke W, A, S og D."

    explButton.removeEventListener("click", Next2)
    explButton.addEventListener("click", Next3)

    tilbakeButton.addEventListener("click", Back2)
}

function Next3() {
    explText.innerText = "Men hva enn du gjør..."

    explButton.removeEventListener("click", Next3)
    explButton.addEventListener("click", Next4)

    tilbakeButton.addEventListener("click", Back3)
}

function Next4() {
    explText.innerText = "IKKE FORLAT ØYA!"

    explButton.removeEventListener("click", Next4)
    explButton.addEventListener("click", Next5)

    tilbakeButton.addEventListener("click", Back4)
}

function Next5() {
    explText.innerText = "Da drukner du eller blir spist av sjømonsteret."

    explButton.removeEventListener("click", Next5)
    explButton.addEventListener("click", Next6)

    tilbakeButton.addEventListener("click", Back5)
}



function Next6() {
    explText.innerText = "På øya er det mange kister man kan åpne for å få belønninger!"

    explButton.removeEventListener("click", Next6)
    explButton.addEventListener("click", Next7)

    tilbakeButton.addEventListener("click", Back6)
}

function Next7() {
    explText.innerText = "men i noen kister skjuler det seg noen utfordringer du må løse."

    explButton.removeEventListener("click", Next7)
    explButton.addEventListener("click", Next8)

    tilbakeButton.addEventListener("click", Back7)
}

function Next8() {
    explText.innerText = "Belønningene du får, kan brukes i menyen oppe i det høyre hjørnet"

    explButton.removeEventListener("click", Next8)
    explButton.addEventListener("click", Next9)

    tilbakeButton.addEventListener("click", Back8)
}

function Next9() {
    explText.innerText = "her kan du kjøpe deg oppgraderinger, og nye skins!"

    explButton.removeEventListener("click", Next9)
    explButton.addEventListener("click", Next10)

    tilbakeButton.addEventListener("click", Back9)
}

function Next10() {
    explText.innerText = "Noen av oppgraderingene vil du få bruk for i kamp."

    explButton.removeEventListener("click", Next10)
    explButton.addEventListener("click", Next11)

    tilbakeButton.addEventListener("click", Back10)
}

function Next11() {
    explText.innerText = "Det er nemlig plassert ut fiender på øya som må beseires i Holmgang!"

    explButton.removeEventListener("click", Next11)
    explButton.addEventListener("click", Next12)

    tilbakeButton.addEventListener("click", Back11)
}

function Next12() {
    explText.innerText = "Du vil få vite mer om dette når du møter på fiendene"

    explButton.removeEventListener("click", Next12)
    explButton.addEventListener("click", Next13)

    tilbakeButton.addEventListener("click", Back12)
}

function Next13() {
    explText.innerText = "Spillet er ferdig når du har:"

    explButton.removeEventListener("click", Next13)
    explButton.addEventListener("click", Next14)

    tilbakeButton.addEventListener("click", Back13)
}

function Next14() {
    explText.innerText = "1. Beseiret alle fiender"

    explButton.removeEventListener("click", Next14)
    explButton.addEventListener("click", Next15)

    tilbakeButton.addEventListener("click", Back14)
}

function Next15() {
    explText.innerText = "2. Åpnet alle kister"

    explButton.removeEventListener("click", Next15)
    explButton.addEventListener("click", Next16)

    tilbakeButton.addEventListener("click", Back15)
}

function Next16() {
    explText.innerText = "3. løst alle oppgaver og utfordringer"

    explButton.removeEventListener("click", Next16)
    explButton.addEventListener("click", Next17)

    tilbakeButton.addEventListener("click", Back16)
}

function Next17() {
    explText.innerText = "4. låst opp alt i menyen"

    explButton.removeEventListener("click", Next17)
    explButton.addEventListener("click", Next18)

    tilbakeButton.addEventListener("click", Back17)
}

function Next18() {
    explText.innerText = "Lykke til!"

    explButton.removeEventListener("click", Next18)
    explButton.addEventListener("click", StartGame)

    explButton.innerHTML = "Start Spillet"
    fortsett.style.display = "none"

    tilbakeButton.addEventListener("click", Back18)

    

    
}


function StartGame() {
    document.location = '../Island/index.html'
}

tilbakeButton.addEventListener("click", Back1)

function Back1() {
    explText.innerText = 'Velkommen til Realm of Riches!'
    explButton.removeEventListener("click", Next2)
    explButton.addEventListener("click", Next1)

    tilbakeButton.removeEventListener("click", Back1)

}

function Back2() {
    explText.innerText = 'Realm Of Riches er et "open world" spill med masse utfordinger!'
    explButton.removeEventListener("click", Next3)
    explButton.addEventListener("click", Next2)

    tilbakeButton.removeEventListener("click", Back2)
    tilbakeButton.addEventListener("click", Back1)
}

function Back3() {
    explText.innerText = 'For å bevege deg rundt på øya, kan du bruke W, A, S og D.'
    explButton.removeEventListener("click", Next4)
    explButton.addEventListener("click", Next3)

    tilbakeButton.removeEventListener("click", Back3)
    tilbakeButton.addEventListener("click", Back2)
}

function Back4() {
    explText.innerText = 'Men hva enn du gjør...'
    explButton.removeEventListener("click", Next5)
    explButton.addEventListener("click", Next4)

    tilbakeButton.removeEventListener("click", Back4)
    tilbakeButton.addEventListener("click", Back3)
}

function Back5() {
    explText.innerText = 'IKKE FORLAT ØYA!'
    explButton.removeEventListener("click", Next6)
    explButton.addEventListener("click", Next5)

    tilbakeButton.removeEventListener("click", Back5)
    tilbakeButton.addEventListener("click", Back4)
}

function Back6() {
    explText.innerText = 'Da drukner du eller blir spist av sjømonsteret.'
    explButton.removeEventListener("click", Next7)
    explButton.addEventListener("click", Next6)

    tilbakeButton.removeEventListener("click", Back6)
    tilbakeButton.addEventListener("click", Back5)
}

function Back7() {
    explText.innerText = 'På øya er det mange kister man kan åpne for å få belønninger!'
    explButton.removeEventListener("click", Next8)
    explButton.addEventListener("click", Next7)

    tilbakeButton.removeEventListener("click", Back7)
    tilbakeButton.addEventListener("click", Back6)
}

function Back8() {
    explText.innerText = 'men i noen kister skjuler det seg noen utfordringer du må løse.'
    explButton.removeEventListener("click", Next9)
    explButton.addEventListener("click", Next8)

    tilbakeButton.removeEventListener("click", Back8)
    tilbakeButton.addEventListener("click", Back7)
}

function Back9() {
    explText.innerText = 'Belønningene du får, kan brukes i menyen oppe i det høyre hjørnet'
    explButton.removeEventListener("click", Next10)
    explButton.addEventListener("click", Next9)

    tilbakeButton.removeEventListener("click", Back9)
    tilbakeButton.addEventListener("click", Back8)
}

function Back10() {
    explText.innerText = 'her kan du kjøpe deg oppgraderinger, og nye skins!'
    explButton.removeEventListener("click", Next11)
    explButton.addEventListener("click", Next10)

    tilbakeButton.removeEventListener("click", Back10)
    tilbakeButton.addEventListener("click", Back9)
}

function Back11() {
    explText.innerText = 'Noen av oppgraderingene vil du få bruk for i kamp.'
    explButton.removeEventListener("click", Next12)
    explButton.addEventListener("click", Next11)

    tilbakeButton.removeEventListener("click", Back11)
    tilbakeButton.addEventListener("click", Back10)
}

function Back12() {
    explText.innerText = 'Det er nemlig plassert ut fiender på øya som må beseires i Holmgang!'
    explButton.removeEventListener("click", Next13)
    explButton.addEventListener("click", Next12)

    tilbakeButton.removeEventListener("click", Back12)
    tilbakeButton.addEventListener("click", Back11)
}

function Back13() {
    explText.innerText = 'Du vil få vite mer om dette når du møter på fiendene'
    explButton.removeEventListener("click", Next14)
    explButton.addEventListener("click", Next13)

    tilbakeButton.removeEventListener("click", Back13)
    tilbakeButton.addEventListener("click", Back12)
}

function Back14() {
    explText.innerText = 'Spillet er ferdig når du har:'
    explButton.removeEventListener("click", Next15)
    explButton.addEventListener("click", Next14)

    tilbakeButton.removeEventListener("click", Back14)
    tilbakeButton.addEventListener("click", Back13)
}

function Back15() {
    explText.innerText = '1. Beseiret alle fiender'
    explButton.removeEventListener("click", Next16)
    explButton.addEventListener("click", Next15)

    tilbakeButton.removeEventListener("click", Back15)
    tilbakeButton.addEventListener("click", Back14)
}

function Back16() {
    explText.innerText = '2. Åpnet alle kister'
    explButton.removeEventListener("click", Next17)
    explButton.addEventListener("click", Next16)

    tilbakeButton.removeEventListener("click", Back16)
    tilbakeButton.addEventListener("click", Back15)
}

function Back17() {
    explText.innerText = '3. løst alle oppgaver og utfordringer'
    explButton.removeEventListener("click", Next18)
    explButton.addEventListener("click", Next17)

    tilbakeButton.removeEventListener("click", Back17)
    tilbakeButton.addEventListener("click", Back16)
}

function Back18() {
    explText.innerText = '4. låst opp alt i menyen'
    explButton.removeEventListener("click", startGame)
    explButton.addEventListener("click", Next18)


    tilbakeButton.removeEventListener("click", Back18)
    tilbakeButton.addEventListener("click", Back17)

    explButton.innerHTML = "neste"
    fortsett.style.display = "block"
}