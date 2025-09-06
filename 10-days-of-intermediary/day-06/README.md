# Day 6: Collections & Generics

## Concept Explanation

Collections and Generics are powerful features that provide type safety and reusable data structures. Collections framework provides ready-to-use data structures, while generics allow you to write type-safe code.

### Key Concepts

#### Collections Framework
- **List**: Ordered collection with duplicate elements
- **Set**: Unordered collection of unique elements
- **Map**: Key-value pairs for data association
- **Queue**: FIFO (First In, First Out) collection
- **Deque**: Double-ended queue

#### Generics
- **Type Parameters**: `<T>`, `<K,V>`, `<E>` for type safety
- **Generic Classes**: Classes that can work with any data type
- **Generic Methods**: Methods that can work with different types
- **Bounded Generics**: `<T extends Comparable<T>>` for type constraints
- **Wildcards**: `<?>`, `<? extends T>`, `<? super T>`

#### Advanced Collection Operations
- **Stream API**: Functional operations on collections
- **Comparators**: Custom sorting and comparison logic
- **Iterators**: Traversing collections safely
- **Collections Utility**: Static methods for collection operations

## Exercise 1: Custom Generic Collections

**Problem**: Implement custom generic collection classes.

**Requirements**:
- Create generic `CustomArrayList<T>` class
- Create generic `CustomHashSet<T>` class
- Create generic `CustomHashMap<K,V>` class
- Implement basic collection operations
- Use generics for type safety

**Expected Output**:
```
Custom Generic Collections:

CustomArrayList<String>:
Added: Apple, Banana, Cherry
Size: 3
Contains Banana: true
Element at index 1: Banana
Removed: Apple
Final list: [Banana, Cherry]

CustomHashSet<Integer>:
Added: 1, 2, 3, 2, 4, 3
Size: 4 (duplicates ignored)
Contains 2: true
Contains 5: false
Final set: [1, 2, 3, 4]

CustomHashMap<String, Integer>:
Put: (Apple, 1), (Banana, 2), (Cherry, 3)
Size: 3
Get Apple: 1
Contains key Orange: false
Final map: {Apple=1, Banana=2, Cherry=3}
```

## Exercise 2: Bounded Generics and Comparators

**Problem**: Implement bounded generics with custom comparators.

**Requirements**:
- Create `Comparable` classes for different data types
- Implement bounded generic methods
- Create custom comparators
- Sort collections using different criteria

**Expected Output**:
```
Bounded Generics and Comparators:

Student List (sorted by age):
Student{name='Alice', age=20, grade=85.5}
Student{name='Bob', age=22, grade=78.0}
Student{name='Charlie', age=25, grade=92.0}

Student List (sorted by grade):
Student{name='Bob', age=22, grade=78.0}
Student{name='Alice', age=20, grade=85.5}
Student{name='Charlie', age=25, grade=92.0}

Product List (sorted by price):
Product{name='Laptop', price=999.99, category='Electronics'}
Product{name='Phone', price=599.99, category='Electronics'}
Product{name='Book', price=29.99, category='Education'}

Generic Min/Max Operations:
Min age: 20
Max grade: 92.0
Min price: 29.99
```

## Exercise 3: Advanced Collection Operations

**Problem**: Implement advanced collection operations using generics.

**Requirements**:
- Create utility methods for collections
- Implement filtering, mapping, and reducing operations
- Use wildcards for flexible method parameters
- Handle different collection types

**Expected Output**:
```
Advanced Collection Operations:

Original List: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Filtering (even numbers): [2, 4, 6, 8, 10]
Mapping (square): [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
Reducing (sum): 55
Reducing (product): 3628800

String Operations:
Original: [apple, banana, cherry, date]
Filtered (length > 5): [banana, cherry]
Mapped (uppercase): [APPLE, BANANA, CHERRY, DATE]
Joined: apple, banana, cherry, date

Collection Utilities:
Intersection: [3, 4, 5]
Union: [1, 2, 3, 4, 5, 6, 7, 8]
Difference: [1, 2, 6, 7, 8]
```

## Exercise 4: Generic Data Structures

**Problem**: Implement generic data structures with advanced features.

**Requirements**:
- Create generic `BinaryTree<T>` class
- Create generic `PriorityQueue<T>` class
- Create generic `Graph<T>` class
- Implement traversal and search algorithms
- Use generics for flexible data types

