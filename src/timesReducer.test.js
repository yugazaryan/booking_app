// timesReducer.test.js
import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns the correct initial times", () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes returns the same times regardless of action", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: "UPDATE_TIMES", date: "2024-08-18" };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(initialState);
});
