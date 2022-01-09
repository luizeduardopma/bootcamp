import { put, takeEvery, all, call } from "redux-saga/effects";
import { sessionService } from "../../services/session/session.service";
import { userService } from "../../services/user/user.service";
import { GetSession, PostSessionNew } from "../../services/user/user.types";
import { userActions } from "./user.slice";
import { AccessTokenStorageKey } from "./user.types";

export function* login(props: any) {
  try {
    yield put(userActions.setSettings({ isLoading: true }));
    const { email, password } = props.payload;
    //@ts-ignore
    const {
      data: { user, accessToken },
    }: PostSessionNew = yield call(sessionService().postSessionNew, {
      email,
      password,
    });
    localStorage.setItem(AccessTokenStorageKey, accessToken);
    yield put(userActions.setError(""));
    yield put(userActions.setData({ ...user }));
    const { data: result } = yield call(userService().getList, accessToken);
    console.log(result.result, "MyList");
    yield put(userActions.setList(result.result));
  } catch (error) {
    //@ts-ignore
    yield put(userActions.setError(error.response.data.message));
  } finally {
    yield put(userActions.setSettings({ isLoading: false }));
  }
}

function* watchLogin() {
  yield takeEvery("user/login", login);
}

export function* signUp(props: any) {
  try {
    yield put(userActions.setSettings({ isLoading: true }));
    const { name, email, password } = props.payload;
    const { data }: PostSessionNew = yield call(sessionService().postUserNew, {
      name,
      email,
      password,
    });
    console.log(props, "props");
    console.log(data, "data");
  } catch (error) {
    console.log(error);
    //@ts-ignore
    yield put(userActions.setError(error.response.data.message));
  } finally {
    yield put(userActions.setSettings({ isLoading: false }));
  }
}

function* watchSignUp() {
  yield takeEvery("user/signUp", signUp);
}

export function* loginByToken() {
  try {
    const accessToken = localStorage.getItem(AccessTokenStorageKey);

    if (accessToken) {
      const {
        data: { userId: id },
      }: GetSession = yield call(sessionService().getSession, accessToken);
      yield put(userActions.setData({ id }));
      const { data } = yield call(userService().getMovies);
      console.log(data, "datamovies");
      yield put(userActions.setMovies(data));

      const { data: result } = yield call(userService().getList, accessToken);
      console.log(result.result, "MyList");
      yield put(userActions.setList(result.result));
    }
  } catch (error) {
    //@ts-ignore
    yield put(userActions.setError(error.response.data.message));
  }
}

export function* getMoviesSaga() {
  try {
    console.log("chegou aqui");

    const { data } = yield call(userService().getMovies);
    console.log(data, "datamovies");
    yield put(userActions.setMovies(data));
  } catch (error) {
    //@ts-ignore
    yield put(userActions.setError(error.response.data.message));
  }
}

function* watchGetMovies() {
  yield takeEvery("user/movies", getMoviesSaga);
}

export function* getListSaga() {
  try {
    const accessToken = localStorage.getItem(AccessTokenStorageKey);
    if (accessToken) {
      const { data } = yield call(userService().getList, accessToken);
      console.log(data, "dataList");
      yield put(userActions.setList(data.result));
    }
  } catch (error) {
    //@ts-ignore
    yield put(userActions.setError(error.response.data.message));
  }
}

function* watchGetList() {
  yield takeEvery("user/list", getListSaga);
}

export function* addListSaga(props: any): any {
  try {
    const movieId = props.payload;
    console.log(props.payload, "payload");
    const accessToken = localStorage.getItem(AccessTokenStorageKey);
    if (accessToken) {
      console.log(props.payload, "payload");
      //@ts-ignore
      const { data } = yield call(userService().addList, accessToken, movieId);
      console.log(data, "dataList");
      const List = yield call(userService().getList, accessToken);
      console.log(List, "ListList");
      yield put(userActions.setList(List.data.result));
    }
  } catch (error) {
    //@ts-ignore
    yield put(userActions.setError(error.response.data.message));
  }
}

function* watchAddList() {
  yield takeEvery("user/addList", addListSaga);
}

export default function* userSaga() {
  yield all([
    watchGetMovies(),
    watchLogin(),
    watchSignUp(),
    watchGetList(),
    watchAddList(),
    loginByToken(),
  ]);
}
