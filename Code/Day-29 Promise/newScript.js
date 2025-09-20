// Create a Promise
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Chombu");

    // Reject after 2 seconds
    // reject("Sorry..! I am rejected");
  }, 2000);
});
console.log("Start");

// Consume the Promise
p2
  .then(
    // Success Handler
    function onSuccess(value) {
      // value += " Avinash";
      // console.log(value);
      // return value;
      console.log("Under then - 1");

      const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(value + "Singh");


        }, 5000);
      })
      return p3;
    },

    // Error Handler (for rejection)
    function onError(reason) {
      console.log("Under error - 1");

      reason = "Error occurs";
      console.log(reason);

      const p4 = new Promise((resolve, reject) => {
        reject("Promise fir se pura nahi huaa");
      })
      return p4;

      // Throwing error so next 'then' goes to error handler
      // throw new Error("something went wrong..!!");
    }
  )
  .then(
    // Success Handler of 2nd .then()
    function onSuccessAgain(val) {
      console.log("Under then - 2");
      val = "second then success";
      console.log(val);
    },

    // Error Handler of 2nd .then()
    function onErrorSecond(error) {
      console.log("Under error - 2");

      console.log("I am 2nd err block");
      console.log(error);
    }
  )
  .catch((err) => {
    console.log("I am in catch");
    console.log(err);
  }).finally((val) => {
    console.log("Last is finally block");
  })

console.log("End");

// Log the initial state of the Promise (will be pending at first)
// console.log("p2 :", p2);