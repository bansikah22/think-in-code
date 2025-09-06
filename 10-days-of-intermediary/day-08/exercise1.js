console.log("=== Day 8: Code Organization & Modularity ===\n");

console.log("Exercise: Build a Modular Calculator System");
console.log("==========================================");

// TODO: Build a modular calculator system with clear separation of concerns
// This exercise will help you understand:
// 1. How to separate different responsibilities into different classes
// 2. How to use interfaces for loose coupling
// 3. How to organize code in a modular way

/*
// Example usage of your completed system:
const calculator = new Calculator();

// Basic operations
console.log("Basic Operations:");
console.log("10 + 5 = " + calculator.add(10, 5));
console.log("20 - 7 = " + calculator.subtract(20, 7));
console.log("6 * 8 = " + calculator.multiply(6, 8));
console.log("100 / 4 = " + calculator.divide(100, 4));

// Advanced operations
console.log("\nAdvanced Operations:");
console.log("2^8 = " + calculator.power(2, 8));
console.log("√16 = " + calculator.squareRoot(16));
console.log("log(100) = " + calculator.logarithm(100));

// The system demonstrates:
// - Loose coupling between operations and calculator
// - High cohesion within each operation class
// - Easy to extend with new operation types
*/

// TODO: Implement MathOperations interface
// This interface should define the contract for mathematical operations
class MathOperations {
    // TODO: Add method signatures for basic operations (add, subtract, multiply, divide)
    // TODO: Add method signatures for advanced operations (power, squareRoot, logarithm)
}

// TODO: Implement BasicOperations class
// This class should implement MathOperations and handle basic arithmetic
class BasicOperations extends MathOperations {
    // TODO: Implement all basic arithmetic operations
    // TODO: Add proper error handling (e.g., division by zero)
}

// TODO: Implement AdvancedOperations class
// This class should implement MathOperations and handle advanced math
class AdvancedOperations extends MathOperations {
    // TODO: Implement power, square root, and logarithm operations
    // TODO: Add proper error handling for invalid inputs
}

// TODO: Implement Calculator class
// This class should use the operation classes to perform calculations
class Calculator {
    constructor() {
        // TODO: Add constructor to initialize operation objects
        // TODO: The calculator should not know how operations are implemented internally
    }
    
    // TODO: Implement methods that delegate to the appropriate operation class
    // TODO: Add add, subtract, multiply, divide, power, squareRoot, logarithm methods
}

// TODO: Test your modular calculator system
// Make sure:
// - Basic operations work correctly
// - Advanced operations work correctly
// - Error handling works properly
// - You can easily add new operation types
