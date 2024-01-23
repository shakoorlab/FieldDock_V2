import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./scenes/dashboard/HomePage";
import Download from "./scenes/dashboard/Download";
import RealtimeSettings from "./scenes/dashboard/RealtimeSettings";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Realtime-Settings" element={<RealtimeSettings />} />
          <Route path="/Download" element={<Download />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
