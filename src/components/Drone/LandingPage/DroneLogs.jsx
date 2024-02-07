import React from "react";

function DroneLogs() {
  return (
    <>
      <div className="row-parent-box">
        <div className="title-box">FieldDock Drone Logs</div>
        <div className="input-group">
          <input type="text" id="start-date" placeholder="Start Date" />
          <input type="text" id="end-date" placeholder="End Date" />
          <button type="button">Logs</button>
        </div>
        <div className="data-display">
          <div className="data-label">GDD:</div>
          <div className="data-value">000</div>
        </div>
      </div>
    </>
  );
}

export default DroneLogs;
