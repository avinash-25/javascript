// const user = {
//     username: "Avinash",
//     desg: "SDE",
//     salary: "8 lpa",
//     city: "Noida"
// }

// function details() {
//     console.log("Details : ",this);
// }

// details();
// details.call(user);


// //! Example 2

// const u1 = {
//     username: "Ravi",
//     designation: "Frontend",

//     outer: function outer() {
//         console.log(this); // Ravi u1 object

//         function inner() {
//             console.log(this);
//         }
//         inner.call(this) // here we pass 'this' then in the inner function 'this' will replaced by outer function this.
//     }
// }

// u1.outer();















// //! Example 3

// const u1 = {
//     username: "Avinash",
//     designation: "Backend",
//     outer: function outer()
//     {
//         console.log("outer : ",this); // Avinash u1 object
//         const inner = () =>
//         {
//             console.log("Inner : ",this);
//         }
//         return inner;
//     }
// }
// const res = u1.outer();
// res() //inner



// //! Example 4

// const u1 = {
//     username: "Avinash",
//     designation: "Backend",
//     outer: function outer()
//     {
//         console.log("outer : ",this); // Avinash u1 object
//         function inner()
//         {
//             console.log("Inner : ",this);
//         }
//         return inner;
//     }
// }
// const res = u1.outer();
// res() //inner

// Here 'this' of the inner function will return window but i want to when inner return from outer then this have some data other than window
// so solve this problem we use 'call'.
// - By the help of 'call' we can cnange the data of 'this'.




// ! Apply

// const u1 = {
//     username: "Avinash",
//     designation: "Backend",
//     outer: function outer()
//     {
//         console.log("outer : ",this); // Avinash u1 object
//         function details() {
//             console.log("Details this : ", this);
//             console.log("Username : ".username);
//             console.log("Designation : ".designation);
//         }
//     }
// }

// details.apply(u1, "backend");


import res from './app.js';

res();