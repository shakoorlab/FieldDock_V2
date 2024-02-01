import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./scenes/dashboard/HomePage";
import Settings from "./scenes/dashboard/Settings";

import RealtimeSettings from "./scenes/dashboard/RealtimeSettings";
import ImagingSettings from "./scenes/dashboard/ImagingSettings";
import Download from "./scenes/dashboard/Download";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Realtime-Settings" element={<RealtimeSettings />} />
          <Route path="/Imaging-Settings" element={<ImagingSettings />} />
          <Route path="/Download" element={<Download />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
