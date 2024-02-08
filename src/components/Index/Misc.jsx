import React from "react";
import MiscSensorTable from "./MiscTable";

function Misc() {
  return (
    <>
      <div className="row-parent-box">
        <div className="title-box">Misc</div>
        <div className="misc-soil-table-parent">
          <div className="menu-parent">
            <select className="table-select-menu">
              <option>Select a sensor...</option>
            </select>
          </div>
          {/* New parent element to appear underneath the select menu */}
          <div className="content-parent">
            <MiscSensorTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default Misc;
