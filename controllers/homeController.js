const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user')

router.showUsers = async (req, res) => {
    try {
        // connecting to db
        await mongoose.connect('mongodb://localhost/AppUsers', {
        family: 4,
        });
        // console.log('Successfully connected to MongoDB using Mongoose!');
        
        const users = await User.find();
        
        res.render("users", {
            currentUsers: users
        });
        
    } catch (error) {
        console.error('Database connection error:', error);
    }
  };

router.addUser = async (req, res) => {
    //console.log('in add user');
    var newUserName = req.body.name;
    console.log("Name: " + newUserName);
    var newUserGender = req.body.gender;
    console.log("Gender: " + newUserGender);

    try {
        // connecting to db
        await mongoose.connect('mongodb://localhost/AppUsers', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4,
        });

        // adding new user to db
        const user = new User({
        name: newUserName,
        gender: newUserGender
        });
        const savedDocument = await user.save(); // saves the user to db

    } catch (error) {
        console.error('Error saving subscriber:', error);
    }

    res.render("thanks", {userName: newUserName});
}

router.showSignUp = (req, res) => {
    res.render("contact");
};


module.exports = router;