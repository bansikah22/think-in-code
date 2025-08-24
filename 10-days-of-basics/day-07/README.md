# Day 7: String Methods and Formatting

## Concept Explanation
String methods provide powerful ways to manipulate, search, and format text. They help you process and transform strings efficiently.

**Key String Methods:**
- **length()**: Get string length
- **charAt()**: Get character at specific position
- **substring()/slice()**: Extract portions of strings
- **toUpperCase()/toLowerCase()**: Change case
- **trim()**: Remove whitespace
- **replace()**: Replace text
- **split()**: Convert string to array
- **join()**: Convert array to string
- **indexOf()/includes()**: Search for text
- **startsWith()/endsWith()**: Check string boundaries

## Exercise 1: String Case Operations

**Problem**: Change the case of strings using various methods.

**Expected Output**:
```
Original: Hello World
Uppercase: HELLO WORLD
Lowercase: hello world
Title case: Hello World
Reversed case: hELLO wORLD
```

## Exercise 2: String Search and Replace

**Problem**: Find and replace text within strings.

**Expected Output**:
```
Text: The quick brown fox jumps over the lazy dog
Contains "fox": true
Contains "cat": false
Position of "brown": 10
Replaced "fox" with "cat": The quick brown cat jumps over the lazy dog
Replaced all "o" with "0": The quick br0wn f0x jumps 0ver the lazy d0g
```

## Exercise 3: String Splitting and Joining

**Problem**: Split strings into arrays and join arrays back into strings.

**Expected Output**:
```
Original: apple,banana,orange,grape
Split by comma: [apple, banana, orange, grape]
Joined with dash: apple-banana-orange-grape
Split by space: [apple,banana,orange,grape]
```

## Exercise 4: String Trimming and Padding

**Problem**: Remove whitespace and add padding to strings.

**Expected Output**:
```
Original: "   Hello World   "
Trimmed: "Hello World"
Left trimmed: "Hello World   "
Right trimmed: "   Hello World"
Padded to 15 chars: "Hello World    "
```

## Exercise 5: String Validation and Formatting

**Problem**: Validate and format strings for different purposes.

**Expected Output**:
```
Email: user@example.com
Is valid email: true
Phone: 123-456-7890
Is valid phone: true
Credit card: 1234-5678-9012-3456
Masked card: ****-****-****-3456
```
