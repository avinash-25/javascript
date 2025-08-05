// const obj = {
//     username: "Avinash",
//     age: 21,
//     greet: function(){
//         console.log("Good morning");
//         return 10;
//     }
// }

// console.log(obj.username);
// console.log(obj.age);

// const x = obj.greet();
// console.log(x);

// console.log(obj["age"]); // This is latest


// Example-2

// const obj = {
//     4: "avinash",
//     1: "ranjan",
//     6: "karan",
//     3: "Abhimanyu",
//     9: "Raj"
// }

// console.log(obj);


// example-3

// const key1 = prompt("Enter Key name : ");

// const key = {
//     [key1]: 23
// };

// console.log(key.key1);


// ! Ways to create object


// first
const obj = {username: "Avinash"};

// second

const obj2 = new Object(12); // number.
const ob3 = new Object('av'); // string
const ob4 = new Object({}); // object
console.log(obj2);



// 3

function CreateObject (username, age , city){
    this.username = username;
    this.age = age;
    this.city = city;
}

const u1 = new CreateObject("Avinash", 22, "Muzaffarpur");

