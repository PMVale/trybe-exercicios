let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

console.log(numbers);

let sum = numbers.reduce((a, b) => a + b, 0);

console.log(sum);

let average = sum / numbers.length;

console.log(average);

if (average > 20) {
    console.log('Valor maior que 20');
} else if (average <= 20) {
    console.log('Valor menor ou igual a 20');
}

let highestValue = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestValue) {
        highestValue = numbers[index];
    }
}

console.log(highestValue);

let oddCount = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        oddCount +=1;
    }
}

if (oddCount === 0) {
    console.log('Nenhum valor ímpar encontrado')
}

console.log(oddCount);

let lowestValue = sum;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < lowestValue) {
        lowestValue = numbers[index];
    }
}

console.log(lowestValue);

let newArray = [];

for (let index = 1; index < 26; index += 1) {
    newArray.push(index);
}

console.log(newArray);

for (index = 0; index < newArray.length; index += 1) {
    console.log(newArray[index] / 2);
}
