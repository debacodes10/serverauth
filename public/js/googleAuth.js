const {auth} = require("./../../services/firebaseService")
const firebaseAuth = require("firebase/auth")

async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await firebaseAuth.signInWithPopup(auth, provider);
      console.log("User signed in with Google:", result.user);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  }

  export { signInWithGoogle };