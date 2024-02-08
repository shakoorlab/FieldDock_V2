import React from "react";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";

function SensorStatus() {
  return (
    <>
      <div className="top-centered-row-container">
        <div className="title-box">Sensor Status</div>
        <div className="top-inner-content">
          <BatteryFullIcon sx={{ color: "rgba(0, 168, 177, 0.65);" }} />
          <span style={{ color: "#ececed", fontSize: "0.9rem" }}>Battery:</span>
          <span style={{ color: "#48f7f5", fontSize: "0.9rem" }}>71.48%</span>
          {/* Adding some space */}
          <span style={{ margin: "0 10px" }}></span>
          <span style={{ color: "#ececed", fontSize: "0.9rem" }}>LoRaWAN:</span>
          <div className="cellular-indicator">
            <span className="signal-dot active"></span>
            <span className="signal-dot active"></span>
            <span className="signal-dot active"></span>
            <span className="signal-dot"></span>
          </div>
        </div>
      </div>
    </>
  );
}
export default SensorStatus;
