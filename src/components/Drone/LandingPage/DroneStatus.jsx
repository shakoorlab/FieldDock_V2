import React from "react";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

function DroneStatus() {
  return (
    <>
      <div className="top-centered-row-container">
        <div className="title-box">Drone Status</div>
        <div className="top-inner-content">
          <BatteryFullIcon sx={{ color: "rgba(0, 168, 177, 0.65);" }} />
          <span style={{ color: "#ececed", fontSize: "0.9rem" }}>Battery:</span>
          <span style={{ color: "#48f7f5", fontSize: "0.9rem" }}>71.48%</span>
          {/* Adding some space */}
          <span style={{ margin: "0 10px" }}></span>
          <SignalCellularAltIcon sx={{ color: "rgba(0, 168, 177, 0.65);" }} />
          <span style={{ color: "#ececed", fontSize: "0.9rem" }}>Signal:</span>
          <span style={{ color: "#48f7f5", fontSize: "0.9rem" }}>Strong</span>
        </div>
      </div>
    </>
  );
}
export default DroneStatus;
