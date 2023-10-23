import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingForm from "./components/bookingForm";
import { BookingProvider } from "./context/bookingContext";

function App() {
  return (
    <BookingProvider>
      <Router>
        <Routes>
          <Route path="/" Component={BookingForm} />
        </Routes>
      </Router>
    </BookingProvider>
  );
}

export default App;
