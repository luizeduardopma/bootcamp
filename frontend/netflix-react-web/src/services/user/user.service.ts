import axiosInstance from "../../modules/axios/axios.module";
import { Session } from "../session/session.types";
import { GetList, GetMovies } from "./user.types";

export function userService() {
  const getMovies = (): Promise<GetMovies> => axiosInstance.get("movies");
  const getList = (accessToken: Session["accessToken"]): Promise<GetList> =>
    axiosInstance.get("list", {
      headers: { authorization: accessToken },
    });

  return { getMovies, getList };
}
