

// ! Object Destructuring

// const obj = {
//     username: "Avinash",
//     age: 24,
//     city: "Noida"
// }

// const {username, age, city} = obj;

// console.log(username);
// console.log(age);
// console.log(city);


// ! Array destructuring

// const movies = ["welcome", "housefull", "dhammal"];
// const [m1, ,m3] = movies;

// console.log(m1);
// console.log(m3);


//! Nested Object destructuring.

// const obj = {
//     username: "Avinash",
//     address: {
//         state: "UP",
//         pin: 201301
//     }
// }

// const {username, address:add} = obj; // rename the key name

// // const {username, addre{state, pin}} = obj;

// console.log(username);
// console.log(add);


// ! Nested array destructuring

// const arr = [
//     ["Html", "css"],
//     ["js", "TS"],
//     ["Npde", "java"],
//     ["Mongo", " sql"]
// ]

// const [ui, logic, [b1, b2] = backend, db] = arr;

// console.log(b1);
// console.log(b2);
// console.log(ui);


// ! Mixed Array destructuring

// const users = [ 
//     {
//         fname: "avinash",
//         lname: "ranjan   "
//     },
//     {
//         fname: " Tinku  ",
//         lname: "      sharma"
//     },
//     {
//         fname: "Golu     ",
//         lname: "verma  "
//     }
// ];


// const x =   users.map((element, index, array) => {
//     const  {fname, lname} = element;
//     return {fname:fname.trim(), // it returns string without extra space.
//             lname:lname.trim()}
    
// })
// console.log(users);
// console.log(x);


// ! Upper level of above

// const users = [ 
//     {
//         fname: "avinash",
//         lname: "ranjan   "
//     },
//     {
//         fname: " Tinku  ",
//         lname: "      sharma"
//     },
//     {
//         fname: "Golu     ",
//         lname: "verma  "
//     }
// ];


// const x =   users.map(({fname, lname} = element, index, array) => {

//     // console.log( "fname : ",fname);
//     // console.log("lname : ",lname);

//     array[index] = {
//         fname:fname.trim(),
//         lname:lname.trim()
//     }

//     console.log("After trim : ",fname);
//     console.log("After trim : ",lname);
// })



import {add, greet, user} from "./logic.js"

console.log(user);