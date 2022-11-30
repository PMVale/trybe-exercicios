let sum = 0;

for (let index = 0; index <= 100; index += 1) {
  sum += index;
}

console.log(sum);


let result = 100;
let count = 0;
for (let index = 0; index <= 100; index += 1) {
  if (result > 0) {
    result -= 5;
    count += 1;
  }
}

console.log(count);