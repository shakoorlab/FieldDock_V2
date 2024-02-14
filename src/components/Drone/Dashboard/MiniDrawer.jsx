import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MapIcon from "@mui/icons-material/Map";
import FlightIcon from "@mui/icons-material/Flight";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import NavigationIcon from "@mui/icons-material/Navigation";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import DroneFieldDock from "../../../assets/svg/Drone_FieldDock.svg";

// import Grow from "@mui/material/Grow";
import OverviewDrawer from "../Dashboard/Overview/OverviewDrawer";
import CreateMissionDrawer from "./CreateMission/CreateMissionDrawer";
import PlannedMissionDrawer from "./PlannedMission/PlannedMissionDrawer";
import CompletedMissionDrawer from "./CompletedMission/CompletedMissionDrawer";
import TrackingDrawer from "./Tracking/TrackingDrawer";

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

export default function MiniDrawer() {
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
      text: "Missions Overview",
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
              width: 20, // Example to control size
              height: 20, // Maintain aspect ratio
            }}
            src="src/assets/images/fd_logo.png"
            alt="FD Logo"
          />
          <Typography variant="h6" noWrap component="div">
            FieldDock Mission Planner
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
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
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
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
      </Box>
    </Box>
  );
}

{
  /* <Grid item xs={12} sm={12} md={12} lg={6} xl={8}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
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
              </LocalizationProvider>
            </Grid> */
}

{
  /* <Grid xs={4} md={4}>
              <Item>xs=6 md=8</Item>
            </Grid>
            <Grid xs={4} md={4}>
              <Item>xs=6 md=8</Item>
            </Grid> */
}
{
  /* <Grid xs={4} md={4}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={DroneFieldDock}
              />
            </Grid> */
}
