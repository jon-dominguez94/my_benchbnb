import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  if(props.currentUser === undefined){
    return (
      <div>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome, {props.currentUser.username}!</h1>
        <button onClick={props.logout}>Log Out</button>
      </div>
    );
  }
};

export default Greeting;