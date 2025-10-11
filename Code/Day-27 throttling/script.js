// DOM Elements
const button = document.querySelector("button");
const countDisplay = document.querySelector("#countSpan");
const requestDisplay = document.querySelector("#requestSpan");

// State Variables
let count = 0;
let request = 0;


// higher order function return inner function
function mythrottle(cb, d) {
    let prev = 0;
    let inner = function inner(...args) {

        let now = Date.now();
        if (now - prev < d)
            return;
        prev = now;
        cb(...args);
        // cb.apply(this, args);

    }
    return inner;
}

// throttle recieved inner function
const throttle = mythrottle(() => {
    requestDisplay.innerHTML = ++request;

}, 1000);


button.addEventListener("click", function () {
    countDisplay.innerHTML = ++count;
    throttle()
})