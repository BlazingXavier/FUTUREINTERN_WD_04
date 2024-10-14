function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Caution: eval can be dangerous with untrusted input
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
