const express = require("express");
const controller = require("./controller.js");

const router = express.Router();

router.post("/", controller.calculatePrice);

module.exports = router;
