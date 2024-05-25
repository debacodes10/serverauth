const User = require('./../models/userModel');

// Define the controller methods
const userInfoController = {
    post: async (req, res) => {
        try {
            // Create a new user instance with the data from the request body
            const newUser = new User({
                aboutme: req.body.aboutme,
                experience: req.body.experience,
                skills: req.body.skills,
                addDetails: req.body.addDetails,
                socialLinks: req.body.socialLinks,
                education: req.body.education,
                portfolios: req.body.portfolios,
                resume: req.body.resume
            });

            // Save the new user to the database
            const savedUser = await newUser.save();
            
            // Respond with the saved user data
            res.status(201).json(savedUser);
        } catch (error) {
            // Handle errors, such as validation errors
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = userInfoController;
