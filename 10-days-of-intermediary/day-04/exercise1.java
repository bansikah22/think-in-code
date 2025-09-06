import java.util.*;
import java.util.function.*;

public class Exercise1 {
    public static void main(String[] args) {
        System.out.println("=== Day 4: Functional Programming - Higher-Order Functions ===\n");
        
        System.out.println("Exercise: Build a Functional Programming Utility Library");
        System.out.println("=====================================================");
        
        // TODO: Implement the higher-order functions below
        // Then uncomment this demo code to test your implementations
        
        /*
        // Sample data
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        System.out.println("Sample Data:");
        System.out.println("Original array: " + numbers);
        
        System.out.println("\nTesting Higher-Order Functions:");
        
        // 1. Map Function (Double all numbers)
        List<Integer> doubled = map(numbers, x -> x * 2);
        System.out.println("\n1. Map Function (Double all numbers):");
        System.out.println("Original: " + numbers);
        System.out.println("Doubled: " + doubled);
        
        // 2. Filter Function (Even numbers only)
        List<Integer> evenNumbers = filter(numbers, x -> x % 2 == 0);
        System.out.println("\n2. Filter Function (Even numbers only):");
        System.out.println("Original: " + numbers);
        System.out.println("Even numbers: " + evenNumbers);
        
        // 3. Reduce Function (Sum all numbers)
        int sum = reduce(numbers, 0, (acc, x) -> acc + x);
        System.out.println("\n3. Reduce Function (Sum all numbers):");
        System.out.println("Original: " + numbers);
        System.out.println("Sum: " + sum);
        
        // 4. ForEach Function (Print each element)
        System.out.println("\n4. ForEach Function (Print each element):");
        System.out.print("Elements: ");
        forEach(numbers, x -> System.out.print(x + ", "));
        System.out.println();
        
        // Combining Functions
        List<Integer> evenDoubled = map(filter(numbers, x -> x % 2 == 0), x -> x * 2);
        int sumEven = reduce(filter(numbers, x -> x % 2 == 0), 0, (acc, x) -> acc + x);
        System.out.println("\nCombining Functions:");
        System.out.println("Even numbers doubled: " + evenDoubled);
        System.out.println("Sum of even numbers: " + sumEven);
        */
        
        System.out.println("\nTODO: Implement the higher-order functions below");
        System.out.println("Then uncomment the demo code above to test your implementations.");
        
        // EXPECTED OUTPUT - When you run your completed implementation, you should see:
        System.out.println("\n=== EXPECTED OUTPUT ===");
        System.out.println("When you run your completed implementation, you should see:");
        System.out.println();
        System.out.println("=== Day 4: Functional Programming - Higher-Order Functions ===");
        System.out.println();
        System.out.println("Exercise: Build a Functional Programming Utility Library");
        System.out.println("=====================================================");
        System.out.println();
        System.out.println("Sample Data:");
        System.out.println("Original array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
        System.out.println();
        System.out.println("Testing Higher-Order Functions:");
        System.out.println();
        System.out.println("1. Map Function (Double all numbers):");
        System.out.println("Original: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
        System.out.println("Doubled: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]");
        System.out.println();
        System.out.println("2. Filter Function (Even numbers only):");
        System.out.println("Original: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
        System.out.println("Even numbers: [2, 4, 6, 8, 10]");
        System.out.println();
        System.out.println("3. Reduce Function (Sum all numbers):");
        System.out.println("Original: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
        System.out.println("Sum: 55");
        System.out.println();
        System.out.println("4. ForEach Function (Print each element):");
        System.out.println("Elements: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10");
        System.out.println();
        System.out.println("Combining Functions:");
        System.out.println("Even numbers doubled: [4, 8, 12, 16, 20]");
        System.out.println("Sum of even numbers: 30");
    }
    
    // TODO: Implement map function
    // Transform each element using the callback function
    public static <T, R> List<R> map(List<T> list, Function<T, R> callback) {
        // TODO: Implement map function
        // Hint: Create a new list and apply callback to each element
        return new ArrayList<>();
    }
    
    // TODO: Implement filter function
    // Return elements that pass the callback test
    public static <T> List<T> filter(List<T> list, Predicate<T> callback) {
        // TODO: Implement filter function
        // Hint: Create a new list and add elements that pass the test
        return new ArrayList<>();
    }
    
    // TODO: Implement reduce function
    // Combine all elements into a single value
    public static <T, R> R reduce(List<T> list, R initialValue, BiFunction<R, T, R> callback) {
        // TODO: Implement reduce function
        // Hint: Start with initial value and combine with each element
        return initialValue;
    }
    
    // TODO: Implement forEach function
    // Execute callback for each element
    public static <T> void forEach(List<T> list, Consumer<T> callback) {
        // TODO: Implement forEach function
        // Hint: Loop through list and call callback for each element
    }
    
    // TODO: Test your implementations
    // Make sure:
    // - All functions work correctly with the sample data
    // - Functions can be combined (map + filter, filter + reduce)
    // - Original data remains unchanged
    // - Functions handle different data types
}
