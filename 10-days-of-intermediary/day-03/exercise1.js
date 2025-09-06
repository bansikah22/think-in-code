console.log("=== Day 3: Object-Oriented Programming - Inheritance & Polymorphism ===\n");

console.log("Exercise: Build Simple Class Hierarchy");
console.log("=====================================");

// TODO: Implement the classes below
// Then uncomment this demo code to test your implementations

/*
// Create objects
const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy", "Golden Retriever");
const cat = new Cat("Whiskers", "Persian");

console.log("Animal Demo:");
console.log("Animal:", animal.makeSound());
console.log("Dog:", dog.makeSound());
console.log("Cat:", cat.makeSound());

console.log("\nAnimal Details:");
console.log("Animal name:", animal.getName());
console.log("Dog name:", dog.getName(), "Breed:", dog.getBreed());
console.log("Cat name:", cat.getName(), "Breed:", cat.getBreed());
*/

// TODO: Implement base Animal class
class Animal {
    // TODO: Add constructor with name parameter
    // TODO: Add name property
    // TODO: Add getName() method
    // TODO: Add makeSound() method that returns "Some sound"
}

// TODO: Implement Dog class inheriting from Animal
class Dog extends Animal {
    // TODO: Add constructor calling super constructor
    // TODO: Add breed property
    // TODO: Override makeSound() to return "Woof!"
    // TODO: Add getBreed() method
}

// TODO: Implement Cat class inheriting from Animal
class Cat extends Animal {
    // TODO: Add constructor calling super constructor
    // TODO: Add breed property
    // TODO: Override makeSound() to return "Meow!"
    // TODO: Add getBreed() method
}

console.log("\nTODO: Implement all classes above");
console.log("Then uncomment the demo code to test your implementations.");

// EXPECTED OUTPUT - When you run your completed implementation, you should see:
console.log("\n=== EXPECTED OUTPUT ===");
console.log("When you run your completed implementation, you should see:");
console.log();
console.log("=== Day 3: Object-Oriented Programming - Inheritance & Polymorphism ===");
console.log();
console.log("Exercise: Build Simple Class Hierarchy");
console.log("=====================================");
console.log();
console.log("Animal Demo:");
console.log("Animal: Some sound");
console.log("Dog: Woof!");
console.log("Cat: Meow!");
console.log();
console.log("Animal Details:");
console.log("Animal name: Generic Animal");
console.log("Dog name: Buddy Breed: Golden Retriever");
console.log("Cat name: Whiskers Breed: Persian");

// TODO: Test your implementations
// Make sure:
// - All classes compile and run correctly
// - Inheritance relationships work properly
// - Method overriding provides correct implementations
// - Objects can access both base and derived class methods
