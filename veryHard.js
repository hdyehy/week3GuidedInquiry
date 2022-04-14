
//prompts user for the numbers and operator they want to calculate
let x = prompt("Welcome to my calculator! please enter your first number: ")
let op = prompt(" Now choose an operator (+, -, /, *) : ")
let y = prompt("Finally, enter your second number: ")

//calculates the results based on the operator and displays those results

if (op == '+') {
    let calc = x + y
    alert(`${x} + ${y} = ${calc}`)

} else if (op == '-') {
    let calc = x - y
    alert(`${x} - ${y} = ${calc}`)

} else if (op == '/') {
    let calc = x / y
    alert(`${x} / ${y} = ${calc}`)

} else if (op == '*') {
    let calc = x * y
    alert(`${x} * ${y} = ${calc}`)
}