// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import waypointsReducer from "../slices/waypointsSlice";
import dateTimeReducer from "../slices/dateTimeSlice";

const store = configureStore({
  reducer: {
    dateTime: dateTimeReducer,
    waypoints: waypointsReducer,
  },
});

export default store;
