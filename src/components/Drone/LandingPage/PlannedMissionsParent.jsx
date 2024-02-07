import React from "react";
import NoMissionsPlanned from "./NoMissions";

function PlannedMissionsParent() {
  return (
    <>
      <div className="row-parent-box environmental-conditions-box">
        <div className="title-box">Planned Missions</div>
        <NoMissionsPlanned />
      </div>
    </>
  );
}

export default PlannedMissionsParent;
