const techList = (array, string) => {
  let finalObj = [];
  let baseObj = {};
  const input = array.sort();
  if (array.length <= 0) {
    return 'Vazio!';
  };
  for (let index = 0; index < input.length; index += 1) {
    baseObj.tech = input[index];
    baseObj.name = string;
    finalObj[index] = baseObj;
    baseObj = {};
  };
  return finalObj;
};

module.exports = techList;