**Expected Output**:
```
Generic Data Structures:

Binary Tree (Integer):
Tree structure:
    5
   / \
  3   7
 / \   \
1   4   9

Inorder traversal: [1, 3, 4, 5, 7, 9]
Preorder traversal: [5, 3, 1, 4, 7, 9]
Postorder traversal: [1, 4, 3, 9, 7, 5]

Priority Queue (String):
Enqueued: Task1(3), Task2(1), Task3(5), Task4(2)
Dequeued: Task3, Task1, Task4, Task2

Graph (String):
Vertices: [A, B, C, D, E]
Edges: A->B, A->C, B->D, C->E, D->E
BFS from A: [A, B, C, D, E]
DFS from A: [A, B, D, E, C]
```

## Exercise 5: Collection Performance Analysis

**Problem**: Analyze and compare performance of different collection types.

**Requirements**:
- Measure performance of different collection operations
- Compare ArrayList vs LinkedList vs HashSet vs HashMap
- Analyze memory usage and time complexity
- Create performance benchmarks

**Expected Output**:
```
Collection Performance Analysis:

ArrayList vs LinkedList (10000 elements):
Operation          | ArrayList | LinkedList
------------------|-----------|------------
Add at end        | 2ms       | 1ms
Add at start      | 15ms      | 1ms
Access by index   | 1ms       | 5ms
Remove by index   | 8ms       | 4ms
Search by value   | 12ms      | 15ms

HashSet vs TreeSet (10000 elements):
Operation          | HashSet   | TreeSet
------------------|-----------|--------
Add element       | 3ms       | 8ms
Contains element  | 1ms       | 3ms
Remove element    | 2ms       | 4ms
Iterate all       | 5ms       | 6ms

HashMap vs TreeMap (10000 elements):
Operation          | HashMap   | TreeMap
------------------|-----------|--------
Put key-value     | 4ms       | 10ms
Get by key        | 2ms       | 4ms
Remove by key     | 3ms       | 5ms
Iterate entries   | 6ms       | 7ms

Memory Usage Analysis:
ArrayList: 400KB
LinkedList: 800KB
HashSet: 600KB
HashMap: 1.2MB
```

## Exercise 6: Generic Algorithms and Utilities

**Problem**: Implement generic algorithms and utility functions.

**Requirements**:
- Create generic sorting algorithms
- Implement generic search algorithms
- Create utility functions for collections
- Use generics for algorithm flexibility

**Expected Output**:
```
Generic Algorithms and Utilities:

Generic Sorting:
Original: [banana, apple, cherry, date]
Sorted: [apple, banana, cherry, date]

Original: [5, 2, 8, 1, 9, 3]
Sorted: [1, 2, 3, 5, 8, 9]

Generic Search:
Array: [apple, banana, cherry, date, elderberry]
Linear search for 'cherry': Found at index 2
Binary search for 'date': Found at index 3
Binary search for 'fig': Not found

Generic Utilities:
Reverse: [elderberry, date, cherry, banana, apple]
Shuffle: [cherry, elderberry, apple, date, banana]
Rotate left by 2: [cherry, date, elderberry, apple, banana]
Rotate right by 1: [banana, cherry, date, elderberry, apple]

Collection Statistics:
Numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Sum: 55
Average: 5.5
Min: 1
Max: 10
Variance: 8.25
```

## Learning Objectives

By completing these exercises, you will:
- ✅ Understand and implement generic collections
- ✅ Use bounded generics and wildcards effectively
- ✅ Implement advanced collection operations
- ✅ Create generic data structures
- ✅ Analyze collection performance characteristics
- ✅ Write type-safe and reusable code
- ✅ Apply generics to algorithms and utilities

## Tips for Success

1. **Understand Type Erasure**: Generics are compile-time features
2. **Use Bounded Generics**: Constrain types when needed
3. **Choose Right Collections**: Consider performance characteristics
4. **Handle Wildcards**: Use `? extends T` and `? super T` appropriately
5. **Test with Different Types**: Ensure generics work with various data types

## Next Steps

After completing these exercises:
- Explore Java Stream API and functional programming
- Study advanced generic patterns and constraints
- Learn about collection frameworks in other languages
- Practice with real-world collection scenarios
