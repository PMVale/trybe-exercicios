function romanNumber (string) {
  let romanNumber = ['I', 'II', 'III' , 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let index = 0; index < romanNumber.length; index += 1) {
    if (string === romanNumber[index]) {
      return `| ${romanNumber[index]} | ${number[index]} |`
    }
  }
}

console.log(romanNumber('I'));