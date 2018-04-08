const UPDATE = "UPDATE";

const initialState = {
  title: "",
  tag: "",
  content: ""
};

export function writeReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function writing(write) {
  return {
    type: UPDATE,
    payload: write
  };
}
