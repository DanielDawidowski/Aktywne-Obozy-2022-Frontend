let initialState = false;

// load theme from local storage
if (typeof window !== "undefined") {
  if (localStorage.getItem("theme")) {
    initialState = JSON.parse(localStorage.getItem("theme"));
  }
}

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return action.payload;
    default:
      return state;
  }
};
