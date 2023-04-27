const books = require('./books');

const everyoneWasBornOnSecXX = (data) => data.every((book) => book.author.birthYear > 1901);

console.log(everyoneWasBornOnSecXX(books));