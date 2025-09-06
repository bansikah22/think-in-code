console.log("=== Day 6: Collections & Generics ===\n");

// Exercise 1: Custom Generic Collections
console.log("Exercise 1: Custom Generic Collections");
console.log("======================================");

// TODO: Implement custom generic collections
// 1. Create CustomArrayList class
// 2. Create CustomHashSet class
// 3. Create CustomHashMap class
// 4. Test all operations

// Example usage (implement the classes first):
/*
class CustomArrayList {
    // TODO: Implement CustomArrayList with add, remove, get, contains, size methods
}

class CustomHashSet {
    // TODO: Implement CustomHashSet with add, remove, contains, size methods
}

class CustomHashMap {
    // TODO: Implement CustomHashMap with put, get, remove, containsKey, size methods
}

const stringList = new CustomArrayList();
stringList.add("Apple");
stringList.add("Banana");
stringList.add("Cherry");

console.log("Size:", stringList.size());
console.log("Contains Banana:", stringList.contains("Banana"));
console.log("Element at index 1:", stringList.get(1));
stringList.remove("Apple");
console.log("Final list:", stringList.display());

const intSet = new CustomHashSet();
intSet.add(1);
intSet.add(2);
intSet.add(3);
intSet.add(2); // duplicate
intSet.add(4);
intSet.add(3); // duplicate

console.log("Size:", intSet.size(), "(duplicates ignored)");
console.log("Contains 2:", intSet.contains(2));
console.log("Contains 5:", intSet.contains(5));
console.log("Final set:", intSet.display());

const map = new CustomHashMap();
map.put("Apple", 1);
map.put("Banana", 2);
map.put("Cherry", 3);

console.log("Size:", map.size());
console.log("Get Apple:", map.get("Apple"));
console.log("Contains key Orange:", map.containsKey("Orange"));
console.log("Final map:", map.display());
*/

// Exercise 2: Bounded Generics and Comparators
console.log("\nExercise 2: Bounded Generics and Comparators");
console.log("=============================================");

// TODO: Implement bounded generics and comparators
// 1. Create Student and Product classes
// 2. Implement comparison methods
// 3. Create custom comparators
// 4. Test sorting with different criteria

// Example usage:
/*
class Student {
    // TODO: Add fields: name, age, grade
    // TODO: Implement compareTo method
    // TODO: Add toString method
}

class Product {
    // TODO: Add fields: name, price, category
    // TODO: Add toString method
}

class GradeComparator {
    // TODO: Implement compare method
}

class PriceComparator {
    // TODO: Implement compare method
}

const students = [
    new Student("Alice", 20, 85.5),
    new Student("Bob", 22, 78.0),
    new Student("Charlie", 25, 92.0)
];

console.log("Student List (sorted by age):");
const sortedByAge = [...students].sort((a, b) => a.compareTo(b));
sortedByAge.forEach(student => console.log(student.toString()));

console.log("\nStudent List (sorted by grade):");
const sortedByGrade = [...students].sort(new GradeComparator().compare);
sortedByGrade.forEach(student => console.log(student.toString()));

const products = [
    new Product("Laptop", 999.99, "Electronics"),
    new Product("Phone", 599.99, "Electronics"),
    new Product("Book", 29.99, "Education")
];

console.log("\nProduct List (sorted by price):");
const sortedByPrice = [...products].sort(new PriceComparator().compare);
sortedByPrice.forEach(product => console.log(product.toString()));

console.log("\nGeneric Min/Max Operations:");
console.log("Min age:", findMin(students, 'age'));
console.log("Max grade:", findMax(students, 'grade'));
console.log("Min price:", findMin(products, 'price'));
*/

// Exercise 3: Advanced Collection Operations
console.log("\nExercise 3: Advanced Collection Operations");
console.log("==========================================");

// TODO: Implement advanced collection operations
// 1. Create utility methods for collections
// 2. Implement filtering, mapping, and reducing operations
// 3. Use flexible method parameters
// 4. Test with different collection types

// Example usage:
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original List:", numbers);

const evenNumbers = filter(numbers, n => n % 2 === 0);
console.log("Filtering (even numbers):", evenNumbers);

const squares = map(numbers, n => n * n);
console.log("Mapping (square):", squares);

const sum = reduce(numbers, 0, (acc, n) => acc + n);
console.log("Reducing (sum):", sum);

const product = reduce(numbers, 1, (acc, n) => acc * n);
console.log("Reducing (product):", product);

const fruits = ["apple", "banana", "cherry", "date"];
const longFruits = filter(fruits, s => s.length > 5);
console.log("Filtered (length > 5):", longFruits);

const upperFruits = map(fruits, s => s.toUpperCase());
console.log("Mapped (uppercase):", upperFruits);

const joined = join(fruits, ", ");
console.log("Joined:", joined);

// Collection utilities
const list1 = [1, 2, 3, 4, 5];
const list2 = [3, 4, 5, 6, 7, 8];

const intersection = getIntersection(list1, list2);
console.log("Intersection:", intersection);

const union = getUnion(list1, list2);
console.log("Union:", union);

const difference = getDifference(list1, list2);
console.log("Difference:", difference);
*/

// Exercise 4: Generic Data Structures
console.log("\nExercise 4: Generic Data Structures");
console.log("===================================");

