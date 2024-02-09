import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "95%",
  height: "95%",
  borderRadius: "4px",
  boxShadow: "0 7px 5px 1px rgba(0, 0, 0, 0.2)",
  border: "1px solid #474a4e",
};

const center = {
  lat: 38.675193, // Example latitude
  lng: -90.398887, // Example longitude
};

// const options = {
//   streetViewControl: false,
//   fullscreenControl: false,
//   zoomControl: true, // Ensure zoom control is enabled
//   zoomControlOptions: {
//     position: google.maps.ControlPosition.LEFT_CENTER, // Move zoom controls to the left center
//   },
// };

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        // options={options}
      >
        {/* Additional map features like markers can be added here */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
