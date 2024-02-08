import React from "react";

function WindGrid() {
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
        <span className="env-status-label">Wind Speed</span>
        <span className="env-status-value">23mph</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="env-status-label">Wind Direction</span>
        <span className="env-status-value">NW</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="env-status-label">Wind Gust</span>
        <span className="env-status-value">21mph</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="env-status-label">Wind Chill</span>
        <span className="env-status-value">22 &#8457;</span>
      </div>
    </>
  );
}

export default WindGrid;
