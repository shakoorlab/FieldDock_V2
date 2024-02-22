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
import SensorSettingsActive from "../../assets/svg/sensor_settings_active.svg";
import SensorSettingsNotActive from "../../assets/svg/sensor_settings_not_active.svg";
import ImagingSettingsNotActive from "../../assets/svg/imaging_settings_not_active.svg";
import ImagingSettingsActive from "../../assets/svg/imaging_settings_active.svg";
import DiagnosticsNotActive from "../../assets/svg/diagnostics_not_active.svg";
import DiagnosticsActive from "../../assets/svg/diagnostics_active.svg";
import UsersNotActive from "../../assets/svg/users_not_active.svg";
import UsersActive from "../../assets/svg/users_active.svg";
import DownloadNotActive from "../../assets/svg/download_not_active.svg";
import DownloadActive from "../../assets/svg/download_active.svg";

function Navbar() {
  const navigate = useNavigate();

  const navToLogin = () => {
    navigate("/");
  };
  const navToHomePage = () => {
    navigate("/Home-Page");
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

  //---------------------------hovering over 10 boxes START------------------------------------
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  const [isHovered10, setIsHovered10] = useState(false);
  //---------------------------hovering over 10 boxes END------------------------------------
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
              <button onClick={navToLogin} className="log-out-button">
                Log Out
              </button>
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
                className={
                  isHovered1 ? "toggle-button-hovered" : "toggle-button"
                }
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
                onClick={navToHomePage}
              >
                <img
                  className="toggle-button-icon"
                  src={isHovered1 ? HomePageActive : HomePageNotActive}
                />
              </div>
              <div
                className={
                  isHovered2 ? "toggle-button-hovered" : "toggle-button"
                }
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
                onClick={navToImaging}
              >
                <img
                  className="toggle-button-icon"
                  src={isHovered2 ? ImagingActive : ImagingNotActive}
                />
              </div>
              <div
                className={
                  isHovered3 ? "toggle-button-hovered" : "toggle-button"
                }
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
                onClick={navToDrone}
              >
                <img
                  className="toggle-button-icon"
                  src={isHovered3 ? DroneActive : DroneNotActive}
                />
              </div>
              <div
                className={
                  isHovered4 ? "toggle-button-hovered" : "toggle-button"
                }
                onMouseEnter={() => setIsHovered4(true)}
                onMouseLeave={() => setIsHovered4(false)}
                onClick={navToSensors}
              >
                <img
                  className="" //no classname for some reason
                  src={isHovered4 ? SensorsActive : SensorsNotActive}
                />
              </div>
              <div
                className={
                  isHovered5 ? "toggle-button-hovered" : "toggle-button"
                }
                onMouseEnter={() => setIsHovered5(true)}
                onMouseLeave={() => setIsHovered5(false)}
                onClick={navToSettings}
              >
                <img
                  className="toggle-button-icon"
                  src={isHovered5 ? SettingsActive : SettingsNotActive}
                />
              </div>
            </div>
          </div>
          <div style={{ width: "100%" }}></div> {/* Gap */}
          <div className="row">
            <div className="screen-toggle-buttons-container-bottom">
              <div
                className={
                  isHovered6 ? "toggle-button-hovered" : "toggle-button"
                }
                onMouseEnter={() => setIsHovered6(true)}
                onMouseLeave={() => setIsHovered6(false)}
                onClick={navToSensorSettings}
              >
                <img
                  className="toggle-button-icon"
                  src={
                    isHovered6 ? SensorSettingsActive : SensorSettingsNotActive
                  }
                />
              </div>
              <div
                className={
                  isHovered7 ? "toggle-button-hovered" : "toggle-button"
                }
                onMouseEnter={() => setIsHovered7(true)}
                onMouseLeave={() => setIsHovered7(false)}
                onClick={navToImagingSettings}
              >
                <img
                  className="toggle-button-icon"
                  src={
                    isHovered7
                      ? ImagingSettingsActive
                      : ImagingSettingsNotActive
                  }
                />
              </div>
              <div
                className={
                  isHovered8 ? "toggle-button-hovered" : "toggle-button"
                }
                onMouseEnter={() => setIsHovered8(true)}
                onMouseLeave={() => setIsHovered8(false)}
                onClick={navToDiagnostics}
              >
                <img
                  className="toggle-button-icon"
                  src={isHovered8 ? DiagnosticsActive : DiagnosticsNotActive}
                />
              </div>
              <div
                className={
                  isHovered9 ? "toggle-button-hovered" : "toggle-button"
                }
                onMouseEnter={() => setIsHovered9(true)}
                onMouseLeave={() => setIsHovered9(false)}
                onClick={navToUsers}
              >
                <img
                  className="toggle-button-icon"
                  src={isHovered9 ? UsersActive : UsersNotActive}
                />
              </div>

              <div
                className={
                  isHovered10 ? "toggle-button-hovered" : "toggle-button"
                }
                onMouseEnter={() => setIsHovered10(true)}
                onMouseLeave={() => setIsHovered10(false)}
                onClick={navToDownload}
              >
                <img
                  className="toggle-button-icon"
                  src={isHovered10 ? DownloadActive : DownloadNotActive}
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
