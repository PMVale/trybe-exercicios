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

const studentCheck = (subject) => {
  let totalStudents = 0;
  if (allLessons.lesson1.materia.includes(subject)) {
    totalStudents = totalStudents + allLessons.lesson1.numeroEstudantes
  }
  if (allLessons.lesson2.materia.includes(subject)) {
    totalStudents = totalStudents + allLessons.lesson2.numeroEstudantes
  }
  if (allLessons.lesson3.materia.includes(subject)) {
    totalStudents = totalStudents + allLessons.lesson3.numeroEstudantes
  }
  return console.log(totalStudents);
}

studentCheck('Matemática');
studentCheck('História');

const createReport = (data, teacher) => {
  const newReport = {};
  const aulas = [];
  newReport.professor = '';
  newReport.aulas = aulas;
  newReport.estudantes = 0;
  if (data.lesson1.professor.includes(teacher)) {
    newReport.professor = data.lesson1.professor;
    aulas.push(data.lesson1.materia);
    newReport.aulas = aulas;
    newReport.estudantes = newReport.estudantes + data.lesson1.numeroEstudantes;
  }
  if (data.lesson2.professor.includes(teacher)) {
    newReport.professor = data.lesson2.professor;
    aulas.push(data.lesson2.materia);
    newReport.aulas = aulas;
    newReport.estudantes = newReport.estudantes + data.lesson2.numeroEstudantes;
  }
  if (data.lesson3.professor.includes(teacher)) {
    newReport.professor = data.lesson3.professor;
    aulas.push(data.lesson3.materia);
    newReport.aulas = aulas;
    newReport.estudantes = newReport.estudantes + data.lesson3.numeroEstudantes;
  }
  return console.log(newReport);
};

createReport(allLessons, 'Maria Clara');
createReport(allLessons, 'Carlos');
