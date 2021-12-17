import React from "react"
import { firebaseService } from "services/Firebase"

export const LoginButton = () => {
  return (
    <button
      className="px-4 bg-slate-700 hover:bg-slate-600 relative h-12 px-6 transition-colors"
      onClick={firebaseService.signInWithGoogle}
    >
      Log In
    </button>
  )
}
