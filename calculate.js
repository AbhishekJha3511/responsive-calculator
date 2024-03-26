// Get numeric buttons and dot
let numericButtons = document.querySelectorAll('.numeric-btn');
// let dot = document.getElementById('dot');

// Get arithmetic operation buttons
let operationButtons = document.querySelectorAll('.calculation-button');

// Get other buttons
let square = document.getElementById('square');
let cube = document.getElementById('cube');
let clear = document.getElementById('clear');
let percent = document.getElementById('percent');
let enter = document.getElementById('enter');
let ce = document.getElementById('ce');


// Get display element
let display = document.getElementById('display');

// Preloader
window.addEventListener('load', function() {
    let preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
});

// Link to go to github profile
let github = document.getElementById('github');
github.addEventListener('click', function() {
    window.open('https://github.com/AbhishekJha3511', '_blank');

})

let linkedin = document.getElementById('linkedin');
linkedin.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/abhishekjha3511/', '_blank');

})



// Clear function
function clearDisplay() {
    display.value = '';
}

// Enter function
function enterDisplay() {
    display.value = eval(display.value);
    
}

// Add event listeners for numeric buttons
numericButtons.forEach(button => {
    button.addEventListener('click', function() {
        display.value += button.textContent;
    });
});

// Add event listener for dot button
dot.addEventListener('click', function() {
    display.value += '.';
});

// Add event listener for arithmetic operation buttons
operationButtons.forEach(button => {
    button.addEventListener('click', function() {
        display.value += button.textContent;
    });
});

// Add event listeners for other buttons
square.addEventListener('click', function() {
    display.value += (display.value) **2;

});

cube.addEventListener('click', function() {
    display.value += (display.value) **3;
});

// Add event listener for percent button
percent.addEventListener('click', function() {
    display.value = (display.value) / 100;
});

// Add event listener for clear button
ce.addEventListener('click', function() {
    display.value = display.value.slice(0, -1);
});


clear.addEventListener('click', function() {
    clearDisplay();
});

enter.addEventListener('click', function() {
    enterDisplay();
});
