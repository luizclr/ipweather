import { combineReducers } from "redux";

import geolocation from "./geolocation";
import timezone from "./timezone";

export default combineReducers({
  geolocation,
  timezone
});
