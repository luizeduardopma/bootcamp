import {
  UserState,
  UserAction,
  SetErrorAction,
  SetSettingsAction,
  MoviesAction,
  ListAction,
} from "./user.types";

const login = (state: UserState, action: UserAction) => {};

const movies = () => {};

const list = () => {};

const addList = (state: UserState, action: UserAction) => {};

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
  movies,
  setMovies,
  list,
  setList,
  addList,
};

export default reducers;
