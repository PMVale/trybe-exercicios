const books = require('./books');

const getNamedBook = (data) => {
  return data.find((book) => book.name.length === 26);
}

console.log(getNamedBook(books));