a = 10
b = 5

my_List = [a + b, a - b, a * b, a / b, a // b, a ** b, a % b]

for values in my_List:
  print(values)

hours = 6
minutes = hours * 60
seconds = minutes * 60

print(hours)
print(minutes)
print(seconds)

books = 60
book_price = (1 - 0.4) * 24.20
logistic = 3 + (books - 1) * 0.75
cost = books * book_price  + logistic
print(cost)

trybe_course = ["Introdução", "Front-end", "Back-end"]

trybe_course.append('Ciência da Computação')

trybe_course[0] = 'Fundamentos'

print(trybe_course)

my_data = set()

my_data.add('Pedro')

print(my_data)

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info['recorrente'] = 'Sim'

# info.pop('origem')
del info["origem"]

print(info)

my_array = [20, 20, 1, 2]

freq = {}

for item in my_array:
    if (item in freq):
      freq[item] += 1
    else:
      freq[item] = 1

for key, valor in freq.items():
    print(f'{key}: {valor}')