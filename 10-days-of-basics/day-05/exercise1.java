public class Exercise1 {
    public static void main(String[] args) {
        // Exercise 1: Basic For Loop

        // 1) Print the heading once (outside the loop)
        System.out.println("Counting from 1 to 5:");

        // 2) Loop from 1 to 5 (inclusive) and print each number
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }

        // TODO: Calculate the sum of numbers
        // 1) Create a variable to store the sum (initialize to 0)
        int sum = 0;

        // 2) Use another for loop to iterate from 1 to 5
        // 3) Add each number to the sum
        for (int i = 1; i <= 5; i++) {
            sum += i; // same as sum = sum + i
        }

        // 4) Print the final sum
        System.out.println("Sum of numbers: " + sum);
        
        // Expected output:
        // Counting from 1 to 5:
        // 1
        // 2
        // 3
        // 4
        // 5
        // Sum of numbers: 15
    }
}
