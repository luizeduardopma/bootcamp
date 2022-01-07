import { put, takeEvery, all, call } from "redux-saga/effects";
import { sessionService } from "../../services/session/session.service";
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
    }
  } catch (error) {
    //@ts-ignore
    yield put(userActions.setError(error.response.data.message));
  }
}

export default function* userSaga() {
  yield all([watchLogin(), watchSignUp(), loginByToken()]);
}
