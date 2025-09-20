/*
const pr = Promise.resolve("Promise puraa huaa");

const pr1 = Promise.reject("Promise Rejected");

console.log(p1);
console.log(p2);
*/

//!  Promise.all

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise - 1");
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise - 2");
    }, 2000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Promise - 3");
        reject("Promise - 3 rejected")
    }, 3000);
})


// const response = Promise.all([p1, p2, p3]);
// console.log("response : ", response);


const response = Promise.allSettled([p1, p2, p3]);
console.log("response : ", response);