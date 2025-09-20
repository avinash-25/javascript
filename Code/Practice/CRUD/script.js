const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");
const boxContainer = document.getElementById("boxContainer");
const countSpan = document.getElementById("count");

let boxCount = 0;

// Add Box
addBtn.addEventListener("click", () => {
    const name = document.getElementById("boxName").value.trim();
    const color = document.getElementById("boxColor").value.trim();

    if (!name || !color) {
        alert("Please enter both name and hex color!");
        return;
    }

    // Create new box
    const newBox = document.createElement("div");
    newBox.className = "Box";
    newBox.textContent = name;
    newBox.style.backgroundColor = color;

    boxContainer.appendChild(newBox);

    // Update count
    boxCount++;
    countSpan.textContent = boxCount;

    // Clear input
    document.getElementById("boxName").value = "";
    document.getElementById("boxColor").value = "";
});

// Reset all
resetBtn.addEventListener("click", () => {
    boxContainer.innerHTML = "";
    boxCount = 0;
    countSpan.textContent = boxCount;
});



// const btn = document.getElementsByClassName("Box B-1")[0];
// const contain = document.getElementsByClassName("container")[0]
// btn.textContent = "Namste Developers";

// contain.append(btn);

// function myFunction() {
//     const btn = document.getElementsByClassName("Box-1");

//     btn.style.color = "red";
// }