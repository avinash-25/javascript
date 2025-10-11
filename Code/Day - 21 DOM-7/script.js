const body = document.body;

const t1 = performance.now();

for (let i = 1; i <= 5; i++) {
    const p = document.createDocumentFragment("p");
    p.textContent = `paragraph Tag - ${i}`;
    body.append(p);
}

const t2 = performance.now();
// console.log(t2 - t1);

//! Second way


// const body = document.body;

const t3 = performance.now();
const div = document.createElement("div");

for (let i = 1; i <= 5; i++) {
    const p = document.createElement("p");
    p.textContent = `paragraph Tag - ${i}`;
    fragment.append(p);
}

body.append(fragment);
const t4 = performance.now();
console.log(t2 - t1);
console.log(t4 - t3);