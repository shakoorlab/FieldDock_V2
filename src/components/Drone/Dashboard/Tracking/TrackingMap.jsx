import React, { useEffect, useState } from "react";
import { GoogleMap, Polyline, Marker } from "@react-google-maps/api";
import ExploreIcon from "@mui/icons-material/Explore";
// import CircularProgressWithLabel from "@mui/material/CircularProgress";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import SpeedIcon from "@mui/icons-material/Speed";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
// import Battery80Icon from '@mui/icons-material/Battery80';
// import Battery60Icon from '@mui/icons-material/Battery60';
// import Battery30Icon from '@mui/icons-material/Battery30';
// import Battery0BarIcon from '@mui/icons-material/Battery0Bar';

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "79.5vh",
  border: "1px solid #797979",
  boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
  borderRadius: "4px",
};

// This can be defined outside if it doesn't change

const hexacopterIcon = "src/assets/icons/hexacopter_icon.png";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const TrackingMap = () => {
  const [showMissionBox, setShowMissionBox] = useState(true);
  const handleCloseClick = () => setShowMissionBox(false);

  const [center, setCenter] = useState({ lat: -34.397, lng: 150.644 });
  const [waypoints, setWaypoints] = useState([]);
  const [stops, setStops] = useState([]);

  // Additional state for the hexacopter's current position
  const [hexacopterPosition, setHexacopterPosition] = useState(null);
  const [missionId, setMissionId] = useState(null);
  const [batteryPercentage, setBatteryPercentage] = useState(100);
  const [speed, setSpeed] = useState(0);
  const [altitude, setAltitude] = useState(0);
  const [missionDuration, setMissionDuration] = useState("");

  // Helper function to create a delay
  // To achieve this, you can modify your fetchWaypoints function to iterate through
  // the fetched waypoints and add them to the state one by one with a delay.
  // You can use setTimeout within a loop to achieve the delay. However, because setTimeout is asynchronous and you're
  // dealing with an array, it's convenient to use async/await with a custom delay
  // function to control the timing.
  // Helper function to create a delay

  // useEffect(() => {
  //   const fetchWaypoints = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://3.145.131.67:8000/api/dronestatus/"
  //       );
  //       const data = await response.json();
  //       if (Array.isArray(data)) {
  //         // Optionally set the hexacopter's initial position to the first waypoint
  //         if (data.length > 0) {
  //           const firstWaypoint = {
  //             lat: parseFloat(data[0].latitude),
  //             lng: parseFloat(data[0].longitude),
  //           };
  //           if (!isNaN(firstWaypoint.lat) && !isNaN(firstWaypoint.lng)) {
  //             setHexacopterPosition(firstWaypoint);
  //           }
  //         }

  //         for (let waypoint of data) {
  //           const parsedWaypoint = {
  //             lat: parseFloat(waypoint.latitude),
  //             lng: parseFloat(waypoint.longitude),
  //           };

  //           if (!isNaN(parsedWaypoint.lat) && !isNaN(parsedWaypoint.lng)) {

  //             await delay(1000); // Delay of 1 second between each waypoint
  //             // Update the hexacopter's position to simulate movement
  //             setHexacopterPosition(parsedWaypoint);

  //             // Incrementally build up the polyline path
  //             setWaypoints((prevWaypoints) => [
  //               ...prevWaypoints,
  //               parsedWaypoint,
  //             ]);
  //           }
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch waypoints:", error);
  //     }
  //   };

  //   fetchWaypoints();

  //   const fetchStops = async () => {
  //     try {
  //       const response = await fetch("http://3.145.131.67:8000/api/missions/");
  //       const data = await response.json();
  //       if (Array.isArray(data)) {
  //         const stops = [];
  //         data.forEach((mission) => {
  //           const waypoints = mission.waypoints.split(";").map((wp) => {
  //             const [lat, lng] = wp.split(",").map(Number);
  //             return { lat, lng };
  //           });
  //           stops.push(...waypoints);
  //         });
  //         setStops(stops);
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch stops:", error);
  //     }
  //   };

  //   // Immediately invoke the fetch functions
  //   fetchStops();
  // }, []); // Empty dependency array means this effect will run once after the component mounts

  //---------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const fetchWaypoints = async (missionId) => {
      try {
        const response = await fetch(
          "http://3.145.131.67:8000/api/dronestatus/"
        );
        const allStatuses = await response.json();
        // Assuming each drone status includes a mission ID, filter statuses by the active mission ID
        const data = allStatuses.filter(
          (status) => status.mission === missionId
        );

        if (Array.isArray(data) && data.length > 0) {
          // Set the hexacopter's initial position to the first waypoint of the active mission
          const firstWaypoint = {
            lat: parseFloat(data[0].latitude),
            lng: parseFloat(data[0].longitude),
          };
          if (!isNaN(firstWaypoint.lat) && !isNaN(firstWaypoint.lng)) {
            setHexacopterPosition(firstWaypoint);
            setBatteryPercentage(data[0].battery_percentage);
            setSpeed(data[0].speed);
            setAltitude(data[0].altitude);
            setMissionDuration(data[0].mission_duration);
          }

          for (let waypoint of data) {
            const parsedWaypoint = {
              lat: parseFloat(waypoint.latitude),
              lng: parseFloat(waypoint.longitude),
            };

            if (!isNaN(parsedWaypoint.lat) && !isNaN(parsedWaypoint.lng)) {
              await delay(1000); // Delay of 1 second between each waypoint

              // Update the hexacopter's position to simulate movement
              setHexacopterPosition(parsedWaypoint);
              setBatteryPercentage(waypoint.battery_percentage);
              setSpeed(waypoint.speed);
              setAltitude(waypoint.altitude);
              setMissionDuration(waypoint.mission_duration);

              // Incrementally build up the polyline path
              setWaypoints((prevWaypoints) => [
                ...prevWaypoints,
                parsedWaypoint,
              ]);
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch waypoints:", error);
      }
    };

    // The call to fetchWaypoints is now moved inside fetchStops
    // after determining the active mission and its ID
    const fetchStops = async () => {
      try {
        const response = await fetch("http://3.145.131.67:8000/api/missions/");
        const missions = await response.json();
        const activeMission = missions.find(
          (mission) => mission.mission_status === "In Progress"
        );
        if (activeMission) {
          setMissionId(activeMission.id); // Update missionId state
          const stops = activeMission.waypoints.split(";").map((wp) => {
            const [lat, lng] = wp.trim().split(",").map(Number);
            return { lat, lng };
          });
          setStops(stops);
          // Call fetchWaypoints with the ID of the active mission
          fetchWaypoints(activeMission.id);
        } else {
          console.log("No mission is currently 'In Progress'");
        }
      } catch (error) {
        console.error("Failed to fetch stops:", error);
      }
    };

    // Initially, call fetchStops to determine the active mission and subsequently fetch waypoints
    fetchStops();
  }, []); // Dependency array is empty, so this effect runs once after the component mounts

  //---------------------------------------------------------------------------------------------------------

  // Adjust the center based on the first waypoint if available
  useEffect(() => {
    if (waypoints.length > 0) {
      setCenter(waypoints[0]);
    }
  }, [waypoints]);

  const mapOptions = {
    streetViewControl: false, // This will hide the Street View Pegman (little orange person)
    fullscreenControl: false, // This will hide the fullscreen button
    zoomControl: false, // This will hide the zoom controls (+/- buttons)
    mapTypeId: "satellite",
  };
  console.log("Waypoints:", waypoints);
  console.log("Stops:", stops);
  return (
    <div style={containerStyle}>
      {showMissionBox && (
        <MissionBox missionId={missionId} onClose={handleCloseClick} />
      )}
      <BottomOverlay
        missionDuration={missionDuration}
        batteryPercentage={batteryPercentage}
        speed={speed}
        altitude={altitude}
      />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18.5}
        options={mapOptions}
      >
        {waypoints.length > 0 && (
          <Polyline
            path={waypoints}
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
        )}

        {/* Marker for the hexacopter */}
        {hexacopterPosition && (
          <Marker
            position={hexacopterPosition}
            icon={{
              url: hexacopterIcon,
              scaledSize: new window.google.maps.Size(50, 50), // Adjust size as needed
            }}
          />
        )}
        {/* Render markers for stops */}
        {stops.map((stop, index) => (
          <Marker key={index} position={stop} options={{ visible: false }} />
        ))}
      </GoogleMap>
    </div>
  );
};

