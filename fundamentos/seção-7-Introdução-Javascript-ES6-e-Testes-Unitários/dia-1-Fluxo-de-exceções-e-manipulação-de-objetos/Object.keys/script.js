const student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

const skillLevel = (student) => {
   const skillArray = Object.keys(student);
  for (let index = 0; index < skillArray.length; index += 1) {
    console.log(`${skillArray[index]}, Nível: ${student[skillArray[index]]}`)
  }
};

console.log('Estudante 1');
skillLevel(student1);
console.log('Estudante 2');
skillLevel(student2);