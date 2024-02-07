import React from "react";
import NoMissionsPlanned from "./NoMissions";

function CompletedMissionsParent() {
  return (
    <>
      <div className="row-parent-box environmental-conditions-box">
        <div className="title-box">Past Missions</div>
        <NoMissionsPlanned />
      </div>
    </>
  );
}

export default CompletedMissionsParent;
