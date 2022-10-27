import { JokeState, JokeActionTypes, JokeAction } from "types/joke";

const initialState: JokeState = {
  jokes: JSON.parse(localStorage.getItem("jokes")!) || [],
};

export const jokeReducer = (state = initialState, action: JokeAction): JokeState => {
  switch (action.type) {
    case JokeActionTypes.FETCH_JOKE:
      return { ...state };
    case JokeActionTypes.FETCH_JOKE_SUCCESS:
      localStorage.setItem(
        "jokes",
        JSON.stringify([...state.jokes, action.payload])
      );
      return { ...state, jokes: [...state.jokes, action.payload] };
    default:
      return state;
  }
};
