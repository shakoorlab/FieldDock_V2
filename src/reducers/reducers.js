// reducers.js
import { SET_DATE_TIME, SET_WAYPOINTS } from "../actions/actionTypes";

const initialState = {
  dateTime: null,
  waypoints: [],
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE_TIME:
      return {
        ...state,
        dateTime: action.payload,
      };
    case SET_WAYPOINTS:
      return {
        ...state,
        waypoints: action.payload,
      };
    default:
      return state;
  }
};

export default missionReducer;
