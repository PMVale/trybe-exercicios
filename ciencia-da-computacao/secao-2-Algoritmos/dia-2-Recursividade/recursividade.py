def recursive_sum(n):
  if n == 0:
    return 0
  else:
    print(n)
    return n + sum(n - 1)


print(recursive_sum(4))