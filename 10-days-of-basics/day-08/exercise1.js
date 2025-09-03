// Exercise 1: Basic Pattern Printing

// TODO: Print triangle pattern
// 1. Use console.log to print "Triangle pattern:"
console.log("Printing Triangle");
// 2. Use nested for loops to create a triangle pattern
//    - Outer loop: iterate from 1 to 5 (rows)
//    - Inner loop: iterate from 1 to current row number (columns)
//    - Create a string with "*" for each column
//    - Use console.log to print the string for e
for ( var i = 1; i <= 5; i++) {
 for ( var j = 1; j <= i; j++) {
    console.log("*")
 }
 console.log("\n")
}
// TODO: Print square pattern
// 1. Use console.log to print a blank line
console.log("Printing square");
// 2. Use console.log to print "Square pattern:"
// 3. Use nested for loops to create a square pattern
//    - Outer loop: iterate from 1 to 5 (rows)
//    - Inner loop: iterate from 1 to 5 (columns)
//    - Create a string with "*" for each column
//    - Use console.log to print the string for each row
for (var i =1; i <= 5; i++) {
    for ( var j = 1; j <= 5; j++) {
        console.log("*");
    }
    console.log("\n")
}

// Expected output:
// Triangle pattern:
// *
// **
// ***
// ****
// *****
//
// Square pattern:
// *****
// *****
// *****
// *****
// *****
