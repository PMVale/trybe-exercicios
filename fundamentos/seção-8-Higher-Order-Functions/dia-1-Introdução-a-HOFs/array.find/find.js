const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade < 20); // 18

idades.find((idade) => idade > 50); // 73

idades.find((idade) => idade === 33); // undefined