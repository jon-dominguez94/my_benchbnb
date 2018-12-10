import React from 'React';
import ReactDOM from 'react-dom';
import * as APIUtils from './util/session_api_util';

window.signup = APIUtils.signup;
window.login = APIUtils.login;
window.logout = APIUtils.logout;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});