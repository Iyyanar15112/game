var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;
var timeLeft = 30;
var timerId;
var correctSound = new Audio("menu-button-88360.mp3"); 
var incorrectSound = new Audio("beep-warning-6387.mp3"); 

function startTimer(){
    timerId = setInterval(function(){
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        if(timeLeft <= 0){
            clearInterval(timerId);
            document.getElementById('btn').disabled = true;
            display("Time's up! Game Over. The number was " + randomNumber);
        }
    }, 1000);
}

function guessing() {
    
    var guess = Number(document.getElementById('guessInput').value);
    attempts++;

    if (guess === randomNumber) {
          clearInterval(timerId); 
        display("🎉 Congratulations! You won the game in " + attempts + " attempts");
        correctSound.play();
        document.getElementById('btn').disabled = true;
    } 
    else if (guess < randomNumber) {
        display("The number is too low. Try a higher number.");
        incorrectSound.play();
    } 
    else {
        display("The number is too high. Try a lower number.");
        incorrectSound.play();
    }
}

function display(msg) {
    document.getElementById('msg').textContent = msg;
}
startTimer();