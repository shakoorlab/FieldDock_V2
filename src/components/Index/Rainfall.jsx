import React from "react";

function Rainfall() {
  return (
    <>
      <div className="row-parent-box">
        <div className="title-box">Rainfall</div>
        <div className="input-group">
          <input type="text" id="start-date" placeholder="Start Date" />
          <input type="text" id="end-date" placeholder="End Date" />
          <button type="button">Enter</button>
        </div>
        <div className="data-display">
          <div className="data-label">Rainfall:</div>
          <div className="data-value">0"</div>
        </div>
      </div>
    </>
  );
}

export default Rainfall;
