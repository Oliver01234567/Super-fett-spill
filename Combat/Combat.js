//henter skins fra andre html dokumenter
choosenSkin = parseInt(localStorage.getItem("choosenSkin")) || 0

const playerIcon = document.getElementById("karakter")
const name = document.getElementById("playerName")

if(choosenSkin == 0) {
    playerIcon.src = "../Bilder/Rasmus.png"
    name.innerText = "Rasmus"
}

if(choosenSkin == 1) {
    playerIcon.src = "../Bilder/playerIcon1.png"
    name.innerText = "Anden"
}



//henter hvilken fiende du vil kjempe mot
opponent = parseInt(localStorage.getItem("opponent")) || 0

const motstanderIcon = document.getElementById("motstanderIcon")
const enemyName = document.getElementById("EnemyName")
const enemyName2 = document.getElementById("EnemyName2")
const enemyName3 = document.getElementById("EnemyName3")

if(opponent == 0) {
    motstanderIcon.src = "../Bilder/playerIcon1.png"
    enemyName.innerText = "Anden"
    enemyName2.innerText = "Anden"
    enemyName3.innerText = "Anden"
}

if(opponent == 1) {
    motstanderIcon.src = "../Bilder/Jonas.png"
    enemyName.innerText = "Jonas"
    enemyName2.innerText = "Jonas"
    enemyName3.innerText = "Jonas"
}


let stopp = setInterval(move, 1000)
let Forsvar = setInterval(attackOfTheDuck, 6000)



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

var sverd = document.createElement('img');
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

function displayDamage() {
    EmyHealth--;
    u = u + 10
    enemyTopHealth.style.height = u + "%"

    n = n - 10
    enemyBottomHealth.style.height = n + "%"
}

//hva som skjer når du skader fienden
function skadet() {
    player.removeChild(document.querySelector("#holdtSverd"));
    clearInterval(stopp);
    and.removeEventListener("click", skadet);

    if (EmyHealth <= 3) {
        and.style.animation = ("lowHP 2s infinite linear")
    }

    var sverdSlag = document.createElement('img');
    sverdSlag.src = '../Bilder/sverdSlag.gif';
    sverdSlag.alt = "Sverd";
    sverdSlag.id = "Sverd";
    document.getElementById("motstander").appendChild(sverdSlag);

    setTimeout(fjernSverd, 1800);
    setTimeout(skapSverd, 1800);

    setTimeout(displayDamage, 1800)

    if (EmyHealth < 1) {
        clearInterval(stopp);
        setTimeout(dødfallMotstander, 1500)
        setTimeout(winScreen, 2500)
        clearInterval(Forsvar)
        return;
    }

    setTimeout(startInterval, 2300);
}

const winScreenen = document.getElementById("win")

function winScreen() {
    winScreenen.style.zIndex = "9999"
    winScreenen.style.opacity = "100%"
    clearInterval(Forsvar)
    clearInterval(stopp)
    and.removeEventListener("click", skadet);
    document.removeEventListener("keydown", bevegelse)
}


function dødfallMotstander() {
    and.style.animation = "død 1s linear forwards"
}


function fjernSverd() {
    and.removeChild(document.querySelector("#Sverd"));
}

function skapSverd() {
    var sverd = document.createElement('img');
    sverd.src = '../Bilder/sverd.gif';
    sverd.alt = "Sverd";
    sverd.id = "holdtSverd";
    document.getElementById("spillerDiv").appendChild(sverd);
}


function startInterval() {
    move()
    stopp = setInterval(move, 1000)
    and.addEventListener("click", skadet)
}

function startAttack() {
    attackOfTheDuck()
    Forsvar = setInterval(attackOfTheDuck, 6000)
    document.addEventListener("keydown", bevegelse)
}



//spillerens systemer
let plyHealth = 30

const spanPHealt = document.getElementById("pHealthBar")



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
attackOfTheDuck();


function attackOfTheDuck() {
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

const deathScreenen = document.getElementById("loose")

function deathScreen() {
    deathScreenen.style.zIndex = "9999"
    deathScreenen.style.opacity = "100%"
    clearInterval(Forsvar)
    clearInterval(stopp)
    and.removeEventListener("click", skadet);
    document.removeEventListener("keydown", bevegelse)
}


//prøv igjen
function provIgjen() {
    resetHealth()
    setTimeout(startInterval, 1000);
    removeScreens()
    setTimeout(startAttack, 1000)
}



function removeScreens() {
    deathScreenen.style.zIndex = "-1"
    deathScreenen.style.opacity = "0%"

    winScreenen.style.zIndex = "-1"
    winScreenen.style.opacity = "0%"
}

function resetHealth() {
    plyHealth = 30
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

function damage() {
    plyHealth = plyHealth - 3
    z = z + 10
    topPHealth.style.height = z + "%"
    o = o - 10
    bottomPHealth.style.height = o + "%"

    var brann = document.createElement('img');
    brann.src = '../Bilder/smalerFire.gif';
    brann.alt = "ild";
    brann.id = "litenBrann";
    document.getElementById("bunn").appendChild(brann);
    setTimeout(fjernIld, 300)


    if (plyHealth < 1) {
        clearInterval(Forsvar)
        clearInterval(stopp)
        setTimeout(deathScreen, 2500)

        and.removeEventListener("click", skadet);
        document.removeEventListener("keydown", bevegelse)
        //fet dødsfall animasjon her
    }
}

setInterval(consoleLog, 5000)

function consoleLog() {
    console.log("p:" + plyHealth)
    console.log("e:" + EmyHealth)
}

