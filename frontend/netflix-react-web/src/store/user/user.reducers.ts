import { UserState, UserAction } from "./user.types";

export const login = (state: UserState, action: UserAction) => {};

export const setData = (state: UserState, action: UserAction) => {
  state.data = { ...state.data, ...action.payload };
};

const reducers = { login, setData };

export default reducers;
