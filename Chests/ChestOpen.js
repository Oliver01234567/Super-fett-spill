const chest = document.getElementById("Chest")

const main = document.getElementById("main")

const openChestButton = document.getElementById("openChest")
openChestButton.addEventListener("click", openChest)

const chestDiv = document.getElementById("chestDiv")

let quiz1Seier = localStorage.getItem("quiz1Seier") || 0

let matteSeier = localStorage.getItem("matteSeier") || 0


function openChest() {
    openChestButton.removeEventListener("click", openChest)
    chest.style.animation = ("openAnimation 2s infinite linear")
    setTimeout(removeAnimation, 2000)
    setTimeout(changeImg, 2100)
    setTimeout(createMoney, 2300)

    if (quiz1Seier != 1 && matteSeier != 1) {
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
    chestDiv.appendChild(money)
    spillavAHHHH()
    money.style.animation = ("moneyGrow 2s infinite linear")
    setTimeout(function () {
      window.location.href = '../Island/index.html';
   }, 1800)
}

function spillavAHHHH() {
    let lydElement = document.getElementById('moneySOund');
    lydElement.currentTime = 0;
    lydElement.play();
}
