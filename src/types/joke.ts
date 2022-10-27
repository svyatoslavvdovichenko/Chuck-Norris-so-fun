import { IJoke } from "models/IJoke";

export interface JokeState {
  jokes: IJoke[];
}

export enum JokeActionTypes {
  FETCH_JOKE = "FETCH_JOKE",
  FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS",
}

export interface fetchJokeAction {
  type: JokeActionTypes.FETCH_JOKE;
}

interface fetchJokeSuccessAction {
  type: JokeActionTypes.FETCH_JOKE_SUCCESS;
  payload: IJoke;
}

export type JokeAction = fetchJokeAction | fetchJokeSuccessAction;
