const books = require('./books');

const authorUnique = (data) => {
  let checker = true;
  data.forEach((book) => data.some((someBook) => {
    if (someBook.author.birthYear === book.author.birthYear && someBook.author.name !== book.author.name) {
      checker = false;
    }
  }));
  return checker;
};


console.log(authorUnique(books));


// const expectedResult = false;

// const authorUnique = () => {
//   return books.every((book) =>
//     !books.some((bookSome) =>
//       (bookSome.author.birthYear === book.author.birthYear)
//       && (bookSome.author.name !== book.author.name)));
// }

// console.log(authorUnique())