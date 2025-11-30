'use strict';
// . to class
// # for id
// Introduction to the DOM - Document Object Model:
// representation of the HTML documetns.
// Allows JS to access HTML elements and styles
// to Manipulate them
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "test";

// DOM not part of the JS language
// DOM is a API that is implemented by browsers (WEB APIs)
// to allow JS to interact with HTML documents
// so if no browser, no DOM

// Handling click events

// the value always string

// const number = Math.trunt(Math.random()*20+1);
// document.querySelector('.check').addEventListener(
//     'click',
//     function () {
//         const guess = Number(document.querySelector('.guess').value);
//         console.log(typeof guess);
//         console.log(guess);
//     }
// )

// Manipulating CSS styles

// document.querySelector('body').style.backgroundColor = '#888';

// CODE START HERE----------------------------------------

let secretNumber = Math.trunc(Math.random()*20+1);
let userScore = 20;
let highScore = 0;
let gameOver = false;

const userInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScoreDisplay = document.querySelector(".highscore");
const secretNumberDisplay = document.querySelector(".number");
const againBtn = document.querySelector(".again");

const resetGame = function () {
    secretNumberDisplay.textContent = "?";
    secretNumberDisplay.style.width = "15rem";
    secretNumber = Math.trunc(Math.random()*20+1);
    userScore = 20;
    score.textContent = userScore;
    message.textContent = "Start guessing...";
    userInput.value = "";
    document.body.style.backgroundColor = "#222";
    gameOver = false;
};

const decreaseUserScore = function () {
    if(--userScore === 0){
        message.textContent = "💥You lost the game!💥";
        gameOver = true;
        endGame("red");
    }

    score.textContent = userScore;

};

const endGame = function (color) {
    secretNumberDisplay.textContent = secretNumber;
    document.body.style.backgroundColor = color;
};

const updateHighScore = function () {
    if (userScore > highScore) {
        highScore = userScore;
        highScoreDisplay.textContent = highScore;
    }
};

const processUserGuess = function (userGuess) {
    if (userGuess === secretNumber) {
        message.textContent = "🎉Correct Number!🎉";
        endGame("#60b347");
        updateHighScore();
        secretNumberDisplay.style.width = "30rem";
        gameOver = true;
    }else if(userGuess > secretNumber){
        message.textContent = "📈Too High!📈";
        decreaseUserScore();
    }else{
        message.textContent = "📉Too Low!📉";
        decreaseUserScore();
    }
};



const checkUserInput = function () {
    const userGuess = Number(userInput.value);
    if (!userGuess && !gameOver) {
        message.textContent = "⛔Invalid Input⛔";
    }else{
        if(!gameOver) processUserGuess(userGuess);
    }
};


checkBtn.addEventListener('click', checkUserInput);
againBtn.addEventListener('click', resetGame);