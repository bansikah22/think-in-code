// Exercise 1: Basic For Loop

// TODO: Use a for loop to count from 1 to 5
// 1. Use console.log to print "Counting from 1 to 5:"
console.log('Counting from 1 to 5');
// 2. Use a for loop to iterate from 1 to 5
let i=1;
for (let i=1;   i <= 5; i++) { 
// 3. Inside the loop, use console.log to print each number
console.log(i);

}
// TODO: Calculate the sum of numbers
// 1. Create a variable to store the sum (initialize to 0)
let sum =0;
// 2. Use another for loop to iterate from 1 to 5
for (let i=1; i <= 5; i++) {
    sum += i;
}
// 3. Add each number to the sum
// 4. Use console.log to print "Sum of numbers: " followed by the sum
console.log('Sum of numbers:  ' + sum);
// Expected output:
// Counting from 1 to 5:
// 1
// 2
// 3
// 4
// 5
// Sum of numbers: 15
