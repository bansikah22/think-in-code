import java.util.*;

public class Exercise1 {
    public static void main(String[] args) {
        System.out.println("=== Day 6: Collections & Generics ===\n");
        
        System.out.println("Exercise: Build a Custom Generic Collection System");
        System.out.println("=================================================");
        
        // TODO: Build a custom generic collection system with generics
        // This exercise will help you understand:
        // 1. How generics work with type parameters
        // 2. How to create reusable collection classes
        // 3. How to implement basic collection operations
        
        /*
        // Example usage of your completed system:
        System.out.println("Custom Generic Collections Demo:");
        
        // String collection
        CustomArrayList<String> stringList = new CustomArrayList<>();
        stringList.add("Hello");
        stringList.add("World");
        stringList.add("Java");
        
        System.out.println("String list: " + stringList);
        System.out.println("Size: " + stringList.size());
        System.out.println("Contains 'Java': " + stringList.contains("Java"));
        
        // Integer collection
        CustomArrayList<Integer> numberList = new CustomArrayList<>();
        numberList.add(10);
        numberList.add(20);
        numberList.add(30);
        
        System.out.println("\nNumber list: " + numberList);
        System.out.println("Size: " + numberList.size());
        System.out.println("Element at index 1: " + numberList.get(1));
        
        // Student collection with custom objects
        CustomArrayList<Student> studentList = new CustomArrayList<>();
        studentList.add(new Student("John", 20, "Computer Science"));
        studentList.add(new Student("Jane", 22, "Mathematics"));
        
        System.out.println("\nStudent list: " + studentList);
        System.out.println("First student: " + studentList.get(0));
        
        // Demonstrate generic methods
        System.out.println("\nGeneric utility methods:");
        System.out.println("Max number: " + findMax(numberList));
        System.out.println("Longest string: " + findLongest(stringList));
        */
    }
    
    // TODO: Implement CustomArrayList generic class
    // This class should be a generic implementation of a dynamic array
    static class CustomArrayList<T> {
        // TODO: Add private fields for storing elements and capacity
        // TODO: Add constructor to initialize the collection
        // TODO: Add add(element) method to add elements
        // TODO: Add get(index) method to retrieve elements
        // TODO: Add size() method to get collection size
        // TODO: Add contains(element) method to check if element exists
        // TODO: Add toString() method for nice output
        // TODO: Make sure the collection can grow dynamically
    }
    
    // TODO: Implement Student class
    // This class should represent a student with basic information
    static class Student {
        private String name;
        private int age;
        private String major;
        
        // TODO: Add constructor, getters, setters, and toString method
    }
    
    // TODO: Implement generic utility methods
    // These methods should work with any comparable type
    
    // TODO: Implement findMax method
    // This method should find the maximum element in a collection of comparable objects
    public static <T extends Comparable<T>> T findMax(CustomArrayList<T> list) {
        // TODO: Implement logic to find maximum element
        return null;
    }
    
    // TODO: Implement findLongest method
    // This method should find the longest string in a collection of strings
    public static String findLongest(CustomArrayList<String> list) {
        // TODO: Implement logic to find longest string
        return null;
    }
    
    // TODO: Test your generic collection system
    // Make sure:
    // - Collections can store different types (String, Integer, Student)
    // - Generic methods work correctly
    // - Collections grow dynamically as needed
    // - All basic operations (add, get, size, contains) work properly
}
