import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import { toast } from "react-toastify"
import { Statblock } from "routes/StatblockGenerator"

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
  public auth
  public currentUser
  public db
  public googleProvider
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
        const user = result.user
        return user
      })
      .catch(function () {
        return "fail"
      })
  }

  getCurrentUser() {
    return this.auth.currentUser
  }

  signInWithGoogle() {
    // this.auth.signInWithRedirect(this.googleProvider);
    this.auth
      .signInWithPopup(this.googleProvider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user
        // ...
        if (user) toast.success("Signed in with " + user.email)
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
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

  async saveStatblock(statblock: Statblock) {
    // Stringify and parse data to convert all class instances to objects
    const preppedData = JSON.parse(JSON.stringify(statblock))

    if (preppedData.uid) {
      const updatedStatblock = await this.db
        .collection("5e-statblocks")
        .doc(statblock.uid)
        .update(preppedData)

      toast.success("Updated " + preppedData.name, {
        autoClose: 1000,
      })
      return updatedStatblock
    } else {
      const userStatblocks = await this.load5eStatblocksForUser()
      if (userStatblocks.docs.length >= 5) {
        toast.error("You can only save up to 5 statblocks.")
      } else {
        // assign user ID to character
        preppedData.userId = this.currentUser?.uid

        const newStatblock = await this.db
          .collection("5e-statblocks")
          .add(preppedData)

        toast.success("Saved " + preppedData.name, {
          autoClose: 1000,
        })
        return newStatblock
      }
    }
  }

  load5eStatblocksForUser() {
    return this.db
      .collection("5e-statblocks")
      .where("userId", "==", this.currentUser?.uid)
      .get()
  }

  async getStatblock(statblockID: string) {
    return await this.db.collection("5e-statblocks").doc(statblockID).get()
  }
  async deleteStatblock(statblockID: string) {
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
      const userCharacters = await this.getPF2CharactersForUser()
      if (userCharacters.docs.length >= 5) {
        toast.error("You can only save up to 5 characters.")
      } else {
        character.userId = this.auth.currentUser?.uid
        const newCharacter = await this.db
          .collection("pf2-characters")
          .add(character)
        if (showToast)
          toast.success("Saved " + character.name, {
            autoClose: 1000,
          })
        return newCharacter
      }
    }
  }

  getPF2Character(characterID: string) {
    return this.db.collection("pf2-characters").doc(characterID).get()
  }

  async deletePF2Character(characterID: string) {
    await this.db.collection("pf2-characters").doc(characterID).delete()
  }

  async getPF2CharactersForUser() {
    return await this.db
      .collection("pf2-characters")
      .where("userId", "==", this.auth.currentUser?.uid)
      .get()
  }
}

// export default Firebase
export const firebaseService = new Firebase()
