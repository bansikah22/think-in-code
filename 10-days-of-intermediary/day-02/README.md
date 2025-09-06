# Day 2: Algorithms & Problem Solving

## Concept Explanation

Algorithms are step-by-step procedures for solving problems. Understanding algorithms helps you write efficient, scalable code and solve complex programming challenges.

### Key Algorithm Concepts

#### Time Complexity
- **O(1)**: Constant time - operations that take the same time regardless of input size
- **O(n)**: Linear time - operations that scale linearly with input size
- **O(n²)**: Quadratic time - operations that scale with the square of input size
- **O(log n)**: Logarithmic time - operations that reduce the problem size by half each step

#### Space Complexity
- How much additional memory an algorithm uses
- Important for memory-constrained environments
- Often traded off against time complexity

#### Algorithm Design Techniques
- **Brute Force**: Try all possible solutions
- **Divide and Conquer**: Break problem into smaller subproblems
- **Dynamic Programming**: Store results of subproblems to avoid recomputation
- **Greedy**: Make locally optimal choices at each step

## Exercise 1: Sorting Algorithms Implementation

**Problem**: Implement and compare different sorting algorithms.

**Requirements**:
- Implement the following sorting algorithms:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
- Compare their performance on different array sizes
- Analyze time complexity of each algorithm

**Expected Output**:
```
Original array: [64, 34, 25, 12, 22, 11, 90]
Bubble Sort: [11, 12, 22, 25, 34, 64, 90]
Selection Sort: [11, 12, 22, 25, 34, 64, 90]
Insertion Sort: [11, 12, 22, 25, 34, 64, 90]
Merge Sort: [11, 12, 22, 25, 34, 64, 90]
Quick Sort: [11, 12, 22, 25, 34, 64, 90]

Performance Comparison (1000 elements):
Bubble Sort: 45ms (O(n²))
Selection Sort: 38ms (O(n²))
Insertion Sort: 25ms (O(n²))
Merge Sort: 8ms (O(n log n))
Quick Sort: 6ms (O(n log n))
```

## Exercise 2: Search Algorithms

**Problem**: Implement and compare different search algorithms.

**Requirements**:
- Implement the following search algorithms:
  - Linear Search
  - Binary Search (for sorted arrays)
  - Jump Search
- Compare their performance on different array sizes
- Handle edge cases (element not found, empty array, etc.)

**Expected Output**:
```
Array: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
Searching for: 12

Linear Search: Found at index 5 (6 comparisons)
Binary Search: Found at index 5 (3 comparisons)
Jump Search: Found at index 5 (2 comparisons)

Searching for: 15
Linear Search: Not found (10 comparisons)
Binary Search: Not found (4 comparisons)
Jump Search: Not found (3 comparisons)
```

## Exercise 3: Dynamic Programming - Fibonacci

**Problem**: Implement different approaches to calculate Fibonacci numbers.

**Requirements**:
- Implement recursive Fibonacci (naive approach)
- Implement memoized Fibonacci (top-down DP)
- Implement iterative Fibonacci (bottom-up DP)
- Compare performance and understand the difference

**Expected Output**:
```
Calculating Fibonacci(40):

Recursive approach: 102334155 (took 2.5 seconds)
Memoized approach: 102334155 (took 0.001 seconds)
Iterative approach: 102334155 (took 0.0001 seconds)

Time Complexity Analysis:
- Recursive: O(2^n) - exponential
- Memoized: O(n) - linear
- Iterative: O(n) - linear with constant space
```

## Exercise 4: Two Pointers Technique

**Problem**: Solve problems using the two pointers technique.

**Requirements**:
- Implement solutions for:
  - Find pair with given sum in sorted array
  - Remove duplicates from sorted array
  - Check if array has a triplet with given sum
  - Find container with most water
- Understand when to use two pointers technique

**Expected Output**:
```
Array: [1, 4, 6, 8, 10, 45]
Target sum: 16

Pair with sum 16: [6, 10]

Array with duplicates: [1, 1, 2, 2, 3, 4, 4, 5]
After removing duplicates: [1, 2, 3, 4, 5]

Array: [1, 4, 6, 8, 10, 45]
Triplet with sum 22: [4, 8, 10]

Heights: [1, 8, 6, 2, 5, 4, 8, 3, 7]
Max water container: 49
```

## Exercise 5: Sliding Window Technique

**Problem**: Solve problems using the sliding window technique.

**Requirements**:
- Implement solutions for:
  - Find maximum sum of k consecutive elements
  - Find smallest subarray with sum >= target
  - Find longest substring without repeating characters
  - Find all anagrams of a pattern in a string
- Understand when to use sliding window technique

**Expected Output**:
```
Array: [2, 1, 5, 1, 3, 2]
K: 3

Maximum sum of 3 consecutive elements: 9 (subarray: [5, 1, 3])

Array: [2, 1, 5, 2, 3, 2]
Target: 7

Smallest subarray with sum >= 7: [5, 2] (length: 2)

String: "abcabcbb"
Longest substring without repeating characters: "abc" (length: 3)

String: "cbaebabacd"
Pattern: "abc"
Anagrams found at indices: [0, 6]
```

## Exercise 6: Greedy Algorithms

**Problem**: Implement and understand greedy algorithms.

**Requirements**:
- Implement solutions for:
  - Activity Selection Problem
  - Fractional Knapsack Problem
  - Minimum number of coins for change
  - Job Scheduling Problem
- Understand when greedy approach works and when it doesn't

**Expected Output**:
```
Activity Selection:
Activities: [(1,4), (3,5), (0,6), (5,7), (3,8), (5,9), (6,10), (8,11), (8,12), (2,13), (12,14)]
Selected activities: [(1,4), (5,7), (8,11), (12,14)]
Total activities: 4

Fractional Knapsack:
Items: [(60,10), (100,20), (120,30)]
Knapsack capacity: 50
Maximum value: 240 (fractional selection)

Coin Change:
Amount: 67
Coins: [25, 10, 5, 1]
Minimum coins needed: 5 (25+25+10+5+1+1)

Job Scheduling:
Jobs: [(1,2,100), (2,1,19), (3,2,27), (4,1,25), (5,1,15)]
Maximum profit: 142
```

## Learning Objectives

By completing these exercises, you will:
- ✅ Understand different algorithm design techniques
- ✅ Analyze time and space complexity of algorithms
- ✅ Implement common sorting and searching algorithms
- ✅ Apply dynamic programming to solve problems efficiently
- ✅ Use two pointers and sliding window techniques
- ✅ Understand when to use greedy algorithms
- ✅ Compare different approaches to the same problem

## Tips for Success

1. **Start Simple**: Begin with brute force solutions, then optimize
2. **Draw It Out**: Visualize algorithms with diagrams and examples
3. **Test Edge Cases**: Always test with empty arrays, single elements, etc.
4. **Measure Performance**: Use timing functions to compare algorithms
5. **Understand Trade-offs**: Consider time vs space complexity trade-offs

## Next Steps

After completing these exercises:
- Practice on platforms like LeetCode, HackerRank, or Codeforces
- Implement more advanced algorithms (graph algorithms, string algorithms)
- Study algorithm design patterns and techniques
- Learn about algorithm optimization and parallel algorithms
