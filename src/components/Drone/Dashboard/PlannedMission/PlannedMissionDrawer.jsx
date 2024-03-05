import React, { useEffect, useState, useCallback } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import NoMissionsDisplayed from "../NoMissions";
import PlannedMissionsCard from "../../LandingPage/PlannedMissionCard";
import PlannedMap from "./PlannedMap";

function PlannedMissionDrawer() {
  const [missions, setMissions] = useState([]);
  const [selectedMissionIds, setSelectedMissionIds] = useState(new Set());

  // Polling the REST API for only "Planned" missions is only updated if the fetched missions data has actually changed
  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch("http://3.15.191.116:8000/api/missions/");
        const missionsData = await response.json();

        // Filter missions by status 'Planned'
        const plannedMissions = missionsData.filter(
          (mission) => mission.mission_status === "Planned"
        );

        setMissions((currentMissions) => {
          let isStateUpdated = false;
          const updatedMissions = [...currentMissions];

          plannedMissions.forEach((mission) => {
            const exists = currentMissions.some((m) => m.id === mission.id);
            if (!exists) {
              isStateUpdated = true;
              updatedMissions.push({
                ...mission,
                date: mission.mission_date || "Date not set",
                duration: mission.duration || "Duration not set",
              });
            }
          });

          // Return updated missions if new ones were added, otherwise keep the current state
          return isStateUpdated ? updatedMissions : currentMissions;
        });
      } catch (error) {
        console.error("Failed to fetch missions", error);
      }
    };

    const intervalId = setInterval(fetchMissions, 5000);
    fetchMissions(); // Fetch immediately on mount, then continue at the interval

    return () => clearInterval(intervalId);
  }, []);

  // -----------------------ensure the onMissionSelect function doesn't cause child components to re-render unnecessarily, wrap it with useCallback---------------------------

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
                Planned Missions
              </Typography>
            </Item>
          </Grid>

          <Grid xs={8} md={8} lg={8} xl={8}>
            <Item sx={{ background: "transparent" }}>
              <PlannedMap />
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
                      padding: "10px 15px",
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
                      gap: "45px",
                    }}
                  >
                    <button
                      className="view-plan-button"
                      // onClick={handleWaypointsButtonClick}
                    >
                      Waypoints
                    </button>
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

export default PlannedMissionDrawer;
