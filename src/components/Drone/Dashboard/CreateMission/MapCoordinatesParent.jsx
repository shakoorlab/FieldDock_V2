import React from "react";
// import MapComponent from "./Map";
// import CoordinatesTable from "./CoordinatesTable";

function MapCoordinatesParent() {
  return (
    <>
      <div className="page-title-box">
        <h3>Mission Coordinates</h3>
      </div>
      <div className="coordinates-map-grid">
        <div className="column-large">
          <MapComponent />
        </div>
        <div className="column-small">
          <CoordinatesTable />
        </div>
      </div>
    </>
  );
}

export default MapCoordinatesParent;
