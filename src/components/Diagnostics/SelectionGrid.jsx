import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function SelectionGrid() {
  const [checked, setChecked] = React.useState({
    first: false,
    second: false,
  });

  // Handle change for checkboxes
  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  const checkboxStyles = {
    color: "rgba(0, 168, 177, 0.65);",
    "&.Mui-checked": {
      color: "#48f7f5",
    },
  };
  const gridContainerStyle = {
    marginTop: "15px",
    gap: "15px",
    display: "flex",
    width: "81vw",
  };

  const gridItemStyle = {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  };
  const h3Style = {
    color: "#FFF",
  };
  const selectStyle = {
    padding: "10px",
    margin: "0",
    backgroundColor: "transparent",
    color: "#a3a4a6",
    borderRadius: "4px",
    border: "1px solid #474a4e",
  };

  const inputStyle = {
    padding: "10px",
    color: "#a3a4a6",
    backgroundColor: "transparent",
    borderRadius: "4px",
    border: "1px solid #474a4e",
    boxSizing: "border-box",
    marginBottom: "10px",
  };

  return (
    <div style={gridContainerStyle}>
      {/* //?first box */}
      <div style={gridItemStyle}>
        <h3 style={h3Style}>Select Account</h3>
        <input
          type="text"
          placeholder="Search for customer account"
          className="input-custom" // Instead of the inline style for placeholder styling
          style={inputStyle} // Other styles can remain inline
        />
        <select style={selectStyle}>
          <option value="">Select an account...</option>
          {/* Add options here */}
        </select>
        <FormControlLabel
          control={
            <Checkbox
              sx={checkboxStyles}
              checked={checked.first}
              onChange={handleChange}
              name="first"
            />
          }
          label="Show all diagnostics for this account"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "0.87rem",
              color: "#FFF",
            },
          }}
        />
      </div>

      {/* //?second box */}
      <div style={gridItemStyle}>
        <h3 style={h3Style}>Select PheNode Group</h3>
        <input
          type="text"
          placeholder="Search for customer account"
          className="input-custom"
          style={inputStyle}
        />
        <select style={selectStyle}>
          <option value="">Select a group...</option>
          {/* Add options here */}
        </select>
        <FormControlLabel
          control={
            <Checkbox
              sx={checkboxStyles}
              checked={checked.first}
              onChange={handleChange}
              name="first"
            />
          }
          label="Show all diagnostics for this account"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "0.87rem",
              color: "#FFF",
            },
          }}
        />
      </div>

      {/* //?third box */}
      <div style={gridItemStyle}>
        <h3 style={h3Style}>Select a PheNode</h3>
        <input
          type="text"
          placeholder="Search for customer account"
          className="input-custom"
          style={inputStyle}
        />
        <select style={selectStyle}>
          <option value="">Select a FieldDock account...</option>
          {/* Add options here */}
        </select>
        <FormControlLabel
          control={
            <Checkbox
              sx={checkboxStyles}
              checked={checked.first}
              onChange={handleChange}
              name="first"
            />
          }
          label="Show all diagnostics for this account"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "0.87rem",
              color: "#FFF",
            },
          }}
        />
      </div>

      {/* //?fourth box */}
      <div style={gridItemStyle}>
        <h3 style={h3Style}>Select Date</h3>
        <input
          type="text"
          placeholder="Search for customer account"
          className="input-custom"
          style={inputStyle}
        />
        <select style={selectStyle}>
          <option value="">Select an account...</option>
          {/* Add options here */}
        </select>
        <FormControlLabel
          control={
            <Checkbox
              sx={checkboxStyles}
              checked={checked.first}
              onChange={handleChange}
              name="first"
            />
          }
          label="Show all diagnostics for this account"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "0.87rem",
              color: "#FFF",
            },
          }}
        />
      </div>
    </div>
  );
}

export default SelectionGrid;
