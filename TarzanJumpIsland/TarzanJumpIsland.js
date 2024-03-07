const character =
    document.getElementById("character");
const block =
    document.getElementById("block");
let poeng = 0;
let obstacle = Math.floor(Math.random() * 2);
let birdDodge = 0
let rollDodge = 0

let highscore = localStorage.getItem('highscore');
highscore = highscore ? parseInt(highscore) : 0;
document.getElementById("highscore").innerHTML = "Record: " + highscore;

console.log("obstacle er " + obstacle)

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32 || event.key === 'ArrowUp') {

        jump()
    }
});

document.addEventListener('keydown', function (event) {

    if (event.key === 's' || event.key === 'S' || event.key === 'ArrowDown') {

        rotate()

        
    }

});

document.getElementById("play").addEventListener("click", function () {
    setTimeout(start, 1000);

})

function start() {
    
    console.log("startknapp trykket")
    play.style.display = "none"
    block.style.animation ="block 1000ms linear"
    

}

function jump() {
    if (character.classList != "animatejump") {
        character.classList.add("animatejump");
    }

    setTimeout(function () {
        character.classList.remove("animatejump")
    }, 500)
}

function rotate() {
    if (character.classList != "animaterotate") {
        character.classList.add("animaterotate");
    }

    setTimeout(function () {
        character.classList.remove("animaterotate")
    }, 500)
}

function pointUpdate(){
    poeng++
    document.getElementById("currentscore").innerHTML = ("Poeng: " + poeng)
    console.log("score er " + poeng)
}

function gameUpdate(){
    if(poeng >= 0 && poeng <= 20){
        bird.style.transform ="scaleX(-1)"
        bird.src ="bilder/parrot.png"
        game.style.backgroundImage ="url('bilder/jungleBackground.jpg')"
        rollingObject.src ="bilder/sideLog.png"

    }
    if(poeng >= 20 && poeng <= 40){
        game.style.backgroundImage ="url('bilder/greenMountainBackground.png')"
        rollingObject.src ="bilder/rock.png"
        bird.src ="bilder/eagleNoBak.png"
        bird.style.transform ="scaleX(1)"
        
    }
    if(poeng >= 40 && poeng <= 60){
        game.style.backgroundImage ="url('bilder/beachBackground.jpg')"
        bird.src ="bilder/seagull.png"
        rollingObject.src ="bilder/shell.png"
        
       
    }
    if(poeng >= 60 && poeng <= 80){
        game.style.backgroundImage ="url('bilder/desertBackground.avif')"
        rollingObject.src = "bilder/tumbleweed.png"
        bird.src ="bilder/vulture.png"
        
    }
   
    if(poeng >= 80 && poeng <= 100){
        game.style.backgroundImage ="url('bilder/snowyTundraBackground.avif')"
        rollingObject.src ="bilder/sideLog.png"
        bird.src ="bilder/eagleNoBak.png"
       
    }
    if(poeng >= 100 && poeng <= 150){
        game.style.backgroundImage ="url('bilder/volcanoBackground.jpg')"
        bird.src ="bilder/phoenix.png"
        bird.style.transform ="scaleX(-1)"
        rollingObject.src ="bilder/fireball.png"
       
    }
    if(poeng >= 15){
        game.style.backgroundImage ="url('bilder/treasureRoom.jpg')"
        block.style.animation ="none"
        flyingBlock.style.animation ="none"
        highscoreUpdate()
        console.log(highscore)
        document.getElementById("currentscore").innerHTML ="Poeng: " + highscore
        character.style.animation ="backflip 1750ms linear forwards"
        setTimeout(() => {
        youWin.style.display = "block"
        youWin.style.display = "flex"  
        gamereset.style.display ="block"
        setTimeout(() => {    
        finalInfo.style.display = "block"
        finalInfo.style.display = "flex"
        jumpedOver.innerHTML ="Du hoppet over " + rollDodge + " rullende objekter"
        duckedUnder.innerHTML ="du ducket under " + birdDodge + " fugler"
        }, 2000);
        }, 2000);
    }
}
function highscoreUpdate(){
    if(poeng > highscore){
        highscore = poeng
        document.getElementById("highscore").innerHTML = "Record: " + (highscore)

        
        localStorage.setItem('highscore', highscore);
    
    }
}

