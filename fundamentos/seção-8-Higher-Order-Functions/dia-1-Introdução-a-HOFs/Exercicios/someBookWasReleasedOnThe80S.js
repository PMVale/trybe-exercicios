const books = require('./books');

const someBookWasReleasedOnThe80S = (data) => data.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);

console.log(someBookWasReleasedOnThe80S(books));