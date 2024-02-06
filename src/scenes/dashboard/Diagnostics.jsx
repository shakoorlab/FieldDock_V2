import React from "react";
import MUITable from "../../components/Diagnostics/MUITable";
import SelectionGrid from "../../components/Diagnostics/SelectionGrid";

function Diagnostics() {
  return (
    <>
      <div className="page-title-box">
        <h3>Diagnostics Log</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MUITable />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SelectionGrid />
      </div>
    </>
  );
}

export default Diagnostics;
