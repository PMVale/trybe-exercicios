const mapString = (objectMap, string) => {
  const splitString = string.split('');
  const mappedArray = [];
  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];
    
    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }
  return mappedArray.join('');
}
const encode = (string) => {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}
const decode = (string) => {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
}

describe('Exercicio 3', () => {
  test('Verifica se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  test('Verifica se as vogais a,e,i,o,u são convertidas em 1,2,3,4,5 respectivamente com a função encode', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  test('Verifica se os numeros 1,2,3,4,5 são convertidos para a,e,i,o,u respectivamente com a função decode', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  test('Verifica se apenas as demais letras e numeros não são convertidas', () => {
    expect(encode('teste')).toBe('t2st2');
    expect(decode('62626')).toBe('6e6e6');
  });
  test('Verifica se a string retornada tem o mesmo número de caracteres do que a string passada como parâmetro', () => {
    const palavra = 'teste';

    const numero = '62626';

    expect(encode(palavra).length).toBe(palavra.length);

    expect(decode(numero).length).toBe(numero.length);
  });
})