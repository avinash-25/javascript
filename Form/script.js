const name = document.querySelector("#name");
const city = document.querySelector("#city");

const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    const newName = name.value;
    const newCity = city.value;

    console.log(newName);
    console.log(newCity);
})


