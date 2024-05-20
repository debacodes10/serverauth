const express = require("express")
const router = express.Router();

const registerController = require("../controllers/registerController")
const signinController = require("../controllers/signinController")

router.post("/register", registerController.post)
router.post("/signin", signinController.post)

module.exports = router