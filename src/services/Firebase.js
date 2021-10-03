import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import { toast } from "react-toastify"

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
}

class Firebase {
  constructor() {
    app.initializeApp(config)

    this.auth = app.auth()
    this.currentUser = app.auth().currentUser
    this.db = app.firestore()
    this.googleProvider = new app.auth.GoogleAuthProvider()
    this.signInWithGoogle = this.signInWithGoogle.bind(this)
    this.getCurrentUser = this.getCurrentUser.bind(this)
    this.signOut = this.signOut.bind(this)
    this.deletePF2Character = this.deletePF2Character.bind(this)
  }

  getRedirect() {
    this.auth
      .getRedirectResult()
      .then(function (result) {
        // The signed-in user info.
        var user = result.user
        return user
      })
      .catch(function () {
        return "fail"
      })
  }

  getCurrentUser() {
    let user = this.auth.currentUser
    return user
  }

  signInWithGoogle() {
    // this.auth.signInWithRedirect(this.googleProvider);
    this.auth
      .signInWithPopup(this.googleProvider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user
        // ...
        toast.success("Signed in with " + user.email)
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
        toast(
          "Error signing in with " +
            email +
            ". " +
            errorCode +
            " " +
            errorMessage
        )
      })
  }

  signOut() {
    this.auth.signOut()
  }

  async saveStatblock(statblock) {
    console.log("save")
    if (statblock.uid) {
      await this.db
        .collection("5e-statblocks")
        .doc(statblock.uid)
        .update(statblock)

      toast.success("Updated " + statblock.name, {
        autoClose: 1000,
      })
    } else {
      let response = await this.load5eStatblocksForUser()
      if (response.docs.length >= 5) {
        toast.error("You can only save up to 5 statblocks.")
      } else {
        statblock.userId = this.auth.currentUser.uid
        response = await this.db.collection("5e-statblocks").add(statblock)

        toast.success("Saved " + statblock.name, {
          autoClose: 1000,
        })
        return response.id
      }
    }
  }

  load5eStatblocksForUser() {
    return this.db
      .collection("5e-statblocks")
      .where("userId", "==", this.auth.currentUser.uid)
      .get()
  }

  getStatblock(statblockID) {
    return this.db.collection("5e-statblocks").doc(statblockID).get()
  }
  async deleteStatblock(statblockID) {
    await this.db.collection("5e-statblocks").doc(statblockID).delete()
  }
  // Pathfinder Methods
  async savePF2Character(character, showToast = true) {
    if (character.uid) {
      await this.db
        .collection("pf2-characters")
        .doc(character.uid)
        .update(character)
      if (showToast)
        toast.success("Updated " + character.name, { autoClose: 1000 })
    } else {
      let response = await this.getPF2CharactersForUser(character.uid)
      if (response.docs.length >= 5) {
        toast.error("You can only save up to 5 characters.")
      } else {
        character.userId = this.auth.currentUser.uid
        response = await this.db
          .collection("pf2-characters")
          .add(character)
        if (showToast)
          toast.success("Saved " + character.name, {
            autoClose: 1000,
          })
        return response
      }
    }
  }

  getPF2Character(characterID) {
    return this.db.collection("pf2-characters").doc(characterID).get()
  }

  async deletePF2Character(characterID) {
    await this.db.collection("pf2-characters").doc(characterID).delete()
  }

  async getPF2CharactersForUser() {
    return await this.db
      .collection("pf2-characters")
      .where("userId", "==", this.auth.currentUser.uid)
      .get()
  }
}

export default Firebase
export const firebase = new Firebase()
