const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const decemberDays = document.querySelector('#days');


const createDaysOfTheMonth = () => {
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const days = decemberDaysList[index];
    const dayListItem = document.createElement('li');
    dayListItem.className = 'day';
    dayListItem.innerHTML = days;

    if (days === 24 || days === 25 || days === 31) {
      dayListItem.classList.add('day', 'holiday');
    }

    if (days === 4 || days === 11 || days === 18 || days === 25) {
      dayListItem.classList.add('friday');
    }

    decemberDays.appendChild(dayListItem);
  };
}

createDaysOfTheMonth();

const buttonsContainer = document.querySelector('.buttons-container');

function holidayButton(text) {
  const holidayBtn = document.createElement('button');
  holidayBtn.id = 'btn-holiday';
  holidayBtn.innerHTML = text;
  buttonsContainer.appendChild(holidayBtn);
};

holidayButton('Feriados');

const holidayBtn = document.querySelector('#btn-holiday');

function holidayColor(color) {
  const holidayDays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = color;
  holidayBtn.addEventListener('click', () => {;
    for (index = 0; index < holidayDays.length; index += 1) {
      if (holidayDays[index].style.backgroundColor === newColor) {
        holidayDays[index].style.backgroundColor = backgroundColor;
      } else {
        holidayDays[index].style.backgroundColor = color;
      }
    }
  });
}

holidayColor('yellow');

function fridayButton(text) {
  const fridayBtn = document.createElement('button');
  fridayBtn.id = 'btn-friday';
  fridayBtn.innerHTML = text;
  buttonsContainer.appendChild(fridayBtn);
};

fridayButton('Sexta-Feira');

const fridayBtn = document.querySelector('#btn-friday');

function fridayText(text) {
  const fridays = document.querySelectorAll('.friday');
  const originalText = [4, 11, 18, 25];
  const newText = text;
  fridayBtn.addEventListener('click', () => {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML === newText) {
        fridays[index].innerHTML = originalText[index];
      } else {
        fridays[index].innerHTML = newText;
      }
    }
  })
};

fridayText('Sextou');

function zoomIn() {
  const dayIn = document.querySelector('#days');
  dayIn.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = 50 + 'px';
  })
};

function zoomOut() {
  const dayOut = document.querySelector('#days');
  dayOut.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = 20 + 'px';
  })
};

zoomIn();

zoomOut();

function myTask(text) {
  const divTask = document.querySelector('.my-tasks');
  const createTask = document.createElement('span');
  createTask.innerHTML = text;
  divTask.appendChild(createTask);
};

myTask('Cozinhar');

function taskSubtitle(color) {
  const divTask = document.querySelector('.my-tasks');
  const subtitle = document.createElement('div');
  subtitle.classList.add('task');
  subtitle.style.backgroundColor = color;
  divTask.appendChild(subtitle);
};

taskSubtitle('blue');

function taskSelect() {
  const selectedTask = document.getElementsByClassName('task selected');
  const myTask = document.querySelector('.task');
  myTask.addEventListener('click', (event) => {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  })
};

taskSelect();

function taskAssigned() {
  const selectedDay = document.querySelector('#days');
  const selectedTask = document.getElementsByClassName('task selected');
  const myTask = document.querySelector('.task');
  const taskColor = myTask.style.backgroundColor;

  selectedDay.addEventListener('click', (event) => {
    const targetColor = event.target.style.color;
    if (selectedTask.length > 0 && targetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (targetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119';
    };
  });
};

taskAssigned();