const books = require('./books');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

const oldBooks = (data) => data.filter((book) => 2023 - book.releaseYear > 60).map((book) => book.name);

console.log(oldBooks(books));
