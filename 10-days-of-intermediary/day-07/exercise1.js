console.log("=== Day 7: Error Handling & Debugging ===\n");

// Exercise 1: Custom Exception Classes
console.log("Exercise 1: Custom Exception Classes");
console.log("====================================");

// TODO: Create custom exception classes
// 1. Create InsufficientFundsException class
// 2. Create InvalidAccountException class
// 3. Create InvalidAmountException class
// 4. Test exception throwing and catching

// Example usage (implement the classes first):
/*
class InsufficientFundsException extends Error {
    // TODO: Add constructor with message
}

class InvalidAccountException extends Error {
    // TODO: Add constructor with message
}

class InvalidAmountException extends Error {
    // TODO: Add constructor with message
}

class BankAccount {
    // TODO: Add constructor with validation
    // TODO: Add withdraw method with exception handling
    // TODO: Add deposit method with exception handling
}

const account = new BankAccount("12345", 500.0);

try {
    account.withdraw(1000.0);
} catch (error) {
    if (error instanceof InsufficientFundsException) {
        console.log("Exception caught:", error.message);
    }
}

try {
    account.deposit(-100.0);
} catch (error) {
    if (error instanceof InvalidAmountException) {
        console.log("Exception caught:", error.message);
    }
}

try {
    const invalidAccount = new BankAccount("-12345", 100.0);
} catch (error) {
    if (error instanceof InvalidAccountException) {
        console.log("Exception caught:", error.message);
    }
}
*/

// Exercise 2: Input Validation
console.log("\nExercise 2: Input Validation");
console.log("=============================");

// TODO: Implement input validation methods
// 1. validateUsername method
// 2. validateEmail method
// 3. validateAge method
// 4. validatePassword method

// Example usage:
/*
const usernames = ["john_doe", "jo", "user123", "admin"];
const emails = ["john@example.com", "invalid-email", "user@company.org", "test"];
const ages = [25, 15, 30, 150];
const passwords = ["MyPass123", "weak", "SecurePass456", "123"];

for (let i = 0; i < usernames.length; i++) {
    console.log("Registration attempt " + (i + 1) + ":");
    console.log("Username:", usernames[i], "-", validateUsername(usernames[i]));
    console.log("Email:", emails[i], "-", validateEmail(emails[i]));
    console.log("Age:", ages[i], "-", validateAge(ages[i]));
    console.log("Password:", passwords[i], "-", validatePassword(passwords[i]));
    console.log();
}
*/

// Exercise 3: Exception Handling with Logging
console.log("Exercise 3: Exception Handling with Logging");
console.log("===========================================");

// TODO: Implement calculator with error handling and logging
// 1. Add try-catch blocks for division by zero
// 2. Implement logging for all operations
// 3. Handle invalid input gracefully

// Example usage:
/*
class Calculator {
    // TODO: Add add, subtract, multiply, divide methods
    // TODO: Add logging for all operations
    // TODO: Handle division by zero with exception
}

const calculator = new Calculator();

try {
    console.log("10 + 5 =", calculator.add(10, 5));
    console.log("20 / 0 =", calculator.divide(20, 0));
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("15 * 3 =", calculator.multiply(15, 3));
    console.log("100 / 4 =", calculator.divide(100, 4));
} catch (error) {
    console.log("Unexpected error:", error.message);
}
*/

// TODO: Implement validation methods
function validateUsername(username) {
    // TODO: Check if username is 3-20 characters and alphanumeric
    return false;
}

function validateEmail(email) {
    // TODO: Check if email has valid format (contains @ and .)
    return false;
}

function validateAge(age) {
    // TODO: Check if age is between 18 and 120
    return false;
}

function validatePassword(password) {
    // TODO: Check if password is at least 8 characters with uppercase, lowercase, and digit
    return false;
}

console.log("\n=== Exercise templates ready for implementation ===");
console.log("Uncomment the TODO sections and implement the required classes and methods.");
console.log("Test your implementations with the provided example usage.");
