import React from "react";
import SoilSensorTable from "./SoilSensorTable";

function SoilConds() {
  return (
    <>
      <div className="row-parent-box">
        <div className="title-box">Soil Conditions</div>
        <div className="misc-soil-table-parent">
          <div className="menu-parent">
            <select className="table-select-menu">
              <option>Select a sensor...</option>
            </select>
          </div>
          {/* New parent element to appear underneath the select menu */}
          <div className="content-parent">
            <SoilSensorTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default SoilConds;
