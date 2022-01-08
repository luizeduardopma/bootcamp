import axiosInstance from "../../modules/axios/axios.module";
import { Session } from "../session/session.types";
import { GetMovies } from "./user.types";

export function userService() {
  const getMovies = (): Promise<GetMovies> => axiosInstance.get("movies");

  return { getMovies };
}
