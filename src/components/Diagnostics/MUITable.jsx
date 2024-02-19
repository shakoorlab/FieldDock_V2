import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faFileArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function MUITable() {
  const [selected, setSelected] = useState([]);

  // Example data
  const rows = [
    {
      id: "1",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "error_808.1",
    },
    {
      id: "2",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "error_808.1",
    },
    {
      id: "3",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "error_808.1",
    },
    {
      id: "5",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "error_808.1",
    },
    {
      id: "6",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "error_808.1",
    },
    {
      id: "7",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "error_808.1",
    },
    {
      id: "8",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "error_808.1",
    },
    {
      id: "9",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "error_808.1",
    },
    {
      id: "10",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "11",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "12",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "13",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "14",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "15",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
  ];

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: "480px", // Ensure this matches the max-height of the diagnostics-log-box if needed
        width: "81vw",
        border: "1.5px solid #474a4e",
        boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
        borderRadius: "4px",
        overflowY: "auto", // This ensures that the overflow applies to the TableContainer as well
      }}
    >
      <Table
        aria-label="simple table"
        sx={{ backgroundColor: "#151617" /* also liked #232527 #1C1D1F*/ }}
      >
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={
                  selected.length > 0 && selected.length < rows.length
                }
                checked={rows.length > 0 && selected.length === rows.length}
                onChange={handleSelectAllClick}
              />
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                color: "rgba(0, 168, 177, 0.85)",
              }}
            >
              ID
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                color: "rgba(0, 168, 177, 0.85)",
              }}
            >
              Date
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                color: "rgba(0, 168, 177, 0.85)",
              }}
            >
              Time
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                color: "rgba(0, 168, 177, 0.85)",
              }}
            >
              FieldDockID
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                color: "rgba(0, 168, 177, 0.85)",
              }}
            >
              Type
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                color: "rgba(0, 168, 177, 0.85)",
              }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            const isItemSelected = isSelected(row.id);
            return (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "#474a4e" },
                }}
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isItemSelected}
                    onChange={(event) => handleClick(event, row.id)}
                  />
                </TableCell>
                <TableCell
                  sx={{ fontSize: "0.85rem", color: "#ECECED" }}
                  component="th"
                  scope="row"
                >
                  {row.id}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "0.85rem",
                    color: "#ECECED" /* or maybe #ECECED */,
                  }}
                >
                  {row.date}
                </TableCell>
                <TableCell sx={{ fontSize: "0.85rem", color: "#ECECED" }}>
                  {row.time}
                </TableCell>
                <TableCell sx={{ fontSize: "0.85rem", color: "#ECECED" }}>
                  {row.customerId}
                </TableCell>
                <TableCell sx={{ fontSize: "0.85rem", color: "#ECECED" }}>
                  {row.type}
                </TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="first-icon"
                  />
                  <FontAwesomeIcon
                    icon={faFileArrowDown}
                    className="second-icon"
                  />
                  <FontAwesomeIcon icon={faTrashCan} className="second-icon" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MUITable;
