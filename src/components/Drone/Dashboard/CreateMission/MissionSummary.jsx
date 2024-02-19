import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import EventIcon from "@mui/icons-material/Event";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import { HourglassBottom } from "@mui/icons-material";
// import PinDropIcon from "@mui/icons-material/PinDrop";
// import MapIcon from "@mui/icons-material/Map";
import CheckIcon from "@mui/icons-material/Check";

function MissionSummary() {
  //   const keyValueStyle = {
  //     display: "flex",
  //     alignItems: "center",
  //     gap: "10px",
  //   };

  return (
    <>
      <h3 style={{ fontWeight: "bold", color: "#48f7f5" }}>
        Mission Planned Successfully!
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center'",
          color: "#48f7f5",
        }}
      >
        <CheckIcon />
      </div>

      {/* <div style={{ marginTop: "20px", width: "100%", textAlign: "left" }}>
        <div style={keyValueStyle}>
          <EventIcon />
          <span style={{ fontSize: "1.3rem" }}>Date:</span>
          <span style={{ fontSize: "1.3rem" }}>01/23/45</span>
        </div>
        <div style={keyValueStyle}>
          <AccessTimeIcon />
          <span style={{ fontSize: "1.3rem" }}>Time:</span>
          <span style={{ fontSize: "1.3rem" }}>11:20 PM</span>
        </div>
        <div style={keyValueStyle}>
          <HourglassBottom />
          <span style={{ fontSize: "1.3rem" }}>Est. Duration:</span>
          <span style={{ fontSize: "1.3rem" }}>1 hr:20 min:15 sec</span>
        </div>
        <div style={keyValueStyle}>
          <MapIcon />
          <span style={{ fontSize: "1.3rem" }}>Est. Distance:</span>
          <span style={{ fontSize: "1.3rem" }}>1.85 miles</span>
        </div>
        <div style={keyValueStyle}>
          <PinDropIcon />
          <span style={{ fontSize: "1.3rem" }}># of Waypoints:</span>
          <span style={{ fontSize: "1.3rem" }}>11</span>
        </div>
      </div> */}
    </>
  );
}

export default MissionSummary;
