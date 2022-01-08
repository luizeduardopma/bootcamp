import {
  UserState,
  UserAction,
  SetErrorAction,
  SetSettingsAction,
  MoviesAcition,
} from "./user.types";

const login = (state: UserState, action: UserAction) => {};

const movies = () => {};

const signUp = (state: UserState, action: UserAction) => {
  state.data = { ...state.data, ...action.payload };
};
const setData = (state: UserState, action: UserAction) => {
  state.data = { ...state.data, ...action.payload };
};
const setMovies = (state: UserState, action: MoviesAcition) => {
  state.movies = action.payload;
};

const setError = (state: UserState, action: SetErrorAction) => {
  state.error = action.payload;
};

const setSettings = (state: UserState, action: SetSettingsAction) => {
  state.settings = action.payload;
};

const reducers = {
  login,
  setData,
  setError,
  setSettings,
  signUp,
  movies,
  setMovies,
};

export default reducers;
