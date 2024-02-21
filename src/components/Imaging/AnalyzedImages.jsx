import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faFileArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const DropdownContainer = styled("div")(({ theme }) => ({
  width: "81vw",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
}));

// Modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height: 800,
  bgcolor: "white",
  boxShadow: 24,
};

function AnalyzedImages() {
  const [missions, setMissions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  //! when i delete this, the table fails.  Recode to make it so table does not fail when removed.
  const rows = [
    {
      id: "1",
      date: "02/20/2021",
      time: "13:45",
      customerId: "FieldDock_1",
      type: "Orthomosiac",
    },
  ];

  //----------------------fetch the data from  backend.--------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://3.145.131.67:8000/api/imageout/"); // Adjust URL
        const data = await response.json();
        const processedData = data.map((mission) => ({
          id: mission.id.toString(),
          imageName: mission.image.split("/").pop(),
          date: new Date(mission.time).toLocaleDateString(),
          time: new Date(mission.time).toLocaleTimeString(),
          imageType: mission.image_type,
          image: mission.image, // URL to the image
        }));
        setMissions(processedData);
      } catch (error) {
        console.error("Failed to fetch missions", error);
      }
    };

    fetchData();
  }, []);

  //-------------------logic for clicking on icon, and it opens image-------------
  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  //-------------------Filtering mechanism for dropdown to sort table-------------
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredMissions = missions.filter(
    (mission) => filter === "" || mission.imageType === filter
  );

  //---------------------selecting all in table -------------------------------------
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  //---------------------selecting one in table -------------------------------------
  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DropdownContainer>
          <FormControl
            size="small"
            sx={{
              boxShadow: "0 7px 5px 1px rgba(0, 0, 0, 0.2)",
              width: "30%",
              ".MuiOutlinedInput-root": {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0, 168, 177, 0.65)",
                  background:
                    "linear-gradient(1deg, rgba(0, 0, 0, 0), #1b1b1b)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#797979", // Change border color on hover to red
                },
              },
              ".MuiInputBase-input": {
                color: "#FFF", // Customize text color here
              },
              // This targets the dropdown icon specifically if needed
              ".MuiSvgIcon-root": {
                color: "#FFF", // Adjust dropdown icon color
              },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0, 168, 177, 0.65)", // Your desired default border color
              },
            }}
          >
            <InputLabel id="image-type-select-label">Image Type</InputLabel>
            <Select
              labelId="image-type-select-label"
              id="image-type-select"
              value={filter}
              label="Image Type"
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Orthomosaic">Orthomosaic</MenuItem>
              <MenuItem value="Downsample">Downsampled</MenuItem>
              <MenuItem value="Heatmap">Heatmap</MenuItem>
            </Select>
          </FormControl>
        </DropdownContainer>
        <TableContainer
          component={Paper}
          sx={{
            height: "500px",
            maxHeight: "480px", // Ensure this matches the max-height of the diagnostics-log-box if needed
            width: "81vw",
            border: "1.5px solid #474a4e",
            boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
            borderRadius: "4px",
            overflowY: "auto", // This ensures that the overflow applies to the TableContainer as well
            background: "#151617",
          }}
        >
          <Table
            aria-label="simple table"
            sx={{
              backgroundColor: "#151617",
              /* also liked #232527 #1C1D1F*/
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      selected.length > 0 && selected.length < rows.length
                    }
                    checked={rows.length > 0 && selected.length === rows.length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: "rgba(0, 168, 177, 0.85)",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: "rgba(0, 168, 177, 0.85)",
                  }}
                >
                  Image Name
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: "rgba(0, 168, 177, 0.85)",
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: "rgba(0, 168, 177, 0.85)",
                  }}
                >
                  Time
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: "rgba(0, 168, 177, 0.85)",
                  }}
                >
                  Image Type
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: "rgba(0, 168, 177, 0.85)",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            {/* modal that opens when you click the magnify glass icon */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img
                  src={selectedImage}
                  alt="Large view"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </Modal>
            <TableBody>
              {filteredMissions.map((mission) => {
                const isItemSelected = isSelected(mission.id);
                return (
                  <TableRow
                    key={mission.id}
                    sx={{
                      borderBottom:
                        filteredMissions.indexOf(mission) ===
                        filteredMissions.length - 1
                          ? "1px solid #ECECED"
                          : "none",

                      "&:last-child td, &:last-child th": { border: 0 },
                      "&:hover": { backgroundColor: "#474a4e" },
                    }}
                    selected={isItemSelected}
                    hover
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onChange={(event) => handleClick(event, mission.id)}
                      />
                    </TableCell>
                    <TableCell
                      sx={{ fontSize: "0.85rem", color: "#ECECED" }}
                      component="th"
                      scope="row"
                    >
                      {mission.id}
                    </TableCell>
                    <TableCell sx={{ fontSize: "0.85rem", color: "#ECECED" }}>
                      {mission.imageName}
                    </TableCell>
                    <TableCell sx={{ fontSize: "0.85rem", color: "#ECECED" }}>
                      {mission.date}
                    </TableCell>
                    <TableCell sx={{ fontSize: "0.85rem", color: "#ECECED" }}>
                      {mission.time}
                    </TableCell>
                    <TableCell sx={{ fontSize: "0.85rem", color: "#ECECED" }}>
                      {mission.imageType}
                    </TableCell>
                    <TableCell>
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        onClick={() => handleOpen(mission.image)}
                        className="first-icon"
                      />
                      <a href={mission.image} download>
                        <FontAwesomeIcon
                          icon={faFileArrowDown}
                          className="second-icon"
                        />
                      </a>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="second-icon"
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
export default AnalyzedImages;
