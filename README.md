# js.playlist

# Solution Code

## project-1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

console.log(buttons)

buttons.forEach( button =>{
    button.addEventListener( 'click', function(e){
        // console.log(e);
        // console.log(e.target.id); //return id of button clicked
        // if(e.target.id ==="grey"){
        //     body.style.backgroundColor = "grey";
        // }
        // if(e.target.id ==="white"){
        //     body.style.backgroundColor = "white";
        // }
        // if(e.target.id ==="blue"){
        //     body.style.backgroundColor = "blue";
        // }
        // if(e.target.id ==="yellow"){
        //     body.style.backgroundColor = "yellow";
        // }

        //switch method
        const color = e.target.id;
        switch(color){
            case "grey":
                body.style.backgroundColor = "grey";
                break;
            case "white":
                body.style.backgroundColor = "white";
                break;
            case "blue":
                body.style.backgroundColor = "blue";
                break;
            case "yellow":
                body.style.backgroundColor = "yellow";
                break;
            default:
                body.style.backgroundColor = "white";
        }
    })
})


```

## project-2

``` javascript

const form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault();

    const height1 = parseInt(document.querySelector("#height").value);
    const weight1 = parseInt(document.querySelector("#weight").value);

    const result = document.querySelector("#results")

    if(height1 === ''|| height1 < 0 || isNaN(height1)){
        result.innerHTML = `Please provide a valid height ${height1}`;
    }
    else if(weight1 === ''|| weight1 < 0 || isNaN(weight1)){
        result.innerHTML = `Please provide a valid weight ${weight1}`;
    }
    else{
        const bmi = (weight1 / ((height1/100) ** 2)).toFixed(2);
        // result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
        let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    result.innerHTML = `Your BMI is ${bmi} (${category})`;     
     }
});

```

## project-3

``` javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');



setInterval (function(){
    let date = new Date();
// console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000);

```

## project-4

``` javascript

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


```

## project -5

``` javascript

const randomeColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomeColor());
let stopcolor;

const startChangingColor = function () {
  if(!stopcolor){
    stopcolor = setInterval(changecolor, 1000);

  }
  function changecolor() {
    document.body.style.backgroundColor = randomeColor();
  }
};
const stopChangingColor = function () {
  clearInterval(stopcolor, 1000);
  stopcolor = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```