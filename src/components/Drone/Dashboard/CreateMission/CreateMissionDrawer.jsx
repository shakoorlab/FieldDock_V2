import React, { useState, useCallback } from "react";
import { Box, Grid, Typography, Paper, Modal } from "@mui/material";
import LatLongTable from "../CreateMission/LatLongTable";
import Map from "../CreateMission/MapComponent"; // Assuming this is your map component
import { styled } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Grow from "@mui/material/Grow";

// Styled component for reusability
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "4px",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "52%",
  border: "2.5px solid #797979",
  boxShadow: "0 7px 5px 1px rgba(0, 0, 0, 0.2)",
  p: 4,
  background: "linear-gradient(1deg, rgba(0, 0, 0, 0.95), rgb(27, 27, 27))",
  display: "flex",
  flexDirection: "row",
};

const CreateMissionDrawer = () => {
  const [open, setOpen] = useState(false); // Modal is initially closed

  const handleOpen = () => setOpen(true); // Function to open the modal
  const handleClose = () => setOpen(false); // Function to close the modal

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
                      {/* Content inside your modal */}

                      <Box
                        sx={{
                          display: "flex",
                          width: "50%",
                          height: "100%",
                          bgcolor: "transparent",
                          borderRight: "1px solid #797979", // Adds a border between the boxes
                        }}
                      >
                        {/* Content of the first box */}
                      </Box>
                      <Grow
                        in={true}
                        style={{ transformOrigin: "0 0 0" }}
                        timeout={1100}
                      >
                        <Box
                          sx={{
                            width: "50%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                                marginBottom: "20px",
                              }}
                            />
                            <Box
                              sx={{
                                display: "flex",
                                width: "100%", // Ensure the wrapper fills the parent box
                                justifyContent: "center", // Center the TimePicker horizontally
                              }}
                            >
                              <TimePicker
                                label="Select a time.."
                                name="Select a time.."
                                sx={{
                                  width: "83.5% !important",
                                  borderRadius: "4px",
                                  border: "1px solid #797979",
                                  boxShadow: "0 7px 5px 1px rgba(0, 0, 0, 0.2)",
                                  background:
                                    "linear-gradient(1deg, rgba(0, 0, 0, 0), #1b1b1b)",
                                }}
                              />
                            </Box>
                          </LocalizationProvider>
                        </Box>
                      </Grow>
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
