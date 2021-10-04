const express = require("express");
const router = express.Router();
const { signUp, signIn, requireSignin } = require("../controller/auth");

router.post("/signin", signIn);

router.post("/signup", signUp);

router.post("/profile", requireSignin, (req, res) => {
  res.status(200).json(req.body);
});

module.exports = router;
