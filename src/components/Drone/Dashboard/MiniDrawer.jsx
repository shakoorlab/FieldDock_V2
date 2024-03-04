import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import MapIcon from "@mui/icons-material/Map";
import FlightIcon from "@mui/icons-material/Flight";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import NavigationIcon from "@mui/icons-material/Navigation";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import HomeIcon from "@mui/icons-material/Home";

// import Grow from "@mui/material/Grow";
import OverviewDrawer from "../Dashboard/Overview/OverviewDrawer";
import CreateMissionDrawer from "./CreateMission/CreateMissionDrawer";
import PlannedMissionDrawer from "./PlannedMission/PlannedMissionDrawer";
import CompletedMissionDrawer from "./CompletedMission/CompletedMissionDrawer";
import TrackingDrawer from "./Tracking/TrackingDrawer";
import DroneFieldDock from "../../../assets/svg/Drone_FieldDock.svg";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#1b1b1b",
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: "#1b1b1b", // Set the background color for the opened state
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "#1b1b1b", // Set the background color for the closed state
    },
  }),
}));

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "51.5%",
  borderRadius: "4px",
  transform: "translate(-50%, -50%)",
  width: "35%", //40% for bigger than 1700 screens
  height: "30%", //45% for bigger than 1700 screens
  border: "1.5px solid #e0e0e0",
  boxShadow: "0 7px 5px 1px rgba(0, 0, 0, 0.2)",
  p: 4,
  background: "linear-gradient(1deg, rgba(0, 0, 0, 0.95), rgb(27, 27, 27))",
  display: "flex",
  flexDirection: "row",
};

export default function MiniDrawer() {
  const [opent, setOpent] = useState(true); // Modal is initially closed

  // const handleOpen = () => setOpen(true); // Function to open the modal
  const handleClose = () => setOpent(false); // Function to close the modal
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // State to manage which component to display
  const [activePage, setActivePage] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // Function to set the active page based on menu item clicked
  const handleMenuItemClick = (componentName) => {
    setActivePage(componentName);
  };

  // Determine which component to render based on activePage
  const renderActivePageComponent = () => {
    const activeMenuItem = menuItems.find((item) => item.text === activePage);
    return activeMenuItem ? activeMenuItem.component : null;
  };

  const menuItems = [
    {
      text: "Overview",
      Icon: SpaceDashboardIcon,
      component: <OverviewDrawer />,
    },
    {
      text: "Create Mission",
      Icon: MapIcon,
      component: <CreateMissionDrawer />,
    },
    {
      text: "Planned Missions",
      Icon: FlightIcon,
      component: <PlannedMissionDrawer />,
    },
    {
      text: "Completed Missions",
      Icon: AirplaneTicketIcon,
      component: <CompletedMissionDrawer />,
    },
    {
      text: "Track Flight",
      Icon: NavigationIcon,
      component: <TrackingDrawer />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: `
            radial-gradient(
              circle at 50% 0,
              rgba(68, 68, 68, 0.6),
              #020202 79%,
              rgba(0, 40, 53, 0.66)
            ),
            linear-gradient(rgba(1, 0, 15, 0.89), rgba(1, 0, 15, 0.89))
          `,
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton //hamburger menu
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              ml: -1,
              width: 20, // Example to control size
              height: 20, // Maintain aspect ratio
            }}
            src="src/assets/images/fd_logo.png"
            alt="FD Logo"
          />
          <Typography
            sx={{
              mt: 0.3,
            }}
            variant="h6"
            noWrap
            component="div"
          >
            FieldDock Mission Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon sx={{ color: "#FFF" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ borderColor: "#797979" }} />
        <List>
          {menuItems.map(({ text, Icon }) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => handleMenuItemClick(text)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "#FFF",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#FFF",
                  }}
                >
                  <Icon /> {/* Use the Icon component directly */}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ borderColor: "#797979" }} />
        <List>
          {["Home", "Notifications", "Settings"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "#FFF",
                }}
                onClick={() => {
                  if (text === "Home") navigate("/Home-Page");
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#FFF",
                  }}
                >
                  {index === 0 ? ( //! work on this weird list here
                    <HomeIcon />
                  ) : index % 2 === 0 ? (
                    <SettingsIcon />
                  ) : (
                    <MailIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, height: "100vh" }}>
        <DrawerHeader />
        {renderActivePageComponent()}
        <Modal open={opent}>
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
                  fontSize: "1.7rem",
                  display: "flex",
                  justifyContent: "center",
                  opacity: "55%",
                }}
              >
                Welcome to the Drone Mission Dashboard
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
                Plan, edit, view, and track your missions here
              </div>
              <button
                style={{ marginTop: "30px" }}
                onClick={handleClose}
                className="view-plan-button"
              >
                Continue
              </button>
            </div>
          </Box>
        </Modal>
        <div //! fix this so it doesnt appear on all page bottoms of drawer component
          style={{
            width: "100%",
            height: "80%",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <img src={DroneFieldDock} />
        </div>
      </Box>
    </Box>
  );
}

{
  /* <Grid xs={4} md={4}>
              <Item>xs=6 md=8</Item>
            </Grid>
            <Grid xs={4} md={4}>
              <Item>xs=6 md=8</Item>
            </Grid> */
}
