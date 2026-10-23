
/*
 * Topic: Remove Duplicates Without Set
 * Difficulty: Easy
 */

// Input
const numbers = [10, 10, 20, 30, 20, 40, 40];

// Function
const removeDuplicates = (numbers) => {
    return [...new Set(numbers)];
};

// Output
console.log(removeDuplicates(numbers)); 