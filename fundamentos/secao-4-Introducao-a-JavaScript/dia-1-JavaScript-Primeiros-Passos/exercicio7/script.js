let a = 5;
let b = 6;

console.log(a + b);

console.log(a - b);

console.log(a * b);

console.log(a / b);

console.log(a % b);

if (a > b) {
    console.log('O número ' + a + ' é maior que ' + b);
} else if(a === b) {
    console.log('Os números são iguais')
} else if (a < b) {
    console.log('O número ' + b + ' é maior que ' + a);
} else {
    console.log('Informação incorreta')
}

let c = 8;

if (a>b && a>c) {
    console.log('O número ' + a + ' é maior que ' + b + ' e ' + c);
} else if (b>a && b>c) {
    console.log('O número ' + b + ' é maior que ' + a + ' e ' + c);
} else if (c>a && c>b) {
    console.log('O número ' + c + ' é maior que ' + a + ' e ' + b);
} else {
    console.log('Informação incorreta');
}

let bundle = [5, 6, 8];
let result = 0

for (i=0; i < bundle.length; i++) {
    if (bundle[i] > result) {
        result = bundle[i];
    }
}

console.log(result);