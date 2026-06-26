let display = document.getElementById("display");

// Add value
function append(value) {
    display.value += value;
}

// Clear
function clearDisplay() {
    display.value = "";
}

// Delete last
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Dark/Light mode
function toggleTheme() {
    document.body.classList.toggle("light");
}

// Keyboard support
document.addEventListener("keydown", function(e) {
    if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
        append(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        deleteLast();
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});