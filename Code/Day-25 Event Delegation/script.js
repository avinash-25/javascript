const section = document.querySelector("section");

section.addEventListener("click", (event) => {
    console.log(event.target.parentElement, "clicked..");
}, {
    capture: false,
    once: true,
    passive: true
});

dispatchEvent.forEach((div, index) => {
    div.addEventListener("click", (event) => {
        console.log(`div clicked ${index + 1}`);
    })
})