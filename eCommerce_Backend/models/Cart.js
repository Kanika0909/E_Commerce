const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // product id
  title: String,
  price: Number, // unit price
  originalPrice: Number,
  image: String,
  quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model("Cart", CartSchema);
