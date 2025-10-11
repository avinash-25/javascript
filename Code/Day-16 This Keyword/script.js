// console.log("this : ",this);

// var a = 10;

// {
//     let b = "book";
//     console.log("this : ",this);
// }


// this inside named function.

// var a = 10;
// let b = 20;

// function greet(){
//     console.log("Good morning developer...!!");
//     console.log("this : ", this);
// }

// greet();
// console.log("a : ",a);
// console.log("b : ",b);


// this inside arraow function.


// const greet = () => {
//     console.log("Good morning developer...!!");
//     console.log("this : ", this);
// }

// greet();



// this inside Named method


// const obj = {
//     fname: "Avinash",
//     lname: "Ranjan.",
//     info: function info(){ console.log("'this' inside info : ",this); }
// }

// obj.info();



// this keyword arrow method.



const obj = {
    fname: "Avinash",
    lname: "Ranjan.",
    info: (fname,lname) => { console.log("'this' inside info : ",this); }
}

obj.info();