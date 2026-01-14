//* Fetch api

const button = document.getElementById("btn");

button.addEventListener("click", async () => {
    const userData = await getUserData("avinash-25");
    if (!userData) return;

    const div = document.querySelector(".container");

    div.innerHTML = `
        <h1>${userData.name}</h1>
        <img src="${userData.avatar_url}" alt="avatar">
    `;
});

async function getUserData(username) {
    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        return await response.json();
    } catch (error) {
        console.log("Error:", error);
    }
}

//* map, filter, reduce

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.reduce((acc, ele) => {
//     return acc + ele;  
// },0);
// console.log(evenNumbers);
// console.log(numbers)

//* Function


// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {

//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     alert( i ); // a prime
//   }
// }

// showPrimes(10);


//! fetch

//^ response.BYOB : supportsBYOB tells whether the response stream allows user-managed memory buffers for reading data.
//* response.blob() : It reads the response stream and converts binary data into a Blob for file handling.


// const url = `https://jsonplaceholder.typicode.com/users`;
// const response = await fetch(url);

// console.log("First time");
// console.log(response.bodyUsed);
// console.log(response.body)

// const data = await response.json();

// const reader = response.body.getReader({ mode: "byob" });

// console.log("reader : ",reader)
// console.log(response.bodyUsed);
// console.log(response.body)
// console.log("Second time");
// const data1 = await response.json();

// console.log(response.bodyUsed);
// console.log(response.body)


// console.log(response.statusText);
// console.log(response.status)
// console.log(response.url);
// console.log(response.ok)