import React from "react";

function CoordinatesTable() {
  return (
    <>
      <div className="small-column-content">
        <div className="small-column-top"></div>
        <div className="small-column-bottom">
          <button className="small-column-button">Save</button>
          <button className="small-column-button">Load</button>
          <button className="small-column-button">Plan</button>
        </div>
      </div>
    </>
  );
}

export default CoordinatesTable;

{
  /* <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>P1</th>
              <th>P2</th>
              <th>P3</th>
              <th>P4</th>
              <th>Lat</th>
              <th>Long</th>
              <th>Alt</th>
              <th>Frame</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table> */
}
