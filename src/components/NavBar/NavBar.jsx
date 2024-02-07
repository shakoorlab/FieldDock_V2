import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FieldDockLogo from "../../assets/svg/FieldDock-Logo.svg";
import HomePageNotActive from "../../assets/svg/index_not_active.svg";
import HomePageActive from "../../assets/svg/index_active.svg";
import ImagingNotActive from "../../assets/svg/imaging_not_active.svg";
import ImagingActive from "../../assets/svg/imaging_active.svg";
import DroneActive from "../../assets/svg/drone_active.svg";
import DroneNotActive from "../../assets/svg/drone_not_active.svg";
import SensorsNotActive from "../../assets/svg/wireless_not_active.svg";
import SensorsActive from "../../assets/svg/wireless_active.svg";
import SettingsNotActive from "../../assets/svg/settings_not_active.svg";
import SettingsActive from "../../assets/svg/settings_active.svg";
import sensorSettingsActive from "../../assets/svg/sensor_settings_active.svg";
import sensorSettingsNotActive from "../../assets/svg/sensor_settings_not_active.svg";
import imagingSettingsNotActive from "../../assets/svg/imaging_settings_not_active.svg";
import imagingSettingActive from "../../assets/svg/imaging_settings_active.svg";
import DiagnosticsNotActive from "../../assets/svg/diagnostics_not_active.svg";
import DiagnosticsActive from "../../assets/svg/diagnostics_active.svg";
import UsersNotActive from "../../assets/svg/users_not_active.svg";
import UsersActive from "../../assets/svg/users_active.svg";
import DownloadNotActive from "../../assets/svg/download_not_active.svg";
import DownloadActive from "../../assets/svg/download_active.svg";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const navToHomePage = () => {
    navigate("/");
  };
  const navToImaging = () => {
    navigate("/Imaging");
  };
  const navToDrone = () => {
    navigate("/Drone");
  };
  const navToSensors = () => {
    navigate("/Sensors");
  };
  const navToSettings = () => {
    navigate("/Settings");
  };

  const navToSensorSettings = () => {
    navigate("/Realtime-Settings");
  };
  const navToImagingSettings = () => {
    navigate("/Imaging-Settings");
  };

  const navToDiagnostics = () => {
    navigate("/Diagnostics");
  };
  const navToUsers = () => {
    navigate("/Users");
  };
  const navToDownload = () => {
    navigate("/Download");
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
              <div
                className="toggle-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={navToImaging}
              >
                <img
                  className="toggle-button-icon"
                  src={isHovered ? ImagingActive : ImagingNotActive}
                />
              </div>
              <div
                className="toggle-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={navToDrone}
              >
                <img
                  className="toggle-button-icon"
                  src={isHovered ? DroneActive : DroneNotActive}
                />
              </div>
              <div
                className="toggle-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={navToSensors}
              >
                <img
                  className="" //no classname for some reason
                  src={isHovered ? SensorsActive : SensorsNotActive}
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
              <div
                className="toggle-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={navToImagingSettings}
              >
                <img
                  className="toggle-button-icon"
                  src={
                    isHovered ? imagingSettingActive : imagingSettingsNotActive
                  }
                />
              </div>
              <div
                className="toggle-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={navToDiagnostics}
              >
                <img
                  className="toggle-button-icon"
                  src={isHovered ? DiagnosticsActive : DiagnosticsNotActive}
                />
              </div>
              <div
                className="toggle-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={navToUsers}
              >
                <img
                  className="toggle-button-icon"
                  src={isHovered ? UsersActive : UsersNotActive}
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
