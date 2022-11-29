let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 1; index < numbers.length; index += 1) {
    for (index2 = 0; index2 < numbers.length - index; index2 += 1){
        if (numbers[index2] > numbers [index2 + 1]) {
            let position = numbers[index2]
            numbers[index2] = numbers[index2 + 1]
            numbers[index2 + 1] = position
        }
    }
}

console.log(numbers);

for (index = 1; index < numbers.length; index += 1) {
    for (index2 = 0; index2 < numbers.length - index; index2 += 1){
        if (numbers[index2] < numbers [index2 + 1]) {
            let position = numbers[index2]
            numbers[index2] = numbers[index2 + 1]
            numbers[index2 + 1] = position
        }
    }
}

console.log(numbers);