class Exercise1 {
    public static void main(String[] args) {
        // Exercise 1: Basic Pattern Printing
        
        // TODO: Print triangle pattern
        // 1. Print "Triangle pattern:"
        System.out.println("Triangle pattern:");
        // 2. Use nested for loops to create a triangle pattern
        //    - Outer loop: iterate from 1 to 5 (rows)
        //    - Inner loop: iterate from 1 to current row number (columns)
        //    - Print "*" for each column
        //    - Print a new line after each row
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        
        // TODO: Print square pattern
        // 1. Print a blank line
        System.out.println();
        // 2. Print "Square pattern:"
        System.out.println("Square pattern:");
        // 3. Use nested for loops to create a square pattern
        //    - Outer loop: iterate from 1 to 5 (rows)
        //    - Inner loop: iterate from 1 to 5 (columns)
        //    - Print "*" for each column
        //    - Print a new line after each row
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= 5; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        
        // Expected output:
        // Triangle pattern:
        // *
        // **
        // ***
        // ****
        // *****
        //
        // Square pattern:
        // *****
        // *****
        // *****
        // *****
        // *****
    }
}
