let engineStatus = true;

const ligarDesligar = () => engineStatus === 'ligado' ? engineStatus = 'desligado' : engineStatus = 'ligado';

ligarDesligar();

console.log(`O motor está ${engineStatus}`);

ligarDesligar();

console.log(`O motor está ${engineStatus}`);

ligarDesligar();

console.log(`O motor está ${engineStatus}`);



// const pi = 3.14;
// const radius = 5;
const circleArea = (pi, radius) => pi * (radius**2);

console.log(`Essa é a área do círculo: ${circleArea(3.14, 3)}`);



function longestWord (phrase) {
  let longestWord = ''
  phraseArray = phrase.split(' ');
  for (let value of phraseArray) {
    if (longestWord.length < value.length) {
      longestWord = value;
    }
  }
  return longestWord;
}

// const longestWord = phrase => phrase.split(' ').sort((word1, word2) => word2.length - word1.length)[0]

console.log(longestWord ('Antônio foi no banheiro e não sabemos o que aconteceu'));