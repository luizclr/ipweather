import { combineReducers } from "redux";

import geolocation from "./geolocation";
import timezone from "./timezone";
import astronomy from "./astronomy";

export default combineReducers({
  astronomy,
  geolocation,
  timezone
});
