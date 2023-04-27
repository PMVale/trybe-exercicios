const books = require('./books');

const smallerName = (data) => {
  let name = data[0].name;
  data.forEach((book) => {
    if (book.name.length < name.length) {
      name = book.name;
    }
  });
  return name;
}

console.log(smallerName(books));
// console.log(books[0].name);