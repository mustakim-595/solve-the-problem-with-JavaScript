
/*
 * Topic: Find Common Numbers in Two Arrays
 * Difficulty: Easy
 */

// Input
const numbers1 = [1, 2, 3, 4, 3];
const numbers2 = [3, 4, 5, 6];

// Function
const findCommonNumbers = (numbers1, numbers2) => {
    let commonNumbers = [];
    for (let i = 0; i < numbers1.length; i++) {
        for (let j = 0; j < numbers2.length; j++) {
            if (numbers1[i] === numbers2[j]) {
                const uniqueNumber = commonNumbers.includes(numbers1[i]);
                if (!uniqueNumber) {
                    commonNumbers.push(numbers1[i])
                }
            }
        }
    }
    return commonNumbers
};

// Output
console.log(findCommonNumbers(numbers1, numbers2));
