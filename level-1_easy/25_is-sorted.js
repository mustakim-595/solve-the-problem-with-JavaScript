/*
 * Topic: Check if an Array Is Sorted
 * Difficulty: Easy
 */

// Input
const numbers = [1, 2, 3, 4, 5, 10];

// Function
const isSorted = (numbers) => {
    let compareNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < compareNumber) {
            return false
        }
        compareNumber = numbers[i];
    }

    return true
};

// Output
console.log(isSorted(numbers));