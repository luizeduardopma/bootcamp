import { Action } from "../store/store.types";

export const AccessTokenStorageKey = "ACCESS_TOKEN";

export type User = {
  name?: string;
  email?: string;
  password?: string;
  id?: string;
};

export type Movies = {
  page: number;
  limit: number;
  previousPage: null | number;
  nextPage: number;
  total: number;
  totalPages: number;
  data: Array<Object>;
};

export type List = [Object];

export type UserState = {
  data: User | null;
  error: string;
  settings: {
    isLoading: boolean;
  };
  movies: Movies;
  list: null | [Object];
};

export type UserAction = Action<User>;
export type MoviesAction = Action<Movies>;
export type ListAction = Action<List>;
export type SetErrorAction = Action<string>;
export type SetSettingsAction = Action<UserState["settings"]>;
