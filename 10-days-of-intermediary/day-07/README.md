# Day 7: Error Handling - Exception Management

## Concept Explanation

Error handling is a critical aspect of robust programming that ensures your applications can gracefully handle unexpected situations and provide meaningful feedback to users. Understanding exception handling helps you write more reliable and user-friendly code.

### Key Concepts

#### Exception Types
- **Checked Exceptions**: Must be handled or declared (IOException, SQLException)
- **Unchecked Exceptions**: Runtime exceptions (NullPointerException, ArrayIndexOutOfBoundsException)
- **Custom Exceptions**: User-defined exception classes for specific error scenarios
- **Error Classes**: Serious system-level problems (OutOfMemoryError, StackOverflowError)

#### Exception Handling Mechanisms
- **Try-Catch Blocks**: Handle exceptions within method scope
- **Try-With-Resources**: Automatically close resources (Java 7+)
- **Throws Declaration**: Propagate exceptions to calling methods
- **Finally Block**: Execute cleanup code regardless of exceptions
- **Multi-Catch**: Handle multiple exception types in one catch block

#### Best Practices
- **Specific Exception Handling**: Catch specific exceptions before general ones
- **Meaningful Error Messages**: Provide clear, actionable error information
- **Resource Management**: Ensure proper cleanup of resources
- **Logging**: Record errors for debugging and monitoring
- **Graceful Degradation**: Continue operation when possible

## Exercise 1: Basic Exception Handling

**Problem**: Implement a simple calculator with comprehensive error handling.

**Requirements**:
- Create a `Calculator` class with basic arithmetic operations
- Handle division by zero exceptions
- Handle invalid input format exceptions
- Implement proper error messages and logging
- Test with various error scenarios

**Expected Output**:
```
Basic Exception Handling Calculator:

Valid Operations:
10 + 5 = 15
20 - 8 = 12
6 * 7 = 42
15 / 3 = 5.0

Error Handling Examples:
Division by zero: Error - Cannot divide by zero
Invalid input "abc + 5": Error - Invalid number format: abc
Invalid input "10 +": Error - Invalid expression format
Invalid input "": Error - Empty input provided

Logging Information:
[INFO] Operation: 10 + 5 = 15
[ERROR] Division by zero attempted: 10 / 0
[ERROR] Invalid input format: abc + 5
```

## Exercise 2: Custom Exception Classes

**Problem**: Create custom exception classes for specific error scenarios.

**Requirements**:
- Create `InvalidInputException` class
- Create `CalculationException` class
- Create `ResourceNotFoundException` class
- Implement proper exception hierarchy
- Use custom exceptions in calculator operations

**Expected Output**:
```
Custom Exception Handling:

Testing InvalidInputException:
Error: InvalidInputException - Input 'abc' is not a valid number
Error: InvalidInputException - Expression '10 +' is incomplete

Testing CalculationException:
Error: CalculationException - Division by zero is not allowed
Error: CalculationException - Result exceeds maximum value

Testing ResourceNotFoundException:
Error: ResourceNotFoundException - Configuration file 'config.txt' not found
Error: ResourceNotFoundException - Database connection 'main_db' unavailable

Exception Hierarchy:
InvalidInputException extends Exception
CalculationException extends Exception
ResourceNotFoundException extends Exception
```

## Exercise 3: Advanced Exception Handling

**Problem**: Implement advanced exception handling patterns and recovery mechanisms.

**Requirements**:
- Use try-with-resources for file operations
- Implement exception chaining and wrapping
- Create retry mechanisms for transient failures
- Handle multiple exception types efficiently
- Implement fallback strategies

**Expected Output**:
```
Advanced Exception Handling:

File Operations with Try-With-Resources:
Successfully read file: sample.txt
File automatically closed
Error reading file: missing.txt - File not found

Exception Chaining:
Original error: Database connection failed
Wrapped error: Service unavailable due to database connection failure
Root cause: Network timeout after 30 seconds

Retry Mechanisms:
Attempt 1: Connection failed, retrying...
Attempt 2: Connection failed, retrying...
Attempt 3: Connection successful!

Multiple Exception Handling:
Handling IOException: File access denied
Handling SecurityException: Insufficient permissions
Handling RuntimeException: Unexpected error occurred

Fallback Strategies:
Primary service failed, using backup service
Backup service successful
Operation completed via fallback
```

