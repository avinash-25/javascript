// const shop = {
//     biscuits: ["oreo", "parleg", "Jim-jam"],
//     coldDrinks: ["mazza", " campa", "sprite", "coke"]
// }

// const {biscuits:[,...item1], coldDrinks:[,...item2]} = shop;

// console.log(item1);
// console.log(item2);


// const user = {
//     username: "tinku",
//     age: 22,
//     city: "Noida",
//     pin: 201301
// }

// const {username,...obj} = user;


// console.log(username);
// console.log(obj);



import {user, employee} from "./main.js";
import company from "./spread.js";
import info from "./spread.js";
import personal from "./sum.js";

const { e1,...res} = employee;

console.log(e1);
console.log(res);
// console.log(res);


console.log(info);

const username = {
    name: "Avinash",
    skills: ["react", "Node", " Express", " Mongo"],
    ...personal,
    ...company
}

// personal.maritalStatus = "married"; only here will be changed not changed permanently.

console.log(personal);


console.log(username);
