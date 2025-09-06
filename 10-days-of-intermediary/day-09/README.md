# Day 9: Design Patterns - Strategy Pattern

## Concept Explanation

Design patterns are proven solutions to common software design problems. Understanding and implementing design patterns helps you write more maintainable, flexible, and reusable code. The Strategy Pattern is one of the most fundamental behavioral patterns.

### Key Concepts

#### What are Design Patterns?
- **Reusable Solutions**: Proven approaches to common design problems
- **Best Practices**: Industry-standard ways to structure code
- **Communication**: Common vocabulary for developers
- **Maintainability**: Patterns lead to better code organization
- **Flexibility**: Easier to modify and extend systems

#### Strategy Pattern Overview
- **Behavioral Pattern**: Defines how objects communicate and interact
- **Algorithm Family**: Encapsulates a family of related algorithms
- **Runtime Selection**: Allows algorithms to be selected at runtime
- **Open/Closed Principle**: Open for extension, closed for modification
- **Eliminates Conditionals**: Replaces complex if-else statements

#### Strategy Pattern Components
- **Strategy Interface**: Defines the contract for all strategies
- **Concrete Strategies**: Different implementations of the algorithm
- **Context**: Uses the strategy and maintains reference to it
- **Client**: Creates and configures the context with strategies

#### Benefits of Strategy Pattern
- **Eliminates Switch Statements**: No more complex conditional logic
- **Easy to Add New Strategies**: Just implement the interface
- **Runtime Flexibility**: Change behavior without changing code
- **Single Responsibility**: Each strategy has one clear purpose
- **Testability**: Easy to test individual strategies in isolation

## Exercise 1: Payment Strategy Implementation

**Problem**: Implement a payment system using the Strategy Pattern to handle different payment methods.

**Requirements**:
- Create `PaymentStrategy` interface
- Implement `CreditCardPayment`, `PayPalPayment`, and `BankTransferPayment` strategies
- Create `PaymentProcessor` context class
- Handle payment validation and processing
- Test with different payment scenarios

**Expected Output**:
```
Payment Strategy Implementation:

Processing Credit Card Payment:
Amount: $100.00
Strategy: Credit Card
Validation: Card number valid, sufficient funds
Processing: Charging $100.00 to card ending in 1234
Result: Payment successful! Transaction ID: TXN-001

Processing PayPal Payment:
Amount: $75.50
Strategy: PayPal
Validation: PayPal account verified, balance sufficient
Processing: Transferring $75.50 from PayPal account
Result: Payment successful! Transaction ID: TXN-002

Processing Bank Transfer:
Amount: $250.00
Strategy: Bank Transfer
Validation: Account verified, routing number valid
Processing: Initiating ACH transfer for $250.00
Result: Payment initiated! Reference: ACH-003

Strategy Selection:
Selected Credit Card for $100.00
Selected PayPal for $75.50
Selected Bank Transfer for $250.00

Payment Summary:
Total transactions: 3
Total amount: $425.50
Successful payments: 3
Failed payments: 0
```

## Exercise 2: Sorting Strategy Implementation

**Problem**: Implement different sorting algorithms using the Strategy Pattern.

**Requirements**:
- Create `SortingStrategy` interface
- Implement `BubbleSort`, `QuickSort`, and `MergeSort` strategies
- Create `ArraySorter` context class
- Compare performance of different strategies
- Allow runtime strategy selection

**Expected Output**:
```
Sorting Strategy Implementation:

Original Array: [64, 34, 25, 12, 22, 11, 90]

Bubble Sort Strategy:
Strategy: Bubble Sort
Processing: Comparing and swapping elements
Result: [11, 12, 22, 25, 34, 64, 90]
Time: 2.5ms
Comparisons: 21
Swaps: 15

Quick Sort Strategy:
Strategy: Quick Sort
Processing: Partitioning and recursive sorting
Result: [11, 12, 22, 25, 34, 64, 90]
Time: 0.8ms
Comparisons: 12
Swaps: 8

Merge Sort Strategy:
Strategy: Merge Sort
Processing: Dividing, conquering, and merging
Result: [11, 12, 22, 25, 34, 64, 90]
Time: 1.2ms
Comparisons: 18
Swaps: 0

Strategy Performance Comparison:
Bubble Sort: 2.5ms (slowest, simple)
Quick Sort: 0.8ms (fastest, complex)
Merge Sort: 1.2ms (balanced, stable)

Runtime Strategy Selection:
User selected: Quick Sort
Array sorted using Quick Sort strategy
Result: [11, 12, 22, 25, 34, 64, 90]
```

