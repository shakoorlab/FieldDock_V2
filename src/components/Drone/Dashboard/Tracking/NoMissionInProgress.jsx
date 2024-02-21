import React, { useState } from "react";
import { Box, Modal } from "@mui/material";

function NoMissionInProgress() {
  //--------------------logic for modal-----------------------------------
  const [open, setOpen] = useState(true); // Modal is initially closed

  // const handleOpen = () => setOpen(true); // Function to open the modal
  const handleClose = () => setOpen(false); // Function to close the modal
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "51.5%",
    borderRadius: "4px",
    transform: "translate(-50%, -50%)",
    width: "30%", //40% for bigger than 1700 screens
    height: "30%", //45% for bigger than 1700 screens
    border: "1.5px solid #e0e0e0",
    boxShadow: "0 7px 5px 1px rgba(0, 0, 0, 0.2)",
    p: 4,
    background: "linear-gradient(1deg, rgba(0, 0, 0, 0.95), rgb(27, 27, 27))",
    display: "flex",
    flexDirection: "row",
  };
  return (
    <>
      <Modal open={open}>
        <Box sx={modalStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: " center",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "#797979",
                fontSize: "2rem",
                display: "flex",
                justifyContent: "center",
                opacity: "55%",
              }}
            >
              No missions in progress
            </div>
            <div
              style={{
                color: "#797979",
                fontSize: "1.2rem",
                display: "flex",
                justifyContent: "center",
                opacity: "55%",
              }}
            >
              Please return to dashboard
            </div>
            <button
              style={{ marginTop: "30px" }}
              onClick={handleClose}
              className="view-plan-button"
            >
              Back
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default NoMissionInProgress;
