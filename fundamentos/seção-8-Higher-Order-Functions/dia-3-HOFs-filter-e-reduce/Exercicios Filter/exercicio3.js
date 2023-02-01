const books = require('./books');

const expectedResult = [ 'Fundação', 'Duna' ];

const booksByAuthorBirthYear = (birthYear) => books.filter((book) => book.author.birthYear === birthYear).map((book) => book.name);

const result = booksByAuthorBirthYear(1920);

console.log(result);

