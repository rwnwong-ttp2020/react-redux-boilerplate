// reducers/index.js
import { INCREMENT, DECREMENT, CLEAR, INCREMENTbyFIVE } from '../actions';

const initialState = 0;
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log(" value at increment in reducer indexjs ", state + 1)
      return state + 1;
    case INCREMENTbyFIVE:
      return state + 5;
    case DECREMENT:
      console.log(" value at decrement in reducer indexjs ", state - 1)
      return state - 1;
    case CLEAR:
      return state = 0;
    default:
      return state;
  }

  //console.log(" value at ", store.getState())
};
