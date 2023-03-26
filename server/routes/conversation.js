const express = require("express");
const { getConversation } = require("../controllers/conversation");
const router = express.Router();

router.get("/", getConversation);
module.exports = router;
