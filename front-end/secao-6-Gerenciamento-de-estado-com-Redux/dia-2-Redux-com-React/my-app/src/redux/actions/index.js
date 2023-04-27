// ./src/redux/actions/index.js
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const actionCreator = (increment = 1) => ({ 
  type: INCREMENT_COUNTER,
  payload: increment,
});

export const INCREMENT_CLICK = 'INCREMENT_CLICK';

export const clickCounter = () => ({
  type: INCREMENT_CLICK,
});
  