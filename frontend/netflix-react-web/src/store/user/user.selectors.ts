import { State } from "../store/store.types";

export const isAuthenticated = (state: State) => {
  if (state.user && state.user.data && state.user.data.id) return true;
};
export const isLoading = (state: State) => state.user.settings.isLoading;
export const errorMessageRedux = (state: State) => state.user.error;
export const moviesBackend = (state: State) => state.user.movies;
