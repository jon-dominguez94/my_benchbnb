import { connect } from 'react-redux';
import Greeting from './greeting';

const mstp = (state) => {
  return ({
    currentUser: state.entities.users[state.session.id]
  });
};

const mdtp = dispatch => {
  return ({
    logout: () => dispatch(logout())
  });
};

export const connect(
  mstp,
  mdtp
)(Greeting);