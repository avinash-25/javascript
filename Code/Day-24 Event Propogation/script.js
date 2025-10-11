const section = document.querySelector("section");
const article = document.querySelector("article");
const div = document.querySelector("div");

section.addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log("Section clicked....", e.target);

}, true);

// section.addEventListener("click", (e) => {
//     console.log("Section clicked-2");
// }, true);
// Bubble phase value= false.

article.addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log("Article clicked....", e.target);
}, true);


div.addEventListener("click", (e) => {
    e.stopPropagation();
    e.stopImmediatePropagation(); //cannot access div clicked-2 as stopped immediately
    console.log("Div clicked-1....", e.target);
}, true);


div.addEventListener("click", (e) => {
    console.log("Div clicked-2...", e.target);
}, true);
//Capturing phase


const h1 = document.querySelector("h1");

h1.addEventListener("copy", function (e) {
    e.clipboardData.setData("text/plain", "🖕🏻");
    e.preventDefault();
})