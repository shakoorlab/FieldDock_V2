import React from "react";
import WindGrid from "./WindGrid";
import AirGrid from "./AirGrid";
import LightGrid from "./LightGrid";

//!REACT ANIMATE IN HERE
function EnvConds() {
  return (
    <>
      <div className="row-parent-box environmental-conditions-box">
        <div className="title-box">Environmental Conditions</div>
        <div
          style={{
            height: "500px",
            width: "90%",
            display: "flex",
            flexDirection: "column", // Change to stack children vertically
            justifyContent: "space-around", // Adjust for spacing around the child divs
            alignItems: "center",
          }}
        >
          {/* Child divs with top border and adjusted height */}
          <div
            style={{
              width: "100%",
              height: "25%",
              borderTop: "0.5px solid #797979",
              marginTop: "20px",
              position: "relative",
            }}
          >
            <div className="env-title-box">Wind</div>
            <div className="env-grid">
              {/* Grid items */}
              <WindGrid />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "25%",
              borderTop: "0.5px solid #797979",
              position: "relative",
            }}
          >
            <div className="env-title-box-air">Air</div>
            <div className="env-grid">
              <AirGrid />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "25%",
              borderTop: "0.5px solid #797979",
              position: "relative",
            }}
          >
            <div className="env-title-box-light">Light</div>
            <div className="env-grid">
              <LightGrid />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnvConds;
