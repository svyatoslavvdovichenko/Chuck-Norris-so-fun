import { all } from "redux-saga/effects";
import { jokeWatcher } from "./jokeSaga";

export function* rootWatcher() {
  yield all([jokeWatcher()])
}