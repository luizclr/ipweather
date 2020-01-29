const INITIAL_STATE = {
  loading: false,
  data: undefined,
  error: null
};

/**
 *  TYPES
 */
export const Types = {
  ASTRONOMY_REQUEST: "astronomy-request",
  ASTRONOMY_SUCCESS: "astronomy-success",
  ASTRONOMY_FAILURE: "astronomy-failure"
};

/**
 *  REDUCERS
 */
export default function astronomy(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ASTRONOMY_REQUEST:
      return { ...state, loading: true };
    case Types.ASTRONOMY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      };
    case Types.ASTRONOMY_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 *   ACTIONS
 */
export const Actions = {
  astronomyRequest: () => ({
    type: Types.ASTRONOMY_REQUEST
  }),

  astronomySuccess: data => ({
    type: Types.ASTRONOMY_SUCCESS,
    payload: { data }
  }),

  astronomyFailure: error => ({
    type: Types.ASTRONOMY_FAILURE,
    payload: { error }
  })
};
