import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";

import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const PlannedMissionsCard = ({ missions }) => {
  const [checkedState, setCheckedState] = useState({}); // State to keep track of checked cards

  const handleCheck = (id) => {
    setCheckedState((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  // Function to determine button label and color
  const getButtonLabelAndColor = (index) => {
    if (index === 0) {
      return { label: "First", color: "#48f7f5" };
    } else if (index === 1) {
      return { label: "Next", color: "rgba(0, 168, 177, 0.65)" };
    } else {
      return { label: "Planned", color: "#474a4e;" };
    }
  };
  return (
    <>
      {missions.map((mission, index) => {
        const isChecked = checkedState[mission.id] || false;
        const { label, color } = getButtonLabelAndColor(index);
        return (
          <Card
            key={mission.id}
            sx={{
              width: "100%",
              background: "linear-gradient(1deg, rgba(0, 0, 0, 0), #1b1b1b)",
              borderRadius: "4px",
              marginTop: "5px",
              marginBottom: "21px",
              position: "relative",
              cursor: "pointer",
              flexShrink: 0,
              boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
              ":hover": {
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", // Change shadow for hover
                transform: "scale(1.03)", // Slight increase in scale
                transition: "transform 0.3s ease-in-out", // Smooth transition for transform
              },
              ...(isChecked && {
                // Apply 'hover' styles if the card is checked
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                transform: "scale(1.03)",
              }),
            }}
          >
            <Checkbox
              checked={isChecked} // Set the checked attribute
              onChange={() => handleCheck(mission.id)}
              sx={{
                position: "absolute",
                top: 2,
                left: 0,
                color: "#FFF",
                "&.Mui-checked": {
                  color: "#25c0e9",
                },
              }}
            />

            <Button
              variant="contained"
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: color,
                "&:hover": {
                  backgroundColor: color,
                  opacity: 0.9,
                },
                color: "#474a4e",
                fontSize: "0.55rem",
                fontWeight: "bold",
                textTransform: "none",
                padding: "5px 8px",
              }}
            >
              {label}
            </Button>
            <Typography
              variant="h6"
              component="div"
              sx={{
                position: "absolute",
                top: 11.5,
                left: 45,
                textAlign: "center",
                fontWeight: "bold",
                color: "#FFF",
                fontSize: "0.9rem",
              }}
            >
              FieldDock Mission: {index + 1}
            </Typography>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",

                height: "100%",
                borderRadius: "4px",
                border: "0.5px solid rgba(0, 168, 177, 0.65)",
                pt: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "20px",
                  color: "#FFF",
                }}
              >
                <EventIcon sx={{ fontSize: "0.95rem", mr: 1 }} />
                <Typography variant="body2">Date: {mission.date}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "5px",
                  color: "#FFF",
                }}
              >
                <AccessTimeIcon sx={{ fontSize: "0.95rem", mr: 1 }} />
                <Typography variant="body2">
                  Duration: {mission.duration}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default PlannedMissionsCard;
