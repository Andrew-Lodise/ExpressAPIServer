const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const errorController = require('../controllers/errorController')
const userController = require('../controllers/usersController')

router.get('/users', userController.index);

//router.get('/', (req, res) => {
    //res.send("In server.js, no more views for a web service server")
  //});

module.exports = router