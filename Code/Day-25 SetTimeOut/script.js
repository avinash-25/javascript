// ============= CORRECTED SCRIPT.JS =============

// Example 1: Basic setTimeout execution order
console.log("Start");

setTimeout(function () {
    console.log("Namaste Developers -1");
}, 500);

setTimeout(function () {
    console.log("Namaste Developers -2");
}, 0);

console.log("End");

// Output: Start -> End -> Namaste Developers -2 -> Namaste Developers -1

// ============= VARIABLE SCOPE EXAMPLES =============

// Problem with 'var' - prints 3, 3, 3
console.log("=== Problem with var ===");
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("var i:", i); // All print 3
    }, 100);
}

// Solution 1: Using 'let' - prints 0, 1, 2
console.log("=== Solution with let ===");
for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log("let j:", j); // Prints 0, 1, 2
    }, 200 + j * 100);
}

// Solution 2: Using IIFE with var
console.log("=== Solution with IIFE ===");
for (var k = 0; k < 3; k++) {
    (function (index) {
        setTimeout(() => {
            console.log("IIFE index:", index);
        }, 300 + index * 100);
    })(k);
}

// ============= PAGE NAVIGATION =============

// Safe navigation function
function navigateToPage(url, delay = 1000) {
    console.log(`Navigating to ${url} in ${delay}ms...`);

    setTimeout(() => {
        // Check if the URL exists (basic validation)
        if (url && typeof url === 'string') {
            try {
                window.location.href = url;
            } catch (error) {
                console.error('Navigation failed:', error);
                alert('Failed to navigate to the page. Please check the URL.');
            }
        } else {
            console.error('Invalid URL provided');
        }
    }, delay);
}

// ============= PRACTICAL EXAMPLES =============

// Example: Delayed greeting
function showGreeting(name, delay) {
    setTimeout(() => {
        console.log(`Hello, ${name}! Welcome to our website.`);
    }, delay);
}

// Example: Progressive loading simulation
function simulateLoading() {
    const steps = ['Loading...', 'Processing...', 'Almost done...', 'Complete!'];

    steps.forEach((step, index) => {
        setTimeout(() => {
            console.log(step);
        }, index * 1000);
    });
}

// ============= TIMEOUT MANAGEMENT =============

// Store timeout IDs for cleanup
const timeouts = [];

function addTimeout(callback, delay) {
    const timeoutId = setTimeout(callback, delay);
    timeouts.push(timeoutId);
    return timeoutId;
}

function clearAllTimeouts() {
    timeouts.forEach(clearTimeout);
    timeouts.length = 0; // Clear the array
    console.log('All timeouts cleared');
}

// ============= USAGE EXAMPLES =============

// Only run navigation on index.html
if (document.title === 'setTimeout() Demo' || window.location.pathname.includes('index.html')) {
    // Auto-navigate after 5 seconds (with user notification)
    let countdown = 5;
    const countdownInterval = setInterval(() => {
        console.log(`Auto-navigation in ${countdown} seconds...`);
        countdown--;

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            navigateToPage('about.html');
        }
    }, 1000);

    // Show greeting after 2 seconds
    showGreeting('Developer', 2000);

    // Simulate loading process
    setTimeout(simulateLoading, 1000);
}

// ============= ERROR HANDLING EXAMPLE =============

function safeTimeout(callback, delay, ...args) {
    return setTimeout(() => {
        try {
            callback(...args);
        } catch (error) {
            console.error('Error in timeout callback:', error);
        }
    }, delay);
}

// Usage
safeTimeout(() => {
    console.log('This is a safe timeout execution');
}, 1500);














// console.log("Start");

// setTimeout(function task() {
//     console.log("Namste Developers -1 ");
// }, 500);

// setTimeout(function task() {
//     console.log("Namste Developers -2 ");
// }, 0);

// console.log("End");


/**
for (var i = 0; i < 3; i++) {
    setTimeout(A = () => {
        console.log("i : ", i);
    }, 0)
}

 * let and const are not inside settimeout so there is no any oter block will be created.
 * setTimeout code not assigned to callstack this will be setTimeout API
 * last value of i only be print in the case of 'var' only.
 * Because var have global scope 
 */



// for (let i = 0; i < 3; i++) {

//     setTimeout(A = () => {
//         window.location.href = "about.html";
//         console.log("i : ", i);
//     }, i * 1000);
// }

/**
 * 
 */

// setTimeout(A = () => {
//     window.location.href = "about.htm    l";
// }, 1000);