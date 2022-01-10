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
  movie: {
    _id: "",
    name: "",
    category: "",
    description: "",
    media_type: "",
    poster: "",
    backdrop: "",
    __v: 0,
    createdAt: "",
    updatedAt: "",
  },
  list: null || [Object],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const { reducer: userReducer, actions: userActions } = userSlice;
