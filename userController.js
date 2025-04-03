const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const { hashPassword, comparePassword } = require("../utils/helpers");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await hashPassword(password); // Use helper
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({
      message: "User registered successfully!",
      token: generateToken(user.id, user.isAdmin),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      token: generateToken(user.id, user.isAdmin),
    });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
