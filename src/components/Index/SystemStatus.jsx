import React from "react";

function SystemStatus() {
  return (
    <>
      <div className="row-parent-box">
        <div className="title-box">System Status</div>
        <div className="status-columns">
          <div className="status-column">
            <div className="status-item">
              <span className="status-label">Drone Battery:</span>
              <span className="status-value">34.21%</span>
            </div>
            <div className="status-item">
              <span className="status-label">Garage Battery:</span>
              <span className="status-value">79.38%</span>
            </div>
          </div>
          <div className="status-column">
            <div className="status-item">
              <span className="status-label">Drone Status:</span>
              <span className="status-value status-charging">Charging</span>
            </div>
            <div className="status-item">
              <span className="status-label">Cellular:</span>
              <div className="cellular-indicator">
                <span className="signal-dot active"></span>
                <span className="signal-dot active"></span>
                <span className="signal-dot active"></span>
                <span className="signal-dot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SystemStatus;
