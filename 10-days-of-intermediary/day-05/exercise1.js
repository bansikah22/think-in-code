const fs = require('fs');

console.log("=== Day 5: File I/O & Data Processing ===\n");

console.log("Exercise: Build a Simple Data Processing Pipeline");
console.log("===============================================");

// TODO: Implement the file processing methods below
// Then uncomment this demo code to test your implementations

/*
// Create sample input file
createSampleFile();

console.log("Reading data from input file...");
const numbers = readNumbersFromFile("numbers.txt");

if (numbers) {
    console.log("Data loaded successfully!");
    
    console.log("\nProcessing data:");
    const total = numbers.length;
    const sum = calculateSum(numbers);
    const average = calculateAverage(numbers);
    const evenNumbers = filterEvenNumbers(numbers);
    const oddNumbers = filterOddNumbers(numbers);
    
    console.log("- Total numbers:", total);
    console.log("- Sum:", sum);
    console.log("- Average:", average);
    console.log("- Even numbers:", evenNumbers);
    console.log("- Odd numbers:", oddNumbers);
    
    console.log("\nWriting results to output file...");
    const success = writeResultsToFile("results.txt", total, sum, average, evenNumbers, oddNumbers);
    
    if (success) {
        console.log("Results saved successfully!");
        
        console.log("\nSummary:");
        console.log("- Input file: numbers.txt (" + total + " lines)");
        console.log("- Output file: results.txt");
        console.log("- Processing completed successfully");
    }
}
*/

// TODO: Create a sample input file with numbers
function createSampleFile() {
    // TODO: Create a file named "numbers.txt" with numbers 1-10
    // Hint: Use fs.writeFileSync to write to file
}

// TODO: Read numbers from a file
function readNumbersFromFile(filename) {
    // TODO: Read numbers from the specified file
    // Hint: Use fs.readFileSync to read file
    // Return null if file cannot be read
    return [];
}

// TODO: Calculate sum of numbers
function calculateSum(numbers) {
    // TODO: Calculate and return the sum of all numbers
    return 0;
}

// TODO: Calculate average of numbers
function calculateAverage(numbers) {
    // TODO: Calculate and return the average of all numbers
    return 0.0;
}

// TODO: Filter even numbers
function filterEvenNumbers(numbers) {
    // TODO: Return a new array containing only even numbers
    return [];
}

// TODO: Filter odd numbers
function filterOddNumbers(numbers) {
    // TODO: Return a new array containing only odd numbers
    return [];
}

// TODO: Write results to output file
function writeResultsToFile(filename, total, sum, average, evenNumbers, oddNumbers) {
    // TODO: Write processing results to the specified file
    // Hint: Use fs.writeFileSync to write formatted results
    // Return true if successful, false otherwise
    return false;
}

console.log("\nTODO: Implement the file processing methods above");
console.log("Then uncomment the demo code to test your implementations.");

// EXPECTED OUTPUT - When you run your completed implementation, you should see:
console.log("\n=== EXPECTED OUTPUT ===");
console.log("When you run your completed implementation, you should see:");
console.log();
console.log("=== Day 5: File I/O & Data Processing ===");
console.log();
console.log("Exercise: Build a Simple Data Processing Pipeline");
console.log("===============================================");
console.log();
console.log("Reading data from input file...");
console.log("Data loaded successfully!");
console.log();
console.log("Processing data:");
console.log("- Total numbers: 10");
console.log("- Sum: 55");
console.log("- Average: 5.5");
console.log("- Even numbers: [2, 4, 6, 8, 10]");
console.log("- Odd numbers: [1, 3, 5, 7, 9]");
console.log();
console.log("Writing results to output file...");
console.log("Results saved successfully!");
console.log();
console.log("Summary:");
console.log("- Input file: numbers.txt (10 lines)");
console.log("- Output file: results.txt");
console.log("- Processing completed successfully");

// TODO: Test your implementations
// Make sure:
// - File reading works correctly
// - Data processing calculations are accurate
// - File writing creates readable output
// - Error handling works for missing files
