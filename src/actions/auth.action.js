import { ActionTypes } from "../constants/action-types";

export const loginRequest = (user) => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
    payload: user,
  };
};

export const loginSuccess = (user, token) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    payload: { user, token },
  };
};

export const loginFailure = (error) => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
    payload: { error },
  };
};

export const isLoggedin = () => {
  const token = window.localStorage.getItem("token");
  if (token) {
    const user = JSON.parse(window.localStorage.getItem("user"));
    return {
      type: ActionTypes.LOGIN_SUCCESS,
      payload: { user, token },
    };
  } else {
    return {
      type: ActionTypes.LOGIN_FAILURE,
      payload: { error: "Failed to login" },
    };
  }
};

export const signout = () => {
  window.localStorage.clear();
  return {
    type: ActionTypes.LOGOUT_REQUEST,
  };
};
