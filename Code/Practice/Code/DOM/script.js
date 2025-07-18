// 1. Target elements
document.getElementById("change-text-btn").addEventListener("click", function () {
  const targetPara = document.querySelector(".target");
  targetPara.textContent = "Text changed via DOM!";
});

// 2 & 3. Create and insert elements
document.getElementById("add-item").addEventListener("click", () => {
  const input = document.getElementById("user-input").value.trim();
  if (input) {
    const li = document.createElement("li");
    li.textContent = input;
    document.getElementById("item-list").appendChild(li);
  }
});

// 4. Insert and remove attributes
document.getElementById("toggle-attr").addEventListener("click", () => {
  const img = document.getElementById("demo-img");
  if (img.hasAttribute("alt")) {
    img.removeAttribute("alt");
  } else {
    img.setAttribute("alt", "Demo Image");
  }
});

// 5. Traverse HTML nodes
document.getElementById("highlight-second").addEventListener("click", () => {
  const ul = document.getElementById("traverse-list");
  const secondItem = ul.children[1]; // child index starts from 0
  secondItem.classList.toggle("highlight");
});

// 6. Remove HTML element
document.getElementById("remove-btn").addEventListener("click", (e) => {
  e.target.remove();
});
