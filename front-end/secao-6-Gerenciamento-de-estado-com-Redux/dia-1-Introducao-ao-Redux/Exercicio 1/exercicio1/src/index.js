import {legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}

const reduce = (state= INITIAL_STATE, action) => {
  switch(action.type) {
  case 'NEXT_COLOR': {
    return {
      ...state,
      // index: state.index === (state.colors.length -1) ? 0 : state.index + 1
      index: state.index < (state.colors.length -1) ? state.index +1 : 0,
    };
  }
  case 'PREVIOUS_COLOR': {
    return {
      ...state,
      index: state.index === 0 ? state.colors.length -1 : state.index - 1

    };
  }
  case 'RANDOM_COLOR': {
    return {
      ...state,
      colors: [...state.colors, criarCor()],
      index: state.colors.length,
    };
  }
  default:
    return state;
  }
};

const store = createStore(reduce, composeWithDevTools());

const prevBtn = document.getElementById('previous');

const nextBtn = document.getElementById('next');

const randomBtn = document.getElementById('random');

nextBtn.addEventListener('click', () => {
  store.dispatch({type: 'NEXT_COLOR'});
});

prevBtn.addEventListener('click', () => {
  store.dispatch({type: 'PREVIOUS_COLOR'});
});

randomBtn.addEventListener('click', () => {
  store.dispatch({type: 'RANDOM_COLOR'});
});

store.subscribe(() => {
  const value = document.getElementById('value');
  const container = document.getElementById('container');
  const pValue = document.getElementById('p-value');
  const {colors, index} = store.getState();
  value.innerHTML = colors[index];
  container.style.backgroundColor = colors[index];
  if (colors[index] === 'black') {
    pValue.style.color = 'white';
  } else {
    pValue.style.color = 'black';
  }
});