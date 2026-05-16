const express = require("express");
const router = express.Router();

// Signup route
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  console.log("User Data:", req.body);

  res.json({
    message: "Signup successful",
    user: { name, email },
  });
});

module.exports = router;
