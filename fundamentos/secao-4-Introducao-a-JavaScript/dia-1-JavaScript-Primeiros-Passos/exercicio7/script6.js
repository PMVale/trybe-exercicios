const a = 2;
const b = 14;
const c = 15;
let value;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    value = true;
} else {
    value = false;
}

console.log(value);

let value2;

if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1) {
    value2 = true;
} else {
    value2 = false;
}

console.log(value2);