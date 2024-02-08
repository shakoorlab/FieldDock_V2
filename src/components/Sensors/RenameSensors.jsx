import React from "react";

function RenameSensors() {
  return (
    <>
      <div className="bottom-centered-row-container">
        <div className="title-box">Rename Sensor</div>
        <div className="bottom-inner-content">
          <input
            type="text"
            placeholder="Enter Sensor Name"
            className="input-group-input"
          />
          <button className="rename-drone-button">Rename</button>
        </div>
      </div>
    </>
  );
}
export default RenameSensors;
