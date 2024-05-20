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
                res.send("Signed in successfully.");
                res.send("User: "+email+" "+password+" ")
            })
            .catch((error)=>{
                if (error.code === "auth/invalid-credential"){
                    res.send("Invalid credentials.")
                } else {
                    console.log(error);
                }
            })
    }
}