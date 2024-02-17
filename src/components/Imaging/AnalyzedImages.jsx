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
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const DropdownContainer = styled("div")(({ theme }) => ({
  width: "81vw",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
}));

function AnalyzedImages() {
  const [selected, setSelected] = useState([]);

  const [dropdown1, setDropdown1] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const [dropdown3, setDropdown3] = useState("");

  // Example data
  const rows = [
    {
      id: "1",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "Orthomosiac",
    },
    {
      id: "2",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "Orthomosiac",
    },
    {
      id: "3",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "Orthomosiac",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "Orthomosiac",
    },
    {
      id: "5",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "Orthomosiac",
    },
    {
      id: "6",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "Orthomosiac",
    },
    {
      id: "7",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "Orthomosiac",
    },
    {
      id: "8",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "Orthomosiac",
    },
    {
      id: "9",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "Orthomosiac",
    },
    {
      id: "10",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "Orthomosiac",
    },
    {
      id: "11",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "Orthomosiac",
    },
    {
      id: "12",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "Orthomosiac",
    },
    {
      id: "13",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "Orthomosiac",
    },
    {
      id: "14",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "Orthomosiac",
    },
    {
      id: "15",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "Orthomosiac",
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
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DropdownContainer>
          <FormControl
            sx={{
              width: "30%",
              boxShadow: "0 7px 5px 1px rgba(0, 0, 0, 0.2)",
              ".MuiOutlinedInput-root": {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0, 168, 177, 0.65)",
                  background:
                    "linear-gradient(1deg, rgba(0, 0, 0, 0), #1b1b1b)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#797979", // Change border color on hover to red
                },
              },
              ".MuiInputBase-input": {
                color: "#FFF", // Customize text color here
              },
              ".MuiInputLabel-root": {
                color: "#FFF", // Customize label text color
                display: "flex",
                alignItems: "center",
              },
              // This targets the dropdown icon specifically if needed
              ".MuiSvgIcon-root": {
                color: "#FFF", // Adjust dropdown icon color
              },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0, 168, 177, 0.65)", // Your desired default border color
              },
            }}
          >
            <InputLabel id="dropdown1-label">Select FieldDock</InputLabel>
            <Select
              labelId="dropdown1-label"
              id="dropdown1"
              value={dropdown1}
              label="Dropdown 1"
              onChange={(e) => setDropdown1(e.target.value)}
            >
              <MenuItem value={10}>FieldDock MO</MenuItem>
              <MenuItem value={20}>FieldDock SC </MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: "30%",
              boxShadow: "0 7px 5px 1px rgba(0, 0, 0, 0.2)",
              ".MuiOutlinedInput-root": {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0, 168, 177, 0.65)",
                  background:
                    "linear-gradient(1deg, rgba(0, 0, 0, 0), #1b1b1b)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#797979", // Change border color on hover to red
                },
              },
              ".MuiInputBase-input": {
                color: "#FFF", // Customize text color here
                fontSize: "0.9rem",
              },
              // This targets the dropdown icon specifically if needed
              ".MuiSvgIcon-root": {
                color: "#FFF", // Adjust dropdown icon color
              },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0, 168, 177, 0.65)", // Your desired default border color
              },
            }}
          >
            <InputLabel id="dropdown2-label">Select Drone</InputLabel>
            <Select
              labelId="dropdown2-label"
              id="dropdown2"
              value={dropdown2}
              label="Dropdown 2"
              onChange={(e) => setDropdown2(e.target.value)}
            >
              <MenuItem value={10}>Drone 1</MenuItem>
              <MenuItem value={20}>Drone 2</MenuItem>
              <MenuItem value={30}>Drone 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: "30%",
              ".MuiOutlinedInput-root": {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0, 168, 177, 0.65)",
                  background:
                    "linear-gradient(1deg, rgba(0, 0, 0, 0), #1b1b1b)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#797979", // Change border color on hover to red
                },
              },
              ".MuiInputBase-input": {
                color: "#FFF", // Customize text color here
              },
              // This targets the dropdown icon specifically if needed
              ".MuiSvgIcon-root": {
                color: "#FFF", // Adjust dropdown icon color
              },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0, 168, 177, 0.65)", // Your desired default border color
              },
            }}
          >
            <InputLabel id="dropdown3-label">Image Type</InputLabel>
            <Select
              labelId="dropdown3-label"
              id="dropdown3"
              value={dropdown3}
              label="Dropdown 3"
              onChange={(e) => setDropdown3(e.target.value)}
            >
              <MenuItem value={10}>Orthomosiac</MenuItem>
              <MenuItem value={20}>Downsampled</MenuItem>
              <MenuItem value={30}>Heatmap</MenuItem>
            </Select>
          </FormControl>
        </DropdownContainer>
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
                  Image Name
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
                        style={{ fontSize: "0.85rem", color: "#ECECED" }}
                      />
                      <FontAwesomeIcon
                        icon={faFileArrowDown}
                        style={{
                          marginLeft: "10px",
                          fontSize: "0.85rem",
                          color: "#ECECED",
                        }}
                      />
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        style={{
                          marginLeft: "10px",
                          fontSize: "0.85rem",
                          color: "#ECECED",
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
export default AnalyzedImages;
