// SensorDataTable.js
import React from "react";

//!REACT ANIMATE IN HERE
const SoilSensorTable = () => {
  return (
    <table
      style={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              padding: "8px",
              color: "rgba(0, 168, 177, 0.65)",
              fontSize: "0.7rem",
            }}
          >
            <div>Soil</div>
            <div>Depth</div>
          </th>
          <th
            style={{
              padding: "8px",
              color: "rgba(0, 168, 177, 0.65)",
              fontSize: "0.7rem",
            }}
          >
            Soil Moisture
          </th>
          <th
            style={{
              padding: "8px",
              color: "rgba(0, 168, 177, 0.65)",
              fontSize: "0.7rem",
            }}
          >
            Soil Temperature
          </th>
          <th
            style={{
              padding: "8px",
              color: "rgba(0, 168, 177, 0.65)",
              fontSize: "0.7rem",
            }}
          >
            Eletrical Conductivity
          </th>
        </tr>
      </thead>
      <tbody>
        {/* Sample row - replicate or populate based on your data */}
        <tr>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
        </tr>

        <tr>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
        </tr>
        <tr>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
        </tr>
        {/* //!why is menu  above these, crunching when I add more entries? */}
        {/* <tr>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
        </tr>
        <tr>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
        </tr>
        <tr>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default SoilSensorTable;
