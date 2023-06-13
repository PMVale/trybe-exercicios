const readline = require('readline-sync');

const operation = (a, b, c) => {
  if(isNaN(a) || isNaN(b) || isNaN(c)) throw new Error('Informe apenas números');
  const result = (a + b) * c;
  if (result < 50) throw new Error('Valor muito baixo');
  return Promise.resolve(result);
};

console.log(operation(readline.questionInt('Qual o primeiro numero?'), readline.questionInt('Qual o segundo numero?'), readline.questionInt('Qual o terceiro numero?')));