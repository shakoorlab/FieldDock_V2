import React from "react";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
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
          height: "110vh",
          backgroundColor: "rgba(0, 0, 0, 0)",
          backgroundImage: `
            radial-gradient(
              circle at 50% 0,
              rgba(68, 68, 68, 0.6),
              #020202 79%,
              rgba(0, 40, 53, 0.66)
            ),
            linear-gradient(rgba(1, 0, 15, 0.89), rgba(1, 0, 15, 0.89))
          `,
        }}
      >
        <div className="gradient-overlay">
          <main>{children}</main>
        </div>
      </Container>
    </div>
  );
};

export default Layout;