function FlashingButton() {
  return (
    <>
      <style>
        {`
            @keyframes flashAnimation {
              0% {
                background-color: darkgreen;
              }
              50% {
                background-color: lightgreen;
              }
              100% {
                background-color: darkgreen;
              }
            }
  
            .flashButton {
              animation: flashAnimation 4s infinite;
              background-color: darkgreen;
              border: none;
              border-radius: 20px;
              color: white;
              font-weight: bold;
              padding: 10px 20px;
              cursor: pointer;
              margin-right: 10px; /* Add some margin to the right of the button */
            }
          `}
      </style>
      <button className="flashButton">Active</button>
    </>
  );
}

function MissionBox({ onClose, missionId }) {
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
      <span style={{ marginRight: "auto", fontSize: "2rem" }}>
        Mission 00{missionId}
      </span>{" "}
      {/* This will push the close button to the end */}
      <FlashingButton />
    </div>
  );
}

function BottomOverlay({
  missionDuration,
  batteryPercentage,
  speed,
  altitude,
}) {
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
    width: "23.5%",

    position: "absolute",
    justifyContent: "flex-start",
    padding: "5px 10px",
    fontWeight: "bold",
    borderBottom: "1px solid #797979",
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
          <div style={halfBoxStyle}>Mission Time Elapsed: 20 minutes</div>
          <div style={lastHalfBoxStyle}>
            <div style={progressStyle}>
              Mission Time Remaining: {missionDuration}
            </div>
          </div>
        </div>
        {/* Lower box */}
      </div>
      {/* Second split box container */}
      <div style={splitBoxStyle}>
        <div style={innerBoxStyle}>
          <div style={textContainerStyle}>
            <div style={smallTextStyle}>Battery Health</div>
            <div style={miniTextStyle}>{batteryPercentage}%</div>
            <div style={extraMiniTextStyle}>Optimal</div>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BatteryFullIcon
              style={{
                color: "lightgray",
                fontSize: "5.5rem",
                marginRight: "30px",
                marginTop: "5px",
              }}
            />
          </div>
        </div>
        {/* Upper box */}
        <div style={innerBoxStyle}>
          <div style={textContainerStyle}>
            <div style={smallTextStyle}>Weather Conditions</div>
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
      <div style={splitBoxStyle}>
        <div style={innerBoxStyle}>
          <div style={textContainerStyle}>
            <div style={smallTextStyle}>Drone Altitude</div>
            <div style={miniTextStyle}>{altitude}m</div>
            <div style={extraMiniTextStyle}>Relative</div>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FlightTakeoffIcon
              style={{
                color: "lightgray",
                fontSize: "5.5rem",
                marginRight: "30px",
                marginTop: "5px",
              }}
            />
          </div>
        </div>
        {/* Upper box */}
        <div style={innerBoxStyle}>
          <div style={textContainerStyle}>
            <div style={smallTextStyle}>Drone Speed</div>
            <div style={miniTextStyle}>{speed}m/s</div>
            {/* <div style={extraMiniTextStyle}>Northeast</div> */}
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SpeedIcon
              style={{
                color: "lightgray",
                fontSize: "5.5rem",
                marginRight: "30px",
                marginTop: "5px",
              }}
            />
          </div>
        </div>
      </div>
      {/* Third box */}
      <div style={innerBoxStyle}>
        <div style={mediumTextStyle}>Drone Status</div>
      </div>{" "}
      {/* Fourth box */}
    </div>
  );
}

export default React.memo(TrackingMap);
