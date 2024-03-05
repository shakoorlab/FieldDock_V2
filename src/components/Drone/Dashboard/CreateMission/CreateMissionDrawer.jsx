import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDateTime } from "../../../../slices/dateTimeSlice";
import { createMission } from "./WaypointConfig";
import LatLongTable from "../CreateMission/LatLongTable";
import { setWaypoints } from "../../../../slices/waypointsSlice";
import Map from "../CreateMission/MapComponent";
import MissionSummary from "./MissionSummary";

import {
  Box,
  Grid,
  Typography,
  Paper,
  Modal,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import Grow from "@mui/material/Grow";

import axios from "axios";
import mqtt from "mqtt";

//
//
//
//---------------------logic for Items in Grid----------------------
// Styled component for reusability
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

//---------------------logic for Modal----------------------
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "4px",
  transform: "translate(-50%, -50%)",
  width: "50%", //40% for bigger than 1700 screens
  height: "52%", //45% for bigger than 1700 screens
  border: "2.5px solid #e0e0e0",
  boxShadow: "0 7px 5px 1px rgba(0, 0, 0, 0.2)",
  p: 4,
  background: "linear-gradient(1deg, rgba(0, 0, 0, 0.95), rgb(27, 27, 27))",
  display: "flex",
  flexDirection: "row",
};

//---------------------logic for Stepper----------------------
const steps = [
  // {
  //   label: "Select mission waypoints",
  //   description: `For each ad campaign that you create, you can control how much
  //             you're willing to spend on clicks and conversions, which networks
  //             and geographical locations you want your ads to show on, and more.`,
  // },
  {
    label: "Select a time and date for mission",
    description:
      "Select the date and time for your FieldDock drone mission.  Please remember, you are planning one mission at a time. You will be selecting a date, and a time for the mission to start on that selected date.",
  },
  {
    label: "Finalize mission",
    description: `As you approach the last step in planning your drone mission, it's crucial to double-check all your details to ensure a successful operation. Take a moment to review the selected date and time, making certain it aligns perfectly with your mission objectives.`,
  },
];

