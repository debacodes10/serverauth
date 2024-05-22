const express = require("express")
const path = require('path');
const bodyParser = require("body-parser");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoute = require("./routes/authRoutes");
app.use("/userAuth", userRoute);

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
// Handle Google Sign-In
app.get('/googlesignin',  (req,res) => res.render("googleAuth"));

app.listen(3005, () => {
    console.log("Server is running on port 3005");
})