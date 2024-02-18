import React from "react";
import LogsTable from "./LogTable";

function DroneLogsParent() {
  return (
    <>
      <div className="page-title-box">
        <h3>Drone Mission Logs</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <LogsTable />
      </div>
    </>
  );
}

export default DroneLogsParent;
