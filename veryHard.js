
//prompts user for the numbers and operator they want to calculate
let x = prompt("Welcome to my calculator! please enter your first number: ");
let op = prompt(" Now choose an operator (+, -, /, *) : ");
let y = prompt("Finally, enter your second number: ");

x = parseFloat(x);
y = parseFloat(y);
//adds two numbers
function add(n0, n1) {
    return n0 + n1
}

//subtracts two numbers
function subtract(n0, n1) {
    return n0 - n1;
}

//multiplies two numbers
function multiply(n0, n1) {
    return n0 * n1;
}

//divides two numbers
function divide(n0, n1) {
    return n0 / n1;
}
//calculates the results based on the operator and displays those results

if (op == '+') {

    alert(`${x} + ${y} = ${add(x, y)}`);

} else if (op == '-') {

    alert(`${x} - ${y} = ${subtract(x, y)}`);

} else if (op == '/') {

    alert(`${x} / ${y} = ${divide(x, y)}`);

} else if (op == '*') {

    alert(`${x} * ${y} = ${multiply(x, y)}`);
}