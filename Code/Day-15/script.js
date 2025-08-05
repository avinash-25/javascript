// const cart = [
//     {item: "salt", price: 10},
//     {item: "sugar", price: 40},
//     {item: "soap", price: 10}
// ]

// const x = cart.find((element, index, array) => {
//     if(element.item === 'salt'){
//         return item;
//     }
// })

// console.log(x);



// some
// - If anyone 
 

const users = [ 
    { name: 'Alice', age: 17 }, 
    { name: 'Bob', age: 25 }, 
    { name: 'Charlie', age: 16 } 
]; 
 
const hasAdult = users.some(user => user.age >= 18); 
console.log(hasAdult); // true (Bob is 25)
