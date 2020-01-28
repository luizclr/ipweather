const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

/**
 *  TYPES
 */
export const Types = {
  TIMEZONE_REQUEST: "timezone-request",
  TIMEZONE_SUCCESS: "timezone-success",
  TIMEZONE_FAILURE: "timezone-failure"
};

/**
 *  REDUCERS
 */
export default function timezone(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TIMEZONE_REQUEST:
      return { ...state, loading: true };
    case Types.TIMEZONE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      };
    case Types.TIMEZONE_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 *   ACTIONS
 */
export const Actions = {
  timezoneRequest: () => ({
    type: Types.TIMEZONE_REQUEST
  }),

  timezoneSuccess: data => ({
    type: Types.TIMEZONE_SUCCESS,
    payload: { data }
  }),

  timezoneFailure: error => ({
    type: Types.TIMEZONE_FAILURE,
    payload: { error }
  })
};
