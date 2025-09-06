console.log("=== Day 4: Functional Programming - Higher-Order Functions ===\n");

console.log("Exercise: Build a Functional Programming Utility Library");
console.log("=====================================================");

// TODO: Implement the higher-order functions below
// Then uncomment this demo code to test your implementations

/*
// Sample data
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Sample Data:");
console.log("Original array:", numbers);

console.log("\nTesting Higher-Order Functions:");

// 1. Map Function (Double all numbers)
const doubled = map(numbers, x => x * 2);
console.log("\n1. Map Function (Double all numbers):");
console.log("Original:", numbers);
console.log("Doubled:", doubled);

// 2. Filter Function (Even numbers only)
const evenNumbers = filter(numbers, x => x % 2 === 0);
console.log("\n2. Filter Function (Even numbers only):");
console.log("Original:", numbers);
console.log("Even numbers:", evenNumbers);

// 3. Reduce Function (Sum all numbers)
const sum = reduce(numbers, 0, (acc, x) => acc + x);
console.log("\n3. Reduce Function (Sum all numbers):");
console.log("Original:", numbers);
console.log("Sum:", sum);

// 4. ForEach Function (Print each element)
console.log("\n4. ForEach Function (Print each element):");
console.log("Elements:");
forEach(numbers, x => console.log("  " + x));

// Combining Functions
const evenDoubled = map(filter(numbers, x => x % 2 === 0), x => x * 2);
const sumEven = reduce(filter(numbers, x => x % 2 === 0), 0, (acc, x) => acc + x);
console.log("\nCombining Functions:");
console.log("Even numbers doubled:", evenDoubled);
console.log("Sum of even numbers:", sumEven);
*/

// TODO: Implement map function
// Transform each element using the callback function
function map(array, callback) {
    // TODO: Implement map function
    // Hint: Create a new array and apply callback to each element
}

// TODO: Implement filter function
// Return elements that pass the callback test
function filter(array, callback) {
    // TODO: Implement filter function
    // Hint: Create a new array and add elements that pass the test
}

// TODO: Implement reduce function
// Combine all elements into a single value
function reduce(array, initialValue, callback) {
    // TODO: Implement reduce function
    // Hint: Start with initial value and combine with each element
}

// TODO: Implement forEach function
// Execute callback for each element
function forEach(array, callback) {
    // TODO: Implement forEach function
    // Hint: Loop through array and call callback for each element
}

console.log("\nTODO: Implement the higher-order functions above");
console.log("Then uncomment the demo code to test your implementations.");

// EXPECTED OUTPUT - When you run your completed implementation, you should see:
console.log("\n=== EXPECTED OUTPUT ===");
console.log("When you run your completed implementation, you should see:");
console.log();
console.log("=== Day 4: Functional Programming - Higher-Order Functions ===");
console.log();
console.log("Exercise: Build a Functional Programming Utility Library");
console.log("=====================================================");
console.log();
console.log("Sample Data:");
console.log("Original array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
console.log();
console.log("Testing Higher-Order Functions:");
console.log();
console.log("1. Map Function (Double all numbers):");
console.log("Original: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
console.log("Doubled: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]");
console.log();
console.log("2. Filter Function (Even numbers only):");
console.log("Original: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
console.log("Even numbers: [2, 4, 6, 8, 10]");
console.log();
console.log("3. Reduce Function (Sum all numbers):");
console.log("Original: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
console.log("Sum: 55");
console.log();
console.log("4. ForEach Function (Print each element):");
console.log("Elements:");
console.log("  1");
console.log("  2");
console.log("  3");
console.log("  4");
console.log("  5");
console.log("  6");
console.log("  7");
console.log("  8");
console.log("  9");
console.log("  10");
console.log();
console.log("Combining Functions:");
console.log("Even numbers doubled: [4, 8, 12, 16, 20]");
console.log("Sum of even numbers: 30");

// TODO: Test your implementations
// Make sure:
// - All functions work correctly with the sample data
// - Functions can be combined (map + filter, filter + reduce)
// - Original data remains unchanged
// - Functions handle different data types
