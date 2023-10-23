require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/restaurant/bookings", bookingRoutes);

const run = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

run();
