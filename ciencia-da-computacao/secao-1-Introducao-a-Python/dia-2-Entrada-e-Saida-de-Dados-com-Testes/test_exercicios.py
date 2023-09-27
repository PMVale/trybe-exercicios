from exercicios2 import fizzbuzz

def test_fizzbuzz():
  'Verifies if the function results in the expected return'
  assert fizzbuzz(3) == [1, 2, 'Fizz']
  assert fizzbuzz(5)[-1] == 'Buzz'
  assert fizzbuzz(15)[-1] == 'FizzBuzz'