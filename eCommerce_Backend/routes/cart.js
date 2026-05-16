const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");

// Get all cart items
router.get("/", async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
});

// Add item to cart or increment if exists
router.post("/", async (req, res) => {
  const item = req.body;
  try {
    let existingItem = await Cart.findOne({ id: item.id });
    if (existingItem) {
      existingItem.quantity += 1;
      await existingItem.save();
      return res.json({
        message: "Item quantity incremented",
        item: existingItem,
      });
    } else {
      const newItem = new Cart(item);
      await newItem.save();
      return res
        .status(201)
        .json({ message: "Item added to cart", item: newItem });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to add item to cart" });
  }
});

// Increment quantity
router.patch("/increment/:id", async (req, res) => {
  try {
    const item = await Cart.findOne({ id: req.params.id });
    if (!item) return res.status(404).json({ error: "Item not found" });

    item.quantity += 1;
    await item.save();
    res.json({ message: "Quantity increased", item });
  } catch (err) {
    res.status(500).json({ error: "Failed to increment quantity" });
  }
});

// Decrement quantity
router.patch("/decrement/:id", async (req, res) => {
  try {
    const item = await Cart.findOne({ id: req.params.id });
    if (!item) return res.status(404).json({ error: "Item not found" });

    if (item.quantity > 1) {
      item.quantity -= 1;
      await item.save();
      res.json({ message: "Quantity decreased", item });
    } else {
      await item.deleteOne(); // auto-remove if quantity reaches 0
      res.json({ message: "Item removed from cart" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to decrement quantity" });
  }
});

// Delete item
router.delete("/:id", async (req, res) => {
  try {
    await Cart.deleteOne({ id: req.params.id });
    res.json({ message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete item" });
  }
});

module.exports = router;
