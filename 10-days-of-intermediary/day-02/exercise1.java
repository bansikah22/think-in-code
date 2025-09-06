import java.util.*;

public class Exercise1 {
    public static void main(String[] args) {
        System.out.println("=== Day 2: Algorithms - Sorting & Searching ===\n");
        
        System.out.println("Exercise: Implement Essential Sorting Algorithms");
        System.out.println("===============================================");
        
        // TODO: Implement the sorting algorithms below
        // Then uncomment this demo code to test your implementations
        
        /*
        // Generate test data
        int[] testArray = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Test Data:");
        System.out.println("Original array: " + Arrays.toString(testArray));
        
        // Test sorting algorithms
        System.out.println("\nSorting Results:");
        
        // Bubble Sort
        int[] bubbleArray = testArray.clone();
        bubbleSort(bubbleArray);
        System.out.println("Bubble Sort: " + Arrays.toString(bubbleArray));
        
        // Selection Sort
        int[] selectionArray = testArray.clone();
        selectionSort(selectionArray);
        System.out.println("Selection Sort: " + Arrays.toString(selectionArray));
        
        // Insertion Sort
        int[] insertionArray = testArray.clone();
        insertionSort(insertionArray);
        System.out.println("Insertion Sort: " + Arrays.toString(insertionArray));
        
        // Test searching
        System.out.println("\nSearching Results:");
        System.out.println("Linear Search for 25: " + linearSearch(testArray, 25));
        System.out.println("Linear Search for 99: " + linearSearch(testArray, 99));
        */
        
        System.out.println("\nTODO: Implement the sorting algorithms below");
        System.out.println("Then uncomment the demo code above to test your implementations.");
        
        // EXPECTED OUTPUT - When you run your completed implementation, you should see:
        System.out.println("\n=== EXPECTED OUTPUT ===");
        System.out.println("When you run your completed implementation, you should see:");
        System.out.println();
        System.out.println("=== Day 2: Algorithms - Sorting & Searching ===");
        System.out.println();
        System.out.println("Exercise: Implement Essential Sorting Algorithms");
        System.out.println("===============================================");
        System.out.println();
        System.out.println("Test Data:");
        System.out.println("Original array: [64, 34, 25, 12, 22, 11, 90]");
        System.out.println();
        System.out.println("Sorting Results:");
        System.out.println("Bubble Sort: [11, 12, 22, 25, 34, 64, 90]");
        System.out.println("Selection Sort: [11, 12, 22, 25, 34, 64, 90]");
        System.out.println("Insertion Sort: [11, 12, 22, 25, 34, 64, 90]");
        System.out.println();
        System.out.println("Searching Results:");
        System.out.println("Linear Search for 25: 2");
        System.out.println("Linear Search for 99: -1");
    }
    
    // TODO: Implement Bubble Sort
    // Simple sorting algorithm - compare and swap adjacent elements
    public static void bubbleSort(int[] arr) {
        // TODO: Implement bubble sort
    }
    
    // TODO: Implement Selection Sort
    // Find minimum element and place at beginning
    public static void selectionSort(int[] arr) {
        // TODO: Implement selection sort
    }
    
    // TODO: Implement Insertion Sort
    // Build final array one element at a time
    public static void insertionSort(int[] arr) {
        // TODO: Implement insertion sort
    }
    
    // TODO: Implement Linear Search
    // Check each element sequentially
    public static int linearSearch(int[] arr, int target) {
        // TODO: Implement linear search
        return -1; // Return -1 if not found
    }
    
    // TODO: Test your implementations
    // Make sure:
    // - All sorting algorithms produce correctly sorted arrays
    // - Search algorithm returns correct index or -1 if not found
    // - Arrays are sorted in ascending order
}
