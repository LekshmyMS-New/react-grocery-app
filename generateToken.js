const jwt = require("jsonwebtoken");

const generateToken = (userId, isAdmin = false) => {
  return jwt.sign(
    { id: userId, isAdmin }, // Payload (user info)
    process.env.JWT_SECRET,  // Secret key from .env
    { expiresIn: "30d" }     // Token expiration (30 days)
  );
};

module.exports = generateToken;
