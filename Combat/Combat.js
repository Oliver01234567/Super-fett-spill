//henter skins fra andre html dokumenter
choosenSkin = parseInt(sessionStorage.getItem("choosenSkin")) || 0

const playerIcon = document.getElementById("karakter")
const name = document.getElementById("playerName")

if (choosenSkin == 0) {
    playerIcon.src = "../Bilder/Torbjorn.png"
    name.innerText = "Thor Bjørn"
}

if (choosenSkin == 1) {
    playerIcon.src = "../Bilder/Rasmus.png"
    name.innerText = "Rasmus"
}

if (choosenSkin == 2) {
    playerIcon.src = "../Bilder/Jonas.png"
    name.innerText = "Jonas"
}

if (choosenSkin == 3) {
    playerIcon.src = "../Bilder/playerIcon1.png"
    name.innerText = "Anden"
}

if (choosenSkin == 4) {
    playerIcon.src = "../Bilder/monkeT.png"
    name.innerText = "Monke"
}

if (choosenSkin == 5) {
    playerIcon.src = "../Bilder/bPandaT.png"
    name.innerText = "Panda"
}

if (choosenSkin == 6) {
    playerIcon.src = "../Bilder/langbeinT.png"
    name.innerText = "Langbein"
}

if (choosenSkin == 7) {
    playerIcon.src = "../Bilder/peter.png"
    name.innerText = "Peter Griffin"
}

if (choosenSkin == 8) {
    playerIcon.src = "../Bilder/Birk.png"
    name.innerText = "Birk"
}

if (choosenSkin == 9) {
    playerIcon.src = "../Bilder/kasper.png"
    name.innerText = "Kasper"
}

if (choosenSkin == 10) {
    playerIcon.src = "../Bilder/elon.png"
    name.innerText = "Elon Musk"
}

if (choosenSkin == 11) {
    playerIcon.src = "../Bilder/mario.png"
    name.innerText = "Mario"
}

if (choosenSkin == 12) {
    playerIcon.src = "../Bilder/peteD.png"
    name.innerText = "Pete Davidson"
}

if (choosenSkin == 13) {
    playerIcon.src = "../Bilder/skrueMcDuck.png"
    name.innerText = "Skrue McDuck"
}

if (choosenSkin == 14) {
    playerIcon.src = "../Bilder/The-Rock.png"
    name.innerText = "Dwanye The Rock Johnson"
}

if (choosenSkin == 15) {
    playerIcon.src = "../Bilder/Stewie.png"
    name.innerText = "Stewie Griffin"
}

if (choosenSkin == 16) {
    playerIcon.src = "../Bilder/SId.png"
    name.innerText = "Sid Fra Istid"
}

if (choosenSkin == 17) {
    playerIcon.src = "../Bilder/svanpeBob.png"
    name.innerText = "Svampebob Firkant"
}

//henter hvilken fiende du vil kjempe mot
opponent = parseInt(sessionStorage.getItem("opponent")) || 0

const motstanderIcon = document.getElementById("motstanderIcon")
const enemyName = document.getElementById("EnemyName")
const enemyName2 = document.getElementById("EnemyName2")
const enemyName3 = document.getElementById("EnemyName3")
const enemyName4 = document.getElementById("EnemyName4")
const enemyName6 = document.getElementById("EnemyName6")

const body = document.getElementById("body")
const winScreenen = document.getElementById("win")
const deathScreenen = document.getElementById("loose")
const howto = document.getElementById("HowToPlay")
let allText = document.querySelectorAll('p');
let allH = document.querySelectorAll('h1')
let allh2 = document.querySelectorAll('h2')
let allh3 = document.querySelectorAll('h3')
let allButton = document.querySelectorAll('Button')
let allcGrid = document.querySelectorAll('.cGrid')

let andDeath = 0

let peteDeath = 0

if (opponent == 0) {
    motstanderIcon.src = "../Bilder/playerIcon1.png"
    enemyName.innerText = "Anden"
    enemyName2.innerText = "Anden"
    enemyName3.innerText = "Anden"
    enemyName4.innerText = "Anden"

    andDeath = 1
}

if (opponent == 5) {
    motstanderIcon.src = "../Bilder/peteD.png"
    motstanderIcon.style.transform = "scaleX(-1)"
    enemyName.innerText = "Pete Davidson"
    enemyName2.innerText = "Pete Davidson"
    enemyName3.innerText = "Pete Davidson"
    enemyName4.innerText = "Pete Davidson"

    peteDeath = 1
}

