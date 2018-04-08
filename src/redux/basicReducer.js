const initialState = {
  selectedTab: "1"
};

const TAB_CHANGE = "TAB_CHANGE";

// reducer
export function basicReducer(state = initialState, action) {
  switch (action.type) {
    case TAB_CHANGE:
      return { ...state, selectedTab: action.selectedTab };
    default:
      return state;
  }
}

// action creator

export function selectTab(v) {
  console.log(v);
  return {
    type: TAB_CHANGE,
    selectedTab: v
  };
}
