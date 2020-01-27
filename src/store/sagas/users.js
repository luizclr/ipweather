import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Actions as UsersActions } from "../ducks/users";

export function* login(action) {
  try {
    const data = yield call(api.get, "/users");

    const user = data.data[0];
    yield put(UsersActions.loginSuccess(user));
  } catch (error) {
    yield put(UsersActions.loginFailure(error.message));
  }
}
