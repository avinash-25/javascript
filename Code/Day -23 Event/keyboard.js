window.addEventListener("keydown", function darkMode(e) {
    console.log("Key pressed", e.key);

    if (e.ctrlKey == true && e.key == "d") {
        e.preventDefault();
        const body = this.document.body;
        body.style.background = "black";
        body.style.color = "white";
    }
})


window.addEventListener("keyup", function lightMode(e) {
    console.log("Key pressed", e.key);

    if (e.ctrlKey == true && e.key == "d") {
        e.preventDefault();
        const body = this.document.body;
        body.style.background = "white";
        body.style.color = "black";
    }
});


window.addEventListener("keypress", function (e) {
    if (e.key == "a") {
        e.preventDefault();
        this.alert("Welcome to another World");
    }
});