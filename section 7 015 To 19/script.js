// SELECTING ELEMENTS

// Select the current scores for both players
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

// Select the three major buttons that perform different actions 
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

// Player 1
const player0 = document.querySelector('.player--0');
const Score_one = document.querySelector('#score--0');

// Player 2
const Score_second = document.querySelector('#score--1');
const player1 = document.querySelector('.player--1');

// Dice class select 
const diceEL = document.querySelector('.dice');

let scores, currentScore, activePlayer, playing, highScore = 0; // Initialize highScore to 0

// Starting conditions
const init = function () { // This function is used for the new game 
    // Get high score from local storage or default to 0
    highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0;

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    Score_second.textContent = 0;
    Score_one.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    diceEL.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    document.getElementById('high-score-value').textContent = highScore; // Display the high score
};

// Call init to set up the game
window.onload = init;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0; // Reset current score display
    activePlayer = activePlayer === 0 ? 1 : 0; // Switch active player
    currentScore = 0; // Reset current score
    player0.classList.toggle('player--active'); // Toggle active class
    player1.classList.toggle('player--active');
}

///////////////////////////////////ROLLING THE DICE LOGIC AND FUNCTIONALITY//////////////////////////

btnroll.addEventListener('click', function () {
    if (playing) {
        // 1. Generating Random Dice roll
        const dice = Math.trunc(Math.random() * 6) + 1; // Generate random number

        // 2. Display Dice
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${dice}.png`; // Manipulate the dice image

        // 3. Check if the number is 1
        if (dice !== 1) {
            // If it's not 1, then add to current score
            currentScore += dice; // Store current score
            document.getElementById(`current--${activePlayer}`).textContent = currentScore; // Update current score display
        } else {
            switchPlayer(); // Switch player if rolled a 1
        }
    }
});

//////////////////////////////////////////////HOLDING THE SCORE LOGIC////////////////////////////////////////////////////////////////////////////

btnhold.addEventListener('click', function () {
    if (playing) {
        // 1. Add the current score into the total score
        scores[activePlayer] += currentScore;

        // Update the score for the active player in the DOM
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if score >= 100
        if (scores[activePlayer] >= 20) { // Adjust the winning score threshold if needed
            playing = false; // End the game
            diceEL.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

            // Update high score if necessary
            if (scores[activePlayer] > highScore) {
                highScore = scores[activePlayer]; // Update high score
                document.getElementById('high-score-value').textContent = highScore; // Update displayed high score
                localStorage.setItem('highScore', highScore); // Store the high score in local storage
            }
        } else {
            switchPlayer(); // Switch to the next player
        }
    }
});

// New Game button event listener
btnnew.addEventListener("click", function () {
    // Reset the game state without affecting the high score
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    Score_one.textContent = 0;      
    Score_second.textContent = 0;    
    current0.textContent = 0;        
    current1.textContent = 0;        
    diceEL.classList.add('hidden'); 
    player0.classList.remove('player--winner'); 
    player1.classList.remove('player--winner');c
    player0.classList.add('player--active');    
    player1.classList.remove('player--active');

    location.reload();
});
