/*
 * Topic: Remove Duplicates Without Set
 * Difficulty: Easy
 */

// Input
const numbers = [10, 10, 20, 30, 20, 40, 40];

// Function
const removeDuplicates = (numbers) => {
    let uniqueNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const isUnique = uniqueNumbers.includes(numbers[i]);
        if (!isUnique) {
            uniqueNumbers.push(numbers[i]);
        }
    }
    return uniqueNumbers
};

// Output
console.log(removeDuplicates(numbers));