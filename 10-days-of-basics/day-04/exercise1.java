public class Exercise1 {
    public static void main(String[] args) {
        // Exercise 1: Basic If Statements
        
        // TODO: Declare a number
        // 1. Create an int variable named 'number' and assign it the value 15
        int number = 15;
        
        // TODO: Check various conditions
        // 1. Check if number is positive (> 0) and store result in 'isPositive'
        boolean isPositive = number > 0;
        // 2. Check if number is even (use modulo operator %) and store result in 'isEven'
        boolean isEven = (number % 2 == 0);
        // 3. Check if number is greater than 10 and store result in 'isGreaterThan10'
        boolean isGreaterThan10 = number > 10;
        // 4. Check if number is less than 20 and store result in 'isLessThan20'
        boolean isLessThan20 = number < 20;
        
        // TODO: Display results
        // 1. Print "Number: " followed by the number
        System.out.println("Number: "+ number);
        // 2. Print "Is positive: " followed by isPositive
        System.out.println("Is positive: "+ isPositive);
        // 3. Print "Is even: " followed by isEven
        System.out.println("Is even: "+ isEven);
        // 4. Print "Is greater than 10: " followed by isGreaterThan10
        System.out.println("Is greater than 10: "+ isGreaterThan10);
        // 5. Print "Is less than 20: " followed by isLessThan20
        System.out.println("Is less than 20: "+ isLessThan20);
        
        // Expected output:
        // Number: 15
        // Is positive: true
        // Is even: false
        // Is greater than 10: true
        // Is less than 20: true
   }
}
