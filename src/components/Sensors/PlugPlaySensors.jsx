import React from "react";
// Import your Table component if it's a separate file
import Table from "./Table";

function PlugPlaySensors() {
  return (
    <>
      <div className="row-parent-box environmental-conditions-box">
        <div className="title-box">Plug and Play Sensors</div>
        <div
          style={{
            height: "500px",
            width: "95%",
            display: "flex",
            flexDirection: "column", // Adjust to stack children vertically
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="sensor-menu-parent">
            <select className="table-select-menu">
              <option>Select a sensor...</option>
            </select>
          </div>
          {/* Assuming Table is a component you have defined elsewhere */}
          <div className="table-container" style={{ width: "100%" }}>
            <Table /> {/* Placeholder for your Table component */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlugPlaySensors;
