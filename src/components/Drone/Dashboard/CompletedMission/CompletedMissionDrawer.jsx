import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import NoMissionsDisplayed from "../NoMissions";
import PlannedMissionsCard from "../../LandingPage/PlannedMissionCard";
import CompletedMap from "./CompletedMap";
import isEqual from "lodash/isEqual";

function CompletedMissionDrawer() {
  const [missions, setMissions] = useState([]);

  // Polling the REST API for only "Completed" missions
  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch("http://3.145.131.67:8000/api/missions/");
        const missionsData = await response.json();

        // Filter missions by status 'Planned' before processing
        const plannedMissions = missionsData.filter(
          (mission) => mission.mission_status === "Completed"
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} md={12} lg={12} xl={12}>
            <Item
              sx={{
                background: "transparent",
                borderBottom: "1px solid rgba(0, 242, 255, 0.25)",
                display: "flex",
                justifyContent: "flex-start",
                borderRadius: "0px",
              }}
            >
              <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ color: "#FFF" }}
              >
                Completed Missions
              </Typography>
            </Item>
          </Grid>

          <Grid xs={8} md={8} lg={8} xl={8}>
            <Item sx={{ background: "transparent" }}>
              <CompletedMap />
            </Item>
          </Grid>
          <Grid xs={4} md={4} lg={4} xl={4}>
            <Item sx={{ background: "transparent" }}>
              <div className="row-parent-box environmental-conditions-box">
                <div
                  style={{
                    height: "685px",
                    display: "flex",
                    flexDirection: "column",
                    width: "80%",
                  }}
                >
                  <div
                    style={{
                      height: "90%", //! changed this from auto, did it make short no missions go away??
                      overflowY: "auto",
                      padding: "10px 5px",
                    }}
                  >
                    {missions.length === 0 ? (
                      <NoMissionsDisplayed />
                    ) : (
                      <PlannedMissionsCard missions={missions} />
                    )}
                  </div>
                  <div
                    style={{
                      height: "10%",
                      width: "100%",
                      borderTop: "3px solid #474a4e",
                      background: "transparent",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "45px", // Adds space between the two buttons
                    }}
                  >
                    <button className="view-plan-button">Waypoints</button>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CompletedMissionDrawer;
