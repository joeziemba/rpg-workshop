import React from "react";
import { firebase } from '../Firebase';

const LoginButton = () => {
  return <button onClick={firebase.signInWithGoogle}>Log In</button>;
};

export default LoginButton;
