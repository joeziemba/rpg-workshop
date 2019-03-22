import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.signInWithGoogle = this.signInWithGoogle.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getRedirect() {
    this.auth.getRedirectResult().then(function (result) {
      // The signed-in user info.
      var user = result.user;
      return user;
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      return 'fail'
    });
  }

  getCurrentUser() {
    let user = this.auth.currentUser;
    debugger;
    return user;
  }

  signInWithGoogle() {
    this.auth.signInWithRedirect(this.googleProvider);
  }

  signOut() {
    this.auth.signOut();
  }
}

export default Firebase;