import { call, put } from "redux-saga/effects";
import mainApi from "../../services/mainApi";

import { Actions as geolocationActions } from "../ducks/geolocation";

export function* geolocation(action) {
  try {
    const response = yield call(mainApi.get, "/ipgeo");

    const data = response.data;
    yield put(geolocationActions.geolocationSuccess(data));
  } catch (error) {
    yield put(geolocationActions.geolocationFailure(error.message));
  }
}
