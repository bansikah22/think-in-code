import java.util.*;

public class Exercise1 {
    public static void main(String[] args) {
        System.out.println("=== Day 10: Testing & Mini Project ===\n");
        
        System.out.println("Exercise: Build a Simple Task Management System with Testing");
        System.out.println("=========================================================");
        
        // TODO: Build a complete task management system with testing
        // This exercise will help you understand:
        // 1. How to structure a complete application
        // 2. How to write unit tests for your code
        // 3. How different components work together
        
        /*
        // Example usage of your completed system:
        TaskManager taskManager = new TaskManager();
        
        // Create some tasks
        Task task1 = taskManager.createTask("Learn Java Testing", "Study JUnit and testing concepts");
        Task task2 = taskManager.createTask("Practice Unit Tests", "Write tests for simple classes");
        
        // List all tasks
        System.out.println("All tasks:");
        taskManager.getAllTasks().forEach(System.out::println);
        
        // Mark a task as complete
        taskManager.completeTask(task1.getId());
        
        // Show updated task list
        System.out.println("\nAfter completing task 1:");
        taskManager.getAllTasks().forEach(System.out::println);
        */
    }
    
    // TODO: Implement Task class
    // This class should represent a single task with:
    // - id (unique identifier)
    // - title (task name)
    // - description (task details)
    // - isCompleted (boolean status)
    // - createdAt (timestamp)
    static class Task {
        // TODO: Add private fields, constructor, getters, setters, and toString method
    }
    
    // TODO: Implement TaskManager class
    // This class should manage all tasks and provide:
    // - createTask(title, description) - creates and returns a new task
    // - getAllTasks() - returns list of all tasks
    // - completeTask(id) - marks a task as complete
    // - deleteTask(id) - removes a task
    static class TaskManager {
        // TODO: Add private fields for storing tasks, and implement all required methods
    }
    
    // TODO: Write unit tests for your Task and TaskManager classes
    // Create a separate test class or add test methods here
    // Test cases should include:
    // - Creating tasks
    // - Completing tasks
    // - Deleting tasks
    // - Edge cases (empty task list, invalid IDs, etc.)
}
