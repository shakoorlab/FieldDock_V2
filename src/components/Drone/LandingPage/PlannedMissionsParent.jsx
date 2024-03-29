import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoMissionsPlanned from "./NoMissions";
import PlannedMissionsCard from "./PlannedMissionCard";

function PlannedMissionsParent() {
  const navigate = useNavigate();

  const navToDroneDash = () => {
    navigate("/drone-dashboard");
  };
  const [missions, setMissions] = useState([]);

  // Polling the REST API for only "Planned" missions
  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch("http://3.15.191.116:8000/api/missions/");
        const missionsData = await response.json();

        // Filter missions by status 'Planned' before processing
        const plannedMissions = missionsData.filter(
          (mission) => mission.mission_status === "Planned"
        );

        setMissions((currentMissions) => {
          // Create a map of current mission IDs for quick lookup
          const missionIdSet = new Set(currentMissions.map((m) => m.id));

          // Further filter out any planned missions that are already in the state
          const newMissions = plannedMissions.filter(
            (mission) => !missionIdSet.has(mission.id)
          );

          // Map the new missions to include any additional formatting or properties
          const formattedNewMissions = newMissions.map((mission) => ({
            ...mission,
            date: mission.mission_date || "Date not set",
            duration: mission.duration || "Duration not set",
          }));

          // Return the new state which is the old missions plus any new missions
          return [...currentMissions, ...formattedNewMissions];
        });
      } catch (error) {
        console.error("Failed to fetch missions", error);
      }
    };

    // Initialize the polling
    const intervalId = setInterval(fetchMissions, 5000);

    // Fetch immediately on mount, then continue at the interval
    fetchMissions();

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to ensure this effect is only run on mount and unmount
  return (
    <>
      <div className="row-parent-box environmental-conditions-box">
        <div className="title-box">Planned Missions</div>
        <div
          style={{
            height: "500px",
            display: "flex",
            flexDirection: "column",
            width: "90%",
          }}
        >
          <div
            style={{
              height: "500px", //!change in 27inch screen
              overflowY: "auto",
              padding: "10px 5px",
            }}
          >
            {missions.length === 0 ? (
              <NoMissionsPlanned />
            ) : (
              <PlannedMissionsCard missions={missions} />
            )}
          </div>
          <div
            style={{
              height: "15%",
              width: "100%",
              borderTop: "3px solid #474a4e",
              background: "transparent",
              display: "flex",
              justifyContent: "center", // Centers the buttons horizontally
              alignItems: "center", // Centers the buttons vertically
              gap: "45px", // Adds space between the two buttons
            }}
          >
            <button className="view-plan-button">View</button>
            <button onClick={navToDroneDash} className="view-plan-button">
              Plan
            </button>
          </div>
        </div>
        {/* <NoMissionsPlanned /> */}
      </div>
    </>
  );
}

export default PlannedMissionsParent;
