const express = require("express");
const { getGig } = require("../controllers/gig");
const router = express.Router();

router.get("/", getGig);
module.exports = router;
