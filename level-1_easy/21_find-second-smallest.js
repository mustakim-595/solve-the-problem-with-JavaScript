
/*
 * Topic: Find the Second Smallest Number
 * Difficulty: Easy
 */

// Input
const numbers = [7, 3, 9, 2, 5];

// Function
const findSecondSmallest = (numbers) => {
    let minNumber = numbers[0];
    let secondSmallest = null;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < minNumber) {
            minNumber = numbers[i];
        }
    };
    for (let i = 0; i < numbers.length; i++) {
        if (
            numbers[i] > minNumber &&
            (
                secondSmallest === null ||
                numbers[i] < secondSmallest
            )
        ) {
            secondSmallest = numbers[i];
        }
    };
    return secondSmallest
};

// Output
console.log(findSecondSmallest(numbers));
