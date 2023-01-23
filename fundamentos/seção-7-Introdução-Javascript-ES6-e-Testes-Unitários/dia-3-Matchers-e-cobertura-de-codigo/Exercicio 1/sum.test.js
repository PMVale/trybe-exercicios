const sum = require('./sum');

describe('Function sum', () => {
  it('Sum of 4 and 5 to be 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Sum of 0 and 0 to be 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Error if it receives an argument that isnt a number', () => {
    expect(() => {
      sum(4, '5').toThrow();
    });
  });
  it('Check if error message when receiving an input that isnt a number is parameters must be numbers', () => {
    expect(() => {
      sum(4, '5').toThrow(Error('parameters must be numbers'));
    });
  });
});