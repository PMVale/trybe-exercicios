def fatorial(num):
    total = 1
    for number in range(1, num + 1):
      total *= number
    print(total)

fatorial(5)


ratings = [6, 8, 5, 9, 10]

def conversion(list):
  new_list = []
  for index, rating in enumerate(list):
      new_list.append(rating * 10)
      if new_list[index] % 3 == 0:
          print(f'{new_list[index]} é múltiplo de 3')
  #   list[index] = rating * 10
  #   if list[index] % 3 == 0:
  #     print(f'{list[index]} é múltiplo de 3')
  # print(list) Esta forma acaba redefinindo os valores da variavel passada para a função
  print(new_list)

print(ratings)
conversion(ratings)
print(ratings)
