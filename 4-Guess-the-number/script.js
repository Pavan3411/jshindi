const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);


const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1


let PlayGame = true

if(PlayGame){
    submit.addEventListener('click',function (e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if (guess < 1){
        alert('Please enter a number more than 1')
    } else if (guess > 100){
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. random number was ${randomNumber} `)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if (guess < randomNumber){
        displayMessage(`Number is too low`)
    }
    else if (guess > randomNumber){
        displayMessage(`Number is too high`)
    }

}

function displayGuess(guess){  // clean up the value
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    remaining.innerHTML = `${11 - numGuess}`
    numGuess++
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''  // value clean
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start new Game</h2>'
    startOver.appendChild(p)
    PlayGame = false
    newGame()

}

function newGame(){
    //
}