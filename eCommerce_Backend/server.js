const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth");
const wishlistRoutes = require("./routes/wishlist");
const cartRoutes = require("./routes/cart");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "e-commerce-beige-seven-53.vercel.app",
    credentials: true,
  }),
);
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/cart", cartRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
