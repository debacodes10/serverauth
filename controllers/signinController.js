const firebaseAuth = require('firebase/auth');
const {auth} = require('./../services/firebaseService');

module.exports = {
    post : (req, res) => {
        const receivedData = req.body;
        const email = receivedData.email;
        const password = receivedData.password;
        firebaseAuth.signInWithEmailAndPassword(auth, email, password)
            .then(()=>{
                console.log("Signed in successfully.");
                res.send("User: "+email+" "+password+" signed in successfully.")
            })
            .catch((error)=>{
                if (error.code === "auth/invalid-credential"){
                    console.log("Invalid credentials.");
                    res.send("Invalid credentials.")
                } else if (error.code === "auth/user-disabled"){
                    console.log("User disabled.");
                    res.send("User disabled.")
                } else {
                    console.log(error);
                }
            })
    }
}