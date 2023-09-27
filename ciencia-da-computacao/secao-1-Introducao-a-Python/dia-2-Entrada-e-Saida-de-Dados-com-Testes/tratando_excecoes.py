recuperacao = []

with open('alunos.txt', 'r') as file:
  for line in file:
    if (int(line.split(' ')[1]) < 6):
      recuperacao.append(line.split(' ')[0] + '\n')

with open('recuperacao.txt', 'w') as recu_students:
  print(recuperacao)
  recu_students.writelines(recuperacao)