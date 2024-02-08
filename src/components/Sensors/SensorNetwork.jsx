import React from "react";

function SensorNetwork() {
  return (
    <>
      <div className="row-parent-box">
        <div className="title-box">Wireless Sensor Network</div>
        <div className="status-columns">
          <div className="drone-status-column">
            <div className="status-item">
              <span className="status-label">Connected Sensors:</span>
              <span className="status-value">0 Sensors</span>
            </div>
            <div className="status-item">
              <span className="status-label">Network Status:</span>
              <span className="status-value">None Detected</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SensorNetwork;
