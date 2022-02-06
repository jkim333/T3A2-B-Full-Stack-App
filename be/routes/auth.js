const express = require("express");

const authController = require("../controllers/auth");

const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.post("/login", authController.postLogin);
router.post("/signup", authController.postSignup);
router.get("/authenticated", isAuth, authController.getAuthenticated);

module.exports = router;
