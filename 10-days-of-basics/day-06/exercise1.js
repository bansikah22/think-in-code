// Exercise 1: Adding and Removing Elements

// TODO: Create and manipulate an array
// 1. Create a const variable named 'fruits' and assign it an array with initial values "apple", "banana"
const fruits =[' apple ', '  banana '];
// 2. Use console.log to print the original array
console.log('Original array:  ' + fruits);
// TODO: Add elements
// 1. Add "orange" to the end of the array using push()
fruits.push(' orange ');
// 2. Use console.log to print the array after adding orange
console.log('After adding oringe:  ' + fruits);
// 3. Add "grape" at the beginning using unshift()
let newLength = fruits.unshift(' grape ');
// 4. Use console.log to print the array after adding grape
console.log('After adding grape at the biginning:  ' + fruits);

// TODO: Remove elements
// 1. Remove the last element using pop()
fruits.pop(' orange ');
// 2. Use console.log to print the array after removing last element
console.log('After removing the last element:  ' + fruits);
// 3. Remove the first element using shift()
fruits.shift('grape');
// 4. Use console.log to print the array after removing first element
console.log('After removing the first element:  ' + fruits);

// Expected output:
// Original array: [ 'apple', 'banana' ]
// After adding orange: [ 'apple', 'banana', 'orange' ]
// After adding grape at beginning: [ 'grape', 'apple', 'banana', 'orange' ]
// After removing last element: [ 'grape', 'apple', 'banana' ]
// After removing first element: [ 'apple', 'banana' ]
