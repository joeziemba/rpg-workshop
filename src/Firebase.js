import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { toast } from "react-toastify";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.currentUser = app.auth().currentUser;
    this.db = app.firestore();
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.signInWithGoogle = this.signInWithGoogle.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getRedirect() {
    this.auth
      .getRedirectResult()
      .then(function(result) {
        // The signed-in user info.
        var user = result.user;
        return user;
      })
      .catch(function(error) {
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // // ...
        return "fail";
      });
  }

  getCurrentUser() {
    let user = this.auth.currentUser;
    return user;
  }

  signInWithGoogle() {
    this.auth.signInWithRedirect(this.googleProvider);
  }

  signOut() {
    this.auth.signOut();
  }

  saveStatblock(statblock) {
    console.log("save");
    if (statblock.uid) {
      this.db
        .collection("5e-statblocks")
        .doc(statblock.uid)
        .update(statblock)
        .then(response => {
          toast.success("Updated " + statblock.name, {
            autoClose: 1000
          });
        });
    } else {
      this.load5eStatblocksForUser().then(response => {
        if (response.docs.length >= 5) {
          toast.error("You can only save up to 5 statblocks.");
        } else {
          statblock.userId = this.auth.currentUser.uid;
          this.db
            .collection("5e-statblocks")
            .add(statblock)
            .then(response => {
              toast.success("Saved " + statblock.name, {
                autoClose: 1000
              });
            });
        }
      });
    }
  }

  load5eStatblocksForUser() {
    return this.db
      .collection("5e-statblocks")
      .where("userId", "==", this.auth.currentUser.uid)
      .get();
  }

  getStatblock(statblockID) {
    return this.db
      .collection("5e-statblocks")
      .doc(statblockID)
      .get();
  }

  // Pathfinder Methods
  savePF2Character(character) {
    if (character.uid) {
      this.db
        .collection("pf2-characters")
        .doc(character.uid)
        .update(character)
        .then(response => {
          toast.success("Saved " + character.name, { autoClose: 1000 });
        });
    } else {
      this.getPF2CharacrersForUser(character.uid).then(response => {
        if (response.docs.length >= 5) {
          toast.error("You can only save up to 5 characters.");
        } else {
          character.userId = this.auth.currentUser.uid;
          this.db
            .collection("pf2-characters")
            .add(character)
            .then(response => {
              toast.success("Saved " + character.name, { autoClose: 1000 });
            });
        }
      });
    }
  }

  getPF2Character(characterID) {
    return this.db
      .collection("pf2-characters")
      .doc(characterID)
      .get();
  }

  getPF2CharacrersForUser() {
    return this.db
      .collection("pf2-characters")
      .where("userId", "==", this.auth.currentUser.uid)
      .get();
  }
}

export default Firebase;
export const firebase = new Firebase();
