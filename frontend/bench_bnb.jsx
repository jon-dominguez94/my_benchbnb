import React from 'React';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as actions from './actions/session_actions';

window.login = actions.login;


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});