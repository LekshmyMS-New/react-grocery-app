const bcrypt = require("bcryptjs");

// Hash password before saving to DB
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Compare entered password with hashed password
const comparePassword = async (enteredPassword, storedHash) => {
  return await bcrypt.compare(enteredPassword, storedHash);
};

// Format price to 2 decimal places
const formatPrice = (price) => {
  return parseFloat(price).toFixed(2);
};

module.exports = {
  hashPassword,
  comparePassword,
  formatPrice,
};
