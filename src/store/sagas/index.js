import { all, takeLatest } from "redux-saga/effects";

import { Types as UserTypes } from "../ducks/users";

import { login } from "./users";

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.LOGIN_REQUEST, login)]);
}
