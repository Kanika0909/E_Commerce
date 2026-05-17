const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },

  title: String,
  price: Number,
  originalPrice: Number,
  image: String,

  quantity: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
