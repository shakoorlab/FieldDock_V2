import React from "react";
import "../../css/drone.css";
import DroneNetwork from "../../components/Drone/LandingPage/DroneNetwork";
import DroneLogs from "../../components/Drone/LandingPage/DroneLogs";
import PlannedMissionsParent from "../../components/Drone/LandingPage/PlannedMissionsParent";
import CompletedMissionsParent from "../../components/Drone/LandingPage/CompletedMissionsParent";
import DroneFieldDock from "../../assets/svg/Drone_FieldDock.svg";
import RenameDrone from "../../components/Drone/LandingPage/RenameDrone";

import DroneStatus from "../../components/Drone/LandingPage/DroneStatus";
// import MapCoordinatesParent from "../../components/Drone/Missions/MissionPlanning/MapCoordinatesParent";

function Drone() {
  return (
    <>
      <div className="page-title-box">
        <h3>Mission Control</h3>
      </div>
      <div className="row-column-grid">
        {/* First row of items */}
        <DroneNetwork />
        <div className="row-menu-parent">
          <select className="menu-fill">
            <option value="">Select a drone...</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <DroneLogs />

        {/* Second row that should appear as three columns directly under the first row */}
        <div>
          <CompletedMissionsParent />
        </div>
        <div>
          <div className="top">
            <DroneStatus />
          </div>

          <div className="middle">
            <img className="page-img" src={DroneFieldDock} />
          </div>
          <div class="bottom">
            <RenameDrone />
          </div>
        </div>

        <div>
          <PlannedMissionsParent />
        </div>
      </div>
    </>
  );
}

export default Drone;
