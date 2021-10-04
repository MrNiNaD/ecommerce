const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  requireSignin,
} = require("../../controller/admin/auth");

router.post("/admin/signin", signIn);

router.post("/admin/signup", signUp);

module.exports = router;
