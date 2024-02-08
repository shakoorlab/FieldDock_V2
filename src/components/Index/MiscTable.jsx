// SensorDataTable.js
import React from "react";

const MiscSensorTable = () => {
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
            PAR
          </th>
          <th
            style={{
              padding: "8px",
              color: "rgba(0, 168, 177, 0.65)",
              fontSize: "0.7rem",
            }}
          >
            PPFD
          </th>
          <th
            style={{
              padding: "8px",
              color: "rgba(0, 168, 177, 0.65)",
              fontSize: "0.7rem",
            }}
          >
            DLI
          </th>
        </tr>
      </thead>
      <tbody>
        {/* Sample row - replicate or populate based on your data */}
        <tr>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
        </tr>

        <tr>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
        </tr>
        <tr>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
          <td className="table-td">-</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MiscSensorTable;
