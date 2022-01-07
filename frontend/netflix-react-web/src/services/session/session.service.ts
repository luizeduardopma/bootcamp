import axiosInstance from "../../modules/axios/axios.module";
import {
  GetSession,
  PostSessionNew,
  PostSessionNewPayload,
  PostUserNew,
  PostUserNewPayload,
} from "../user/user.types";
import { Session } from "./session.types";

export function sessionService() {
  const postSessionNew = (
    user: PostSessionNewPayload
  ): Promise<PostSessionNew> => axiosInstance.post("session/new", user);

  const postUserNew = (user: PostUserNewPayload): Promise<PostUserNew> =>
    axiosInstance.post("users/new", user);

  const getSession = (
    accessToken: Session["accessToken"]
  ): Promise<GetSession> =>
    axiosInstance.get("session", {
      headers: { authorization: accessToken },
    });

  return { postSessionNew, getSession, postUserNew };
}
