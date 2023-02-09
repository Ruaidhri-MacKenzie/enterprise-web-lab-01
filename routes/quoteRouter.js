const express = require("express");
const controller = require("../controllers/quoteController.js");

const router = express.Router();

router.post("/", controller.createQuote);
router.get("/", controller.getQuotes);
router.get("/:id", controller.getQuoteById);
router.patch("/:id", controller.updateQuoteById);
router.delete("/:id", controller.deleteQuoteById);

module.exports = router;
