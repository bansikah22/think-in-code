console.log("=== Day 2: Algorithms - Sorting & Searching ===\n");

console.log("Exercise: Implement Sorting & Searching Algorithms");
console.log("=================================================");

// TODO: Implement all the sorting and searching algorithms below
// Then uncomment this demo code to test your implementations

/*
// Generate test data
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Test Data Generation:");
console.log("Original array:", testArray);
console.log("Array size:", testArray.length);

// Test sorting algorithms
console.log("\nSorting Algorithm Results:\n");

// Bubble Sort
const bubbleArray = [...testArray];
let startTime = performance.now();
bubbleSort(bubbleArray);
let endTime = performance.now();
console.log("Bubble Sort:");
console.log("- Input:", testArray);
console.log("- Output:", bubbleArray);
console.log("- Time:", (endTime - startTime).toFixed(2), "ms\n");

// Selection Sort
const selectionArray = [...testArray];
startTime = performance.now();
selectionSort(selectionArray);
endTime = performance.now();
console.log("Selection Sort:");
console.log("- Input:", testArray);
console.log("- Output:", selectionArray);
console.log("- Time:", (endTime - startTime).toFixed(2), "ms\n");

// Insertion Sort
const insertionArray = [...testArray];
startTime = performance.now();
insertionSort(insertionArray);
endTime = performance.now();
console.log("Insertion Sort:");
console.log("- Input:", testArray);
console.log("- Output:", insertionArray);
console.log("- Time:", (endTime - startTime).toFixed(2), "ms\n");

// Merge Sort
const mergeArray = [...testArray];
startTime = performance.now();
mergeSort(mergeArray, 0, mergeArray.length - 1);
endTime = performance.now();
console.log("Merge Sort:");
console.log("- Input:", testArray);
console.log("- Output:", mergeArray);
console.log("- Time:", (endTime - startTime).toFixed(2), "ms\n");

// Quick Sort
const quickArray = [...testArray];
startTime = performance.now();
quickSort(quickArray, 0, quickArray.length - 1);
endTime = performance.now();
console.log("Quick Sort:");
console.log("- Input:", testArray);
console.log("- Output:", quickArray);
console.log("- Time:", (endTime - startTime).toFixed(2), "ms\n");

// Test searching algorithms
console.log("Searching Algorithm Results:\n");

// Linear Search (on unsorted array)
startTime = performance.now();
const linearResult = linearSearch(testArray, 25);
endTime = performance.now();
console.log("Linear Search (unsorted):");
if (linearResult !== -1) {
    console.log("- Searching for 25: Found at index", linearResult);
} else {
    console.log("- Searching for 25: Not found");
}
console.log("- Time:", (endTime - startTime).toFixed(2), "ms\n");

// Binary Search (on sorted array)
const sortedArray = [...testArray].sort((a, b) => a - b);
startTime = performance.now();
const binaryResult = binarySearch(sortedArray, 25);
endTime = performance.now();
console.log("Binary Search (sorted):");
if (binaryResult !== -1) {
    console.log("- Searching for 25: Found at index", binaryResult);
} else {
    console.log("- Searching for 25: Not found");
}
console.log("- Time:", (endTime - startTime).toFixed(2), "ms\n");

// Performance comparison with larger arrays
console.log("Performance Comparison (1000 elements):");
console.log("Algorithm      | Time (ms) | Space Complexity");
console.log("---------------|-----------|------------------");
console.log("Bubble Sort    | 15.2      | O(1)");
console.log("Selection Sort | 12.8      | O(1)");
console.log("Insertion Sort | 8.5       | O(1)");
console.log("Merge Sort     | 2.1       | O(n)");
console.log("Quick Sort     | 1.8       | O(log n)");
console.log();
console.log("Searching (1000 elements):");
console.log("Algorithm      | Time (ms) | Space Complexity");
console.log("---------------|-----------|------------------");
console.log("Linear Search  | 0.15      | O(1)");
console.log("Binary Search  | 0.02      | O(1)");
*/

// TODO: Implement Bubble Sort
// Time Complexity: O(n²), Space Complexity: O(1)
// Compare adjacent elements and swap if they are in wrong order
function bubbleSort(arr) {
    // TODO: Implement bubble sort algorithm
    // Hint: Use nested loops to compare and swap adjacent elements
}

// TODO: Implement Selection Sort
// Time Complexity: O(n²), Space Complexity: O(1)
// Find minimum element and place at beginning
function selectionSort(arr) {
    // TODO: Implement selection sort algorithm
    // Hint: Find minimum element in unsorted portion and swap with first element
}

// TODO: Implement Insertion Sort
// Time Complexity: O(n²), Space Complexity: O(1)
// Build final array one element at a time
function insertionSort(arr) {
    // TODO: Implement insertion sort algorithm
    // Hint: Take each element and insert it into its correct position in sorted portion
}

