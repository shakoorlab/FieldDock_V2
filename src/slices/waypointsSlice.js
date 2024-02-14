// src/slices/waypointsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const waypointsSlice = createSlice({
  name: "waypoints",
  initialState: [],
  reducers: {
    setWaypoints: (state, action) => action.payload,
  },
});

export const { setWaypoints } = waypointsSlice.actions;
export default waypointsSlice.reducer;
