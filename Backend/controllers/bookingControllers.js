const Booking = require("../models/booking");

async function createBooking(req, res) {
  try {
    const { name, numberOfPeople, email, date } = req.body;

    const booking = new Booking({ name, numberOfPeople, email, date });

    await booking.save();

    res.status(201).json(booking);
  } catch (error) {
    console.error("Error creating booking:", error);

    res.status(500).json({ error: "Failed to create booking" });
  }
}

module.exports = {
  createBooking,
};
