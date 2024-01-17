import React from "react";
import FieldDockLogo from "/FieldDock-Logo.svg";

function Navbar() {
  return (
    <>
      <div className="row-content">
        <div className="top-row">
          <div>
            <img
              src={FieldDockLogo}
              className="logo-svg"
              alt="FieldDock Logo"
            />
          </div>
        </div>
        <div style={{ width: "100%" }}> {/* This div is the gap */}</div>
        <div className="menu-bottom-row">
          <select className="fielddock-select-menu">
            <option>Select FieldDock Menu...</option>
          </select>
        </div>
      </div>

      <div className="row-content row-2-custom">
        <div className="row">
          <div className="user-action-container">
            <div className="active-user-name">User 0000 (----)</div>
            <button className="log-out-button">Log Out</button>
          </div>
        </div>
        <div className="device-info">
          <div className="device-reading">Last reading taken:</div>
          <div className="device-date-time">
            Friday | May 21, 2021 | 12:34pm CST
          </div>
          <div className="device-gps">GPS:</div>
          <div className="device-coordinates">38°39'34.7"N 90°19'58.9"W</div>
        </div>
      </div>

      <div className="row-content">
        <div className="row">
          <div className="screen-toggle-buttons-container-top">
            <div className="toggle-button">
              <img
                className="toggle-button-icon"
                src="src/assets/svg/index_not_active.svg"
              />
            </div>
            <div className="toggle-button">
              <img
                className="toggle-imaging" //! no classname works for some reason
                src="src/assets/svg/imaging_not_active.svg"
              />
            </div>
            <div className="toggle-button">
              <img
                className="toggle-button-icon"
                src="src/assets/svg/drone_not_active.svg"
              />
            </div>
            <div className="toggle-button">
              <img
                className="" //! no classname works for some reason
                src="src/assets/svg/wireless_not_active.svg"
              />
            </div>
            <div className="toggle-button">
              <img
                className="toggle-button-icon"
                src="src/assets/svg/settings_not_active.svg"
              />
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}></div> {/* Gap */}
        <div className="row">
          <div className="screen-toggle-buttons-container-bottom">
            <div className="toggle-button">
              <img
                className="toggle-button-icon"
                src="src/assets/svg/sensor_settings_not_active.svg"
              />
            </div>
            <div className="toggle-button">
              <img
                className="toggle-imaging-unactive"
                src="src/assets/svg/imaging_settings_not_active.svg"
              />
            </div>
            <div className="toggle-button">
              <img
                className="toggle-button-icon"
                src="src/assets/svg/diagnostics_not_active.svg"
              />
            </div>
            <div className="toggle-button">
              <img
                className="toggle-button-icon"
                src="src/assets/svg/users_not_active.svg"
              />
            </div>
            <div className="toggle-button">
              <img
                className="toggle-button-icon"
                src="src/assets/svg/download_not_active.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
