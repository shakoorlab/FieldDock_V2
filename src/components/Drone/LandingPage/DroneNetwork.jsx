import React from "react";

function DroneNetwork() {
  return (
    <>
      <div className="row-parent-box">
        <div className="title-box">FieldDock Drone Network</div>
        <div className="status-columns">
          <div className="drone-status-column">
            <div className="status-item">
              <span className="status-label">Connected Drones:</span>
              <span className="status-value">1</span>
            </div>
            <div className="status-item">
              <span className="status-label">Mission Status:</span>
              <span className="status-value">In Flight</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DroneNetwork;
