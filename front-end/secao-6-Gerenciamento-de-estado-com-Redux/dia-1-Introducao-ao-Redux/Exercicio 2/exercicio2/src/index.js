import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  status: 'Offline',
  theme: 'Dark',
};

const reduce = (state= INITIAL_STATE, action) => {
  switch(action.type) {
  case 'TOGGLE_THEME': {
    return {
      ...state,
      theme: state.theme === 'Dark' ? 'Light' : 'Dark',
    };
  }
  case 'TOGGLE_STATUS': {
    return {
      ...state,
      status: state.status === 'Offline' ? 'Online' : 'Offline',
    };
  }
  default:
    return state;
  }
};

const store = createStore(reduce, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({type: 'TOGGLE_THEME'});
});

statusButton.addEventListener('click', () => {
  store.dispatch({type: 'TOGGLE_STATUS'});
});

store.subscribe(() => {
  const {theme, status} = store.getState();
  const statusText = document.getElementById('status');
  statusText.innerHTML = status;
  if (status === 'Offline') {
    statusButton.innerHTML = 'Ficar Online';
  } else {
    statusButton.innerHTML = 'Ficar Offline';
  }
  if (theme === 'Dark') {
    document.body.style.color = 'white';
    document.body.style.backgroundColor = '#333333';
    themeButton.innerHTML = 'Light Mode';
  } else {
    document.body.style.color = 'black';
    document.body.style.backgroundColor = 'lightgray';
    themeButton.innerHTML = 'Dark Mode';
  }
});