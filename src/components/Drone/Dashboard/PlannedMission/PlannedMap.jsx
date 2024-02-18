import React, { useMemo } from "react";
import { GoogleMap } from "@react-google-maps/api";

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

const PlannedMap = React.memo(() => {
  // Use useMemo if defaultCenter needs to be dynamic and changes based on props
  // const defaultCenter = useMemo(() => ({
  //   lat: -34.397,
  //   lng: 150.644,
  // }), [/* dependencies, if any */]);

  return (
    <div style={containerStyle}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={10}
      ></GoogleMap>
    </div>
  );
});

export default PlannedMap;
