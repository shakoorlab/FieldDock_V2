import React from "react";

import { useNavigate } from "react-router-dom";

function RenameDrone() {
  const navigate = useNavigate(); //! remove

  const navToDroneDash = () => {
    navigate("/drone-dashboard");
  };
  return (
    <>
      <div className="bottom-centered-row-container">
        <div className="title-box">Rename Drone</div>
        <div className="bottom-inner-content">
          <input
            type="text"
            placeholder="Enter Drone Name"
            className="input-group-input"
          />
          <button className="rename-drone-button">Rename</button>
        </div>
      </div>
    </>
  );
}
export default RenameDrone;
