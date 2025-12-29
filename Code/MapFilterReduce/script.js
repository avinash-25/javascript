//* Example 1

// const arr = [1,2,3,4,5];

// const output = [];

// const x = arr.forEach((element,index,array) => {
//     output.push(element**2);
// })

// console.log(output);
// console.log(x); //here x return undefined because forEach unable to anything as its nature.



// MAP

// const arr = [1,2,3,4,5];

// const output = [];

// const x = arr.map((element,index,array) => {
//     let y = element**3;
//     return y;
// });

// console.log(output);
// console.log(x);


//* example 2


// const arr = [1,2,3,4,5];

// const obj = {
//     pow: 2
// };

// const x = arr.map((element,index,array) => {
//     let y = element**pow;
//     return y;
// });

// console.log();
// console.log(x);



//* Example 3

// Here map return undefined after index 2 instead of stop working.
// const arr = [1,2,3,4,5];

// const x = arr.map(function tast(element,index,array){
//     if(element < 4){
//         return element**2;
//     }
//     return
// })

// console.log("x : ",x);



//& filter

//* Example 1


// here it only returns whatever fullfil  the condition.

// const arr = [1,2,3,4,5];

// const x = arr.filter(task = (element) =>{
//     if(element < 4){
//         return element;
//     }
// }).map(element => { 
//     return 
// })

// console.log("x : ",x);
// console.log("arr : ",arr);




//& reduce

//* example 1

// const arr = [1,2,3,4,5];

// const x = arr.reduce((accumulator, element, index, array) =>{

//     accumulator += element; // ! always update the value with previous one also.



//     return accumulator; // ! returns previous value, then it will update with upcoming value.


// },0)


// console.log("x = ",x);

// accumulator is previous value which is initialized with 0



//*  example 2


// const arr = [1,2,3,4,5];

// const x = arr.reduce((accumulator, element, index, array) =>{

//     if(element < 4)
//     {
//         accumulator.push(element*10);
//     }



//     return accumulator; // ! returns previous value, then it will update with upcoming value.


// },[]) //! if we want array of elements as return 


// console.log("x = ",x);

//&  reduceRight()

const arr = [1,2,3,4,5];

const x = arr.reduceRight((acc,Element, index) => {
    console.log(`Element at index ${index} is `, Element);
},0);
