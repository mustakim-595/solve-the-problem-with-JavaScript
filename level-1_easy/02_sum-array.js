
// Array · Loop · Accumulator

const numbers = [287, 40, 6, 89, 5];

const sumArray = (numbers) => {
    
    let sum = 0;

    for (const number of numbers) {
        sum = sum + number;
    };

    return sum;
};

console.log(sumArray(numbers));