import React from 'React';
import ReactDOM from 'react-dom';
import * as APIUtils from './util/session_api_util';
import configureStore from './store/store';

window.signup = APIUtils.signup;
window.login = APIUtils.login;
window.logout = APIUtils.logout;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.getState = store.getState
  window.dispatch = store.dispatch
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});