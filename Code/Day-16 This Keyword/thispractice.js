// console.log(this);

// {
//     console.log(this);
// }



// function func(nu) {
//     console.log(this.nu);
//     console.log(nu);
// }

// let num = 30;

// func(num);


// const x = () => { console.log(this); };
// x();

// 'use strict';

// const person = {
//     name: 'John',
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// // person.greet();

// const x = person.greet.bind(person);

// x();



// const obj = {
//     name: 'John',
//     greet() {
//         console.log(this.name);
//     }
// };

// const func = obj.greet.bind(obj);

// func();

// const func = obj.greet;
// func();


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hi, I'm ${this.name}`);
    };
    console.log(this); // New Person instance
}
const person1 = new Person('Charlie', 25);
const person2 = new Person('Diana', 28);
person1.greet(); // "Hi, I'm Charlie"
person2.greet(); // "Hi, I'm Diana"