// TODO: Implement generic data structures
// 1. Create BinaryTree class
// 2. Create PriorityQueue class
// 3. Create Graph class
// 4. Implement traversal and search algorithms

// Example usage:
/*
class BinaryTree {
    // TODO: Implement BinaryTree with insert, traversal methods
}

class PriorityQueue {
    // TODO: Implement PriorityQueue with enqueue, dequeue methods
}

class Graph {
    // TODO: Implement Graph with addVertex, addEdge, bfs, dfs methods
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(4);
tree.insert(9);

console.log("Inorder traversal:", tree.inorderTraversal());
console.log("Preorder traversal:", tree.preorderTraversal());
console.log("Postorder traversal:", tree.postorderTraversal());

const pq = new PriorityQueue();
pq.enqueue("Task1", 3);
pq.enqueue("Task2", 1);
pq.enqueue("Task3", 5);
pq.enqueue("Task4", 2);

console.log("Dequeued:", pq.dequeue(), pq.dequeue(), pq.dequeue(), pq.dequeue());

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

console.log("BFS from A:", graph.bfs("A"));
console.log("DFS from A:", graph.dfs("A"));
*/

// Exercise 5: Collection Performance Analysis
console.log("\nExercise 5: Collection Performance Analysis");
console.log("===========================================");

// TODO: Implement performance analysis
// 1. Measure performance of different collection operations
// 2. Compare Array vs Set vs Map operations
// 3. Analyze memory usage and time complexity
// 4. Create performance benchmarks

// Example usage:
/*
performanceAnalysis();
*/

// Exercise 6: Generic Algorithms and Utilities
console.log("\nExercise 6: Generic Algorithms and Utilities");
console.log("============================================");

// TODO: Implement generic algorithms and utilities
// 1. Create generic sorting algorithms
// 2. Implement generic search algorithms
// 3. Create utility functions for collections
// 4. Test with different data types

// Example usage:
/*
const fruits = ["banana", "apple", "cherry", "date"];
console.log("Original:", fruits);

const sortedFruits = [...fruits].sort();
console.log("Sorted:", sortedFruits);

const numbers = [5, 2, 8, 1, 9, 3];
console.log("Original:", numbers);

const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("Sorted:", sortedNumbers);

// Generic search
const searchArray = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Array:", searchArray);

const linearResult = linearSearch(searchArray, "cherry");
console.log("Linear search for 'cherry': Found at index", linearResult);

const binaryResult = binarySearch(sortedFruits, "date");
console.log("Binary search for 'date': Found at index", binaryResult);

const notFound = binarySearch(sortedFruits, "fig");
console.log("Binary search for 'fig':", notFound === -1 ? "Not found" : "Found at " + notFound);

// Generic utilities
const reverseList = [...fruits].reverse();
console.log("Reverse:", reverseList);

const shuffleList = [...fruits].sort(() => Math.random() - 0.5);
console.log("Shuffle:", shuffleList);

const rotateList = [...fruits];
rotateLeft(rotateList, 2);
console.log("Rotate left by 2:", rotateList);

const rotateRightList = [...fruits];
rotateRight(rotateRightList, 1);
console.log("Rotate right by 1:", rotateRightList);

// Collection statistics
const statsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Numbers:", statsNumbers);
console.log("Sum:", sum(statsNumbers));
console.log("Average:", average(statsNumbers));
console.log("Min:", min(statsNumbers));
console.log("Max:", max(statsNumbers));
console.log("Variance:", variance(statsNumbers));
*/

// TODO: Implement utility functions
function filter(array, predicate) {
    // TODO: Implement filter method
    return [];
}

function map(array, mapper) {
    // TODO: Implement map method
    return [];
}

function reduce(array, initial, reducer) {
    // TODO: Implement reduce method
    return initial;
}

function join(array, delimiter) {
    // TODO: Implement join method
    return "";
}

function getIntersection(list1, list2) {
    // TODO: Implement intersection method
    return [];
}

function getUnion(list1, list2) {
    // TODO: Implement union method
    return [];
}

function getDifference(list1, list2) {
    // TODO: Implement difference method
    return [];
}

function findMin(array, property) {
    // TODO: Implement findMin method
    return null;
}

function findMax(array, property) {
    // TODO: Implement findMax method
    return null;
}

function performanceAnalysis() {
    // TODO: Implement performance comparison of collections
    console.log("Performance analysis implementation needed");
}

function linearSearch(array, target) {
    // TODO: Implement linear search method
    return -1;
}

function binarySearch(array, target) {
    // TODO: Implement binary search method
    return -1;
}

function rotateLeft(array, positions) {
    // TODO: Implement rotate left method
}

function rotateRight(array, positions) {
    // TODO: Implement rotate right method
}

function sum(numbers) {
    // TODO: Implement sum method
    return 0;
}

function average(numbers) {
    // TODO: Implement average method
    return 0;
}

function min(numbers) {
    // TODO: Implement min method
    return 0;
}

function max(numbers) {
    // TODO: Implement max method
    return 0;
}

function variance(numbers) {
    // TODO: Implement variance method
    return 0;
}

console.log("\n=== Exercise templates ready for implementation ===");
console.log("Uncomment the TODO sections and implement the required classes and methods.");
console.log("Test your implementations with the provided example usage.");
