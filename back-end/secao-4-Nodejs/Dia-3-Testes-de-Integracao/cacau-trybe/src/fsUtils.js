const fs = require('fs').promises;

const path = require('path');

const chocolatesPath = path.resolve(__dirname, 'CacauTrybeFile.json');

const readChocolates = async () => {
  const data = await fs.readFile(chocolatesPath);
  const chocolates = JSON.parse(data);
  return chocolates;
}

const editChocolate = async (data) => {
  fs.writeFile(chocolatesPath, JSON.stringify(data));
};

module.exports = {
  readChocolates,
  editChocolate,
}