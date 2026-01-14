// const button = document.querySelector("#btn");

// button.addEventListener("click", async () => {
//     //To find user data
//     const x = await getData();
//     console.log("x : ", x);

//     const div = document.querySelector(".container");
//     div.innerHTML = `<h1>${x.name}</h1>
//                     <img src=${x.avatar_url}>`
// })


// // const x = users.map

// async function getData() {
//     const url = await fetch("https://api.github.com/users/avinash-25");
//     // console.log(url);
//     let data = await url.json();
//     console.log(data)
//     return data;
// }


const button = document.querySelector("button");

// const url="https://api.github.com/users/avinash-25";
const url = "https://api.github.com/users";

const getData = async () => {
    const res = await fetch(url);

    const data = await res.json();

    return data;
}

button.addEventListener("click", async () => {
    const users = await getData();

    const x = users.map(element => {
        console.log(element)
        const { login, avatar_url } = element;
        const card = `<div class="card">
                                <div class="profile">
                                    <img src=${avatar_url} alt="">
                                </div>
                                <div class="info">
                                    <h2>${login}</h2>
                                </div>
                            </div>`
        return card
    }).join("");

    const div = document.querySelector(".container");

    div.innerHTML = x;
})