import * as APIUtils from './util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = user => dispatch => {
  return APIUtils.login(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)));
};

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logout = () => dispatch => {
  return APIUtils.logout()
    .then(() => dispatch(logoutCurrentUser()));
};

export const logoutCurrentUser = () => ({
  type: REMOVE_CURRENT_USER,
  action: {}
});

export const signup = user => dispatch => {
  return APIUtils.signup(user)
    .then(newUser => dispatch(receiveCurrentUser(newUser)));
};


export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});