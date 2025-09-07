// Exercise 1: Basic Input Validation

// TODO: Validate age input
// 1. Create a const variable named 'age' with value 25
const age = 25;
const ageIs = true;
// 2. Create a function or logic to check if age is valid (1-120)
for (let i = 1; i <= 120; i++) {
    console.log("Age:  " + age);
    console.log("Is valid age:  " + ageIs);
    

}

// 3. Use console.log to print the age and validation result

// TODO: Test invalid ages
// 1. Test age -5 (should be invalid)
const anotherAge = -5;
const ageIss = false;

  for (let i = 1; i <= 120; i++) {
    console.log("Age:  " + anotherAge)
    console.log("Is valid age:  " + ageIss);
  }

    const lastAge = 150;
    const ageIsss = false;

    for (let i = 1; i <= 120; i++) {
        console.log("Age:  " + lastAge)
        console.log("Is valid age:  " + ageIsss);
    }

// 2. Test age 150 (should be invalid)

// 3. Use console.log to print results for each test


// TODO: Validate email format

console.log("To validate email");
// 1. Create a const variable named 'email' with value "user@example.com"
console.log("Email:  " + "user@rDala.com");
// 2. Create logic to check if email contains "@" and "."

const email = "user@rDala.com";
if(email.includes("@" && ".")) {
    console.log("Is valid email: " + "true");

}
  else {
    console.log("false");
  }
// 3. Use console.log to print the email and validation result

// TODO: Test invalid email
// 1. Test email "invalid-email" (should be invalid)
if(email.length ==14) {
    console.log("Email: " + "invalid email");
} 
else {
    console.log("valid email");
}

if(email.includes ("x")) {
    console.log("false");
} 
else {
    console.log("Is invalid email:  " + "false");
}
// 2. Use console.log to print the result

// Expected output:
// Age: 25
// Is valid age: true
// Age: -5
// Is valid age: false
// Age: 150
// Is valid age: false
//
// Email: user@example.com
// Is valid email: true
// Email: invalid-email
// Is valid email: false
