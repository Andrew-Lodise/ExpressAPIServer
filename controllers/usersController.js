const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user')

router.index = async (req, res) => {
  try {
      // connecting to db
      await mongoose.connect('mongodb://localhost/AppUsers', {
      family: 4,
      });
      // console.log('Successfully connected to MongoDB using Mongoose!');
      
      const users = await User.find();

      res.json({
        status: 200,
        data: users,
      })
      
  } catch (error) {
      console.error('error in usersController index:', error);
  }
};

router.indexView = async (req, res) => {
  try {
      // connecting to db
      await mongoose.connect('mongodb://localhost/AppUsers', {
      family: 4,
      });
      // console.log('Successfully connected to MongoDB using Mongoose!');

      if (req.query.format === 'json'){
        res.json(res.locals.users)
      }

  } catch (error) {
      console.error('error in usersController indexView:', error);
  }
};

module.exports = router;