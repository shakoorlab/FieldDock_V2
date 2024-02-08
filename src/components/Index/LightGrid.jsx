import React from "react";

function LightGrid() {
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
        <span className="env-status-label">Solar Radiation</span>
        <span className="env-status-value">00 W/m2</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="env-status-label">LUX</span>
        <span className="env-status-value">000000</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="env-status-label">Lightening Strikes</span>
        <span className="env-status-value">0000</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="env-status-label">Strike Distance</span>
        <span className="env-status-value">0000</span>
      </div>
    </>
  );
}

export default LightGrid;