## Exercise 3: Compression Strategy Implementation

**Problem**: Implement different compression algorithms using the Strategy Pattern.

**Requirements**:
- Create `CompressionStrategy` interface
- Implement `ZIPCompression`, `RARCompression`, and `GZIPCompression` strategies
- Create `FileCompressor` context class
- Handle different file types and sizes
- Compare compression ratios and speeds

**Expected Output**:
```
Compression Strategy Implementation:

Compressing Text File (sample.txt):
Original size: 1,024 KB
Strategy: ZIP Compression
Processing: Compressing with ZIP algorithm
Result: 256 KB (75% compression)
Time: 150ms
Compression ratio: 4:1

Compressing Image File (image.jpg):
Original size: 2,048 KB
Strategy: RAR Compression
Processing: Compressing with RAR algorithm
Result: 1,536 KB (25% compression)
Time: 300ms
Compression ratio: 1.33:1

Compressing Database File (data.db):
Original size: 5,120 KB
Strategy: GZIP Compression
Processing: Compressing with GZIP algorithm
Result: 1,280 KB (75% compression)
Time: 800ms
Compression ratio: 4:1

Strategy Comparison:
ZIP: Best for text files, fast, good compression
RAR: Best for images, slower, excellent compression
GZIP: Best for databases, balanced, good compression

File Type Recommendations:
Text files: ZIP (fast, efficient)
Image files: RAR (best compression)
Database files: GZIP (balanced)
Executable files: ZIP (fast, compatible)
```

## Exercise 4: Notification Strategy Implementation

**Problem**: Implement different notification methods using the Strategy Pattern.

**Requirements**:
- Create `NotificationStrategy` interface
- Implement `EmailNotification`, `SMSNotification`, and `PushNotification` strategies
- Create `NotificationService` context class
- Handle different user preferences and message types
- Implement delivery confirmation and retry logic

**Expected Output**:
```
Notification Strategy Implementation:

Sending Welcome Email:
Strategy: Email Notification
Recipient: john.doe@example.com
Subject: Welcome to Our Service
Content: Welcome! We're glad to have you on board.
Delivery: Email sent successfully
Confirmation: Delivery confirmed

Sending Order Update SMS:
Strategy: SMS Notification
Recipient: +1-555-0123
Content: Your order #12345 has been shipped!
Delivery: SMS sent successfully
Confirmation: Delivery confirmed

Sending App Update Push:
Strategy: Push Notification
Recipient: User ID: 789
Title: App Update Available
Content: New features and improvements available
Delivery: Push notification sent
Confirmation: Delivered to device

Strategy Selection Based on User Preferences:
User: john.doe@example.com
Preferences: Email (primary), SMS (urgent), Push (updates)
Urgent order update: Using SMS strategy
Regular newsletter: Using Email strategy
App notification: Using Push strategy

Delivery Statistics:
Email notifications: 15 sent, 15 delivered (100%)
SMS notifications: 8 sent, 8 delivered (100%)
Push notifications: 23 sent, 22 delivered (95.7%)
Overall delivery rate: 98.9%
```

## Exercise 5: Validation Strategy Implementation

**Problem**: Implement different validation rules using the Strategy Pattern.

**Requirements**:
- Create `ValidationStrategy` interface
- Implement `EmailValidation`, `PhoneValidation`, and `PasswordValidation` strategies
- Create `DataValidator` context class
- Handle complex validation scenarios
- Provide detailed validation feedback

