// Exercise 1: String Creation and Basic Operations

// TODO: Create strings
// 1. Create a const variable named 'firstName' and assign it the value "John"
const firstName =('John');
// 2. Create a const variable named 'lastName' and assign it the value "Doe"
const lastName =('Doe');
// TODO: Perform basic operations
// 1. Concatenate firstName and lastName with a space in between, store in 'fullName'
const fullName =firstName + " " + lastName;
// 2. Get the length of fullName and store in 'nameLength'
const nameLength =fullName.length;
// 3. Get the first character of fullName and store in 'firstChar'
const firstChar =fullName[0];
// 4. Get the last character of fullName and store in 'lastChar'
const lastChar =fullName[fullName.length - 1];

// TODO: Display results
// 1. Use console.log to print "First name: " followed by firstName
console.log('First name:  ' + firstName);
// 2. Use console.log to print "Last name: " followed by lastName
console.log('Last name:  ' + lastName);
// 3. Use console.log to print "Full name: " followed by fullName
console.log('Full Name:  ' + fullName);
// 4. Use console.log to print "Name length: " followed by nameLength
console.log('Name length:  ' + nameLength);
// 5. Use console.log to print "First character: " followed by firstChar
console.log('First character:  ' + firstChar)
// 6. Use console.log to print "Last character: " followed by lastChar
console.log('Last character:  ' + lastChar)

// Expected output:
// First name: John
// Last name: Doe
// Full name: John Doe
// Name length: 8
// First character: J
// Last character: e
