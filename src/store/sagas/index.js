import { all, takeLatest } from "redux-saga/effects";

import { Types as geolocationTypes } from "../ducks/geolocation";
import { Types as timezoneTypes } from "../ducks/timezone";

import { geolocation } from "./geolocation";
import { timezone } from "./timezone";

export default function* rootSaga() {
  yield all([
    takeLatest(geolocationTypes.GEOLOCATION_REQUEST, geolocation),
    takeLatest(timezoneTypes.TIMEZONE_REQUEST, timezone)
  ]);
}
