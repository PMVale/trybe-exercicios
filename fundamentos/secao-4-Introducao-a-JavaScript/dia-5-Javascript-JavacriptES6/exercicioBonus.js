const phrase = 'Tryber x aqui!';
function substituaX (word) {
  phraseArray = phrase.split(' ');
  // console.log(phraseArray);
  for (let index in phraseArray) {
    if (phraseArray[index] === 'x') {
      phraseArray[index] = word;
    }
  }
  return phraseArray.join(' ');
}

// console.log(substituaX('Bebeto'));



const minhasSkills = (phrase, array) => `${phrase}
Minhas três principais habilidades são:
- ${array[0]}
- ${array[1]}
- ${array[2]}`

console.log(minhasSkills((substituaX('Bebeto')), ['JavaScript', 'HTML', 'CSS']))