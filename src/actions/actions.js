// actions.js
import { SET_DATE_TIME, SET_WAYPOINTS } from "./actionTypes";

export const setDateTime = (dateTime) => ({
  type: SET_DATE_TIME,
  payload: dateTime,
});

export const setWaypoints = (waypoints) => ({
  type: SET_WAYPOINTS,
  payload: waypoints,
});
