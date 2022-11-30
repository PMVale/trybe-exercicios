let result = 1;

for (let index = 10; index > 0; index -= 1) {
  result *= index;
}

console.log(result);

let word = 'tryber';
let invertedWord = '';

for (let index = (word.length -1); index >= 0; index -= 1) {
  invertedWord += word[index];
}


console.log(word);
console.log(invertedWord);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = array[0];
let smallerWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (biggerWord.length < array[index].length) {
    biggerWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (smallerWord.length > array[index].length) {
    smallerWord = array[index];
  }
}

console.log(biggerWord);
console.log(smallerWord);


let number = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    number = currentNumber;
  }
}

console.log(number);