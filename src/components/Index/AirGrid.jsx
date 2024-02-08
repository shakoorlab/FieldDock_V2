import React from "react";

function AirGrid() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="env-status-label">Temperature</span>
        <span className="env-status-value">22 &#8457;</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="env-status-label">Humidity</span>
        <span className="env-status-value">00.00%</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="env-status-label">Air Pressure</span>
        <span className="env-status-value">0000 kPa</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="env-status-label">Vapor Pressure</span>
        <span className="env-status-value">00 kPa</span>
      </div>
    </>
  );
}

export default AirGrid;
