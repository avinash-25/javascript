
const aboutButton = document.querySelector(".about");
const logicButton = document.querySelector(".logic");

aboutButton.addEventListener("click", async () => {
  const obj = await import("./about.js");
  // const about = obj.default;
  obj.about();
})


logicButton.addEventListener("click", async () => {
  const obj = await import("./logic.js");
  obj.logic();
})