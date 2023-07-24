const conv = document.querySelector('.conv')
const reset = document.querySelector('.reset')
const change = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const res = document.querySelector('.result')
const number = document.getElementById('converter')

let fahrenheit = 1
let celsius = 1


const changeFahrenheit = () => {
    fahrenheit = Math.floor(number.value * 1.8 + 32);
    res.textContent = `${number.value}°C to ${fahrenheit}°F`;
};

const changeCelsius = () => {
    celsius = Math.floor((number.value - 32) / 1.8);
    res.textContent = `${number.value}°F to ${celsius}°C`;
};

const swap = () => {

    if (one.textContent === '°C') {
        one.textContent = '°F';
        two.textContent = '°C';
        r()
    } else {
        one.textContent = '°C';
        two.textContent = '°F';
        r()
    }

};

const converter = () => {
    if (one.textContent === '°F') {
        changeCelsius()
    } else {
        changeFahrenheit();
    }
};

const r = () => {
    number.value = '';
    res.textContent = '';
};

reset.addEventListener('click', r)
conv.addEventListener('click', converter)

change.addEventListener('click', swap)