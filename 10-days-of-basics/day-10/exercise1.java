import java.util.Scanner;

class Exercise1 {
    public static void main(String[] args) {
        // Exercise 1: Basic Calculator Operations

        // TODO: Create a simple calculator
        // 1. Create a Scanner object for input
        Scanner scanner = new Scanner(System.in);

        // 2. Print the calculator header
        System.out.println("Simple Calculator");
        System.out.println("================");

        // TODO: Implement the main calculator loop
        // 1. Create a while loop that continues until user chooses to exit
        boolean running = true;
        while (running) {
            // 2. Inside the loop:
            //    - Prompt for first number and read it
            System.out.print("Enter first number: ");
            double num1 = scanner.nextDouble();

            //    - Prompt for second number and read it
            System.out.print("Enter second number: ");
            double num2 = scanner.nextDouble();

            //    - Prompt for operation (+,-,*,/) and read it
            System.out.print("Enter operation (+,-,*,/): ");
            char op = scanner.next().charAt(0);

            double result = 0;
            boolean valid = true;

            // TODO: Handle different operations
            // 1. Use if-else or switch statement to handle +, -, *, /
            switch (op) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    // 2. For division, check if second number is not zero
                    if (num2 != 0) {
                        result = num1 / num2;
                    } else {
                        System.out.println("Error: Division by zero is not allowed.");
                        valid = false;
                    }
                    break;
                default:
                    System.out.println("Invalid operation. Please use +, -, *, or /.");
                    valid = false;
            }

            // 3. Display appropriate result
            if (valid) {
                System.out.println("\nResult: " + num1 + " " + op + " " + num2 + " = " + result);
            }

            //    - Ask if user wants to continue (y/n)
            System.out.print("\nContinue? (y/n): ");
            char choice = scanner.next().charAt(0);

            //    - If 'n', break the loop
            if (choice == 'n' || choice == 'N') {
                running = false;
                System.out.println("Calculator exited. Goodbye!");
            }
        }

        scanner.close();
    }
}
