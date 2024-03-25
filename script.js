
let num0 =document.getElementById('num0');
let num1 =document.getElementById('num1');
let num2 =document.getElementById('num2');
let num3 =document.getElementById('num3');
let num4 =document.getElementById('num4');
let num5 =document.getElementById('num5');
let num6 =document.getElementById('num6');
let num7 =document.getElementById('num7');
let num8 =document.getElementById('num8');
let num9 =document.getElementById('num9');
let dot =document.getElementById('dot');

let add =document.getElementById('add');
let subtract =document.getElementById('sub');
let multiply =document.getElementById('multiply');
let divide =document.getElementById('divide');

let square =document.getElementById('square');
let cube =document.getElementById('cube');

let clear =document.getElementById('clear');
let enter =document.getElementById('enter');

let display =document.getElementById('display');

//calculation event listeners
add.addEventListener('click', function(){
    display.value += '+';
});
subtract.addEventListener('click', function(){
    display.value += '-';
});
multiply.addEventListener('click', function(){
    display.value += '*';
});
divide.addEventListener('click', function(){
    display.value += '/';
});

square.addEventListener('click', function(){
    display.value += '**2';
}
);
cube.addEventListener('click', function(){
    display.value += '**3';
}
);

//number event listeners
dot.addEventListener('click', function(){
    display.value += '.';
});
num0.addEventListener('click', function(){
    display.value += '0';
});
num1.addEventListener('click', function(){
    display.value += '1';
});
num2.addEventListener('click', function(){
    display.value += '2';
});
num3.addEventListener('click', function(){
    display.value += '3';
});
num4.addEventListener('click', function(){
    display.value += '4';
});
num5.addEventListener('click', function(){
    display.value += '5';
});
num6.addEventListener('click', function(){
    display.value += '6';
});
num7.addEventListener('click', function(){
    display.value += '7';
});
num8.addEventListener('click', function(){
    display.value += '8';
});
num9.addEventListener('click', function(){
    display.value += '9';
});

//clear and enter event listeners   
clear.addEventListener('click', function(){
    display.value = '';
});
enter.addEventListener('click', function(){
    display.value = eval(display.value);
});

// calculation function
function calculate(){
    display.value = eval(display.value);
}

//clear function
function clearDisplay(){
    display.value = '';
}

//enter function
function enterDisplay(){
    display.value = eval(display.value);
}




