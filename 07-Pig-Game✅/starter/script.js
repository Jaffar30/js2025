'use strict';

const new_game_btn = document.querySelector(".btn--new");
const sound = new Audio("./rolling.mp3");
const dice_img = document.querySelector(".dice");
const hold_btn = document.querySelector(".btn--hold");
const currentPlayer1 = document.getElementById("current--0");
const currentPlayer2 = document.getElementById("current--1");
const rollDiceBtn = document.querySelector(".btn--roll");
const player1Panel = document.querySelector(".player--0");
const player2Panel = document.querySelector(".player--1");

// players variables
let player1_current = 0;
let player2_current = 0;
let activePlayer = 1; //player1 = 1 - player2 = 2
let DiceOutput = 0;
// players variables


const get_random_number = function () {
    let num = Math.trunc(Math.random() * 6 + 1);
    dice_img.src = `dice-${num}.png`;
    return num;
};

const roll_dice = function () {
    sound.currentTime = 0;
    sound.play();

    let lastDiceNumber;

    // Wait 0.2 seconds (or 3 seconds if you want longer) before rolling
    setTimeout(() => {

        // Start rolling dice images
        const roll = setInterval(() => {
            lastDiceNumber = get_random_number();
        }, 100); // dice flicker speed

        // Stop rolling when sound finishes
        sound.addEventListener(
            "ended",
            () => {
                clearInterval(roll);
                DiceOutput = lastDiceNumber;
            },
            { once: true }
        );

    }, 200); // 0.2 sec delay before dice start rolling
};

const increaseCurrent = function(PlayerNumberOne,score){
    if(PlayerNumberOne){
        player1_current += score;
        currentPlayer1.textContent = player1_current;
    }else{
        player2_current += score;
        currentPlayer2.textContent = player2_current;
    }
};

const changePlayersTurn = function(){
    if(activePlayer===1){
        activePlayer=2;
        player1Panel.classList.remove("player--active");
        player2Panel.classList.add("player--active");
    }else{
        activePlayer=1;
        player2Panel.classList.remove("player--active");
        player1Panel.classList.add("player--active");
    }
    DiceOutput = 0;
};


rollDiceBtn.addEventListener("click", roll_dice);
hold_btn.addEventListener("click",function(){
    increaseCurrent(activePlayer===1,DiceOutput);
    changePlayersTurn();
});

// this is enough cause I already build this project 2 times before and this time I added new thing and I guess I have the skills that the instructor 
// tranna teach in this project