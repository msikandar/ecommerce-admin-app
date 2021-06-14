import { ActionTypes } from "../constants/action-types";

const initialState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
};
export const authReducer = (state = initialState, { type, payload }) => {
  console.log({ type, payload });
  switch (type) {
    case ActionTypes.LOGIN_REQUEST:
      return { ...state, authenticating: true };
    case ActionTypes.LOGIN_SUCCESS:
      delete state.error;
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        authenticate: true,
        authenticating: false,
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        error: payload,
      };
    case ActionTypes.LOGOUT_REQUEST:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
