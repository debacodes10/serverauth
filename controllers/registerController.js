const firebaseAuth = require('firebase/auth');
const {auth} = require('./../services/firebaseService');

module.exports = {
    post : (req, res) => {
        const receivedData = req.body;
        const email = receivedData.email;
        const password = receivedData.password;
        firebaseAuth.createUserWithEmailAndPassword(auth, email, password)
            .then(()=>{
                console.log("User created successfully.");
                res.send("User: "+email+" "+password+" ")
            })
            .catch((error)=>{
                if (error.code === "auth/email-already-in-use"){
                    console.log("Email already in use");
                    res.send("Email already in use.")
                }
            })
    }
}