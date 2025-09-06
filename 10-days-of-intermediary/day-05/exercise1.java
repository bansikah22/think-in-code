import java.io.*;
import java.util.*;

public class Exercise1 {
    public static void main(String[] args) {
        System.out.println("=== Day 5: File I/O & Data Processing ===\n");
        
        System.out.println("Exercise: Build a Simple Data Processing Pipeline");
        System.out.println("===============================================");
        
        // TODO: Implement the file processing methods below
        // Then uncomment this demo code to test your implementations
        
        /*
        // Create sample input file
        createSampleFile();
        
        System.out.println("Reading data from input file...");
        List<Integer> numbers = readNumbersFromFile("numbers.txt");
        
        if (numbers != null) {
            System.out.println("Data loaded successfully!");
            
            System.out.println("\nProcessing data:");
            int total = numbers.size();
            int sum = calculateSum(numbers);
            double average = calculateAverage(numbers);
            List<Integer> evenNumbers = filterEvenNumbers(numbers);
            List<Integer> oddNumbers = filterOddNumbers(numbers);
            
            System.out.println("- Total numbers: " + total);
            System.out.println("- Sum: " + sum);
            System.out.println("- Average: " + average);
            System.out.println("- Even numbers: " + evenNumbers);
            System.out.println("- Odd numbers: " + oddNumbers);
            
            System.out.println("\nWriting results to output file...");
            boolean success = writeResultsToFile("results.txt", total, sum, average, evenNumbers, oddNumbers);
            
            if (success) {
                System.out.println("Results saved successfully!");
                
                System.out.println("\nSummary:");
                System.out.println("- Input file: numbers.txt (" + total + " lines)");
                System.out.println("- Output file: results.txt");
                System.out.println("- Processing completed successfully");
            }
        }
        */
        
        System.out.println("\nTODO: Implement the file processing methods below");
        System.out.println("Then uncomment the demo code above to test your implementations.");
        
        // EXPECTED OUTPUT - When you run your completed implementation, you should see:
        System.out.println("\n=== EXPECTED OUTPUT ===");
        System.out.println("When you run your completed implementation, you should see:");
        System.out.println();
        System.out.println("=== Day 5: File I/O & Data Processing ===");
        System.out.println();
        System.out.println("Exercise: Build a Simple Data Processing Pipeline");
        System.out.println("===============================================");
        System.out.println();
        System.out.println("Reading data from input file...");
        System.out.println("Data loaded successfully!");
        System.out.println();
        System.out.println("Processing data:");
        System.out.println("- Total numbers: 10");
        System.out.println("- Sum: 55");
        System.out.println("- Average: 5.5");
        System.out.println("- Even numbers: [2, 4, 6, 8, 10]");
        System.out.println("- Odd numbers: [1, 3, 5, 7, 9]");
        System.out.println();
        System.out.println("Writing results to output file...");
        System.out.println("Results saved successfully!");
        System.out.println();
        System.out.println("Summary:");
        System.out.println("- Input file: numbers.txt (10 lines)");
        System.out.println("- Output file: results.txt");
        System.out.println("- Processing completed successfully");
    }
    
    // TODO: Create a sample input file with numbers
    private static void createSampleFile() {
        // TODO: Create a file named "numbers.txt" with numbers 1-10
        // Hint: Use FileWriter or PrintWriter to write to file
    }
    
    // TODO: Read numbers from a file
    private static List<Integer> readNumbersFromFile(String filename) {
        // TODO: Read numbers from the specified file
        // Hint: Use BufferedReader to read file line by line
        // Return null if file cannot be read
        return new ArrayList<>();
    }
    
    // TODO: Calculate sum of numbers
    private static int calculateSum(List<Integer> numbers) {
        // TODO: Calculate and return the sum of all numbers
        return 0;
    }
    
    // TODO: Calculate average of numbers
    private static double calculateAverage(List<Integer> numbers) {
        // TODO: Calculate and return the average of all numbers
        return 0.0;
    }
    
    // TODO: Filter even numbers
    private static List<Integer> filterEvenNumbers(List<Integer> numbers) {
        // TODO: Return a new list containing only even numbers
        return new ArrayList<>();
    }
    
    // TODO: Filter odd numbers
    private static List<Integer> filterOddNumbers(List<Integer> numbers) {
        // TODO: Return a new list containing only odd numbers
        return new ArrayList<>();
    }
    
    // TODO: Write results to output file
    private static boolean writeResultsToFile(String filename, int total, int sum, double average, 
                                           List<Integer> evenNumbers, List<Integer> oddNumbers) {
        // TODO: Write processing results to the specified file
        // Hint: Use FileWriter or PrintWriter to write formatted results
        // Return true if successful, false otherwise
        return false;
    }
    
    // TODO: Test your implementations
    // Make sure:
    // - File reading works correctly
    // - Data processing calculations are accurate
    // - File writing creates readable output
    // - Error handling works for missing files
}
