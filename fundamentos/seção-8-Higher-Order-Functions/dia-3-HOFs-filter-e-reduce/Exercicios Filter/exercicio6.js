const books = require('./books');

const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => books.find((book) => book.author.name.split('.').length === 4).name;

console.log(authorWith3DotsOnName());