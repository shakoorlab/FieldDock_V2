import React from "react";
import "../../css/sensors.css";
import SensorNetwork from "../../components/Sensors/SensorNetwork";
import GDD from "../../components/Index/GDD";
import SensorsFieldDock from "../../assets/svg/Wireless_Sensors.svg";
import SensorStatus from "../../components/Sensors/SensorStatus";
import RenameSensors from "../../components/Sensors/RenameSensors";
import EnvCond from "../../components/Index/EnvCond";
import PlugPlaySensors from "../../components/Sensors/PlugPlaySensors";

function Sensors() {
  return (
    <>
      <div className="page-title-box">
        <h3>Wireless Sensors</h3>
      </div>
      <div className="row-column-grid">
        {/* First row of items */}
        <div>
          <SensorNetwork />
        </div>
        <div className="row-menu-parent">
          <select className="menu-fill">
            <option value="">Select a sensor...</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <GDD />
        </div>

        {/* Second row that should appear as three columns directly under the first row */}
        <div>
          <PlugPlaySensors />
        </div>
        <div>
          <div className="top">
            <SensorStatus />
          </div>

          <div className="middle">
            <img className="sensor-page-img" src={SensorsFieldDock} />
          </div>
          <div class="bottom">
            <RenameSensors />
          </div>
        </div>
        <div>
          <EnvCond />
        </div>
      </div>
    </>
  );
}

export default Sensors;
