import React from "react";
import { Box } from "@mui/material";

function Table() {
  return (
    <Box
      sx={{
        marginTop: "1rem",
        width: "100%",
        overflow: "auto",
      }}
    >
      <div
        style={{
          maxHeight: "450px",
          overflow: "auto",
          fontSize: "0.65rem",
          color: "rgba(0, 168, 177, 0.65)",
        }}
      >
        <table style={{ width: "100%", tableLayout: "fixed" }}>
          <thead>
            <tr>
              <th className="table-th">
                <div>Soil</div>
                <div>Depth</div>
              </th>
              <th className="table-th">
                <div>Soil</div>
                <div>Moisture</div>
              </th>
              <th className="table-th">
                <div>Soil</div>
                <div>Temperature</div>
              </th>
              <th className="table-th">
                <div>Electrical</div>
                <div>Conductivity</div>
              </th>
            </tr>
          </thead>

          <tbody>
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
            <tr>
              <td className="table-td">-</td>
              <td className="table-td">-</td>
              <td className="table-td">-</td>
              <td className="table-td">-</td>
            </tr>
          </tbody>
        </table>
        {/*end of table*/}
      </div>
    </Box>
  );
}

export default Table;
