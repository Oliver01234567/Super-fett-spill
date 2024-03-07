const chest = document.getElementById("Chest")

let quiz1Seier = localStorage.getItem("quiz1Seier") || 0

function openChest() {
    chest.style.animation = ("openAnimation 2s infinite linear")
    setTimeout(removeAnimation, 2000)
    setTimeout(changeImg, 2100)
    setTimeout(createMoney, 2300)

    if(quiz1Seier == 0 || quiz1Seier == 2) {
        let getMoney = 1000
        localStorage.setItem("getMoney", getMoney)
    }
}

function removeAnimation() {
    chest.style.animation = "none"
}

function changeImg() {
    chest.src = "../Bilder/openedChest.webp"
}

function createMoney() {
    let money = document.createElement("img")
    money.src = "../Bilder/pengesekk.png"
    money.id = "money"
    document.getElementById("body").appendChild(money)
    money.style.animation = ("moneyGrow 2s infinite linear")
    setTimeout(function() {
       window.location.href = '../Island/index.html';
    }, 1800)
}

