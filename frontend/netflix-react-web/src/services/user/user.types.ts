import { Response } from "../base/base.types";
import { User } from "../../store/user/user.types";
import { Session } from "../session/session.types";

export type PostSessionNewPayload = {
  email: string;
  password: string;
};
export type PostUserNewPayload = {
  name: string;
  email: string;
  password: string;
};

type PostSessionNewData = {
  user: Pick<User, "id" | "name">;
} & Pick<Session, "accessToken">;

type PostUserNewData = {
  user: Pick<User, "id" | "name">;
};

export type PostSessionNew = Response<PostSessionNewData>;
export type PostUserNew = Response<PostUserNewData>;

type GetSessionData = {
  userId: User["id"];
};

export type GetSession = Response<GetSessionData>;

type GetMoviesData = {
  page: number;
  limit: number;
  previousPage: null | number;
  nextPage: number;
  total: number;
  totalPages: number;
  data: Array<Object>;
};

export type GetMovies = Response<GetMoviesData>;

type GetListData = {
  result: [Object];
};

export type GetList = Response<GetListData>;
