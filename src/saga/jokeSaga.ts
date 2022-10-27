import axios from "axios";
import { setJoke } from 'store/actions/jokeActions';
import { put, takeEvery, call, StrictEffect } from "redux-saga/effects";
import { JokeActionTypes } from "types/joke";

const fetchJokeFromApi = () => 
  axios.get(`https://api.chucknorris.io/jokes/random`);

function* fetchJokeWorker() { 
  const { data } = yield call(fetchJokeFromApi);
  yield put(setJoke(data));
}

export function* jokeWatcher(): Generator<StrictEffect> {
  yield takeEvery(JokeActionTypes.FETCH_JOKE, fetchJokeWorker)
}