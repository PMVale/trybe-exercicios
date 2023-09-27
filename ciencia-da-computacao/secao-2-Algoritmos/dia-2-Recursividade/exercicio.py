def iterative_count_even(number):
  count = 0
  for n in range(1, number + 1):
    if n % 2 == 0:
      count += 1
  return count

# print(iterative_count_even(4))

def recursive_count_even(number):
  if number == 1:
    return 0
  elif number % 2 == 0:
    return 1 + recursive_count_even(number - 1)
  else:
    return recursive_count_even(number - 1)

# print(recursive_count_even(4))

def biggest_int(list):
  if len(list) == 0:
    return 0
  else:
    first = list[0]
    rest = biggest_int(list[1:])
    return max(first, rest)
    

# print(biggest_int([1, 7, 3, 4]))

def max_common_divisor(a, b):
  if b == 0:
    return a
  return max_common_divisor(b, a % b)

print(max_common_divisor(13, 200))

print(2 % 1)
