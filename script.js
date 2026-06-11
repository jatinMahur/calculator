const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function percentage() {
    try {
        display.value = eval(display.value) / 100;
    } catch {
        display.value = "Error";
    }
}

function squareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        display.value = "Error";
    }
}

function power() {
    try {
        let value = eval(display.value);
        display.value = Math.pow(value, 2);
    } catch {
        display.value = "Error";
    }
}

/* Trigonometric Functions
   Input is assumed in degrees
*/

function calculateTrig(type) {
    try {
        let angle = eval(display.value);

        let radians = angle * (Math.PI / 180);

        switch(type) {
            case "sin":
                display.value = Math.sin(radians).toFixed(8);
                break;

            case "cos":
                display.value = Math.cos(radians).toFixed(8);
                break;

            case "tan":
                display.value = Math.tan(radians).toFixed(8);
                break;
        }
    } catch {
        display.value = "Error";
    }
}

/* Log Base 10 */
function calculateLog() {
    try {
        display.value = Math.log10(eval(display.value));
    } catch {
        display.value = "Error";
    }
}

/* Natural Log */
function calculateLn() {
    try {
        display.value = Math.log(eval(display.value));
    } catch {
        display.value = "Error";
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}