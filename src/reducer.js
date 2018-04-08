const PLUS = "plus";
const MINUS = "minus";

// reducer
export function counter(state = 1, action) {
  switch (action.type) {
    case PLUS:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
}

// action creator
export function plus() {
  return { type: PLUS };
}

export function minus() {
  return { type: MINUS };
}

export function plusAsyc() {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: PLUS });
    }, 2000);
  };
}
