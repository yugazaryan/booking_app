import React, { useReducer } from "react";
import BookingPage from "./BookingPage";
import "./Main.css";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return initializeTimes();
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div className="main-container">
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default Main;
