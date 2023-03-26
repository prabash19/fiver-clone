const express = require("express");
const { getReviews } = require("../controllers/reviews");
const router = express.Router();

router.get("/", getReviews);
module.exports = router;
