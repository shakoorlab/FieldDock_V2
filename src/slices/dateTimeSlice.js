import { createSlice } from "@reduxjs/toolkit";

export const dateTimeSlice = createSlice({
  name: "dateTime",
  initialState: null,
  reducers: {
    setDateTime: (state, action) => action.payload,
  },
});

export const { setDateTime } = dateTimeSlice.actions;
export default dateTimeSlice.reducer;
