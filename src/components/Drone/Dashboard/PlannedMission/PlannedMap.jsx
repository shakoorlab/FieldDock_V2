import React from "react";
import { GoogleMap, Marker, Polyline } from "@react-google-maps/api";

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "79.5vh",
  border: "1px solid #797979",
  boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
  borderRadius: "4px",
};

// Assuming defaultCenter should be dynamically calculated or set to a meaningful default
const defaultCenter = {
  lat: -34.397,
  lng: 150.644,
};

// Accept waypoints as a prop
const PlannedMap = ({ waypoints }) => {
  // Determine the map center based on the first waypoint, if available
  const mapCenter =
    waypoints && waypoints.length > 0
      ? { lat: waypoints[0].lat, lng: waypoints[0].lng }
      : defaultCenter;

  return (
    <div style={containerStyle}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={10}
      >
        {waypoints.map((waypoint, index) => (
          // Plot each waypoint as a marker
          <Marker
            key={index}
            position={{ lat: waypoint.lat, lng: waypoint.lng }}
          />
        ))}
        {waypoints.length > 1 && (
          // Connect all waypoints with a polyline if there are 2 or more waypoints
          <Polyline
            path={waypoints}
            options={{
              strokeColor: "#FF0000",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#FF0000",
              fillOpacity: 0.35,
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default PlannedMap;
