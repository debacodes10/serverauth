const firebaseAuth = require("firebase/auth");
const {app} = require('../firebase-adminsdk');

const auth = firebaseAuth.getAuth(app)
module.exports = { auth };