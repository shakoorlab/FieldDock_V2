import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMissionStatus } from "../../../../slices/MissionTracking/missionSlice";
import MissionInProgress from "./MissionInProgress";
import NoMissionInProgress from "./NoMissionInProgress";

const MissionStatusChecker = () => {
  const dispatch = useDispatch();
  const missionStatus = useSelector((state) => state.mission.status);

  useEffect(() => {
    // Perform an initial fetch when the component mounts
    dispatch(fetchMissionStatus());

    // Then set up the interval for subsequent polls
    const intervalId = setInterval(() => {
      dispatch(fetchMissionStatus());
    }, 5000); // Consider reducing the time based on your needs and server capacity

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [dispatch]);

  return missionStatus === "In Progress" ? ( //! eventually edit this function to a while loading, show a "searching for missions" component
    <MissionInProgress />
  ) : (
    <NoMissionInProgress />
  );
};

export default MissionStatusChecker;