// TODO: Implement Merge Sort
// Time Complexity: O(n log n), Space Complexity: O(n)
// Divide array into halves, sort, then merge
function mergeSort(arr, left, right) {
    // TODO: Implement merge sort algorithm
    // Hint: Divide array into halves recursively, then merge sorted halves
}

// TODO: Implement merge function for merge sort
function merge(arr, left, mid, right) {
    // TODO: Implement merge function
    // Hint: Merge two sorted subarrays into one sorted array
}

// TODO: Implement Quick Sort
// Time Complexity: O(n log n) average, O(n²) worst, Space Complexity: O(log n)
// Use pivot element to partition array
function quickSort(arr, low, high) {
    // TODO: Implement quick sort algorithm
    // Hint: Choose pivot, partition array around pivot, then sort subarrays
}

// TODO: Implement partition function for quick sort
function partition(arr, low, high) {
    // TODO: Implement partition function
    // Hint: Choose pivot and partition array so elements < pivot are on left
}

// TODO: Implement Linear Search
// Time Complexity: O(n), Space Complexity: O(1)
// Check each element sequentially
function linearSearch(arr, target) {
    // TODO: Implement linear search algorithm
    // Hint: Loop through array and return index when target is found
    return -1; // Return -1 if not found
}

// TODO: Implement Binary Search
// Time Complexity: O(log n), Space Complexity: O(1)
// Requires sorted array, divide search space in half each iteration
function binarySearch(arr, target) {
    // TODO: Implement binary search algorithm
    // Hint: Use left and right pointers, compare with middle element
    return -1; // Return -1 if not found
}

console.log("\nTODO: Implement all sorting and searching algorithms above");
console.log("Then uncomment the demo code to test your implementations.");

// EXPECTED OUTPUT - When you run your completed implementation, you should see:
console.log("\n=== EXPECTED OUTPUT ===");
console.log("When you run your completed implementation, you should see:");
console.log();
console.log("=== Day 2: Algorithms - Sorting & Searching ===");
console.log();
console.log("Exercise: Implement Sorting & Searching Algorithms");
console.log("=================================================");
console.log();
console.log("Test Data Generation:");
console.log("Original array: [64, 34, 25, 12, 22, 11, 90]");
console.log("Array size: 7");
console.log();
console.log("Sorting Algorithm Results:");
console.log();
console.log("Bubble Sort:");
console.log("- Input: [64, 34, 25, 12, 22, 11, 90]");
console.log("- Output: [11, 12, 22, 25, 34, 64, 90]");
console.log("- Time: 0.15ms");
console.log();
console.log("Selection Sort:");
console.log("- Input: [64, 34, 25, 12, 22, 11, 90]");
console.log("- Output: [11, 12, 22, 25, 34, 64, 90]");
console.log("- Time: 0.12ms");
console.log();
console.log("Insertion Sort:");
console.log("- Input: [64, 34, 25, 12, 22, 11, 90]");
console.log("- Output: [11, 12, 22, 25, 34, 64, 90]");
console.log("- Time: 0.08ms");
console.log();
console.log("Merge Sort:");
console.log("- Input: [64, 34, 25, 12, 22, 11, 90]");
console.log("- Output: [11, 12, 22, 25, 34, 64, 90]");
console.log("- Time: 0.25ms");
console.log();
console.log("Quick Sort:");
console.log("- Input: [64, 34, 25, 12, 22, 11, 90]");
console.log("- Output: [11, 12, 22, 25, 34, 64, 90]");
console.log("- Time: 0.18ms");
console.log();
console.log("Searching Algorithm Results:");
console.log();
console.log("Linear Search (unsorted):");
console.log("- Searching for 25: Found at index 2");
console.log("- Time: 0.02ms");
console.log();
console.log("Binary Search (sorted):");
console.log("- Searching for 25: Found at index 3");
console.log("- Time: 0.01ms");
console.log();
console.log("Performance Comparison (1000 elements):");
console.log("Algorithm      | Time (ms) | Space Complexity");
console.log("---------------|-----------|------------------");
console.log("Bubble Sort    | 15.2      | O(1)");
console.log("Selection Sort | 12.8      | O(1)");
console.log("Insertion Sort | 8.5       | O(1)");
console.log("Merge Sort     | 2.1       | O(n)");
console.log("Quick Sort     | 1.8       | O(log n)");
console.log();
console.log("Searching (1000 elements):");
console.log("Algorithm      | Time (ms) | Space Complexity");
console.log("---------------|-----------|------------------");
console.log("Linear Search  | 0.15      | O(1)");
console.log("Binary Search  | 0.02      | O(1)");

// TODO: Test your implementations
// Make sure:
// - All sorting algorithms produce correctly sorted arrays
// - Search algorithms return correct indices
// - Edge cases are handled (empty arrays, single elements, etc.)
// - Performance measurements are accurate
