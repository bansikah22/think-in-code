import java.util.Arrays;

class Exercise1 {
    public static void main(String[] args) {
        // Exercise 1: Variable Declaration and Assignment
        
        // TODO: Declare variables for different data types
        // 1. Create a String variable named 'name' and assign it the value "John Doe"
        String name = "John Doe";
        
        // 2. Create an int variable named 'age' and assign it the value 25
        int age = 25;
        
        // 3. Create a double variable named 'height' and assign it the value 5.9
        double height = 5.9;
        
        // 4. Create a boolean variable named 'isStudent' and assign it the value true
        boolean isStudent = true;
        
        // 5. Create a String array named 'favoriteColors' with values "red", "blue", "green"
        String[] favoriteColors = {"red", "blue", "green"};
        
        // TODO: Display the variables
        // 1. Print "Name: " followed by the name variable
        System.out.println("Name: " + name);
        
        // 2. Print "Age: " followed by the age variable
        System.out.println("Age: " + age);
        
        // 3. Print "Height: " followed by the height variable
        System.out.println("Height: " + height);
        
        // 4. Print "Is Student: " followed by the isStudent variable
        System.out.println("Is Student: " + isStudent);
        
        // 5. Print "Favorite Colors: " followed by the array (use Arrays.toString())
        System.out.println("Favorite Colors: " + Arrays.toString(favoriteColors));
        
        // Expected output:
        // Name: John Doe
        // Age: 25
        // Height: 5.9
        // Is Student: true
        // Favorite Colors: [red, blue, green]
    }
}
