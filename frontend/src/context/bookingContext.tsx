import React, { createContext, useContext, ReactNode, useState } from "react";

export interface Booking {
  name: string;
  numberOfPeople: number;
  email: string;
  date: string;
}

export interface BookingContextType {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
}

export const BookingContext = createContext<BookingContextType | undefined>(
  undefined
);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = (booking: Booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
}
