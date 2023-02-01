const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Apenas com reduce
const evenSum = (acc, number) => number % 2 === 0 ? acc + number : acc;

const sumNumbers = (array) => array.reduce((evenSum), 0);

console.log(sumNumbers(numbers)); // 152

const teste = numbers.reduce((acc, number) => number % 2 === 0 ? acc + number : acc);

console.log(teste); // 152

//Com filter e reduce
const even = numbers.filter((number) => number % 2 === 0);

const sumEven = even.reduce((acc, number) => acc + number, 0);

console.log(sumEven); // 152
