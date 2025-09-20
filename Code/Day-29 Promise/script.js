//! promise() Constructor

//? const p1 = new Promise();
//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   Explanation :-  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//? `new` keyword load the Promise() constructor to the p1 variable.
//todo:  new keyword create the empty object, like this :-  {}
// empty object reference save ot the promise() constructor `this` keyword.



const p1 = new Promise(
    function task(resolve, reject) {
        setTimeout(() => {
            // reject("Yahi dosti yahi payr, bich me aa gai paise ki diwar");
            resolve("Five hundred received");
        }, 3000)
    });


//? Here task function responsible for resolve or reject the promise.
//? Promise will in pending state by-default.

console.log("p1 : ", p1);