const CreateMissionDrawer = () => {
  const dispatch = useDispatch();
  //--------------------logic for modal-----------------------------------
  const [open, setOpen] = useState(false); // Modal is initially closed

  const handleOpen = () => setOpen(true); // Function to open the modal
  const handleClose = () => setOpen(false); // Function to close the modal
  //
  //
  //---------------------logic for stepper----------------------------------
  const [activeStep, setActiveStep] = React.useState(0);
  const [displaySummary, setDisplaySummary] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  //---------------------logic for storing date/time values-----------------
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    if (selectedDate && selectedTime) {
      // Extracting the year, month, and day from the selected date
      const year = selectedDate.year();
      const month = selectedDate.month() + 1; // Month is 0-indexed
      const day = selectedDate.date();

      // Extracting the hours and minutes from the selected time
      const hours = selectedTime.hour();
      const minutes = selectedTime.minute();

      // Combining and formatting the date and time
      const combinedDateTime = dayjs(
        new Date(year, month - 1, day, hours, minutes)
      ).toISOString();
      console.log("Combined DateTime:", combinedDateTime); // Log combined date and time
      dispatch(setDateTime(combinedDateTime));
    }
  }, [selectedDate, selectedTime, dispatch]);

  const handleDateChange = (newDate) => {
    console.log("Selected Date:", newDate); // Log selected date
    setSelectedDate(newDate);
  };

  const handleTimeChange = (newTime) => {
    console.log("Selected Time:", newTime); // Log selected time
    setSelectedTime(newTime);
  };
  //---------------------logic for coordinates on map ----------------------
  const [data, setData] = useState([
    {
      id: 1,
      command: "",
      p1: "0",
      p2: "0",
      p3: "0",
      p4: "0",
      latitude: "",
      longitude: "",
      alt: "",
      frame: "",
      grad: "",
      angle: "",
      dist: "",
      az: "",
    },
  ]);
  const [markerPositions, setMarkerPositions] = useState([]);
  const [homeLat, setHomeLat] = useState("");
  const [homeLng, setHomeLng] = useState("");

  const onMapClick = useCallback((event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    console.log("Clicked location:", { lat, lng }); // Log the clicked location

    setData((currentData) => {
      if (
        currentData.length === 1 &&
        currentData[0].latitude === "" &&
        currentData[0].longitude === ""
      ) {
        return [{ ...currentData[0], latitude: lat, longitude: lng }];
      } else {
        return [
          ...currentData,
          {
            id: currentData.length + 1,
            command: "",
            p1: "0",
            p2: "0",
            p3: "0",
            p4: "0",
            latitude: lat,
            longitude: lng,
            alt: "",
            frame: "",
          },
        ];
      }
    });
    setMarkerPositions((currentPositions) => [
      ...currentPositions,
      { lat, lng },
    ]);
  }, []);

  //---------------------logic for sending waypoints and dateTime data to MQTT and backend----------------------

  const handleFinish = async () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setDisplaySummary(true);
    // This prepares the waypoints data and dispatches it to the Redux store
    const waypointsData = data.map((item) => ({
      id: item.id,
      command: item.command,
      p1: item.p1,
      p2: item.p2,
      p3: item.p3,
      p4: item.p4,
      latitude: item.latitude,
      longitude: item.longitude,
      alt: item.alt,
      frame: item.frame,
      grad: item.grad,
      angle: item.angle,
      dist: item.dist,
      az: item.az,
    }));

    const rawWaypoints = createMission(waypointsData);
    // Prepare data for API request, but only send latitude and longitude
    const dataForAPI = {
      mission_date: selectedDate, // Use actual state data
      waypoints: waypointsData
        .map((waypoint) => `${waypoint.latitude},${waypoint.longitude}`)
        .join(";"),
      waypoints_raw: rawWaypoints,
      duration: "01:00:00", // Example duration
      mission_status: "Planned", // Example mission status
      weather_conditions: "Sunny", // Example weather conditions
      field_component: 1, // Example field component
    };

    // Send data to the backend API
    try {
      const response = await axios.post(
        "http://3.15.191.116:8000/api/missions/",
        dataForAPI
      );
      console.log("Data sent to API:", response.data);
    } catch (error) {
      console.error("Error sending data to API:", error);
    }

    // Prepare and send data to MQTT broker
    // const mqttData = createMission(waypointsData); // This will use the original waypointsData, including all properties
    // console.log("Formatted MQTT Data:", mqttData);
    // const client = mqtt.connect("ws://3.145.131.67:9001");

    // client.on("connect", () => {
    //   console.log("Connected to MQTT broker");
    //   client.publish("mission/waypoints", mqttData, {}, (err) => {
    //     if (err) {
    //       console.error("Error publishing to MQTT:", err);
    //     } else {
    //       console.log("Data sent to MQTT broker");
    //     }
    //     client.end(); // Close the connection after publishing
    //   });
    // });

    // Connect to the MQTT broker
    // const client = mqtt.connect("ws://3.145.131.67:9001");

    // client.on("connect", () => {
    //   console.log("Connected to MQTT broker");
    //   // Perform actions upon successful connection
    // });

    // client.on("error", (error) => {
    //   console.error("Connection to MQTT broker failed:", error);
    // });

    // client.on("close", () => {
    //   console.log("Connection to MQTT broker closed.");
    //   // Handle cleanup or retry logic here
    // });
  };
  //---------------------logic for sending waypoints and dateTime data to MQTT and backend----------------------
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* start of title grid item */}
          <Grid xs={12} md={12} lg={12} xl={12}>
            <Item
              sx={{
                background: "transparent",
                borderBottom: "1px solid rgba(0, 242, 255, 0.25)",
                display: "flex",
                justifyContent: "flex-start",
                borderRadius: "0px",
                marginBottom: "10px",
              }}
            >
              <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ color: "#FFF" }}
              >
                Create Mission
              </Typography>
            </Item>
          </Grid>

          {/* ------------------------------------------------------------------------------end of title grid item -----*/}
          <Grid xs={7} sm={7} md={7} lg={7} xl={7}>
            <Item sx={{ background: "transparent" }}>
              <Map
                onMapClick={onMapClick}
                markerPositions={markerPositions}
                setHomeLat={setHomeLat}
                setHomeLng={setHomeLng}
              />
            </Item>
          </Grid>
          <Grid xs={5} sm={5} md={5} lg={5} xl={5}>
            <Item sx={{ background: "transparent" }}>
              <div
                style={{
                  height: "67vh",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #797979",
                  background:
                    "linear-gradient(1deg, rgba(0, 0, 0, 0), #1b1b1b)",
                  borderRadius: "4px",
                  overflow: "auto", // This will add a scrollbar if the table exceeds the div's size
                }}
              >
                <LatLongTable data={data} setData={setData} />
              </div>

              <div //container for both home location and buttons box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "100px",
                  marginTop: "15px",
                  backgroundColor: "transparent",
                  boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65",
                }}
              >
                <div
                  style={{
                    width: "33%",
                    border: "1px solid #797979",
                    backgroundColor: "transparent",
                    boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65",
                    borderRadius: "4px",
                    background:
                      "linear-gradient(1deg, rgba(0, 0, 0, 0), #1b1b1b)",
                  }}
                >
                  <div
                    style={{
                      width: "90%",
                      marginTop: "-10px",
                      marginLeft: "10px",
                    }}
                  >
                    <h4
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        textDecoration: "underline",
                        fontSize: "12px",
                        color: "#FFF",
                      }}
                    >
                      Home Location
                    </h4>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "10px",
                        backgroundColor: "transparent",
                      }}
                    >
                      <label
                        style={{
                          marginRight: "10px",
                          fontSize: "10px",
                          fontWeight: "bold",
                          color: "#FFF",
                        }}
                      >
                        Latitude:
                      </label>
                      <input
                        readOnly //!only for now edit so user can edit coordinates later
                        value={homeLat}
                        style={{
                          borderBottom: "1px solid #797979",
                          borderLeft: "none",
                          borderTop: "none",
                          borderRight: "none",
                          width: "70%",
                          backgroundColor: "transparent",
                          color: "#e0e0e0",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "10px",
                      }}
                    >
                      <label
                        style={{
                          marginRight: "10px",
                          fontSize: "10px",
                          fontWeight: "bold",
                          color: "#FFF",
                        }}
                      >
                        Longitude:
                      </label>
                      <input
                        readOnly //!only for now edit so user can edit coordinates later
                        value={homeLng}
                        style={{
                          borderBottom: "1px solid #797979",
                          borderLeft: "none",
                          borderTop: "none",
                          borderRight: "none",
                          width: "70%",
                          backgroundColor: "transparent",
                          color: "#e0e0e0",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div //buttons box
                  style={{
                    width: "65%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #797979",
                    backgroundColor: "transparent",
                    borderRadius: "4px",
                    background:
                      "linear-gradient(1deg, rgba(0, 0, 0, 0), #1b1b1b)",
                  }}
                >
                  <button className="create-mission-buttons">Save</button>

                  <button className="create-mission-buttons">Load</button>

                  <button
                    onClick={handleOpen}
                    className="create-mission-buttons-plan"
                  >
                    Plan
                  </button>
                  <Modal open={open} onClose={handleClose}>
                    <Box sx={modalStyle}>
                      <Box
                        sx={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          bgcolor: "transparent",
                        }}
                      >
                        {/* Stepper Starts Here */}
                        <Box sx={{ maxWidth: 400 }}>
                          <Stepper
                            activeStep={activeStep}
                            orientation="vertical"
                          >
                            {steps.map((step, index) => (
                              <Step key={step.label}>
                                <StepLabel
                                  optional={
                                    index === 2 ? (
                                      <Typography variant="caption">
                                        Last step
                                      </Typography>
                                    ) : null
                                  }
                                >
                                  {step.label}
                                </StepLabel>
                                <StepContent>
                                  <Typography>{step.description}</Typography>
                                  <Box sx={{ mb: 2 }}>
                                    <div>
                                      {index < steps.length - 1 && (
                                        <Button
                                          variant="contained"
                                          onClick={handleNext}
                                          sx={{ mt: 1, mr: 1 }}
                                        >
                                          Continue
                                        </Button>
                                      )}
                                      {index === steps.length - 1 && (
                                        <Button
                                          variant="contained"
                                          onClick={handleFinish}
                                          sx={{ mt: 1, mr: 1 }}
                                        >
                                          Finish
                                        </Button>
                                      )}
                                      <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                      >
                                        Back
                                      </Button>
                                    </div>
                                  </Box>
                                </StepContent>
                              </Step>
                            ))}
                          </Stepper>
                          {activeStep === steps.length && (
                            <Paper
                              square
                              elevation={0}
                              sx={{ p: 1, background: "transparent" }}
                            >
                              <Typography>
                                All steps completed - your mission has been
                                planned and will be scheduled for takeoff when
                                ready
                              </Typography>
                              <Button
                                onClick={handleClose}
                                sx={{
                                  mt: 1,
                                  mr: 1,
                                  background: "rgba(0, 168, 177, 0.65)",
                                  color: "#FFF",
                                }}
                              >
                                Dashboard
                              </Button>
                              <Button
                                onClick={handleReset}
                                sx={{
                                  mt: 1,
                                  mr: 1,
                                  background: "#797979",
                                  color: "#fff",
                                }}
                              >
                                Reset
                              </Button>
                            </Paper>
                          )}
                        </Box>
                        {/* Conditional Rendering based on displaySummary */}
                        <Grow
                          in={true}
                          style={{ transformOrigin: "0 0 0" }}
                          timeout={1100}
                        >
                          <Box
                            sx={{
                              width: "50%",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {displaySummary ? (
                              <MissionSummary />
                            ) : (
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar
                                  value={selectedDate}
                                  onChange={handleDateChange}
                                  showDaysOutsideCurrentMonth
                                  views={["day", "month"]}
                                />
                                <Box
                                  sx={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "center",
                                  }}
                                >
                                  <TimePicker
                                    value={selectedTime}
                                    onChange={handleTimeChange}
                                    label="Select a time.."
                                  />
                                </Box>
                              </LocalizationProvider>
                            )}
                          </Box>
                        </Grow>
                      </Box>
                    </Box>
                  </Modal>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CreateMissionDrawer;

{
  /* <Grow
                  in={true}
                  style={{ transformOrigin: "0 0 0" }}
                  timeout={1100}
                ></Grow> */
}

{
  /* <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <div className="customCalendar">
                            <Grow
                              in={true}
                              style={{ transformOrigin: "0 0 0" }}
                              timeout={1000}
                            >
                              <DateCalendar
                                showDaysOutsideCurrentMonth
                                views={["day", "month"]}
                                sx={{
                                  // width: "90% !important",
                                  borderRadius: "4px",
                                  border: "1px solid #797979",
                                  boxShadow: "0 7px 5px 1px rgba(0, 0, 0, 0.2)",
                                  background:
                                    "linear-gradient(1deg, rgba(0, 0, 0, 0), #1b1b1b)",
                                }}
                              />
                            </Grow>
                          </div>
                        </LocalizationProvider> */
}
