import axiosInstance from "../../modules/axios/axios.module";
import { Session } from "../session/session.types";
import { GetList, GetMovies } from "./user.types";

export function userService() {
  const getMovies = (): Promise<GetMovies> => axiosInstance.get("movies");
  const getList = (accessToken: Session["accessToken"]): Promise<GetList> =>
    axiosInstance.get("list", {
      headers: { authorization: accessToken },
    });

  const addList = (
    accessToken: Session["accessToken"],
    movieId: string
  ): Promise<GetList> =>
    axiosInstance.post(
      `list/add/${movieId}`,
      {},
      {
        headers: { authorization: accessToken },
      }
    );

  const removeList = (
    accessToken: Session["accessToken"],
    movieId: string
  ): Promise<GetList> =>
    axiosInstance.delete(`list/remove/${movieId}`, {
      headers: { authorization: accessToken },
    });

  const getMovie = (
    accessToken: Session["accessToken"],
    movieId: string
  ): Promise<GetList> =>
    axiosInstance.get(`movies/id/${movieId}`, {
      headers: { authorization: accessToken },
    });

  return { getMovies, getList, addList, removeList, getMovie };
}
