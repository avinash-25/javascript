// ! bind()

const user = {
    username: "Avinash",
    desg: "SDE"
}

function details(company,city) {
    console.log(this);
    console.log(company);
    console.log(city);
}

const res = details.bind(user, "TCS", "Noida")
// res();

export default res;