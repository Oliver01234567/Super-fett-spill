const chest = document.getElementById("Chest")

function openChest() {
    chest.style.animation = ("openAnimation 2s infinite linear")
    setTimeout(removeAnimation, 2000)
    setTimeout(changeImg, 2100)
    setTimeout(createMoney, 2300)
}

function removeAnimation() {
    chest.style.animation = "none"
}

function changeImg() {
    chest.src = "../Bilder/openedChest.webp"
}

function createMoney() {
    let money = document.createElement("div")
    money.id = "money"
    document.getElementById("body").appendChild(money)
    money.style.animation = ("moneyGrow 2s infinite linear")
    setTimeout(function() {
        window.location.href = '../Index.html';
    }, 2000)
}

