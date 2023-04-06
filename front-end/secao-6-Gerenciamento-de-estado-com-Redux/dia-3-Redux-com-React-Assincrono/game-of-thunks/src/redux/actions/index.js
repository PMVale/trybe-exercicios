export const REQUEST_STARTED = 'REQUEST_STARTED';
export const requestStart = () => ({
  type: REQUEST_STARTED,
})

export const REQUEST_ENDED = 'REQUEST_ENDED';
export const requestEnded = (payload) => ({
  type: REQUEST_ENDED,
  payload, 
})

export const requestAPI = (name) => {
  return async (dispatch) => {
    dispatch(requestStart());
    const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
    const data = await response.json();
    console.log(data);
    return dispatch(requestEnded(data));
  }
}