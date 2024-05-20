const firebaseAuth = require('firebase/auth');
const {auth} = require('./../services/firebaseService');

module.exports = {
    post: (req, res) => {
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
                } else if (error.code === "auth/weak-password"){
                    console.log("Password is too weak");
                    res.send("Password is too weak.")
                } else if (error.code==="auth/invalid-email"){
                    console.log("Invalid Email.");
                    res.send("Invalid Email.")
                } else if (error.code==="auth/operaion-not-allowed"){
                    console.log("Operation not allowed");
                    res.send("Operation not allowed")
                } else {
                    console.log(error);
                }
            })
    }
}