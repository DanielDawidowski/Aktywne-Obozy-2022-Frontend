import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { themeReducer } from "./themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
});

export default rootReducer;
