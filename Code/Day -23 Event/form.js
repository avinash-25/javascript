//! Enhanced Form Handling


const form = document.querySelector("form");
const inputs = document.querySelectorAll("input[required]");

// Real-time validation for all required inputs
inputs.forEach(input => {
    input.addEventListener("input", function () {
        validateInput(this);
    });

    input.addEventListener("blur", function () {
        validateInput(this);
    });
});

function validateInput(input) {
    const value = input.value.trim();

    // Remove previous error styling
    input.style.borderColor = "";

    if (!value) {
        input.style.borderColor = "red";
        return false;
    }

    // Email specific validation
    if (input.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            input.style.borderColor = "red";
            return false;
        }
    }

    // Password specific validation
    if (input.type === "password" && value.length < 6) {
        input.style.borderColor = "red";
        return false;
    }

    input.style.borderColor = "green";
    return true;
}

// Form submission with validation
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;
        inputs.forEach(input => {
            if (!validateInput(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            const formData = new FormData(this);
            console.log("Form Data:");
            for (let [key, value] of formData.entries()) {
                console.log(`${key}:${value}`);
            }
            alert("Form submitted successfully!");
        } else {
            alert("Please fix the errors before submitting");
        }
    });

    // Reset button handling
    const resetBtn = document.querySelector("button[type='reset'], button:last-child");
    if (resetBtn && resetBtn.textContent.toLowerCase().includes("reset")) {
        resetBtn.addEventListener("click", function () {
            inputs.forEach(input => {
                input.style.borderColor = "";
            });
        });
    }
}