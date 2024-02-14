// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import waypointsReducer from "../slices/waypointsSlice";

const store = configureStore({
  reducer: {
    waypoints: waypointsReducer,
  },
});

export default store;
