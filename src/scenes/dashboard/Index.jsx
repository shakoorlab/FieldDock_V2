import React from "react";
import FieldDockDrone from "/Drone_FieldDock.svg";
import FieldDockBody from "/FieldDock_Body.svg";
import "../../index.css";
import GDD from "../../components/Index/GDD";
import SystemStatus from "../../components/Index/SystemStatus";
import Rainfall from "../../components/Index/Rainfall";
import Misc from "../../components/Index/Misc";
import EnvConds from "../../components/Index/EnvCond";
import SoilConds from "../../components/Index/SoilConditions";

function Index() {
  return (
    <>
      <GDD />
      <SystemStatus />
      <Rainfall />
      <Misc />
      <div className="second-row-child-container">
        <div className="svg-container">
          <img
            src={FieldDockDrone}
            className="drone-svg"
            alt="FieldDock Logo"
          />
        </div>
      </div>
      <EnvConds />
      <SoilConds />
      <div className="second-row-child-container">
        <div className="svg-container">
          <img src={FieldDockBody} className="body-svg" alt="FieldDock Drone" />
        </div>
      </div>
    </>
  );
}

export default Index;
