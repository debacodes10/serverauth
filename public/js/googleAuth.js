// Import the Firebase authentication module and the initialized Firebase app
const { auth } = require("./../../services/firebaseService");
const firebaseAuth = require("firebase/auth");

// Function to handle Google sign-in
/**
 * signInWithGoogle - Handles signing in a user with Google using Firebase Authentication.
 *
 * This function uses Firebase's GoogleAuthProvider to sign in a user with their Google account.
 * It opens a popup for the user to authenticate with Google. If successful, it logs the user
 * information to the console. If there is an error during the sign-in process, it logs the error.
 */
async function signInWithGoogle() {
    // Create a new instance of the GoogleAuthProvider
    const provider = new firebaseAuth.GoogleAuthProvider();
    try {
        // Use signInWithPopup to sign in with Google
        const result = await firebaseAuth.signInWithPopup(auth, provider);
        
        // Log the signed-in user information
        console.log("User signed in with Google:", result.user);
    } catch (error) {
        // Log any errors that occur during the sign-in process
        console.error("Error during Google sign-in:", error);
    }
}

// Export the signInWithGoogle function so it can be used in other parts of the application
module.exports = { signInWithGoogle };
