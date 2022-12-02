function verifyPalindrome (word) {
  let reverse = word.split('').reverse().join('')
  if (word != reverse) {
    return false;
  } else {
    return true;
  }
}


console.log(verifyPalindrome('arara'));



function highestIndex (array) {
  let highest = 0;
  let highestIndex = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (highest < array[index]) {
      highest = array[index];
      highestIndex = index;
    }
  }
  return highestIndex;
}

console.log(highestIndex([2, 3, 6, 7, 10, 1]));



function lowestIndex (array) {
  let lowest = array.reduce((a, b) => a + b, 0);
  let lowestIndex = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (lowest > array[index]) {
      lowest = array[index];
      lowestIndex = index;
    }
  }
  return lowestIndex;
}

console.log(lowestIndex([2, 4, 6, 7, 10, 0, -3]));



function longestName (names) {
  let longest = '';
  for (let index = 0; index < names.length; index += 1) {
    if (longest.length < names[index].length) {
      longest = names[index];
    }
  }
  return longest
}

console.log(longestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));



function mostRepeated (numbers) {
  let mostRepeated = [];
  let repeat = 0;
  let repeatCount = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    for (let count = 0; count < numbers.length; count += 1) {
      if (numbers[index] === numbers[count]) {
        repeatCount += 1
      }
      if (repeatCount >= repeat) {
        repeat = repeatCount;
        if (mostRepeated[index] != numbers[index] && !mostRepeated.includes(numbers[index])) {
          mostRepeated.push(numbers[index]);
        }
      }
    }
    repeatCount = 0;
  }
  return mostRepeated
}

console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3]));



function sumSequence (number) {
  let sum = 0;
  for (let index = 1; index <= number; index += 1) {
    sum = sum + index;
  }
  return sum
}

console.log(sumSequence(5));



function wordEnding (word, ending) {
  word = word.split('');
  ending = ending.split('');
  let verifyEnding = true;
  for (index = 0; index < ending.length; index += 1) {
    if (word[word.length - ending.length + index] != ending[index]) {
      verifyEnding = false;
    }
  }
  return verifyEnding;
}
console.log(wordEnding('trybe', 'be'));
console.log(wordEnding('joaofernando', 'fernan'));