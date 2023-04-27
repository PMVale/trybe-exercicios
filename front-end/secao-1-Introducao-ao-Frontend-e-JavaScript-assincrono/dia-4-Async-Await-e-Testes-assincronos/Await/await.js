const a = funcaoQueRetornaPromise();
const b = await funcaoQueRetornaPromise();

console.log(a) // Aqui o console vai imprimir a Promise em si. 
console.log(b) // Aqui o console vai imprimir o resultado da Promise