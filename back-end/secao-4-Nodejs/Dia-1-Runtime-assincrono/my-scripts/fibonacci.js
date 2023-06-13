const handleFibonacci = (quantity) => {
  if(quantity <= 0 || !Number.isInteger(quantity)) return console.log('Use an integer value higher than 0');
  let sequence = [1, 2];
  if(quantity === 1) return console.log(sequence[0])
  for (let index = 1; index <= quantity -2; index += 1) {
    let newValue = sequence[index -1] + sequence[index];
    sequence.push(newValue);
  }
  console.log(sequence);
}

const readline = require('readline-sync');

handleFibonacci(readline.questionInt('What sequence length do you want?'));