// const a = "10";
// const b = 5;

// const c = a*b; // output: 50() 'a' automatically converted by implicit coercion).
// console.log("c = "+c);


// const d = Number(a);
// console.log(typeof(d));

// const x = 10;
// const y = x;

// console.log("x : "+x);
// console.log("x is a type of :"+typeof(x));  

// Instead of above line we can write 

// let z = +a;
// console.log(typeof(z));

// let data = prompt("Enter User Age : "); // Here if we use (+prompt()) then input automatically convert in number
// let num = +data;
// console.log(data);
// console.log("Types Od data : "+typeof(data));
// console.log("Types Od num : "+typeof(num));




// var a = 10; // It has global scope.

// let b = 20; 

// const c = 30;

// console.log("a : ",a);
// console.log("b : ",b);
// console.log("c : ",c);



var a = 1;
let b = 2;
const c = 3;

{
    console.log("Inside a local block");
    var a = 10;
    // let b = 20;
    // const c = 30;

    console.log("a :",a);
    console.log("b :",b);
    console.log("c :",c);
}


console.log("Outside a block :");
console.log("a :",a);
console.log("b :",b);
console.log("c :",c);