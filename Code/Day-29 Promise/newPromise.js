import {
    error,
    Global,
    success1,
    success2,
    success3
} from "./app.js";

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise puraa huaa..!");
        // reject("Rejected");
    }, 2000);
})

pr
    .then(success1)
    .then(success2)
    .then(success3)
    .catch(Global)