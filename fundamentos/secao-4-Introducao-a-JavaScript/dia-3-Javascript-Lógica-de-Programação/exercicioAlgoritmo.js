let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log('Valor menor que 16');
}


// const n = 9;

// let resultado = 100;
// for (let index = 0; index <= n; index += 1) {
//   resultado -= index;
// };
// console.log(resultado);

const n = 5;

let resultado = 0;
for (let index = 0; index <= n; index += 1) {
  resultado += index;
}
console.log(resultado);

