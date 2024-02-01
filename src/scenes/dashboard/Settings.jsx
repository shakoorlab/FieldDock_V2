import React from "react";
import "../../css/settings.css";

function Settings() {
  return (
    <>
      <div className="page-title-box">
        <h3>Settings</h3>
      </div>
      <div className="settings-container">
        {/* Top row of smaller boxes */}

        <div className="setting-box">
          <div className="title-box">Software Update</div>
        </div>
        <div className="setting-box">
          <div className="title-box">Rename FieldDock</div>
        </div>
        <div className="setting-box">
          <div className="title-box">Connect to Wifi</div>
        </div>
        {/* Bottom row of smaller boxes */}
        <div className="setting-box">
          <div className="title-box">Connect to PheNode</div>
        </div>
        <div className="setting-box">
          <div className="title-box">Edge Computing</div>
        </div>
        <div className="setting-box">
          <div className="title-box">Solar Battery</div>
        </div>
      </div>
    </>
  );
}

export default Settings;
