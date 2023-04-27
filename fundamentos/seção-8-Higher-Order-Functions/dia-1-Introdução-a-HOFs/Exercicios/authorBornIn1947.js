const books = require('./books');

const authorBornIn1947 = (data) => {
  return data.find((book) => book.author.birthYear === 1947).author.name;
};

console.log(authorBornIn1947(books));
