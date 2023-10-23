import React, { useContext } from "react";
import { useBooking } from "../context/bookingContext";

function ConfirmationPage() {
  const { bookings } = useBooking();

  return (
    <div>
      <h2>Booking Confirmed</h2>
      <p>Your booking details:</p>
      {bookings.map((booking, index) => (
        <div key={index}>
          <p>Name: {booking.name}</p>
          <p>Number of People: {booking.numberOfPeople}</p>
          <p>Email: {booking.email}</p>
          <p>Date: {booking.date}</p>
        </div>
      ))}
    </div>
  );
}

export default ConfirmationPage;
