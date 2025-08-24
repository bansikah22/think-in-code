# Day 9: Data Validation and Error Handling

## Concept Explanation
Data validation ensures that input data meets expected criteria, while error handling manages unexpected situations gracefully. Both are crucial for building robust applications.

**Key Validation Concepts:**
- **Input Validation**: Check if data meets requirements
- **Type Checking**: Ensure data is of expected type
- **Range Validation**: Verify values are within acceptable limits
- **Format Validation**: Check if data follows specific patterns
- **Error Handling**: Manage and respond to errors appropriately

## Exercise 1: Basic Input Validation

**Problem**: Validate different types of input data.

**Expected Output**:
```
Age: 25
Is valid age: true
Age: -5
Is valid age: false
Age: 150
Is valid age: false

Email: user@example.com
Is valid email: true
Email: invalid-email
Is valid email: false
```

## Exercise 2: Number Validation

**Problem**: Validate numbers and perform range checks.

**Expected Output**:
```
Number: 42
Is positive: true
Is even: true
Is in range (1-100): true

Number: -10
Is positive: false
Is even: true
Is in range (1-100): false

Number: 150
Is positive: true
Is even: false
Is in range (1-100): false
```

## Exercise 3: String Validation

**Problem**: Validate strings for various criteria.

**Expected Output**:
```
Username: john_doe123
Is valid username: true
Length check: true
Contains only letters, numbers, underscore: true

Username: john@doe
Is valid username: false
Length check: true
Contains only letters, numbers, underscore: false

Password: MyPass123!
Is strong password: true
Length >= 8: true
Contains uppercase: true
Contains lowercase: true
Contains number: true
```

## Exercise 4: Array Validation

**Problem**: Validate arrays and their contents.

**Expected Output**:
```
Array: [1, 2, 3, 4, 5]
Is not empty: true
All numbers: true
All positive: true
Sum: 15
Average: 3.0

Array: [1, -2, 3, "four", 5]
Is not empty: true
All numbers: false
All positive: false
```

## Exercise 5: Error Handling

**Problem**: Handle potential errors in data processing.

**Expected Output**:
```
Dividing 10 by 2: 5.0
Dividing 10 by 0: Error: Cannot divide by zero
Converting "123" to number: 123
Converting "abc" to number: Error: Invalid number format
Accessing array[2]: 3
Accessing array[10]: Error: Index out of bounds
```
