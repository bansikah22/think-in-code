console.log("=== Day 10: Testing & Mini Project ===\n");

console.log("Exercise: Build a Simple Task Management System with Testing");
console.log("=========================================================");

// TODO: Build a complete task management system with testing
// This exercise will help you understand:
// 1. How to structure a complete application
// 2. How to write unit tests for your code
// 3. How different components work together

/*
// Example usage of your completed system:
const taskManager = new TaskManager();

// Create some tasks
const task1 = taskManager.createTask("Learn JavaScript Testing", "Study Jest and testing concepts");
const task2 = taskManager.createTask("Practice Unit Tests", "Write tests for simple functions");

// List all tasks
console.log("All tasks:");
taskManager.getAllTasks().forEach(task => console.log(task));

// Mark a task as complete
taskManager.completeTask(task1.id);

// Show updated task list
console.log("\nAfter completing task 1:");
taskManager.getAllTasks().forEach(task => console.log(task));
*/

// TODO: Implement Task class
// This class should represent a single task with:
// - id (unique identifier)
// - title (task name)
// - description (task details)
// - isCompleted (boolean status)
// - createdAt (timestamp)
class Task {
    // TODO: Add private fields, constructor, getters, setters, and toString method
}

// TODO: Implement TaskManager class
// This class should manage all tasks and provide:
// - createTask(title, description) - creates and returns a new task
// - getAllTasks() - returns array of all tasks
// - completeTask(id) - marks a task as complete
// - deleteTask(id) - removes a task
class TaskManager {
    // TODO: Add private fields for storing tasks, and implement all required methods
}

// TODO: Write unit tests for your Task and TaskManager classes
// Create a separate test file or add test methods here
// Test cases should include:
// - Creating tasks
// - Completing tasks
// - Deleting tasks
// - Edge cases (empty task list, invalid IDs, etc.)

// TODO: Test your task management system
// Make sure:
// - Tasks can be created, retrieved, and managed
// - Task completion status works correctly
// - Task deletion works properly
// - All operations handle edge cases gracefully
