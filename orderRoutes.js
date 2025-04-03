const express = require("express");
const { getOrders } = require("../controllers/orderController");
const router = express.Router();

router.get("/", getOrders); // GET /api/orders

module.exports = router;
