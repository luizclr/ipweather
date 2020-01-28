const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

/**
 *  TYPES
 */
export const Types = {
  GEOLOCATION_REQUEST: "geolocation-request",
  GEOLOCATION_SUCCESS: "geolocation-success",
  GEOLOCATION_FAILURE: "geolocation-failure"
};

/**
 *  REDUCERS
 */
export default function geolocation(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GEOLOCATION_REQUEST:
      return { ...state, loading: true };
    case Types.GEOLOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      };
    case Types.GEOLOCATION_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 *   ACTIONS
 */
export const Actions = {
  geolocationRequest: () => ({
    type: Types.GEOLOCATION_REQUEST
  }),

  geolocationSuccess: data => ({
    type: Types.GEOLOCATION_SUCCESS,
    payload: { data }
  }),

  geolocationFailure: error => ({
    type: Types.GEOLOCATION_FAILURE,
    payload: { error }
  })
};
