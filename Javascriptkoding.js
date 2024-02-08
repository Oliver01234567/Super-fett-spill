//X og Y koordinater
let y = 8
let x = 1


function BevegelseFrammover() {

    x += 1
    document.getElementById("character").style.gridColumn = x
    document.getElementById("character").style.transform = "scaleX(1)"
}


function BevegelseOppover() {
    y -= 1;
    document.getElementById("character").style.gridRow = y;
}

function BevegelseNedover() {
    y += 1;
    document.getElementById("character").style.gridRow = y;
}

function BevegelseBakover() {
    x -= 1;
    document.getElementById("character").style.gridColumn = x
    document.getElementById("character").style.transform = "scaleX(-1)"
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        BevegelseFrammover();
    } else if (event.key === "ArrowDown") {
        BevegelseNedover();
    } else if (event.key === "ArrowLeft") {
        BevegelseBakover();
    } else if (event.key === "ArrowUp") {
        BevegelseOppover();
    }
});