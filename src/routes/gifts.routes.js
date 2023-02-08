
const express = require('express')
const router = express.Router()

const giftController = require('../controllers/gift.controllers')
const jwtCheck = require('../middlewares/jwtCheck.middleware')

router.get('/get', giftController.myGiftList)

router.post('/new', giftController.newGift)


module.exports = router