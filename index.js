// Import the required modules
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const cors = require("cors"); // Import the cors package

// Create an instance of an Express application
const app = express();

// Middleware to parse URL-encoded data and JSON data
app.use(cors({
    origin: 'http://localhost:3000' // Replace with your frontend URL if different
}));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import the user authentication routes
const authRoute = require("./routes/authRoutes");

// Use the imported user authentication routes for the "/userAuth" endpoint
app.use("/userAuth", authRoute);

//route declaration for "/" endpoint
const userRoute = require("./routes/userRoutes")
app.use("/", userRoute)

// Set the view engine to Pug
app.set('view engine', 'pug');

// Set the directory where the view templates are located
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle the Google Sign-In route
app.get('/googlesignin', (req, res) => res.render("googleAuth"));

//MongoDB connection URI
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)
.then(()=>{console.log("MongoDB connected");})
.catch(err=>console.log("MongoDB error: ", err))

// Start the server on port 3005 and log a message to the console
app.listen(3005, () => {
    console.log("Server is running on port 3005");
});
