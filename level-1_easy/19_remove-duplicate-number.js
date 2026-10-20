
/*
 * Topic: Remove Duplicate Numbers
 * Difficulty: Easy
 */

// Input
const numbers = [5, 3, 5, 2, 3, 8];

// Function
const removeDuplicates = (numbers) => {
    const uniqueNumbers = [...new Set(numbers)]

    return uniqueNumbers
};

// Output
console.log(removeDuplicates(numbers));
