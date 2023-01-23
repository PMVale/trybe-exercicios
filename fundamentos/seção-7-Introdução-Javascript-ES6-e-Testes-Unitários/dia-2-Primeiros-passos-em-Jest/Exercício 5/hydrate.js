const hydrate = (string) => {
  let array = string.split('');
  let check = 0;
  for (let value of array) {
    if (isNaN(Math.floor(value)) === false) {
      check += Math.floor(value);
    };
  };
  if (check === 1) {
    return `${check} copo de água`;
  };
  if (check > 1) {
    return `${check} copos de água`;
  };
};

module.exports = hydrate;