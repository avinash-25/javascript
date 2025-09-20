//! insertAdjacentElement(position, element)

// const div = document.getElementById("root");

// const p1 = document.createElement("p1");
// p1.textContent = "Paragraph - 1";


// const p3 = document.createElement("p3");
// p3.textContent = "Paragraph - 3";


// div.insertAdjacentElement("afterbegin", p1);
// div.insertAdjacentElement("beforeend", p3);



// const t1 = document.createElement("h2");
// const t2 = document.createElement("h2");

// t1.textContent = "Start";
// t2.textContent = "End";
// t1.style.color = "green";
// t2.style.color = "red";

// div.insertAdjacentElement("beforebegin", t1);
// div.insertAdjacentElement("afterend", t2);


//! setAttribute();
//! getAttribute();
//! removeAttribute();

// const div = document.querySelector("div");

// const x = div.getAttribute("class");

// div.setAttribute("class", `${x} justify-center`);

// div.removeAttribute("id");



// const x = div.getAttribute("class");
// console.log(x);


/*
-innerHTML
- outerHtml
- innerText 
- innerHtml
*/

// const div = document.querySelector("#root");

// div.innerHTML = "<h1>Hello world</h1>"; // add h1 inside div.


/**
 * ! traversing an element
 */

const div = document.querySelector("#root");

console.log(div.parentElement);
console.log(div);
console.log(div.children); //3
console.log(div.childNodes); //7 includes next line i.e. empty spaces
console.log(div.firstElementChild);
console.log(div.lastElementChild);
console.log(div.firstElementChild.nextElementSibling); //p2
console.log(div.lastElementChild.previousElementSibling); //p2

/**
 * ! remove()
 * ! removeChild()
 */
// div.children[2].remove();


const p2 = document.querySelector("#root :nth-of-type(2)");
div.removeChild(p2);