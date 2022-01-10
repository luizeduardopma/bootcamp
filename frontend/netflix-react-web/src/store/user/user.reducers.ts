import {
  UserState,
  UserAction,
  SetErrorAction,
  SetSettingsAction,
  MovieAction,
  MoviesAction,
  ListAction,
  ListRemoveAction,
  ListAddAction,
  GetMovieAction,
} from "./user.types";

const login = (state: UserState, action: UserAction) => {};

const movies = () => {};

const getMovie = (state: UserState, action: GetMovieAction) => {};

const setMovie = (state: UserState, action: MovieAction) => {
  state.movie = action.payload;
};

const list = () => {};

const addList = (state: UserState, action: ListAddAction) => {};

const removeList = (state: UserState, action: ListRemoveAction) => {};

const signUp = (state: UserState, action: UserAction) => {
  state.data = { ...state.data, ...action.payload };
};
const setData = (state: UserState, action: UserAction) => {
  state.data = { ...state.data, ...action.payload };
};
const setMovies = (state: UserState, action: MoviesAction) => {
  state.movies = action.payload;
};

const setList = (state: UserState, action: ListAction) => {
  state.list = action.payload;
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
  getMovie,
  movies,
  setMovie,
  setMovies,
  list,
  setList,
  addList,
  removeList,
};

export default reducers;
