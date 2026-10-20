
// Find the second largest number

const numbers = [-10, -5, -20];

const findSecondLargest = (numbers) => {
    if (numbers.length === 0) {
        return null;
    };
    let maxNumber = numbers[0];
    let secondLargestNumber = null;

    // Calculate maximum number
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        };
    };

    for (let i = 0; i < numbers.length; i++) {
        if (
            numbers[i] < maxNumber &&
            (
                secondLargestNumber === null ||
                numbers[i] > secondLargestNumber
            )
        ) {
            secondLargestNumber = numbers[i];
        }
    };

    return secondLargestNumber;
};

console.log(findSecondLargest(numbers));