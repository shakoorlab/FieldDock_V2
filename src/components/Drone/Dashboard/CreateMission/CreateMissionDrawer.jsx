import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

function CreateMissionDrawer() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
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
            <Item>{/* <Map /> */}</Item>
          </Grid>
          <Grid xs={5} sm={5} md={5} lg={5} xl={5}>
            <Item>{/* <LatLongTable /> */}</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CreateMissionDrawer;
