import React from "react"
import { firebase } from "services/Firebase"

const LoginButton = () => {
  return (
    <button
      className="px-4 bg-slate-700 hover:bg-slate-600 relative h-12 px-6 transition-colors"
      onClick={firebase.signInWithGoogle}
    >
      Log In
    </button>
  )
}

export default LoginButton
