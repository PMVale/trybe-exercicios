def show_higher (num1, num2):
  # result = 0
  # if num1 > num2:
  #     result = num1
  # else:
  #     result = num2
  # return result
  if num1 > num2:
    return num1
  return num2

def average (list):
  sum = 0
  for number in list:
    sum += number
  return sum / len(list)

def square (number):
  counter = 0
  while counter < number:
    print(number * '*')
    counter += 1

# square(5)

def longest_name (name_list):
  check = name_list[0]
  for name in name_list:
    if len(check) < len(name):
      check = name
  return check

# print(longest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

def paint_cost_per_area (area):
  can = 0
  price = 0
  liters = area / 3
  while liters > 18:
    price += 80
    can += 1
    liters -= 18
  return (can, price)

# print(paint_cost_per_area(900))

def check_triangle (side1, side2, side3):
  is_triangle = (
    side1 + side2 > side3 and
    side2 + side3 > side1 and
    side1 + side3 > side2
  )

  if is_triangle:
    return 'Não é triângulo'
  elif side1 == side2 == side3:
    return 'Triângulo equilátero'
  elif side1 == side2 or side1 == side3 or side2 == side3:
    return 'Triângulo isósceles'
  else:
    return 'Triângulo escaleno'
  
def show_smaller (number_list):
  check = number_list[0]
  for number in number_list:
    if check > number:
      check = number
  return check

# print(show_smaller([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))

def create_triangle (number):
  # counter = 0
  # numbers = range(number + 1)
  # while counter < number:
  #   counter += 1
  #   print(numbers[counter] * '*')
  for int in range(number + 1):
    print(int * '*')

# create_triangle(5)

def sum_sequence (number):
  sum = 0
  for number in range(number + 1):
    sum += number
  return sum

# print(sum_sequence(5))

def fuel_price (liters, type):
  liter_price = 0
  discount = 0
  if type == 'A':
    liter_price = 1.90
    discount = 0.03
    if liters > 20:
      discount = 0.05
  elif type == 'G':
    liter_price = 2.50
    discount = 0.04
    if liters > 20:
      discount = 0.06
  else:
    return 'Tipo de combustível não encontrado'
  total = liter_price * liters
  total -= total * discount
  return total


# print(fuel_price(20,'b'))

def battleship (target):
  board = [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0]
  split_board = []
  size = 5
  for index in range(0, len(board), size):
    split_board.append(board[index:index + size])
  print(split_board)
  if split_board[target[0]][target[1]] == 1:
    return True
  return False

print(battleship((0, 0)))