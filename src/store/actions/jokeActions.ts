import { IJoke } from 'models/IJoke';
import { JokeActionTypes } from "types/joke";

export const fetchJoke = () => ({ type: JokeActionTypes.FETCH_JOKE })
export const setJoke = (payload: IJoke) => ({ type: JokeActionTypes.FETCH_JOKE_SUCCESS, payload })