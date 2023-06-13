const fs = require('fs').promises;

const readData = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  // console.log(arrangedData);
  return simpsons;
};

const findCharacter = async (id) => {
  const data = await readData();
  const arrangedData = data.map((item) => `${item.id} - ${item.name}`);
  const searchData = arrangedData.find((item) => item.includes(id));
  if (!searchData) throw new Error('id não encontrado');
  // console.log(searchData);
  return searchData;
};

const filterCharacter = async (ids) => {
  const data = await readData();
  const arrangedData = data.map((item) => `${item.id} - ${item.name}`);
  let filteredData = arrangedData;
  ids.forEach((id) => {
    filteredData = filteredData.filter((item) => !item.includes(id))
  });
  console.log(filteredData);
  await fs.writeFile('./simpsons.json', JSON.stringify(filteredData));
};

// console.log(filterCharacter(['1', '3']));

const simpsonFamily = async () => {
  const data = await readData();
  const newData = [];
  const familyIds = ['1', '2', '3', '4'];
  familyIds.forEach((id) => {
    newData.push(data.filter((item) => item.id === id).pop());
  });
  console.log(newData);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newData));
}

// console.log(simpsonFamily());
// simpsonFamily();

const readFamilyData = async () => {
  const data = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons = JSON.parse(data);
  return simpsons;
}

const addFamilyMember = async (name) => {
  const data = await readFamilyData();
  // console.log(data);
  const newMember = {
    id: `${data.length + 1}`,
    name: name
  };
  const newData = [...data, newMember];
  console.log(newData);
  fs.writeFile('./simpsonFamily.json', JSON.stringify(newData));
}

// addFamilyMember('Nelson Muntz');

const replaceFamilyMember = async (removeName, addName) => {
  const data = await readFamilyData();
  const newData = data;
  newData.forEach((item) => {
    if (item.name === removeName) {
      item.name = addName
    }
  })
  console.log(newData);
  fs.writeFile('./simpsonFamily.json', JSON.stringify(newData));
};

// replaceFamilyMember('Nelson Muntz', 'Maggie Simpson');

addFamilyMember('Ajudante de Papai Noel');