function appendNumber(number) {
    document.getElementById("result").value += number;
}

function appendOperator(operator) {
    document.getElementById("result").value += operator;
}

function appendDecimal(decimal) {
    const result = document.getElementById("result").value;
    if (result === "") {
        document.getElementById("result").value = "0" + decimal;
    } else if (!result.includes(decimal)) {
        document.getElementById("result").value += decimal;
    }
}

function clearResult() {
    document.getElementById("result").value = "";
}

function backspace() {
    let result = document.getElementById("result").value;
    result = result.slice(0, -1);
    document.getElementById("result").value = result;
}

function calculateResult() {
    let result = document.getElementById("result").value;
    try {
        let answer = eval(result);
        document.getElementById("result").value = answer;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        appendNumber(key);
    } else if (/[\+\-\*\/]/.test(key)) {
        appendOperator(key);
    } else if (key === ".") {
        appendDecimal(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        backspace();
    }
});