if (opponent == 0 || opponent == 5) {
    
    body.classList.add("img1")
    winScreenen.classList.add("img1")
    deathScreenen.classList.add("img1")
    howto.classList.add("img1")

    allText.forEach(function (pElement) {
        pElement.classList.add("colorScheme1")
    })
    allH.forEach(function (hElemnt) {
        hElemnt.classList.add("colorScheme1")
    })

    allh2.forEach(function (h2Elm) {
        h2Elm.classList.add("colorScheme1")
    })

    allh3.forEach(function (h3Elm) {
        h3Elm.classList.add("colorScheme1")
    })

    allButton.forEach(function (ButtonElm) {
        ButtonElm.classList.add("colorScheme1button")
    })

    allcGrid.forEach(function (GridElm) {
        GridElm.classList.add("colorScheme1border")
    })

}

let jonasDeath = 0
let marioDeath = 0

if (opponent == 1) {
    motstanderIcon.src = "../Bilder/Jonas.png"
    enemyName.innerText = "Jonas"
    enemyName2.innerText = "Jonas"
    enemyName3.innerText = "Jonas"
    enemyName4.innerText = "Jonas"

    jonasDeath = 1
}

if(opponent == 4) {
    motstanderIcon.src = "../Bilder/Mario.png"
    motstanderIcon.style.transform = "scaleX(-1)"
    enemyName.innerText = "Mario"
    enemyName2.innerText = "Mario"
    enemyName3.innerText = "Mario"
    enemyName4.innerText = "Mario"

    marioDeath = 1
}

if (opponent == 1 || opponent == 4) {

    body.classList.add("img2")
    winScreenen.classList.add("img2")
    deathScreenen.classList.add("img2")
    howto.classList.add("img2")

    allText.forEach(function (pElement) {
        pElement.classList.add("colorScheme2")
    })
    allH.forEach(function (hElemnt) {
        hElemnt.classList.add("colorScheme2")
    })

    allh2.forEach(function (h2Elm) {
        h2Elm.classList.add("colorScheme2")
    })

    allh3.forEach(function (h3Elm) {
        h3Elm.classList.add("colorScheme2")
    })

    allButton.forEach(function (ButtonElm) {
        ButtonElm.classList.add("colorScheme2button")
    })

    allcGrid.forEach(function (GridElm) {
        GridElm.classList.add("colorScheme2border")
    })
}

let kasperDeath = 0
let elonDeath = 0
if (opponent == 2) {
    motstanderIcon.src = "../Bilder/kasper.png"
    enemyName.innerText = "Kasper"
    enemyName2.innerText = "Kasper"
    enemyName3.innerText = "Kasper"
    enemyName4.innerText = "Kasper"
    kasperDeath = 1
}

if (opponent == 3) {
    motstanderIcon.src = "../Bilder/Elon.png"
    enemyName.innerText = "Elon Musk"
    enemyName2.innerText = "Elon Musk"
    enemyName3.innerText = "Elon Musk"
    enemyName4.innerText = "Elon Musk"
    elonDeath = 1
}

if (opponent == 2 || opponent == 3) {

    body.classList.add("img3")
    winScreenen.classList.add("img3")
    deathScreenen.classList.add("img3")
    howto.classList.add("img3")

    allText.forEach(function (pElement) {
        pElement.classList.add("colorScheme3")
    })
    allH.forEach(function (hElemnt) {
        hElemnt.classList.add("colorScheme3")
    })

    allh2.forEach(function (h2Elm) {
        h2Elm.classList.add("colorScheme3")
    })

    allh3.forEach(function (h3Elm) {
        h3Elm.classList.add("colorScheme3")
    })

    allButton.forEach(function (ButtonElm) {
        ButtonElm.classList.add("colorScheme3button")
    })

    allcGrid.forEach(function (GridElm) {
        GridElm.classList.add("colorScheme3border")
    })


}


const prov = document.getElementById("Prov")

//du mister penger hvis du dør
let money = 0
money = parseInt(sessionStorage.getItem("money")) || 0

function spillAvFight() {
    let lydElement3 = document.getElementById('Fight');
    lydElement3.currentTime = 0;
    lydElement3.play();
}

function spillAvFinalBoss() {
    let lydElement4 = document.getElementById('bossfight');
    lydElement4.currentTime = 0;
    lydElement4.play();
}

