import { ACTION_DECREMENT, ACTION_INCREMENT } from './types';

const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case ACTION_INCREMENT:
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

export default reducer;
