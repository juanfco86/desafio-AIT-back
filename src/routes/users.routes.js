const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controllers')
// const jwtCheck = require('../middlewares/jwtCheck.middleware')

router.get('/check/:email', userController.checkUser)

router.post('/create', userController.createUser)

module.exports = router