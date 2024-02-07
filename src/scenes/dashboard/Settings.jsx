import React from "react";
import "../../css/settings.css";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
// import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function Settings() {
  const [checked, setChecked] = React.useState({
    first: false,
    second: false,
  });
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

  const iconStyle = {
    color: "#48f7f5",
    marginRight: "5px",
    fontSize: "inherit",
  };
  return (
    <>
      <div className="page-title-box">
        <h3>Settings</h3>
      </div>
      <div className="settings-container">
        {/* Top row of smaller boxes */}

        <div className="setting-box">
          <div className="title-box">Software Update</div>
          <div className="software-inner-box">
            <div className="box-item text-center">Pending software update</div>
            <div className="box-item">
              <FormControlLabel
                control={
                  <Checkbox
                    sx={checkboxStyles}
                    checked={checked.first}
                    onChange={handleChange}
                    name="first"
                  />
                }
                label="
                  FieldDock v0.5.0 is ready to be installed"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "0.87rem",
                    color: "#FFF",
                  },
                }}
              />
            </div>
            <div className="box-item button-container">
              <button className="rename-button">
                <FileDownloadIcon style={iconStyle} />
                Update
              </button>
            </div>
          </div>
        </div>
        <div className="setting-box">
          <div className="title-box">Rename this FieldDock</div>
          <div className="inner-box">
            <div className="box-item text-center">FieldDock Station 1:</div>
            <div className="box-item">
              <input
                type="text"
                className="text-input"
                // placeholder="Enter new name"
              />
            </div>
            <div className="box-item button-container">
              <button className="rename-button">Rename</button>
            </div>
          </div>
        </div>
        <div className="setting-box">
          <div className="title-box">Connect to Wifi</div>
          <div className="inner-box">
            <div className="box-item text-center">Available Networks</div>
            <div className="box-item">
              <input
                type="text"
                className="text-input"
                // placeholder="Enter new name"
              />
            </div>
            <div className="box-item button-container">
              <button className="rename-button">Search</button>
            </div>
          </div>
        </div>
        {/* Bottom row of smaller boxes //! when these 3 below are uncommented, the settings-box height is 33rem with all 6 boxes */}
        {/* <div className="setting-box">
          <div className="title-box">Connect to PheNode</div>
        </div>
        <div className="setting-box">
          <div className="title-box">Edge Computing</div>
        </div>
        <div className="setting-box">
          <div className="title-box">Solar Battery</div>
        </div> */}
      </div>
    </>
  );
}

export default Settings;
