// !document.getElementById

// const heading = document.getElementById("title");

// heading.textContent = "Namste Developers";
// heading.style.color = "red";

// console.log("heading :", heading);

// ! getElementByClassName


// const arr = Array.from(document.getElementsByClassName("card"));
// console.log("arr : ", arr);

// arr.map((element, index, array) => {
//     element.style.color = "red";
// })


//!  getElementsByTagName

// const divs = Array.from(document.getElementsByTagName("div"));

// divs.style.color = "blue";

// ! document.querySelector

// const heading = document.querySelector("#title");

// console.log(heading);

// const card = document.querySelector(".container > .c3");
// console.log(card);

//! document.querySelectorAll()

// - It returns nodelist of the elements.

// const cards = document.querySelectorAll(".card");
// console.log(cards);

// cards.forEach(task = (element) => {
//     element.style.color = "blue";
// })

// ! 1. Difference between HTML collection and HTMl list.


// const cardHtmlCollection = document.getElementsByClassName("card");
// const cardNodeList = document.querySelectorAll("cards");

// const c4 = document.getElementById("c4");

// c4.remove();

// console.log(cardHtmlCollection);
// console.log(cardNodeList);

//! 