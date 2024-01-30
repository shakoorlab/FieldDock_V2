import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FieldDockLogo from "../../assets/svg/FieldDock-Logo.svg";
import HomePageNotActive from "../../assets/svg/index_not_active.svg";
import HomePageActive from "../../assets/svg/index_active.svg";

import SettingsNotActive from "../../assets/svg/settings_not_active.svg";
import SettingsActive from "../../assets/svg/settings_active.svg";
import DownloadNotActive from "../../assets/svg/download_not_active.svg";
import DownloadActive from "../../assets/svg/download_active.svg";
import sensorSettingsActive from "../../assets/svg/sensor_settings_active.svg";
import sensorSettingsNotActive from "../../assets/svg/sensor_settings_not_active.svg";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const navToHomePage = () => {
    navigate("/");
  };
  const navToSettings = () => {
    navigate("/Settings");
  };
  const navToDownload = () => {
    navigate("/Download");
  };
  const navToSensorSettings = () => {
    navigate("/Realtime-Settings");
  };

  return (
    <>
      <div className="navbar-grid">
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
              <div
                className="toggle-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={navToHomePage}
              >
                <img
                  className="toggle-button-icon"
                  src={isHovered ? HomePageActive : HomePageNotActive}
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
              <div
                className="toggle-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={navToSettings}
              >
                <img
                  className="toggle-button-icon"
                  src={isHovered ? SettingsActive : SettingsNotActive}
                />
              </div>
            </div>
          </div>
          <div style={{ width: "100%" }}></div> {/* Gap */}
          <div className="row">
            <div className="screen-toggle-buttons-container-bottom">
              <div
                className="toggle-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={navToSensorSettings}
              >
                <img
                  className="toggle-button-icon"
                  src={
                    isHovered ? sensorSettingsActive : sensorSettingsNotActive
                  }
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

              <div
                className="toggle-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={navToDownload}
              >
                <img
                  className="toggle-button-icon"
                  src={isHovered ? DownloadActive : DownloadNotActive}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
