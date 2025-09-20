const btn = document.querySelector("button");
const div = document.querySelector(".container");
const body = document.body;

/**
 * !Light and Dark Mode
 */
btn.addEventListener("click", function () {
  const x = btn.classList.contains("light")

  if (x) {
    //Apply dark mode
    body.classList.replace("light", "dark");
    btn.classList.replace("light", "dark");
    div.classList.replace("light", "dark");
    btn.textContent = "Light Mode";
  } else {
    body.classList.replace("dark", "light");
    btn.classList.replace("dark", "light");
    div.classList.replace("dark", "light");
    btn.textContent = "Dark Mode";
  }
  // btn.classList.replace("light", "dark");
  // div.classList.replace("light", "dark");
  // body.classList.replace("light", "dark");

  // const x=body.classList.contains("dark");
  // console.log("x :",x)
});

/**
 * !classList.add()
 * !classList.remove()
 */

/**
 * !Most Important Method
 * !classList.toggle()
 */
// btn.addEventListener("click", () => {
//   div.classList.toggle("gradient");
//   const x = div.classList.contains(".gradient");
//   if (x) {
//     div.classList.remove("gradient");
//   } else {
//     div.classList.add("gradient");
//   }
// });

/**
 * !classList.forEach()
 */
//

/**
 * !classList.entries()
 * !classList.values()
 * !classList.keys()
 */
// btn.addEventListener("click", () => {
//   const x1 = Array.from(div.classList.entries());
//   const x2 = Array.from(div.classList.values());
//   const x3 = Array.from(div.classList.keys());
//   console.log("classList entries: ", x1);
//   console.log("container Values: ", x2);
//   console.log("container keys: ", x3);

//   console.log(div.classList.supports("container-light"));
// //   console.log(div.classList.item(0));
// });