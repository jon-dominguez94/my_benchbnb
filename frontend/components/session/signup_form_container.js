import { connect } from 'react-redux';
import sessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { selectAllErrors } from '../../reducers/selectors';

const mstp = (state, ownProps) => {
  return ({
    formType: 'signup',
    errors: selectAllErrors(state)
  });
};

const mdtp = (dispatch, ownProps) => {
  return ({
    processForm: user => dispatch(signup(user))
  });
};

export default connect(
  mstp,
  mdtp
)(sessionForm);