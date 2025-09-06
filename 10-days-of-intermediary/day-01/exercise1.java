import java.util.*;

public class Exercise1 {
    public static void main(String[] args) {
        System.out.println("=== Day 1: Data Structures - Custom Linked List ===\n");
        
        System.out.println("Exercise: Build a Simple Linked List");
        System.out.println("===================================");
        
        // TODO: Implement the Node and CustomLinkedList classes below
        // Then uncomment this demo code to test your implementation
        
        /*
        // Create and test your linked list
        CustomLinkedList<String> list = new CustomLinkedList<>();
        
        // Add elements
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        
        System.out.println("Linked List Demo:");
        System.out.println("Size: " + list.size());
        System.out.println("Elements: " + list.display());
        
        // Check if elements exist
        System.out.println("Contains 'Banana': " + list.contains("Banana"));
        System.out.println("Contains 'Orange': " + list.contains("Orange"));
        
        // Remove an element
        list.remove("Banana");
        System.out.println("After removing 'Banana': " + list.display());
        System.out.println("New size: " + list.size());
        */
        
        System.out.println("\nTODO: Implement Node and CustomLinkedList classes below");
        System.out.println("Then uncomment the demo code above to test your implementation.");
        
        // EXPECTED OUTPUT - When you run your completed implementation, you should see:
        System.out.println("\n=== EXPECTED OUTPUT ===");
        System.out.println("When you run your completed implementation, you should see:");
        System.out.println();
        System.out.println("=== Day 1: Data Structures - Custom Linked List ===");
        System.out.println();
        System.out.println("Exercise: Build a Simple Linked List");
        System.out.println("===================================");
        System.out.println();
        System.out.println("Linked List Demo:");
        System.out.println("Size: 3");
        System.out.println("Elements: Apple -> Banana -> Cherry");
        System.out.println("Contains 'Banana': true");
        System.out.println("Contains 'Orange': false");
        System.out.println("After removing 'Banana': Apple -> Cherry");
        System.out.println("New size: 2");
    }
    
    // TODO: Implement Node class
    // This class represents a single node in the linked list
    static class Node<T> {
        // TODO: Add data field to store the element
        // TODO: Add next field to reference the next node
        // TODO: Add constructor to initialize the node
    }
    
    // TODO: Implement CustomLinkedList class
    // This class should implement a simple singly linked list
    static class CustomLinkedList<T> {
        // TODO: Add private fields for head node and size
        // TODO: Add constructor to initialize an empty list
        
        // TODO: Implement these essential methods:
        // - add(element): Add element at the end
        // - remove(element): Remove first occurrence of element
        // - contains(element): Check if element exists
        // - size(): Return number of elements
        // - display(): Print all elements in readable format
        
        // TODO: Handle basic edge cases:
        // - Empty list operations
        // - Element not found scenarios
    }
    
    // TODO: Test your linked list implementation
    // Make sure:
    // - Adding elements works correctly
    // - Removing elements works properly
    // - Size and contains methods work
    // - Display shows elements correctly
}
