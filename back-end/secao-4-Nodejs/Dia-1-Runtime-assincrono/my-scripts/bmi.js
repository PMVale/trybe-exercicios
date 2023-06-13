const readline = require('readline-sync');

const imc = (weight, height) => {
  const result = weight/height**2;
  if (result < 18.5) {
    console.log({Resultado: result, IMC: 'Abaixo de 18,5', Situação: 'Abaixo do peso (magreza)'});
    return result; 
  }
  if (result > 18.5 && result < 24.9) {
    return console.log({Resultado: result, IMC: 'Entre 18,5 e 24,9', Situação: 'Peso normal'});
  }
  if (result > 25.0 && result < 29.9) {
    console.log({Resultado: result, IMC: 'Entre 25,0 e 29,9', Situação: 'Acima do peso (sobrepeso)'});
    return result; 
  }
  if (result > 30.0 && result < 34.9) {
    console.log({Resultado: result, IMC: 'Entre 30,0 e 34,9', Situação: 'Obesidade grau I'});
    return result; 
  }
  if (result > 35.0 && result < 39.9) {
    console.log({Resultado: result, IMC: 'Entre 35,0 e 39,9', Situação: 'Obesidade grau II'});
    return result; 
  }
  console.log({Resultado: result, IMC: '40,0 e acima', Situação: 'Obesidade grau III e IV'});
  return result; 
};

console.log(imc(readline.question('Whats your weight?'), readline.questionFloat('Whats your height')));