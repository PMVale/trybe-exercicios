def fizzbuzz (number):
  sequence = list(range(1, number + 1))
  for s_number in sequence:
    if s_number % 3 == 0 and s_number % 5 == 0:
      sequence[s_number - 1] = 'FizzBuzz'
    elif s_number % 3 == 0:
      sequence[s_number - 1] = 'Fizz'
    elif s_number % 5 == 0:
      sequence[s_number - 1] = 'Buzz'
  return sequence

# print(fizzbuzz(15))
