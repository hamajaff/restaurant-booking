const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingControllers");

router.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

router.post("/", bookingController.createBooking);

module.exports = router;
