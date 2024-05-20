const express = require("express")
const bodyParser = require("body-parser");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoute = require("./routes/authRoutes");
app.use("/userAuth", userRoute);

app.listen(3005, () => {
    console.log("Server is running on port 3005");
})