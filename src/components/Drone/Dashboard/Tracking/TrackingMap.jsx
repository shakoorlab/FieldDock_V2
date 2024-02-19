import React, { useState } from "react";
import { GoogleMap } from "@react-google-maps/api";
import ExploreIcon from "@mui/icons-material/Explore";
import CircularProgressWithLabel from "@mui/material/CircularProgress";

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "79.5vh",
  border: "1px solid #797979",
  boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
  borderRadius: "4px",
};

// This can be defined outside if it doesn't change
const defaultCenter = {
  lat: -34.397,
  lng: 150.644,
};

const TrackingMap = () => {
  const [center, setCenter] = useState(defaultCenter);
  const [showMissionBox, setShowMissionBox] = useState(true);
  const handleCloseClick = () => setShowMissionBox(false);

  const mapOptions = {
    streetViewControl: false, // This will hide the Street View Pegman (little orange person)
    fullscreenControl: false, // This will hide the fullscreen button
    zoomControl: false, // This will hide the zoom controls (+/- buttons)
  };

  return (
    <div style={containerStyle}>
      {showMissionBox && <MissionBox onClose={handleCloseClick} />}
      <BottomOverlay />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={mapOptions}
      ></GoogleMap>
    </div>
  );
};
function MissionBox({ onClose }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 12,
        right: 45,
        zIndex: 999,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        color: "white",
        padding: "15px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: "320px", // Increase width to fit the new button
        minHeight: "80px", // Increase width to fit the new button
      }}
    >
      <span style={{ marginRight: "auto", fontSize: "2rem" }}>Mission 001</span>{" "}
      {/* This will push the close button to the end */}
      <button
        style={{
          backgroundColor: "darkgreen",
          border: "none",
          borderRadius: "20px",
          color: "white",
          fontWeight: "bold",
          padding: "10px 20px",
          cursor: "pointer",
          marginRight: "10px", // Add some margin to the right of the button
        }}
      >
        Active
      </button>
    </div>
  );
}

function BottomOverlay() {
  const splitBoxStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1, // This will make sure each box takes up equal space
    margin: "0.5%", // Add a small margin between boxes
    borderRadius: "5px", // If you want rounded corners for the inner boxes
  };

  // Style for the individual inner split boxes
  const innerBoxStyle = {
    backgroundColor: "rgba(121, 121, 121, 0.6)",
    flex: 1,
    margin: "0.5%",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row", // Change to row for horizontal layout
    justifyContent: "space-between", // Distribute space between text and icon
  };
  const innerBoxGraphStyle = {
    backgroundColor: "rgba(121, 121, 121, 0.6)",
    flex: 1,
    margin: "0.5%",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column", // Change to row for horizontal layout
    justifyContent: "space-between", // Distribute space between text and icon
  };
  const doubleBoxStyle = {
    backgroundColor: "rgba(121, 121, 121, 0.6)",
    flex: 1,
    margin: "0.5%",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column", // Stack children vertically
    justifyContent: "space-between", // Distribute space between top and bottom
    padding: "10px", // Add padding inside the box
  };

  const progressStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // Add other styles if necessary
  };

  // Container style for the text
  const textContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align text to the start
  };
  const titleBoxStyle = {
    backgroundColor: "transparent", // #797979 with 0.8 opacity
    flex: 1, // Split the space equally between the two stacked boxes
    margin: "0.5%", // Add some margin between the stacked boxes
    borderRadius: "5px", // If you want rounded corners for the inner boxes
  };
  const textStyle = {
    color: "white",
    fontSize: "2rem",
    position: "absolute",
    justifyContent: "flex-start",
  };

  const extraMiniTextStyle = {
    color: "lightgray",
    fontSize: "1rem",
    padding: "0px 10px",
    fontStyle: "italic",
  };
  const miniTextStyle = {
    color: "lightgray",
    fontSize: "1.3rem",
    padding: "0px 10px",
    marginTop: "-8px",
  };
  const smallTextStyle = {
    color: "white",
    fontSize: "1.4rem",
    fontWeight: "bold",
    padding: "5px 10px",
  };
  const mediumTextStyle = {
    color: "white",
    fontSize: "1.5rem",
    position: "absolute",
    justifyContent: "flex-start",
    padding: "5px 10px",
    fontWeight: "bold",
  };
  const mediumTextGraphStyle = {
    color: "white",
    fontSize: "1.5rem",
    padding: "5px 10px",
    fontWeight: "bold",
  };

  const halfBoxStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem", // Example font size
    color: "#fff", // Example text color
    borderTop: "none", // White line between the boxes
    padding: "1rem", // Optional padding inside the boxes
  };

  const lastHalfBoxStyle = {
    ...halfBoxStyle,
    borderTop: "2px solid white", // White line between the boxes
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        bottom: "3%",
        transform: "translateX(-50%)",
        width: "95%",
        minHeight: "250px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: "1%",
        boxSizing: "border-box",
        zIndex: 1999,
        borderRadius: "10px",
        display: "flex", // Use flexbox to lay out the children
        justifyContent: "space-between", // This will distribute space around the items
      }}
    >
      {/* First split box container */}
      <div style={splitBoxStyle}>
        <div style={titleBoxStyle}>
          <div style={textStyle}>FieldDock Drone 01</div>
        </div>{" "}
        {/* Upper box */}
        <div style={doubleBoxStyle}>
          <div style={halfBoxStyle}>Mission Flight Time : 20 minutes</div>
          <div style={lastHalfBoxStyle}>
            <div style={progressStyle}>
              Mission Completed:{" "}
              <CircularProgressWithLabel
                variant="determinate"
                size={25}
                thickness={8}
                value={50}
                sx={{ marginLeft: "25px" }}
              />
            </div>
          </div>
        </div>
        {/* Lower box */}
      </div>
      {/* Second split box container */}
      <div style={splitBoxStyle}>
        <div style={innerBoxStyle}>
          <div style={smallTextStyle}>Battery Health</div>
        </div>{" "}
        {/* Upper box */}
        <div style={innerBoxStyle}>
          <div style={textContainerStyle}>
            <div style={smallTextStyle}>Air Temperature</div>
            <div style={miniTextStyle}>76 F | 48 C</div>
            <div style={extraMiniTextStyle}>Northeast</div>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ExploreIcon
              style={{
                color: "lightgray",
                fontSize: "5.5rem",
                marginRight: "30px",
                marginTop: "5px",
              }}
            />
          </div>
        </div>
        {/* Lower box */}
      </div>
      {/* These two boxes remain unsplit */}
      <div style={innerBoxGraphStyle}>
        <div style={mediumTextGraphStyle}>Drone Altitude</div>
        {/* <BarAnimation /> */}
        {/* <div style={miniTextStyle}>50 Meters</div> */}
      </div>
      {/* Third box */}
      <div style={innerBoxStyle}>
        <div style={mediumTextStyle}></div>
      </div>{" "}
      {/* Fourth box */}
    </div>
  );
}

export default TrackingMap;
