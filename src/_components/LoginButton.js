import React from 'react';
import { FirebaseContext } from '../context';

class LoginButton extends React.Component {
  render() {
    return(
      <button onClick={this.context.signInWithGoogle}>
        Log In
      </button>
    )
  }
}

LoginButton.contextType = FirebaseContext;

export default LoginButton;