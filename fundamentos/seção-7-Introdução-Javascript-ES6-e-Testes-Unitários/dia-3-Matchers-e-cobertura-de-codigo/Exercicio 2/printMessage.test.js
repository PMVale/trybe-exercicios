const {info, printMessage} = require('./printMessage');

describe('Exercicio 2 e 3', () => {
  it('Check if object includes propriety personagem', () => {
    expect(info).toHaveProperty('personagem');
  });
  it('Check if response contains info Boas vindas,', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
  });
  it('Check if error message is objeto inválido if input doesnt exist or it doesnt contain property personagem', () => {
    expect(() => {
      printMessage().toThrow('objeto inválido');
    });
  });
});
