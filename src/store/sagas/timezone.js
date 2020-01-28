import { call, put } from "redux-saga/effects";
import mainApi from "../../services/mainApi";

import { Actions as timezoneActions } from "../ducks/timezone";

export function* timezone(action) {
  try {
    const response = yield call(mainApi.get, "/timezone");

    const data = response.data;
    yield put(timezoneActions.timezoneSuccess(data));
  } catch (error) {
    yield put(timezoneActions.timezoneFailure(error.message));
  }
}
