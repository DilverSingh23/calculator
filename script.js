const display = document.getElementById("display");

function appendToDisplay (input) {
    display.value += input;
}

function clearDisplay () {
    display.value = '';
}

function calculate () {
    let ans = eval(display.value);
    display.value = ans;
}
