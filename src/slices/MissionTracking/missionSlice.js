import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk action
export const fetchMissionStatus = createAsyncThunk(
  "mission/fetchStatus",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://3.15.191.116:8000/api/missions/");
      const missions = await response.json();
      // Check if any mission is "In Progress"
      const inProgressMission = missions.find(
        (mission) => mission.mission_status === "In Progress"
      );
      // Return "In Progress" if found, otherwise some default or null
      return inProgressMission ? "In Progress" : "None";
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

const missionSlice = createSlice({
  name: "mission",
  initialState: {
    status: null, // Initial state
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissionStatus.fulfilled, (state, action) => {
        state.status = action.payload;
      })
      .addCase(fetchMissionStatus.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default missionSlice.reducer;