function spillAvFinishHim() {
    let lydElement7 = document.getElementById('finisher');
    lydElement7.currentTime = 0;
    lydElement7.play();
}

function spillAvSverdslag() {
    let lydElement5 = document.getElementById('Sverdslag')
    lydElement5.currentTime = 0;
    lydElement5.play()
}

function spillAvIld() {
    lydElement6 = document.getElementById("fireStarts")
    lydElement6.currentTime = 0;
    lydElement6.play()
}

function startGame() {
    removeScreens()
    attackOfTheDuck()
    spillAvFight()
    spillAvFinalBoss()
    let stopp = setInterval(move, 1000)
    let Forsvar = setInterval(attackOfTheDuck, 6000)
    prov.addEventListener("click", provIgjen)

    //skaper divene som senere blir røde
    let nummer = 1
    for (let j = 1; j < 8; j++) {
        for (let i = 1; i < 3; i++) {


            const square = document.createElement("div")

            square.id = "s-" + nummer
            nummer++
            square.style.gridColumn = i
            square.style.gridRow = j

            square.classList.add("c_" + i)
            square.classList.add("r_" + j)

            document.getElementById("playerGrid").appendChild(square)

        }
    }


    const player = document.getElementById("spillerDiv")

    let sverd = document.createElement('img');
    sverd.src = '../Bilder/sverd.gif';
    sverd.alt = "Sverd";
    sverd.id = "holdtSverd";
    document.getElementById("spillerDiv").appendChild(sverd);


    //fiendens systemer

    let EmyHealth = 10

    const spanHealt = document.getElementById("healthBar")

    const and = document.getElementById("motstander")

    and.addEventListener("click", skadet)


    //hvordan fienden beveger seg
    function move() {
        let y = Math.floor(Math.random() * 7) + 1
        let x = Math.floor(Math.random() * 2) + 1
        and.style.gridRow = y
        and.style.gridColumn = x
    }

    const enemyTopHealth = document.getElementById("topE")
    const enemyBottomHealth = document.getElementById("bunnE")

    //variabler for endringen i healthbar til fienden
    let u = 0
    let n = 100
    let playerDamage = parseFloat(sessionStorage.getItem("damageIs")) || 1;
    let playerDamagePercentage = (playerDamage / 10) * 100



    function displayDamage() {
        EmyHealth = EmyHealth - playerDamage;
        u = u + playerDamagePercentage
        enemyTopHealth.style.height = u + "%"
        n = n - playerDamagePercentage
        enemyBottomHealth.style.height = n + "%"
    }


    //spillerens helse (må være her oppe fordi den referes til i koden under)
    let plyHealth = parseInt(sessionStorage.getItem("healthIs")) || 30
    console.log("plyHealth er " + plyHealth)



    //hva som skjer når du skader fiender

    function skadet() {
        player.removeChild(document.querySelector("#holdtSverd"));
        clearInterval(stopp);
        and.removeEventListener("click", skadet);

        setTimeout(function () {
            if (EmyHealth <= 3) {
                ealthBar.style.animation = ("lowHP 2s infinite linear")
            }
        }, 1800)

        let sverdSlag = document.createElement('img');
        sverdSlag.src = '../Bilder/sverdSlag.gif';
        sverdSlag.alt = "Sverd";
        sverdSlag.id = "Sverd";
        document.getElementById("motstander").appendChild(sverdSlag);
        spillAvSverdslag()

        setTimeout(fjernSverd, 1800);
        setTimeout(skapSverd, 1800);

        setTimeout(displayDamage, 1800)

        if (EmyHealth <= 1 && EmyHealth > 0) {
            setTimeout(spillAvFinishHim, 1800)
        }

        if (EmyHealth <= 0) {
            clearInterval(stopp);
            setTimeout(dødfallMotstander, 1500)
            setTimeout(winScreen, 2500)
            clearInterval(Forsvar)
            plyHealth = 10000
            let combatSeier = 1
            sessionStorage.setItem("combatSeier", combatSeier)
            if (andDeath == 1) {
                let andenDod = 2
                sessionStorage.setItem("andenDod", andenDod)

                let firstTimeAnd = 1
                sessionStorage.setItem("firstTimeAnd", firstTimeAnd)

            }

            if (jonasDeath == 1) {
                let jonasDod = 2
                sessionStorage.setItem("jonasDod", jonasDod)

                let firstTimeJonas = 1
                sessionStorage.setItem("firstTimeJonas", firstTimeJonas)

            }

            if (kasperDeath == 1) {
                let kasperDod = 2
                sessionStorage.setItem("kasperDod", kasperDod)

                let firstTimeKasper = 1
                sessionStorage.setItem("firstTimeKasper", firstTimeKasper)
            }

            if(elonDeath == 1) {
                let elonDod = 2
                sessionStorage.setItem("elonDod", elonDod)

                let firstTimeElon = 1
                sessionStorage.setItem("firstTimeElon", firstTimeElon)
            }

            if(marioDeath == 1) {
                let marioDod = 2
                sessionStorage.setItem("marioDod", marioDod)

                let firstTimeMario = 1
                sessionStorage.setItem("firstTimeMario", firstTimeMario)
            }

            if(peteDeath == 1) {
                let peteDod = 2
                sessionStorage.setItem("peteDod", peteDod)

                let firstTimePete = 1
                sessionStorage.setItem("firstTimePete", firstTimePete)
            }


            return;

        }

        setTimeout(startInterval, 2300);
    }



    function winScreen() {
        winScreenen.style.zIndex = "10"
        winScreenen.style.opacity = "100%"
        clearInterval(Forsvar)
        clearInterval(stopp)
        and.removeEventListener("click", skadet);
        document.removeEventListener("keydown", bevegelse)
    }


    function dødfallMotstander() {
        motstander.style.animation = "død 1s linear forwards"
    }


    function fjernSverd() {
        and.removeChild(document.querySelector("#Sverd"));
    }

    function skapSverd() {
        sverd = document.createElement('img');
        sverd.src = '../Bilder/sverd.gif';
        sverd.alt = "Sverd";
        sverd.id = "holdtSverd";
        document.getElementById("spillerDiv").appendChild(sverd);
    }


    function startInterval() {
        move()
        stopp = setInterval(move, 1000)
        and.addEventListener("click", skadet)
        console.log("Anden beveger seg")
    }

    function startAttack() {
        attackOfTheDuck()
        Forsvar = setInterval(attackOfTheDuck, 6000)
        document.addEventListener("keydown", bevegelse)
    }



    //spillerens systemer

    //bevegelse
    let h = 1
    let w = 2

    function BevegelseFrammover() {
        w += 1;
        player.style.gridColumn = w;
        checkRedZone()
    }

    function BevegelseOppover() {
        h -= 1;
        player.style.gridRow = h;
        checkRedZone()
    }

    function BevegelseNedover() {
        h += 1;
        player.style.gridRow = h;
        checkRedZone()
    }

    function BevegelseBakover() {
        w -= 1;
        player.style.gridColumn = w;
        checkRedZone()
    }


    const bevegelse = function (event) {
        if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
            BevegelseFrammover();
        } else if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {
            BevegelseNedover();
        } else if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
            BevegelseBakover();
        } else if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
            BevegelseOppover();
        }

        if (h == 8) {
            h -= 1;
            player.style.gridRow = h;
        }

        if (w == 3) {
            w -= 1;
            player.style.gridColumn = w;
        }

        if (w == 0) {
            w += 1;
            player.style.gridColumn = w;
        }

        if (h == 0) {
            h += 1;
            player.style.gridRow = h;
        }
    };

    document.addEventListener("keydown", bevegelse);

    //redZones



    function attackOfTheDuck() {
        console.log("anden angriper")
        let a = Math.floor(Math.random() * 14) + 1

        let e = Math.floor(Math.random() * 14) + 1

        let s = Math.floor(Math.random() * 14) + 1

        let n = Math.floor(Math.random() * 14) + 1

        let d = Math.floor(Math.random() * 14) + 1

        let p = Math.floor(Math.random() * 14) + 1

        let k = Math.floor(Math.random() * 14) + 1

        let f = Math.floor(Math.random() * 14) + 1

        let h = Math.floor(Math.random() * 14) + 1
        setTimeout(orangeZones, 3000)
        setTimeout(redZones, 3500)
        setTimeout(blackout, 6000)




        //funksjonene må være inne i løkken for å få tilgang til de tilfeldige tallene
        function orangeZones() {
            let orange1 = document.getElementById("s-" + a)
            orange1.classList.add("orangeZone")


            let orange2 = document.getElementById("s-" + e)
            orange2.classList.add("orangeZone")

            let orange3 = document.getElementById("s-" + s)
            orange3.classList.add("orangeZone")

            let orange4 = document.getElementById("s-" + n)
            orange4.classList.add("orangeZone")

            let orange5 = document.getElementById("s-" + d)
            orange5.classList.add("orangeZone")

            let orange6 = document.getElementById("s-" + p)
            orange6.classList.add("orangeZone")

            let orange7 = document.getElementById("s-" + k)
            orange7.classList.add("orangeZone")

            let orange8 = document.getElementById("s-" + f)
            orange8.classList.add("orangeZone")

            let orange9 = document.getElementById("s-" + h)
            orange9.classList.add("orangeZone")
        }



        function redZones() {
            spillAvIld()
            let red1 = document.getElementById("s-" + a)
            red1.classList.add("redZone")
            red1.classList.remove("orangeZone")

            let red2 = document.getElementById("s-" + e)
            red2.classList.add("redZone")
            red2.classList.remove("orangeZone")

            let red3 = document.getElementById("s-" + s)
            red3.classList.add("redZone")
            red3.classList.remove("orangeZone")

            let red4 = document.getElementById("s-" + n)
            red4.classList.add("redZone")
            red4.classList.remove("orangeZone")

            let red5 = document.getElementById("s-" + d)
            red5.classList.add("redZone")
            red5.classList.remove("orangeZone")

            let red6 = document.getElementById("s-" + p)
            red6.classList.add("redZone")
            red6.classList.remove("orangeZone")

            let red7 = document.getElementById("s-" + k)
            red7.classList.add("redZone")
            red7.classList.remove("orangeZone")

            let red8 = document.getElementById("s-" + f)
            red8.classList.add("redZone")
            red8.classList.remove("orangeZone")

            let red9 = document.getElementById("s-" + h)
            red9.classList.add("redZone")
            red9.classList.remove("orangeZone")
        }



        function blackout() {
            let black1 = document.getElementById("s-" + a)
            black1.classList.remove("redZone")


            let black2 = document.getElementById("s-" + e)
            black2.classList.remove("redZone")



            let black3 = document.getElementById("s-" + s)
            black3.classList.remove("redZone")


            let black4 = document.getElementById("s-" + n)
            black4.classList.remove("redZone")


            let black5 = document.getElementById("s-" + d)
            black5.classList.remove("redZone")


            let black6 = document.getElementById("s-" + p)
            black6.classList.remove("redZone")

            let black7 = document.getElementById("s-" + k)
            black7.classList.remove("redZone")

            let black8 = document.getElementById("s-" + f)
            black8.classList.remove("redZone")

            let black9 = document.getElementById("s-" + h)
            black9.classList.remove("redZone")

        }
    }
    setInterval(checkRedZone, 1000) // redzones brenner deg, du tar 3 dmg per sekund du står der, pluss 3 hvis du går inn i en
    //redZones skader deg
    function checkRedZone() {
        const playerPositionElement = document.querySelector(".r_" + h + ".c_" + w);

        if (playerPositionElement && playerPositionElement.classList.contains("redZone")) {
            damage();
        }
    }

    //disse to variablene brukes for å øke og synke healthbaren til spilleren
    let z = 0
    let o = 100

    const topPHealth = document.getElementById("top")
    const bottomPHealth = document.getElementById("bunn")

    function fjernIld() {
        bottomPHealth.removeChild(document.querySelector("#litenBrann"));
    }


    function deathScreen() {
        console.log("what")
        deathScreenen.style.zIndex = "9999"
        deathScreenen.style.opacity = "100%"
        clearInterval(Forsvar)
        clearInterval(stopp)
        and.removeEventListener("click", skadet);
        document.removeEventListener("keydown", bevegelse)
        removeHoldtSverd()
    }


    //prøv igjen
    function provIgjen() {
        skapSverd()
        resetHealth()
        removeScreens()

        setTimeout(function () {
            startInterval()
            startAttack()
        }, 1000)

        fjernPIld()
        removeAnimations()
    }



    function removeScreens() {
        deathScreenen.style.zIndex = "-1"
        deathScreenen.style.opacity = "0%"

        winScreenen.style.zIndex = "-1"
        winScreenen.style.opacity = "0%"

        howto.style.display = "none"
    }
    function removeAnimations() {
        playerIcon.style.animation = "none"
        motstander.style.animation = "none"
        ealthBar.style.animation = "none"
        pHealthBar.style.animation = "none"
    }

    function resetHealth() {
        plyHealth = parseInt(sessionStorage.getItem("healthIs")) || 30
        EmyHealth = 10

        //fiende healthbar
        u = 0
        n = 100
        enemyTopHealth.style.height = u + "%"
        enemyBottomHealth.style.height = n + "%"

        //din healthBar
        z = 0
        o = 100
        topPHealth.style.height = z + "%"
        bottomPHealth.style.height = o + "%"


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

    let damagePercent = (5 / plyHealth) * 100
    console.log("damgepersent er " + damagePercent)

    function damage() {
        plyHealth = plyHealth - 5
        z = z + damagePercent
        topPHealth.style.height = z + "%"
        o = o - damagePercent
        bottomPHealth.style.height = o + "%"

        let brann = document.createElement('img');
        brann.src = '../Bilder/smalerFire.gif';
        brann.alt = "ild";
        brann.id = "litenBrann";
        document.getElementById("bunn").appendChild(brann);
        setTimeout(fjernIld, 300)


        if (plyHealth <= 10) {
            pHealthBar.style.animation = ("lowHP 2s infinite linear")
        }


        if (plyHealth < 1) {
            plyHealth = 100000
            clearInterval(Forsvar)
            clearInterval(stopp)
            setTimeout(deathScreen, 2500)
            and.removeEventListener("click", skadet);
            document.removeEventListener("keydown", bevegelse)
            removeHoldtSverd();
            let fyrenBrenner = document.createElement('img');
            fyrenBrenner.src = '../Bilder/smalerFire.gif';
            fyrenBrenner.alt = "ild";
            fyrenBrenner.id = "fyrenBrenner";
            player.appendChild(fyrenBrenner);
            playerIcon.style.animation = "dødSpiller 1s linear forwards"
            let tapPenger = money * 0.1;
            money = money * 0.9
            sessionStorage.setItem("money", money);
            showAlert("Du tapte " + tapPenger.toFixed(0) + " penger", "error")
        }
    }

    function removeHoldtSverd() {
        const holdtSverdElements = document.querySelectorAll("#holdtSverd");
        holdtSverdElements.forEach(element => {
            element.parentNode.removeChild(element);
        });
    }

    function fjernPIld() {
        const playerIldElements = document.querySelectorAll("#fyrenBrenner");
        playerIldElements.forEach(element => {
            element.parentNode.removeChild(element);
        });
    }

    setInterval(consoleLog, 5000)

    function consoleLog() {
        console.log("p:" + plyHealth)
        console.log("e:" + EmyHealth)
    }

}


