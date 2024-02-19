import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";

import "./App.css";
import Layout from "./components/Layout/Layout";
import Navbar from "../src/components/NavBar/NavBar";
import HomePage from "./scenes/dashboard/HomePage";
import Imaging from "./scenes/dashboard/Imaging";
import Drone from "./scenes/dashboard/Drone";
import Sensors from "./scenes/dashboard/Sensors";
import Settings from "./scenes/dashboard/Settings";

import RealtimeSettings from "./scenes/dashboard/RealtimeSettings";
import ImagingSettings from "./scenes/dashboard/ImagingSettings";
import Diagnostics from "./scenes/dashboard/Diagnostics";
import Users from "./scenes/dashboard/Users";
import Download from "./scenes/dashboard/Download";
import DroneDashboard from "./components/Drone/Dashboard/DroneDash";

import DroneLogsParent from "./components/Drone/Logs/DroneLogsParent";

const LayoutWithNavbar = () => (
  <Layout>
    <Navbar />
    <Outlet />
  </Layout>
);

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const App = () => {
  return (
    <Router>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <Routes>
          {/* Directly applying LayoutWithNavbar for routes that need the Navbar */}
          <Route element={<LayoutWithNavbar />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Imaging" element={<Imaging />} />
            <Route path="/Drone" element={<Drone />} />
            <Route path="/Sensors" element={<Sensors />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Realtime-Settings" element={<RealtimeSettings />} />
            <Route path="/Imaging-Settings" element={<ImagingSettings />} />
            <Route path="/Diagnostics" element={<Diagnostics />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Download" element={<Download />} />
            <Route path="/drone-logs" element={<DroneLogsParent />} />
          </Route>
          {/* Separate Route outside LayoutWithNavbar for components without NavBar and layout */}

          <Route path="/drone-dashboard" element={<DroneDashboard />} />
          {/* <Route
            path="/create-mission-drawer"
            element={<CreateMissionDrawer />}
          /> */}
        </Routes>
      </LoadScript>
    </Router>
  );
};

export default App;
