// variables
const body = document.querySelector('body');
const themeBtns = document.querySelectorAll('.numeric');
const keyBtns = document.querySelectorAll('button');
const screen = document.querySelector('.display');
let btnTogle = document.querySelector('.btn-theme');
let toggle = false;

//event to change the color of theme 
themeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let el = e.target;
        el = el.textContent;
        if (el == '3') {
            body.setAttribute('data-theme', 'three');
            btnTogle.style.left = '2.7em';

        } else if (el == '2') {
            body.setAttribute('data-theme', 'two');
            btnTogle.style.left = '1.3em';
        } else {
            body.setAttribute('data-theme', 'one');
            btnTogle.style.left = '0';
        }
    });
});
// event click

keyBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const el = e.target.textContent; // value of the btn
        const firstCH = screen.value[0]; /// first el in input
        if (!isNaN(el)) {
            if (firstCH == '0') { /// first el === 0
                screen.value = ''
            }
            screen.value += el
        } else if (["-", "+", "/", "*", "."].includes(el)) {
            if (!screen.value.includes(el)) { // if the el is not included add el
                screen.value += el
            } else {
                let newDisplay = eval(screen.value)
                screen.value = newDisplay + el
            }
        } else if (el === '=') {
            screen.value = eval(screen.value);
        } else if (el === 'Reset') {
            screen.value = '' /// reset everything
        } else {
            let result = screen.value.split('');
            result.pop(); // delete the last element
            screen.value = result.join('');
        }
    });
});

