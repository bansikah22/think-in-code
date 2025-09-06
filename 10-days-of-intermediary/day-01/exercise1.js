console.log("=== Day 1: Data Structures - Custom Linked List ===\n");

console.log("Exercise: Build a Simple Linked List");
console.log("===================================");

// TODO: Implement the Node and CustomLinkedList classes below
// Then uncomment this demo code to test your implementations

/*
// Create and test your linked list
const list = new CustomLinkedList();

// Add elements
list.add("Apple");
list.add("Banana");
list.add("Cherry");

console.log("Linked List Demo:");
console.log("Size:", list.size());
console.log("Elements:", list.display());

// Check if elements exist
console.log("Contains 'Banana':", list.contains("Banana"));
console.log("Contains 'Orange':", list.contains("Orange"));

// Remove an element
list.remove("Banana");
console.log("After removing 'Banana':", list.display());
console.log("New size:", list.size());
*/

// TODO: Implement Node class
// This class represents a single node in the linked list
class Node {
    // TODO: Add constructor with data parameter
    // TODO: Add data property to store the element
    // TODO: Add next property to reference the next node
}

// TODO: Implement CustomLinkedList class
// This class should implement a simple singly linked list
class CustomLinkedList {
    // TODO: Add constructor to initialize an empty list
    // TODO: Add head property to reference the first node
    // TODO: Add size property to track the number of elements
    
    // TODO: Implement these essential methods:
    // - add(data): Add element at the end
    // - remove(data): Remove first occurrence of element
    // - contains(data): Check if element exists
    // - size(): Return number of elements
    // - display(): Print all elements in readable format
    
    // TODO: Handle basic edge cases:
    // - Empty list operations
    // - Element not found scenarios
}

console.log("\nTODO: Implement Node and CustomLinkedList classes above");
console.log("Then uncomment the demo code to test your implementations.");

// EXPECTED OUTPUT - When you run your completed implementation, you should see:
console.log("\n=== EXPECTED OUTPUT ===");
console.log("When you run your completed implementation, you should see:");
console.log();
console.log("=== Day 1: Data Structures - Custom Linked List ===");
console.log();
console.log("Exercise: Build a Simple Linked List");
console.log("===================================");
console.log();
console.log("Linked List Demo:");
console.log("Size: 3");
console.log("Elements: Apple -> Banana -> Cherry");
console.log("Contains 'Banana': true");
console.log("Contains 'Orange': false");
console.log("After removing 'Banana': Apple -> Cherry");
console.log("New size: 2");

// TODO: Test your linked list implementation
// Make sure:
// - Adding elements works correctly
// - Removing elements works properly
// - Size and contains methods work
// - Display shows elements correctly
