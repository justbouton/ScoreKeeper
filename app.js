// Score keeping widget. Player one score left, player two right.
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var winningScoreDisplay = document.querySelector("h3 span")
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

// Number to win, once play wins score turns green script ends.

// Number to win var input.

// Add one to player one.
p1.addEventListener("click", function() {
    if(!gameOver) {
        // Increment p1Score by 1.
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("win");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

// Add one to player two.
p2.addEventListener("click", function() {
    if(!gameOver) {
        // Increment p2Score by 1.
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("win");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

// Reset score to 0.
reset.addEventListener("click", function() {
    resetGame()
});

numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    resetGame();
})

function resetGame() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("win");
    p2Display.classList.remove("win");
    gameOver = false;
}