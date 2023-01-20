const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addShift = (object, key, value) => {
  object[key] = value;
};

addShift(lesson2, 'turno', 'noite');

console.log(lesson2);

const showKeys = (object) => {
  console.log(Object.keys(object));
}

showKeys(lesson1);

const showLength = (object) => {
  console.log(Object.keys(object).length);
}

showLength(lesson1);

const showValues = (object) => {
  console.log(Object.values(object));
}

showValues(lesson1);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons)

const studentNumber = (object) => {
  console.log(object.numeroEstudantes);
}

studentNumber(lesson1);

const GetValueByNumber = (object, number) => {
  console.log(Object.values(object)[number]);
}

GetValueByNumber(lesson1, 0);

const verifyPair = (object, key, value) => {
  const fullObject = Object.entries(object);
  let isEqual = false
  for (let index in fullObject) {
    if (fullObject[index][0] === key && fullObject[index][1] === value) {
      isEqual = true;
    }
  }
  return isEqual;
}

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));