//forklaringskjerm
const explButton = document.getElementById("next")
const explText = document.getElementById("explainEverything")
const explText2 = document.getElementById("explainEverything2")
const fortsett = document.getElementById("Skip")
const buttons = document.getElementById("buttons")

explButton.addEventListener("click", next1)

function next1() {
    explText.innerText = 'For å angripe motstanderen din må du trykke på han'
    explText2.innerText = "Men pass på, motstanderen din er rask"

    explButton.removeEventListener("click", next1)
    explButton.addEventListener("click", next2)
}

function next2() {
    explText.innerText = "Motstanderen din gjør det ikke lett for deg dessverre"
    explText2.innerText = "De kan mane fram flammer som skader deg så lenge du er i dem"

    explButton.removeEventListener("click", next2)
    explButton.addEventListener("click", next3)
}

function next3() {
    explText.innerText = "For å unngå flammene bruk W A S D eller pil tastene"
    explText2.innerText = "Å brenne seg er lite kult"

    explButton.removeEventListener("click", next3)
    explButton.addEventListener("click", next4)
}

function next4() {
    explText.innerText = "Du kan se din helse markert med grønt ved siden av deg"
    explText2.innerText = "Fienden din sin helse er markert med rødt ved siden av fienden"

    explButton.removeEventListener("click", next4)
    explButton.addEventListener("click", next5)
}

function next5() {
    explText.innerText = "Pass på helsen din"
    explText2.innerText = "Det er ikke mulig å regenere sin egen helse"

    explButton.removeEventListener("click", next5)
    explButton.addEventListener("click", next6)
}

function next6() {
    explText.innerText = "Lykke til"
    explText2.innerText = "Trykk på start når du er klar"

    fortsett.innerText = "Start"
    buttons.removeChild(document.querySelector("#next"));
}





