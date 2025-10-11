/*
 Array methods
 Array inbuilt methods
 */



// const arr = [
//     function fun1(){console.log("Fun-1");},
//     function fun2(){console.log("Fun-2");}
// ];

// console.log(arr);

// ! Object Methods

// Example 1



// const user = {
//     username: "Avinash",
//     desg: "Mern developer",
//     intro: function(){console.log(`I am ${this.username} working as a ${this.desg}`);}
// }

// user.intro();

// Example 2


// const user = {
//     username: "Avinash",
//     desg: "Mern developer",
//     bag:   "10cr",
//     intro: function(){console.log(`I am ${this.username} working as a ${this.desg}`);
//                  const inner = () =>{console.log("I am inner function"); console.log(` I have ${this.bag}`);}
//                  return inner;   
//                  }
// }

// const x = user.intro();
// console.log(x);
// x();



// ! Add a new key value pair

// const obj = {
//     username: "Avinash",
//     age: 24
// }

// obj.city = "Noida";
// obj["state"] = "utter pradesh";

// console.log(obj);


// ! check key in object
// ! delete key
// ! update a value 
// ! 

// const obj = {
//     username: "Avinash",
//     age: 24
// }

// obj.city = "Noida";
// obj["state"] = "utter pradesh";

// console.log(obj);

// console.log("job" in obj); // check
// delete obj.state;          // delete key 

// console.log(obj);



// ! Copy of object

// ! 1. Shallow copy

// const jack = {
//     cake: "ice-cream",
//     food: "Pizza"
// };

// const oggy = jack;

// delete oggy.cake;

// console.log("Jack : ",jack);
// console.log("jack.cake : ",jack.cake);


// ! deep copy


// It copy only data. 

// const jack = {
//     cake: "ice-cream",
//     info: {
//         bike: "David putra",
//         engine: "3000 cc"
//     }
// };

// const oggy = {...jack}; // Because of this if we update any value then updated in both.
// const oggy = structuredClone(jack);  // This is solution ob above.



// oggy.info.bike = "Bullet";

// console.log("Oggy : ",oggy);
// console.log("Jack : ",jack);




// const obj = {
//     username: "Avinash",
//     age: 24,
//     city: "Noida"
// }

// const keys = Object.keys(obj);
// console.log(keys);

// console.log(Object.values(obj));


// console.log(Object.entries(obj));  // Extra space are removed.


// console.log(object);



// ! New Class

// ! assign

// const user = {
//     username: "avinash",
//     age: 24,
//     city: "Delhi",
//     skills: ["react", "javascript"]
// };


// const company = {
//     companyName: "XYZ info",
//     job_location: "Gurugram"
// }

// const req = {
//     desg: "Frontend developer",
//     sal: "5 lpa"
// }


// const emp = Object.assign({}, user, company, req);
// console.log(emp);


// ! Object.freeze() and isFrozen()

// const obj = {
//     fname: "salmon",
//     lname: "bhai",
//     state: "Maharashtra"
// }

// Object.freeze(obj);


// obj.age = 57; // we cant manipulate it means cant delete or add only retrieve.

// console.log(Object.isFrozen(obj));
// console.log(obj);


// ! Object.hasOwn();

// It checks the key are found i nthe object or not.

// const obj = {
//     username: "Avinash",
//     age: 24,
//     city : "Noida"
// }

// const x = Object.hasOwn(obj, "city");

// console.log(x);


// ! Protypl Inheritance.

// const animal = {
//     name: "Ranbir kapoor",
//     eat: function(){
//         console.log(`${this.name} Animal can eat`);
//     }
// }

// const dog = {
//     // name: "sheero",
//     sleep: function() {
//     console.log(`${this.name} can sleep`);
//     },
//     __proto__: animal

// }


// const superDog = {
//     // name: "Bolt",
//     fly: function () {
//         console.log(`${this.name} can fly`);
//     },
//     __proto__:dog // this is latest way to write
// }


// // superDog.__proto__ = dog; // this is older version



// // dog.__proto__ = animal;

// console.log("Dog : ", superDog);

// console.log(superDog.name);

// superDog.fly();


// !

// const earlyMan = {
//     name: "tarzan",
//     hunt: function () {
//         console.log(`${this.name} can hunt..`);
//     }
// };
 
// const human = {
//     name: "Avinash",
//     eat: function(){console.log(`${this.name} can eat`);}
// }

// const superHuman = {
//     name: "Iron man",
//     fly: function () {
//         console.log(`${this.name} can fly`);
//     }
// }


// Object.setPrototypeOf();


// ! Object.create()



const earlyMan = {
    name: "tarzan",
    hunt: function () {
        console.log(`${this.name} can hunt..`);
    }
};


const human = Object.create(earlyMan, {
    name: {
        value: "avinash",
        writable: true,
        enumerable: true,
        configurable: false
    },
    age: {
        value: 24
    }
});

// human.age = 20;
human.name = "Don";

console.log(human);

