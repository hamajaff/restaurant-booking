import { useContext } from "react";
import {
  Booking,
  BookingContext,
  BookingContextType,
} from "../context/bookingContext";
import { createBooking } from "../services/bookingService";

export function useBooking() {
  const context = useContext<BookingContextType | undefined>(BookingContext);

  if (!context) {
    throw new Error("error use booking");
  }

  const { addBooking } = context;

  const submitBooking = async (formData: Booking) => {
    try {
      const newBooking = await createBooking(formData);
      addBooking(newBooking);
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  return { submitBooking };
}

export default useBooking;
