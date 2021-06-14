import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";

const reducers = combineReducers({
  rootReducer: authReducer,
});

export default reducers;
