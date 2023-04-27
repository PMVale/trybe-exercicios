const newEmployees = (input) => {
  const employees = {
    id1: input('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: input('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: input('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }

  return employees;
};


const addEmployee = (name) => {
  const email = name.toLowerCase().replace(' ', '');
  return { name, email: `${email}@trybe.com`};
};

console.log(addEmployee('Pedro Guerra'));

console.log(newEmployees(addEmployee));



const lottery = (input, bet) => {
  if (input(bet) === true) {
    return 'Parabéns, você ganhou';
  } else {
    return 'Tente Novamente';
  }
};

const lotteryChecker = (number) => number === Math.floor((Math.random() * 5) + 1);

console.log(lottery(lotteryChecker, 3));



const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const avaliator = (array1, array2) => {
  let score = 0;
  for (let index = 0; index < array1.length; index += 1) {
    if (array2[index] === 'N.A') {
      score += 0;
    }
    if (array2[index] === array1[index]) {
      score += 1;
    }
    if (array2[index] !== array1[index] && array2[index] !== 'N.A') {
      score -= 0.5;
    }
  }
  return score;
}


const answerChecker = (array1, array2, input) => {
  let result = 0;
  result = input(array1, array2);
  return result;
}

console.log(answerChecker(RIGHT_ANSWERS, STUDENT_ANSWERS, avaliator));