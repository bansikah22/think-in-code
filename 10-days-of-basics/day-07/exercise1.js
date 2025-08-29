// Exercise 1: String Case Operations

// TODO: Create a string and perform case operations

// 1. Create a const variable named 'text' with value "Hello World"
const text = ('Hello World');
// 2. Use console.log to print the original text
console.log('Original:  ' + text);

// TODO: Change case using string methods
// 1. Convert to uppercase using toUpperCase() and store in 'uppercase'
let upperCase = text.toUpperCase();
// 2. Convert to lowercase using toLowerCase() and store in 'lowercase'
let lowercase = text.toLowerCase();
//Create title case (first letter of each word uppercase) and store in 'titleCase'
var titleCase = text;
// 4. Create reversed case (swap upper and lower) and store in 'reversedCase'
function reversalCase(str) {
    let reversalCaseString = '';
    for (let i =0; i < str.length; i++) {
        const char = str[i];
        if (char === char.toUpperCase()) {
            reversalCaseString += char.toLowerCase();
        } else {
     reversalCaseString += char.toUpperCase();
        }
        }
        return reversalCaseString;
    }
 const reversedCase = text;
 const newString = reversalCase(text);


// TODO: Display results
// 1. Use console.log to print "Uppercase: " followed by uppercase
console.log('Uppercase:  ' + upperCase);
// 2. Use console.log to print "Lowercase: " followed by lowercase
console.log('Lowercase:  ' + lowercase);
// 3. Use console.log to print "Title case: " followed by titleCase
console.log('Title case:  ' + titleCase);
// 4. Use console.log to print "Reversed case: " followed by reversedCase
console.log('Reversed case:  ' + newString);

// Expected output:
// Original: Hello World
// Uppercase: HELLO WORLD
// Lowercase: hello world
// Title case: Hello World
// Reversed case: hELLO wORLD