**Expected Output**:
```
Validation Strategy Implementation:

Validating Email Address:
Strategy: Email Validation
Input: john.doe@example.com
Rules: Format check, domain validation, MX record check
Result: Valid email address
Details: Format valid, domain exists, MX records found

Validating Phone Number:
Strategy: Phone Validation
Input: +1-555-123-4567
Rules: Format check, country code validation, number length
Result: Valid phone number
Details: International format, US country code, correct length

Validating Password:
Strategy: Password Validation
Input: MySecurePass123!
Rules: Length, complexity, common password check
Result: Strong password
Details: 18 characters, mixed case, numbers, symbols

Complex Validation Scenarios:
User Registration Form:
- Email: john.doe@example.com (Valid)
- Phone: +1-555-123-4567 (Valid)
- Password: MySecurePass123! (Strong)
Overall: All validations passed

Password Strength Analysis:
Weak passwords detected: 3
Medium passwords detected: 7
Strong passwords detected: 15
Recommendations: Encourage stronger passwords

Validation Performance:
Email validation: 45ms (includes DNS lookup)
Phone validation: 12ms (format only)
Password validation: 8ms (local rules)
Total validation time: 65ms
```

## Exercise 6: Strategy Pattern with Factory

**Problem**: Combine Strategy Pattern with Factory Pattern for dynamic strategy creation.

**Requirements**:
- Create `StrategyFactory` class
- Implement strategy creation based on configuration
- Handle strategy caching and reuse
- Implement strategy fallback mechanisms
- Create configuration-driven strategy selection

**Expected Output**:
```
Strategy Pattern with Factory:

Factory Initialization:
Loading strategy configurations...
Registering available strategies...
Strategy cache initialized
Factory ready

Dynamic Strategy Creation:
Request: Payment strategy for "credit_card"
Factory: Creating CreditCardPayment strategy
Result: New strategy instance created
Cache: Strategy cached for reuse

Request: Payment strategy for "paypal"
Factory: Creating PayPalPayment strategy
Result: New strategy instance created
Cache: Strategy cached for reuse

Strategy Configuration:
Payment methods configuration loaded:
- credit_card: enabled, priority: 1
- paypal: enabled, priority: 2
- bank_transfer: enabled, priority: 3

Strategy Selection Logic:
User preference: credit_card
System recommendation: credit_card (highest priority)
Fallback: paypal (if credit_card fails)
Final selection: credit_card

Strategy Caching:
Cache hit: CreditCardPayment strategy reused
Cache miss: New PayPalPayment strategy created
Cache statistics: 2 strategies cached, 1 reused

Fallback Mechanism:
Primary strategy: CreditCardPayment
Primary failed: Insufficient funds
Fallback strategy: PayPalPayment
Fallback successful: Payment processed
Result: Payment completed via fallback method

Factory Performance:
Strategy creation: 15ms
Strategy caching: 2ms
Strategy lookup: 1ms
Total overhead: 18ms
```

## Learning Objectives

By completing these exercises, you will:
- ✅ Understand the Strategy Pattern and its benefits
- ✅ Implement strategies for different problem domains
- ✅ Combine Strategy Pattern with other patterns
- ✅ Create flexible, maintainable code architectures
- ✅ Eliminate complex conditional logic
- ✅ Design for runtime behavior changes
- ✅ Practice object-oriented design principles

## Tips for Success

1. **Identify Algorithm Families**: Look for groups of related algorithms
2. **Define Clear Interfaces**: Make strategies interchangeable
3. **Consider Performance**: Some strategies may have different performance characteristics
4. **Plan for Extension**: Design for easy addition of new strategies
5. **Test Strategies Independently**: Verify each strategy works correctly

## Next Steps

After completing these exercises:
- Explore other behavioral patterns (Observer, Command, State)
- Study creational patterns (Factory, Singleton, Builder)
- Learn about structural patterns (Adapter, Decorator, Facade)
- Practice combining multiple patterns in real applications
