import { IJokeState, JokeActionTypes, JokeAction } from "types/joke";

const initialState: IJokeState = {
  jokes: JSON.parse(localStorage.getItem("jokes")!) || [],
};

export const jokeReducer = (state = initialState, action: JokeAction): IJokeState => {
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
