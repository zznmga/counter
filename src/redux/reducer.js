import { ACTION_DECREMENT, ACTION_INCREMENT } from './types';

const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_DECREMENT:
      state.counter = state.counter - 1;
      return state;
    case ACTION_INCREMENT:
      state.counter = state.counter + 1;
      return state;
    default:
      return state;
  }
};

export default reducer;