## Exercise 4: Exception Handling in Collections

**Problem**: Handle exceptions when working with collections and data structures.

**Requirements**:
- Handle exceptions in collection operations
- Implement safe iteration and modification
- Handle concurrent modification exceptions
- Create defensive programming patterns
- Implement data validation and sanitization

**Expected Output**:
```
Exception Handling in Collections:

Safe Collection Operations:
Successfully added element: Apple
Successfully added element: Banana
Error adding null element: Cannot add null to collection
Successfully removed element: Apple

Safe Iteration:
Iterating through collection safely...
Element: Banana
Element: Cherry
Collection modified during iteration, using safe iterator

Concurrent Modification Handling:
Detected concurrent modification
Switching to thread-safe collection
Operation completed successfully

Data Validation:
Input validation passed: 42
Input validation failed: -5 (must be positive)
Input validation failed: null (cannot be null)
Sanitized input: "  hello world  " -> "hello world"

Defensive Programming:
Collection is null, creating new one
Index out of bounds, using safe access method
Element not found, returning default value
```

## Exercise 5: Exception Handling in File I/O

**Problem**: Implement robust file I/O operations with comprehensive error handling.

**Requirements**:
- Handle file not found exceptions
- Handle permission and access exceptions
- Implement file validation and security checks
- Create backup and recovery mechanisms
- Handle network and I/O exceptions

**Expected Output**:
```
File I/O Exception Handling:

File Reading Operations:
Successfully read file: data.txt (1024 bytes)
Error reading file: restricted.txt - Access denied
Error reading file: network.txt - Network timeout
File validation passed: data.txt

File Writing Operations:
Successfully wrote file: output.txt
Error writing file: read-only.txt - File is read-only
Error writing file: disk-full.txt - Disk space insufficient
Backup created: output.txt.bak

Security and Validation:
File type validation: Allowed (.txt, .csv, .json)
File size validation: Within limits (max 10MB)
File content validation: No malicious content detected
Access control: User has required permissions

Recovery Mechanisms:
Primary file corrupted, attempting recovery...
Recovery successful from backup
File integrity verified
Operation completed successfully
```

## Exercise 6: Exception Handling in Network Operations

**Problem**: Handle exceptions in network and external service operations.

**Requirements**:
- Handle network timeout exceptions
- Handle service unavailable exceptions
- Implement circuit breaker pattern
- Create retry and fallback mechanisms
- Handle authentication and authorization errors

**Expected Output**:
```
Network Exception Handling:

HTTP Request Operations:
GET request successful: 200 OK
POST request failed: 500 Internal Server Error
PUT request timeout: Connection timed out after 30s
DELETE request failed: 403 Forbidden

Service Availability:
Service health check: Available
Service response time: 150ms
Service error rate: 2.5%
Circuit breaker status: Closed (normal operation)

Retry and Fallback:
Primary service failed, retrying...
Retry 1: Service unavailable
Retry 2: Service unavailable
Retry 3: Service available
Operation completed successfully

Authentication and Authorization:
Authentication successful: User authorized
Authentication failed: Invalid credentials
Authorization failed: Insufficient permissions
Token expired: Refreshing authentication token

Network Resilience:
Network connection: Stable
Latency: 45ms
Packet loss: 0.1%
Connection pool: 5/10 active
```

## Learning Objectives

By completing these exercises, you will:
- ✅ Understand different types of exceptions and when to use them
- ✅ Implement proper exception handling patterns
- ✅ Create custom exception classes for specific scenarios
- ✅ Handle exceptions in various programming contexts
- ✅ Implement recovery and fallback mechanisms
- ✅ Write robust, error-resistant code
- ✅ Practice defensive programming techniques

## Tips for Success

1. **Plan for Failure**: Always consider what can go wrong
2. **Be Specific**: Catch specific exceptions before general ones
3. **Clean Up Resources**: Use try-with-resources when possible
4. **Provide Context**: Include meaningful error messages and logging
5. **Test Error Scenarios**: Verify your error handling works correctly

## Next Steps

After completing these exercises:
- Explore logging frameworks and error monitoring
- Study advanced exception handling patterns
- Learn about error handling in different frameworks
- Practice with real-world error scenarios