var tap = setInterval(function () {

    let characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft =
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let flyingBlockLeft =
        parseInt(window.getComputedStyle(flyingBlock).getPropertyValue("left"));

    if (blockLeft < 0) {
        block.style.animation = "none";
        var tid = Math.floor(Math.random() * 2000);
        console.log(tid)
        rollDodge++
        console.log("rullende object hoppet over " + rollDodge)
        pointUpdate()

        setTimeout(() => {
            let speed = Math.floor(Math.random() * 400) + 800;
            let hindring = Math.floor(Math.random() * 2);
            console.log("hindring er " + hindring)
            if (hindring === 0) {
                block.style.animation = "block " + speed + "ms infinite linear";
            }
            else {
                flyingBlock.style.animation = "flyingBlock " + speed + "ms infinite linear";
            }
                       
            gameUpdate()

        }, tid);
    }



    if (blockLeft < 60 && blockLeft > 0 && characterTop >= 430) {
        block.style.animation = "none"
        block.style.display = "none"
        flyingBlock.style.display ="none" 
        gamereset.style.display = "block"
        gameOver.style.display = "block"
        gameOver.style.display = "flex"

        highscoreUpdate()

    }
    if (flyingBlockLeft < 0) {
        flyingBlock.style.animation = "none";
        let tidfly = Math.floor(Math.random() * 2000);
        birdDodge++
        console.log("birds dodged er " + birdDodge)
        pointUpdate()
        
        setTimeout(() => {
            let speed = Math.floor(Math.random() * 400) + 800;
            let blokkert = Math.floor(Math.random() * 2);
            console.log("hindring er " + blokkert)
            if (blokkert === 0) {
                block.style.animation = "block " + speed + "ms infinite linear";
            }
            else {
                flyingBlock.style.animation = "flyingBlock " + speed + "ms infinite linear";
            }
            
           gameUpdate()

        }, tidfly);
    }
    if (flyingBlockLeft < 60 && flyingBlockLeft > 0 && characterTop <= 465) {
        flyingBlock.style.animation = "none"
        flyingBlock.style.display = "none"
        block.style.display ="none"
        gamereset.style.display = "block"
        gameOver.style.display = "block"
        gameOver.style.display = "flex"

        highscoreUpdate()

    }
    if(blockLeft > 1000){
        rollingObject.style.display ="none"
    }
    else{
        rollingObject.style.display ="block"
    }
    if(flyingBlockLeft > 1000){
        bird.style.display ="none"
    }
    else{
        bird.style.display ="block"
    }
    
}, 10);

document.getElementById("gamereset").addEventListener("click", function () {
    setTimeout(startigjen, 300)
})

function startigjen(event) {
    poeng = 0;
    block.style.display = "block"
    block.style.animation = "block 1000ms linear"
    flyingBlock.style.display = "block"
    console.log("play agian")

    gamereset.style.display = "none"
    gameOver.style.display = "none"
    document.getElementById("currentscore").innerHTML = ("Poeng:")

    bird.style.transform ="scaleX(-1)"
    bird.src ="bilder/parrot.png"
    game.style.backgroundImage ="url('bilder/jungleBackground.jpg')"
    rollingObject.src ="bilder/sideLog.png"
}

document.getElementById("howPlay").addEventListener("click", howToPlay)

function howToPlay() {
    howTo.style.display = "block"
    howTo.style.display = "flex"
}

document.getElementById("x").addEventListener("click", x)

function x() {
    howTo.style.display = "none"
}

highscorereset.addEventListener("click", resetHighscore)

function resetHighscore(){
    highscore = 0;
    document.getElementById("highscore").innerHTML = "Record: " + highscore;
    localStorage.removeItem('highscore');
}













