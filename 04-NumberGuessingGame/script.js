let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const attemptsRemaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuesses = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
  } else if (guess < 1) {
    alert('Please enter a number more than 1.');
  } else if (guess > 100) {
    alert('Please enter a number less than 100.');
  } else {
    prevGuesses.push(guess);
    if (numGuess >= 9) {
      displayGuess(guess);
      displayMessage(`Game Over! The random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage(`Yayy!🎊 You guessed it right! 🏆`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Your guess is TOOO low`);
  } else if (guess > randomNum) {
    displayMessage(`Your guess is TOOO high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guesses.innerHTML += `${guess}  `;
  numGuess++;
  attemptsRemaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', () => {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    numGuess = 1;
    guesses.innerHTML = '';
    attemptsRemaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
