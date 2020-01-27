const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

/**
 *  TYPES
 */
export const Types = {
  LOGIN_REQUEST: "login-request",
  LOGIN_SUCCESS: "login-success",
  LOGIN_FAILURE: "login-failure"
};

/**
 *  REDUCERS
 */
export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      };
    case Types.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 *   ACTIONS
 */
export const Actions = {
  loginRequest: () => ({
    type: Types.LOGIN_REQUEST
  }),

  loginSuccess: data => ({
    type: Types.LOGIN_SUCCESS,
    payload: { data }
  }),

  loginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    payload: { error }
  })
};
