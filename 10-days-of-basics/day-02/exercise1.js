// Exercise 1: Array Creation and Access

// TODO: Create an array of numbers
// 1. Create a const variable named 'numbers' and assign it an array with values 1, 2, 3, 4, 5
const numbers =[1 ,  2 ,  3 ,  4 ,  5];
const firstNumber =numbers[0];
const lastNumber =numbers[numbers.length - 1];
const thirdNumber =numbers[2];
const arrayLength =numbers.length;
// TODO: Access array elements
// 1. Use console.log to print the entire array
console.log('Numbers: ' +  numbers);
// 2. Use console.log to print the first element (index 0)
console.log('First number: ' + numbers[0]);
// 3. Use console.log to print the last element (use numbers.length - 1)
console.log('Last number : '  + lastNumber);
// 4. Use console.log to print the third element (index 2)
console.log('Third number: ' + numbers[2]);
// 5. Use console.log to print the length of the array
console.log('Array Length: ' + arrayLength);
// Expected output:
// Numbers: [ 1, 2, 3, 4, 5 ]
// First number: 1
// Last number: 5
// Third number: 3
// Array length: 5