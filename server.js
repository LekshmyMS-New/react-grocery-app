const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");
const config = require("./config/env"); // Import the env.js file

// Import Routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Load environment variables (dotenv is optional now since we use config/env)
dotenv.config();

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses JSON request body

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("🚀 Grocery Shop API is running...");
});

// Error Handling Middleware
app.use(errorHandler);

// Define Port
const PORT = config.port; // Use PORT from env.js

// Connect to Database and Start Server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
});
