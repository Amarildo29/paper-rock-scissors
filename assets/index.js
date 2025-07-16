var btnPaper = document.getElementById("paper");
var btnRock = document.getElementById("rock");
var btnScissors = document.getElementById("scissors");
var btnReset = document.getElementById("reset");

var playerName = prompt("What is your name?");
// var playerName = "Amarildo";
document.getElementById("player").textContent = playerName;

var userScore = 0;
var computerScore = 0
var maxScore = 5;

function checkForGameOver() {
    if (userScore === maxScore) {
        document.querySelector("h1").textContent = "🏆" + playerName+ "🏆";
        document.querySelector("h1").setAttribute("style", "font-size: 8rem; color: gold;");
        btnPaper.disabled = btnRock.disabled = btnScissors.disabled = true;
    
    
    } else if (computerScore === maxScore) {
        document.querySelector("h1").textContent = "🏆 Computer 🏆";
        document.querySelector("h1").setAttribute("style", "font-size: 8rem; color: gold;");
        btnPaper.disabled = btnRock.disabled = btnScissors.disabled = true;
        
    }else{
        btnPaper.disabled = btnRock.disabled = btnScissors.disabled = false;
    }
}



function choosingPaper(){
    var img1 = document.querySelector(".img1");
    img1.setAttribute("src", "./assets/images/img1.png");

    var randomNumber2 = Math.floor(Math.random() * 3 + 1);
    var img2 = document.querySelector(".img2");

    var headingTitle = document.querySelector("h1");

    if (randomNumber2 === 1){
        img2.setAttribute("src", "./assets/images/img1.png");
        headingTitle.textContent = "🏳️ It's Draw! 🏳️";
    }
    else if (randomNumber2 === 2){
        img2.setAttribute("src", "./assets/images/img2.png");
        headingTitle.textContent = "🚩 You Won!";
        userScore++;
        document.getElementById("player-score").textContent = userScore;
    }
    else{
        img2.setAttribute("src", "./assets/images/img3.png");
        headingTitle.textContent = "Computer Won! 🚩";
        computerScore++;
        document.getElementById("computer-score").textContent = computerScore;
    }
    checkForGameOver();
}

function choosingRock(){
    var img1 = document.querySelector(".img1");
    img1.setAttribute("src", "./assets/images/img2.png");

    var randomNumber2 = Math.floor(Math.random() * 3 + 1);
    var img2 = document.querySelector(".img2");
    var headingTitle = document.querySelector("h1");

    if (randomNumber2 === 2){
        img2.setAttribute("src", "./assets/images/img2.png");
        headingTitle.textContent = "🏳️ It's Draw! 🏳️";
    }
    else if (randomNumber2 === 1){
        img2.setAttribute("src", "./assets/images/img3.png");
        headingTitle.textContent = "🚩 You Won!";
        userScore++;
        document.getElementById("player-score").textContent = userScore;
    }
    else{
        img2.setAttribute("src", "./assets/images/img1.png");
        headingTitle.textContent = "Computer Won! 🚩";
        computerScore++;
        document.getElementById("computer-score").textContent = computerScore;
    }
    checkForGameOver();
}

function choosingScissors(){
    var img1 = document.querySelector(".img1");
    img1.setAttribute("src", "./assets/images/img3.png");

    var randomNumber2 = Math.floor(Math.random() * 3 + 1);
    var img2 = document.querySelector(".img2");
    var headingTitle = document.querySelector("h1");

    if (randomNumber2 === 3){
        img2.setAttribute("src", "./assets/images/img3.png");
        headingTitle.textContent = "🏳️ It's Draw! 🏳️";
    }
    else if (randomNumber2 === 1){
        img2.setAttribute("src", "./assets/images/img1.png");
        headingTitle.textContent = "🚩 You Won!";
        userScore++;
        document.getElementById("player-score").textContent = userScore;
    }
    else{
        img2.setAttribute("src", "./assets/images/img2.png");
        headingTitle.textContent = "Computer Won! 🚩";
        computerScore++;
        document.getElementById("computer-score").textContent = computerScore;
    }
    checkForGameOver();
}

function resetGame() {
    window.location.reload();
}

btnPaper.addEventListener("click", choosingPaper);
btnRock.addEventListener("click", choosingRock);
btnScissors.addEventListener("click", choosingScissors);
btnReset.addEventListener("click", resetGame);
