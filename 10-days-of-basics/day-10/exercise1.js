// Exercise 1: Basic Calculator Operations

// Note: For JavaScript, we'll simulate user input using predefined values
// In a real application, you would use prompt() or readline interface

// TODO: Create a simple calculator
// 1. Create variables to simulate user input (firstNumber, secondNumber, operation)
const errorMessage ="Division by zero is not allowed";

const error ="Invalid operator";

function calculate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "*":
            return firstNumber * secondNumber;

        case "-":
            return firstNumber - secondNumber;
         
        case "+":
            return firstNumber + secondNumber;
        
        case "/":

        if (secondNumber  !== 0)    {
            return firstNumber / secondNumber;
        }
        else {
            console.log("Error:  " + errorMessage);
        }
         default:
            console.log("Error: " + error);
    }
}
// 2. Use console.log to print the calculator header

// TODO: Implement the calculator logic
// 1. Create a function that takes two numbers and an operation
// 2. Use if-else or switch statement to handle +, -, *, /
// 3. For division, check if second number is not zero
// 4. Return the result of the calculation

// TODO: Test the calculator
// 1. Test with firstNumber = 10, secondNumber = 5f, operation = "+"
// 2. Display the result in format: "Result: num1 op num2 = result"
// 3. Test with firstNumber = 20, secondNumber = 4, operation = "*"
// 4. Display the result

console.log(calculate(10, 5, "+"));
console.log(calculate(20, 2, "*"));
console.log(calculate(2, 0, "/"));
console.log(calculate(2, 2, "%"));

// TODO: Handle error cases
// 1. Test division by zero and display appropriate error message
// 2. Test invalid operations and display error message

// Expected output:
// Simple Calculator
// ================
// Result: 10 + 5 = 15
// Result: 20 * 4 = 80
// Error: Division by zero is not allowed
// Error: Invalid operation
