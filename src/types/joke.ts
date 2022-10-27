import { IJoke } from "models/IJoke";

export interface IJokeState {
  jokes: IJoke[];
}

export enum JokeActionTypes {
  FETCH_JOKE = "FETCH_JOKE",
  FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS",
}

export interface IFetchJokeAction {
  type: JokeActionTypes.FETCH_JOKE;
}

interface IFetchJokeSuccessAction {
  type: JokeActionTypes.FETCH_JOKE_SUCCESS;
  payload: IJoke;
}

export type JokeAction = IFetchJokeAction | IFetchJokeSuccessAction;
