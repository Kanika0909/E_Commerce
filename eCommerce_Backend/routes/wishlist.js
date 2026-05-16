const express = require("express");
const router = express.Router();
const Product = require("../models/product");

let wishlist = [];

router.get("/", (req, res) => {
  res.json(wishlist);
});

router.post("/", async (req, res) => {
  const item = req.body;
  wishlist.push(item);
  res.json({ message: "Added to wishlist", item });
});

router.delete("/:id", (req, res) => {
  wishlist = wishlist.filter((item) => item.id !== req.params.id);
  res.json({ message: "Removed from wishlist" });
});

module.exports = router;
