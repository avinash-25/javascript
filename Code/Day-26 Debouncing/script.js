// DOM Elements
const button = document.querySelector("button");
const countDisplay = document.querySelector("#countSpan");
const requestDisplay = document.querySelector("#requestSpan");

// State Variables
let count = 0;
let request = 0;

// Debounced Function (Using Lodash)
let debounced = _.debounce(() => {
    requestDisplay.innerHTML = ++request;
}, 800);

// Event Listener
button.addEventListener("click", function (e) {
    countDisplay.innerHTML = ++count;
    debounced();
});



//! POLYFILL IMPLEMENTATION (Alternative)


/*
function myDebounced(cb, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb();
        }, delay);
    };
}

// Using Custom Debounce
let debounced = myDebounced(() => {
    requestDisplay.innerHTML = ++request;
}, 1000);

button.addEventListener("click", function (e) {
    countDisplay.innerHTML = ++count;
    debounced();
});
*/