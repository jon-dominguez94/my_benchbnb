import { connect } from 'react-redux';
import sessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { selectAllErrors } from '../../reducers/selectors';

const mstp = (state, ownProps) => {
  return ({
    formType: 'login',
    errors: selectAllErrors(state)
  });
};

const mdtp = (dispatch, ownProps) => {
  return ({
    processForm: user => dispatch(login(user))
  });
};

export default connect(
  mstp,
  mdtp
)(sessionForm);