import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

//payload = data
export default function (state = initialState, action) {
  const { type, payload } = action;

  //we need to evaluate the type via a switch statement
  switch (type) {
    case SET_ALERT:
      return [...state, payload]; // if alert is already there, we ll include it via spread operator
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload); // check if alert id is not = to payload
    default:
      return state;
  }
}
