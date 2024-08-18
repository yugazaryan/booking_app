import React from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";

const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <div className="booking-page">
      <h1>Book a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default BookingPage;
