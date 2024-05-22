// Import the required modules
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");

// Create an instance of an Express application
const app = express();

// Middleware to parse URL-encoded data and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import the user authentication routes
const userRoute = require("./routes/authRoutes");

// Use the imported user authentication routes for the "/userAuth" endpoint
app.use("/userAuth", userRoute);

// Set the view engine to Pug
app.set('view engine', 'pug');

// Set the directory where the view templates are located
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle the Google Sign-In route
app.get('/googlesignin', (req, res) => res.render("googleAuth"));

// Start the server on port 3005 and log a message to the console
app.listen(3005, () => {
    console.log("Server is running on port 3005");
});
