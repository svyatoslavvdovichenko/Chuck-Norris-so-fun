import { combineReducers } from "redux";
import { jokeReducer } from "./jokeReducer";

export const rootReducer = combineReducers({
  jokeReducer,
});
