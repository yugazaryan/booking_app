import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [errors, setErrors] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  const handleGuestsChange = (e) => {
    const numGuests = parseInt(e.target.value, 10);
    setGuests(numGuests);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";
    if (guests < 1) newErrors.guests = "Number of guests must be at least 1";
    if (!occasion) newErrors.occasion = "Occasion is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = { date, time, guests, occasion };
      alert("Reservation successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <fieldset>
        <legend>Booking Form</legend>

        <div className="form-group">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            aria-label="Select reservation date"
            required
          />
          {errors.date && (
            <p role="alert" className="error">
              {errors.date}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            aria-label="Select reservation time"
            required
          >
            <option value="">Select a time</option>
            {availableTimes.map((timeOption) => (
              <option key={timeOption} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </select>
          {errors.time && (
            <p role="alert" className="error">
              {errors.time}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            placeholder="1"
            min="1"
            max="10"
            value={guests}
            onChange={handleGuestsChange}
            aria-label="Number of guests"
            required
          />
          {errors.guests && (
            <p role="alert" className="error">
              {errors.guests}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            aria-label="Select occasion"
            required
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {errors.occasion && (
            <p role="alert" className="error">
              {errors.occasion}
            </p>
          )}
        </div>

        <button type="submit" aria-label="Submit reservation">
          Make Your reservation
        </button>
      </fieldset>
    </form>
  );
};

export default BookingForm;
