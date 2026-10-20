
// Count the Even Numbers

const numbers = [2, 5, 8, 7, 1, 13, 26];

const countEvenNumber = (numbers) => {
    let count = 0;

    for (const number of numbers) {
        if ((number % 2) === 0) {
            count++;
        };
    };

    return count;
};

console.log(countEvenNumber(numbers));