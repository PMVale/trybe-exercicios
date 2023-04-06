import { REQUEST_ENDED, REQUEST_STARTED } from "../actions";

const INITIAL_STATE = {
  data: {
    name: '',
    titles: [''],
    aliases: [''],
  },
  isLoading: false,
  hasSearched: false,
}

const reducer = (state=INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case REQUEST_STARTED:
      return {
        ...state,
        hasSearched: true,
        isLoading: true,
      }
    case REQUEST_ENDED:
      return {
        ...state,
        isLoading: false,
        data: {
          name: payload[0].name,
          titles: payload[0].titles,
          aliases: payload[0].aliases,
        }
      }
    default:
      return state;
  }
}

export default reducer;