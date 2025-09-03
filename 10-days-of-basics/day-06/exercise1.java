import java.util.*;

public class Exercise1 {
    public static void main(String[] args) {
        // Exercise 1: Adding and Removing Elements
        
        // TODO: Create and manipulate an array
        // 1. Create an ArrayList of Strings named 'fruits' with initial values "apple", "banana"
        ArrayList<String> fruits = new ArrayList<>(Arrays.asList("apple", "banana"));
        // 2. Print the original array
        System.out.println("Original array: " + fruits);
        
        // TODO: Add elements
        // 1. Add "orange" to the end of the array
        fruits.add("orange");
        // 2. Print the array after adding orange
        System.out.println("After adding orange: " + fruits);
        // 3. Add "grape" at the beginning (index 0)
        fruits.add(0,"grape");
        // 4. Print the array after adding grape
        System.out.println("After adding grape at beginning: " + fruits);
        
        // TODO: Remove elements
        // 1. Remove the last element
        fruits.removeLast(); // or fruits.remove(fruits.size - 1)
        // 2. Print the array after removing last element
         System.out.println("After removing last element: " + fruits);
        // 3. Remove the first element
        fruits.remove(0);
        // 4. Print the array after removing first element
        System.out.println("After removing last element: " + fruits);
        // Expected output:
        // Original array: [apple, banana]
        // After adding orange: [apple, banana, orange]
        // After adding grape at beginning: [grape, apple, banana, orange]
        // After removing last element: [grape, apple, banana]
        // After removing first element: [apple, banana]
    }
}
