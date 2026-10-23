
/*
 * Topic: Count Frequency of a Number
 * Difficulty: Easy
 */

// Input
const numbers = [2, 5, 2, 8, 2, 5];
const target = 2;

// Function
const countFrequency = (numbers, target) => {
    let countTarget = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            countTarget++;
        };
    };

    return countTarget;
};

// Output
console.log(countFrequency(numbers, target));
