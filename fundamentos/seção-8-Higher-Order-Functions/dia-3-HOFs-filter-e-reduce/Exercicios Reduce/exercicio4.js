const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// const expectedResult = 20;

const countA = () => {
  const counter = names.map((name) => name.toLowerCase().split('').filter((item) => item.includes('a')));
  return counter.reduce((acc, curr) => acc + curr.length, 0);
}

console.log(countA());

// console.log(names.map((name) => name.toLowerCase().split('').filter((item) => item.includes('a')).length));