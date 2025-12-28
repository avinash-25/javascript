console.log("I am Avinash, ", " My Favorite hobby is watching geopolitics news..!!");

function print(name) {
    console.log(name)
}

print("Avinash");

let newDate = new Date();

console.log(newDate.getFullYear()) 




























// var a = "42";
// var b = 42;

// if (a === b)
//     console.log(true) 
// else
//     console.log(false) //! false


// if (a == b)
//     console.log(true) //! true
// else
//     console.log(false)

// let a;
// console.log(a);
// console.log(xyz);

// a = 100;
// console.log(a)


// const obj = {
//     a: 10,
//     b: 34
// }

// let obj1 = obj;

// obj1.a = 30;
// console.log(obj.a); //30

// console.log(100 + '8' + 20);

// console.log(100 - '8' - 20);

// console.log("100" + '8' + 20);

/*
let abc = 100;
if (function xyz(){}) {
    abc = abc - typeof (xyz);
}
console.log(abc);  // NaN 
*/
/*
The if block runs because a function is truthy. The function name ‘xyz’ exists inside the expression, so typeof(xyz) returns ‘function’. The code becomes 100 minus ‘function’. JavaScript converts the string to a number and fails, so the result becomes NaN.
*/
 

/*
let abc = 100;
if (function xyz(){}) {
    abc = abc + typeof (xyz);
}
console.log(abc); 
*/
/*
A named function expression makes the name available only inside the function body.Outside, xyz does not exist.typeof(xyz) does not throw an error and returns ‘undefined’. Adding a number and a string performs string concatenation, so the result is ‘100undefined’.

*/


// let obj = {
//     name: "Avinash",
//     fun: function () {
//         console.log(this.name);
//     }
// }

// const c = obj.fun;
// obj.fun();
// c();

// let arr = ['avinash', 'abc'];
// let ans = arr.includes('abc',1);
// console.log(ans);





// var a = 10;
// let a = 30;
// console.log(a);

// function parent() {
//     console.log("I am parent function");
//     const locker = "10cr"; // This variable will be preserved in closure 
//         const child = () => {
//         console.log("I am child function");
//         console.log("locker : ",locker); // Accessing parent's variable through closure
//         };
//   return child;
//  }

// const x = parent();
// x(); // Logs the child functionx();


// let name = {
//     firstName: "Avinash",
//     lastName: "Ranjan",
//     printFullName: function () {
//         console.log(this.firstName, " ", this.lastName);
//     }
// }

// name.printFullName();

// let name2 = {
//     firstName: "Sachin",
//     lastName: "Tendulkar"
// }