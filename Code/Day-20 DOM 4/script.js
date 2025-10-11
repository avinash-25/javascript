// const heading = document.createElement("h1");
// heading.textContent = "Avinash";

// const body = document.body;
// body.appendChild(heading);

// heading.style.color = "red";
// heading.style.fontSize = "89px";
// heading.style.margin = "20px";
// heading.style.backgroundColor = "lightcyan";

// heading.style.cssText = `color:red;
//                          font-size: 40px;
//                          margin: 20px;
//                          background-color: yellow;
//                          `


// const ui = `color:red;
//                          font-size: 40px;
//                          margin: 20px;
//                          background-color: yellow;
//                          `
// heading.style.cssText = ui;



//! Internal css

// const style = document.createElement('style');

// style.textContent = `h1{
//                         color: white;
//                         font-size: 40px;
//                         margin: 20px;
//                         padding: 20px;
//                         background-color: black;
//                         }`
// const head = document.body;
// head.appendChild(style);


//! External css

// const link = document.createElement("link");

// link.rel = "stylesheet";
// link.href = "style.css";

// const head = document.head;
// head.appendChild(link);


//! insertRule
/*
const sheetList = document.styleSheets[0];
console.log(sheetList);

sheetList.insertRule(`h1 {
                            font-size: 50px;
                            color: white;
                            background-color: purple;
                            padding: 20px;
                          }`);
*/


//! append

// const heading = document.createElement("h1");
// heading.textContent = "Avinash";
// const c1 = document.createComment("This is for the testing purpose");

// // console.log(heading, c1);

// const body = document.body;
// body.append(heading, c1);

//! document.createDocumentFragment()

const body = document.body;

const div = document.createElement("div");

div.style.width = "300px";
div.style.height = "300px";
div.style.background = "crimson";
div.style.fontSize = "35px";
div.style.border = "3px solid black";
div.style.alignItems = "center";
div.style.color = "white";
div.style.display = "flex";
div.style.justifyContent = "center";

div.textContent = "Box";

const end = performance.now();

body.append(div);