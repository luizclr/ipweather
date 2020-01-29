import { call, put } from "redux-saga/effects";
import mainApi from "../../services/mainApi";

import { Actions as astronomyActions } from "../ducks/astronomy";

export function* astronomy(action) {
  try {
    const response = yield call(mainApi.get, "/astronomy");

    const data = response.data;
    yield put(astronomyActions.astronomySuccess(data));
  } catch (error) {
    yield put(astronomyActions.astronomyFailure(error.message));
  }
}
