const express = require("express");
const {
  getAuth,
  register,
  login,
  logout,
  deleteUser,
} = require("../controllers/auth");
const router = express.Router();

router.get("/", getAuth);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/deleteUser", deleteUser);

module.exports = router;
