# name = input('Insira seu nome:')

# for letter in name:
#   print(letter)

import sys

sum = 0
for param in sys.argv:
  if not param.isdigit():
    print(f'Erro ao somar valores, {param} é um valor inválido')
  else:
    sum += int(param)

print(f'A soma dos valores válidos é: {sum}')