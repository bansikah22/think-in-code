import java.util.*;

public class Exercise1 {
    public static void main(String[] args) {
        System.out.println("=== Day 7: Error Handling & Debugging ===\n");
        
        System.out.println("Exercise: Implement Custom Exception Handling for Banking");
        System.out.println("=======================================================");
        
        // TODO: Build a banking application with custom exception handling
        // This exercise will help you understand:
        // 1. How to create custom exception classes
        // 2. How to handle exceptions properly
        // 3. How to validate input and provide meaningful error messages
        
        /*
        // Example usage of your completed system:
        BankAccount account = new BankAccount("12345", 500.0);
        
        System.out.println("Banking Application:");
        System.out.println("Account: " + account.getAccountNumber());
        System.out.println("Balance: $" + account.getBalance());
        
        try {
            // Try to withdraw more than available balance
            account.withdraw(1000.0);
        } catch (InsufficientFundsException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }
        
        try {
            // Try to deposit negative amount
            account.deposit(-100.0);
        } catch (InvalidAmountException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }
        
        try {
            // Try to access invalid account
            BankAccount invalidAccount = new BankAccount("-12345", 0.0);
        } catch (InvalidAccountException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }
        
        System.out.println("\nAll exceptions handled successfully!");
        */
    }
    
    // TODO: Implement InsufficientFundsException class
    // This class should extend Exception and handle insufficient funds scenarios
    static class InsufficientFundsException extends Exception {
        // TODO: Add constructor that takes amount and available balance
        // TODO: Create meaningful error message
    }
    
    // TODO: Implement InvalidAccountException class
    // This class should extend Exception and handle invalid account scenarios
    static class InvalidAccountException extends Exception {
        // TODO: Add constructor that takes invalid account number
        // TODO: Create meaningful error message
    }
    
    // TODO: Implement InvalidAmountException class
    // This class should extend Exception and handle invalid amount scenarios
    static class InvalidAmountException extends Exception {
        // TODO: Add constructor that takes invalid amount
        // TODO: Create meaningful error message
    }
    
    // TODO: Implement BankAccount class
    // This class should handle banking operations with proper exception handling
    static class BankAccount {
        private String accountNumber;
        private double balance;
        
        // TODO: Add constructor with validation
        // TODO: Add getAccountNumber() and getBalance() methods
        // TODO: Add deposit(amount) method with validation
        // TODO: Add withdraw(amount) method with validation
        // TODO: Add proper exception handling for all operations
    }
    
    // TODO: Test your exception handling system
    // Make sure:
    // - Custom exceptions are thrown for invalid scenarios
    // - Exceptions are caught and handled properly
    // - Error messages are clear and helpful
    // - The application continues running after exceptions
}
