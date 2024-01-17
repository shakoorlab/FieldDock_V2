import React from "react";

function GDD() {
  return (
    <>
      <div className="row-parent-box">
        <div className="title-box">Growing Degree Days</div>
        <div className="input-group">
          <input type="text" id="start-date" placeholder="Start Date" />
          <input type="text" id="end-date" placeholder="End Date" />
          <button type="button">Enter</button>
        </div>
        <div className="data-display">
          <div className="data-label">GDD:</div>
          <div className="data-value">000</div>
        </div>
      </div>
    </>
  );
}

export default GDD;
