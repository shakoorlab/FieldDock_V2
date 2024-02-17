import React, { useState, useCallback } from "react";
import { GoogleMap, Marker, Polyline } from "@react-google-maps/api";
import axios from "axios";

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "79.5vh",
  border: "1px solid #797979",
  boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
  borderRadius: "4px",
};

const initialCenter = { lat: 38.6742, lng: -122.4194 };

const searchBoxStyles = {
  position: "absolute",
  top: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "white",
  border: "1px solid black",
  padding: 10,
};

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const MapComponent = ({
  onMapClick,
  markerPositions,
  setHomeLat,
  setHomeLng,
}) => {
  const [address, setAddress] = useState("");
  const [center, setCenter] = useState(initialCenter);

  const handleLocationSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json",
        {
          params: { address, key: googleMapsApiKey },
        }
      );
      const location = data.results[0]?.geometry.location;
      if (location) {
        setCenter(location);
        setHomeLat(location.lat);
        setHomeLng(location.lng);
      }
    } catch (error) {
      console.error("Error geocoding the address:", error);
    }
  };

  const handleAddressChange = useCallback((event) => {
    setAddress(event.target.value);
  }, []);

  return (
    <div style={containerStyle}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={onMapClick}
      >
        {markerPositions.map((position, index) => (
          <Marker key={index} position={position} label={`${index + 1}`} />
        ))}
        <Polyline
          path={markerPositions}
          options={{
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            clickable: false,
            draggable: false,
            editable: false,
            visible: true,
            radius: 30000,
            zIndex: 1,
          }}
        />
      </GoogleMap>
      <form onSubmit={handleLocationSubmit} style={searchBoxStyles}>
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Enter a location"
        />
        <button type="submit" style={{ display: "none" }}>
          Go
        </button>
      </form>
    </div>
  );
};

export default MapComponent;
