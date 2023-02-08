const express = require("express");
const router = express.Router();

const gifController = require("../controllers/gif.controllers");
const jwtCheck = require("../middlewares/jwtCheck.middleware");

router.get("/get", gifController.myGifList);

router.post("/new", jwtCheck, gifController.newGif);

module.exports = router;
