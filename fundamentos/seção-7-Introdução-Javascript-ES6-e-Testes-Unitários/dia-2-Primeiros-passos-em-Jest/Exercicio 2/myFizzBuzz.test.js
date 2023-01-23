function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

describe('Exercicio 2', () => {
  test('Executa a função, sendo num um número divisivel por 3 e 5, e verifica se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Executa a função, sendo num um número divisivel por 3, e verifica se o retorno é o esperado', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  test('Executa a função, sendo num um número divisivel por 5, e verifica se o retorno é o esperado', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  test('Executa a função, sendo num um número que não é divisivel por 3 e 5, e verifica se o retorno é o esperado', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  test('Executa a função, sendo num um parâmetro que não é um número, e verifica se o retorno é o esperado', () => {
    expect(myFizzBuzz('15')).toBe(false);
  });
})