// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import waypointsReducer from "../slices/waypointsSlice";
import dateTimeReducer from "../slices/dateTimeSlice";
import missionReducer from "../slices/MissionTracking/missionSlice";

const store = configureStore({
  reducer: {
    dateTime: dateTimeReducer,
    waypoints: waypointsReducer,
    mission: missionReducer,
  },
});

export default store;
