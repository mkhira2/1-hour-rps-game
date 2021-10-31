// define variables
const paperBtn = document.getElementById('paperBtn');
const rockBtn = document.getElementById('rockBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const winCountBtn = document.getElementById('winCountBtn');
const attemptCountBtn = document.getElementById('attemptCountBtn');
const resetBtn = document.getElementById('resetBtn');

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const computerChoices = [PAPER, ROCK, SCISSORS];

let winCount = localStorage.getItem('winCount') || 0;
let attempts = localStorage.getItem('attempts') || 0;

winCountBtn.innerHTML = `Win Count: ${winCount}`;
attemptCountBtn.innerHTML = `Attempts: ${attempts}`;

// add event listeners
paperBtn.addEventListener('click', () => {
    run(PAPER)
})

rockBtn.addEventListener('click', () => {
    run(ROCK)
})

scissorsBtn.addEventListener('click', () => {
    run(SCISSORS)
})

resetBtn.addEventListener('click', () => {
    clearLocalStorage();
    refreshPage();
})

// main method run when user chooses weapon 
const run = (userChoice) => {
    const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userChoice === computerChoice) {
        onTieCondition();
    }

    else if (
        userChoice === PAPER && computerChoice === ROCK ||
        userChoice === ROCK && computerChoice === SCISSORS ||
        userChoice === SCISSORS && computerChoice === PAPER
    ) {
        onWinCondition();
    } else {
        onLoseCondition();
    }
}

// helper functions 
const setLocalStorage = () => {
    localStorage.setItem('winCount', winCount);
    localStorage.setItem('attempts', attempts);
}

const clearLocalStorage = () => {
    localStorage.clear();
}

const refreshPage = () => {
    window.location.reload();
}

const updateWinCount = () => {
    winCount++
    winCountBtn.innerHTML = `Win Count: ${winCount}`
}

const updateAttempts = () => {
    attempts++
    attemptCountBtn.innerHTML = `Attempts: ${attempts}`
}

const onTieCondition = () => {
    alert('tie! try again')
    attempts++
    attemptCountBtn.innerHTML = `Attempts: ${attempts}`
}

const onWinCondition = () => {
    alert('you win!')
    updateWinCount();
    updateAttempts();
    setLocalStorage();
}

const onLoseCondition = () => {
    alert('you lose!')
    updateAttempts();
    setLocalStorage();
}
