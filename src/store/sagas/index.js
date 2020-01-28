import { all, takeLatest } from "redux-saga/effects";

import { Types as geolocationTypes } from "../ducks/geolocation";

import { geolocation } from "./geolocation";

export default function* rootSaga() {
  yield all([takeLatest(geolocationTypes.GEOLOCATION_REQUEST, geolocation)]);
}
