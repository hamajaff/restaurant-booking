import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../hooks/useBooking";
import { createBooking } from "../services/bookingService";
import { Booking } from "../context/bookingContext";
import styles from "./styled/bookingForm.module.css";

function BookingForm() {
  const { submitBooking } = useBooking();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Booking>({
    name: "",
    numberOfPeople: 1,
    email: "",
    date: "",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleNumberOfPeopleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, numberOfPeople: Number(e.target.value) });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, date: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Form submitted with data:", formData);

      const newBooking = await createBooking(formData);
      console.log("Booking created:", newBooking);

      if (newBooking) {
        navigate("/confirmation");
      } else {
        console.error("Booking creation failed");
      }
    } catch (error) {}
  };

  return (
    <div className={styles["booking-form"]}>
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-input"]}>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            name="name"
            placeholder="Namn"
            value={formData.name}
            onChange={handleNameChange}
          />
        </div>
        <div className={styles["form-input"]}>
          <label htmlFor="numberOfPeople">numberOfPeople:</label>
          <input
            type="number"
            name="numberOfPeople"
            placeholder="Antal personer"
            value={formData.numberOfPeople}
            onChange={handleNumberOfPeopleChange}
          />
        </div>
        <div className={styles["form-input"]}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={styles["form-input"]}>
          <label htmlFor="date">date:</label>
          <input
            type="date"
            name="date"
            placeholder="Datum"
            value={formData.date}
            onChange={handleDateChange}
          />
        </div>
        <button type="submit">Boka</button>
      </form>
    </div>
  );
}

export default BookingForm;
