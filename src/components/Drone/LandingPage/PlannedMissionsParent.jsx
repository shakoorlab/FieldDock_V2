import React from "react";
import NoMissionsPlanned from "../Missions/NoMissions";

function PlannedMissionsParent() {
  return (
    <>
      <div className="row-parent-box environmental-conditions-box">
        <div className="title-box">Planned Missions</div>
        {/* <div
          style={{
            height: "500px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div style={{ height: "80%", backgroundColor: "#f0f0f0" }}>
          </div>
          <div style={{ height: "20%", backgroundColor: "#d0d0d0" }}>
           
          </div>
        </div> */}
        <NoMissionsPlanned />
      </div>
    </>
  );
}

export default PlannedMissionsParent;
