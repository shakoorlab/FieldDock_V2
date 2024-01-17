import React from "react";

import { Container } from "react-bootstrap";
import Navbar from "../NavBar/NavBar";
import Index from "../../scenes/dashboard/Index";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginTop: "2.5rem",
      }}
    >
      <Container
        fluid
        style={{
          width: "92%",
          borderRadius: "8px",
          border: "1px solid #012a44",
        }}
      >
        <div className="gradient-overlay">
          <div className="main-grid">
            <Navbar />
            <Index />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Layout;
