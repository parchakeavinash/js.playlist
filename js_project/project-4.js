let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHigh = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const userGuess = parseInt(userInput.value);
    validateGuess(userGuess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a valid number');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    preGuess.push(guess);
  }
  if (numGuess === 11) {
    displayGuess();
    displayMessage(`Game over! Random number was ${randomNumber}`);
    endGame();
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guess it right!`);
  } else if (guess > randomNumber) {
    displayMessage(`You guessed to high`);
  } else if (guess < randomNumber) {
    displayMessage(`You guessed to loo.`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  loworHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newGame">Start new game</h2>`;
  startOver.appendChild(p);

  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    userInput.innerHTML = '';
    userInput.removeAttribute('disabled');
    preGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    startOver.removeChild(p);
    loworHigh.innerHTML = '';

    playGame = true;
  });
}
