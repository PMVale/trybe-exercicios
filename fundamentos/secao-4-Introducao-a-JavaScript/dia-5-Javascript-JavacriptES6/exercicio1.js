function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}

imprimeIdade();



// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
const pessoa = {
  nome: 'Henri',
  idade: 20
}
// pessoa = {
//   nome: 'Luna',
//   idade: 19
// } // Altere essa estrutura para corrigir o erro.

// pessoa.nome = [pessoa.nome, 'Luna']; para não subscrever o anterior
// pessoa.idade = [pessoa.idade, 19];

pessoa.nome = 'Luna';
pessoa.idade = 19;

console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);



// const favoriteFood = ['Lasanha']; Para manter como const
// favoriteFood.push('Hamburguer'); Para adicionar ao anterior
// favoriteFood[0] = 'Hamburguer';
// console.log(favoriteFood);

let favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);




const name = 'Adriana';
const lastName = 'Soares';
// console.log('Olá' + ',' + name + ' ' + lastName + '!');
console.log(`Olá, ${name} ${lastName}!`)
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
// console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
console.log(`O resultado da some de ${a} e ${b} é: ${a+b}`);



// function numeroAleatorio() {
//   return Math.random()
// }
const numeroAleatorio = () => Math.random();

console.log(numeroAleatorio());



// function hello(nome) {
//   return `Olá, ${nome}!`
// }

const hello = nome => `Olá, ${nome}!`
let nome = 'Ivan';
console.log(hello(nome));



// function nomeCompleto(nome, sobrenome) {
//   return `${nome} ${sobrenome}`
// }

const nomeCompleto = (nome2, sobrenome) => `${nome2} ${sobrenome}`
let nome2 = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome2, sobrenome));



let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
const speedCar = speed => speed >= 120? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
console.log(speedCar(speed));