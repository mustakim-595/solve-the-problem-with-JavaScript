
/*
 * Topic: Reverse an Array
 * Difficulty: Easy
 */

// Input
const numbers = [1, 2, 3, 4, 5];

// Function
const reverseArray = (numbers) => {
    let reversedArry = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        reversedArry.push(numbers[i]);
    };
    return reversedArry
};

// Output
console.log(reverseArray(numbers));
