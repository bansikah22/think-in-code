// Exercise 1: Basic If Statements

// TODO: Declare a number
// 1. Create a const variable named 'number' and assign it the value 15
const number =15;

// TODO: Check various conditions
// 1. Check if number is positive (> 0) and store result in 'isPositive'
const isPositive = number > 0 ? true : false;
// 2. Check if number is even (use modulo operator %) and store result in 'isEven'
const isEven = number % 2 == 0 ? true : false;
// 3. Check if number is greater than 10 and store result in 'isGreaterThan10'
const isGreaterThan10 = number > 10 ? true : false;
// 4. Check if number is less than 20 and store result in 'isLessThan20'
const isLessThan20 = number < 20 ? true : false;

// TODO: Display results

// 1. Use console.log to print "Number: " followed by the number
console.log('Number:  ' + number);
// 2. Use console.log to print "Is positive: " followed by isPositive
console.log('Is positive:  ' + isPositive);
// 3. Use console.log to print "Is even: " followed by isEven
console.log('Is even:  ' + isEven);
// 4. Use console.log to print "Is greater than 10: " followed by isGreaterThan10
console.log('Is greater than 10:  ' + isGreaterThan10);
// 5. Use console.log to print "Is less than 20: " followed by isLessThan20
console.log('Is less than 20:  ' + isLessThan20);

// Expected output:
// Number: 15
// Is positive: true
// Is even: false
// Is greater than 10: true
// Is less than 20: true
