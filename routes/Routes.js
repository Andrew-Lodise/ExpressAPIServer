const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const errorController = require('../controllers/errorController')

router.get('/', (req, res) => {
    res.render('index')
  });
  
router.get("/users", homeController.showUsers)

router.get("/contact", homeController.showSignUp);

router.post("/users/submit", homeController.addUser);

// error route
router.use(errorController.pageNotFoundError)


module.exports = router