'use strict';
const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true}
});

// Create a model from the schema
const User = mongoose.model('Users', UserSchema);

module.exports = User;