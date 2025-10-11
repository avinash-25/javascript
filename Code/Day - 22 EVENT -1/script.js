//! FIrst way

// function changeText() {
//     const h2 = document.querySelector("h2");
//     h2.textContent = "Namste World..!!";
// }


//! Second way

// const button = document.querySelector("button");

// button.onclick = changeText

// function changeText() {
//     const h2 = document.querySelector("h2");
//     h2.textContent = "Namste Duniya..!!"
// }

//! Third Way
// todo AddEventListener()

// const button = document.querySelector("button");

// button.addEventListener("click", function darkMode() {
//     console.log("Clicked...!!!");
//     console.log("this : ", this);

//     const body = document.body;
//     body.style.cssText = "color: white; background: black";
// })



// ! Fourth Way

// const button = document.querySelector("button");

// button.addEventListener("click", function darkMode() {
//     console.log("Clicked...!!!");
//     console.log("this : ", this);

//     const body = document.body;
//     body.style.cssText = "color: white; background: black";
// })


//! Fifth Way

//! addEventListeneer(evenr name, callback function)

const lightBtn = document.querySelector("#light");
const darkBtn = document.querySelector("#dark");

lightBtn.addEventListener("click",
    function ligthMode() {
        const link = document.querySelector("link");
        link.href = "light.css";
    }
);

darkBtn.addEventListener("click",
    function darkMode() {
        const link = document.querySelector("link");
        link.href = "dark.css";
    }
);