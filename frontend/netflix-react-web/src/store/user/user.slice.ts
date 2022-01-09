import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./user.types";
import reducers from "./user.reducers";

const initialState: UserState = {
  data: null,
  error: "",
  settings: {
    isLoading: false,
  },
  movies: {
    page: 0,
    limit: 0,
    previousPage: 0,
    nextPage: 0,
    total: 0,
    totalPages: 0,
    data: [],
  },
  list: null || [Object],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const { reducer: userReducer, actions: userActions } = userSlice;
