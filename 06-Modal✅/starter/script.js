'use strict';

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// to get all buttons with this class cause if you use querySelector it will only get the first one
const btnsOpenModal = document.querySelectorAll('.show-modal');

const showModal = function () {
    // access class of the element and remove hidden class
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    // add class to the element
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// add event listener to all buttons
for(let i=0; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click',showModal);
}
btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

// keydown,keyup,keypress
// keydown: when the key is pressed down
// keyup: when the key is released
// keypress: when the key is pressed down and it produces a character value
// in this we add to the whole document
document.addEventListener(
    'keydown',
    function(btn){
        // console.log(`A key was pressed ${btn.key}`);
        // contains method checks if the class is present or not
        if(btn.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal();
        }
    }
);