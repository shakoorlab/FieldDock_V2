import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Checkbox, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2"; //! change
import CustomInput from "./CustonInput";
import logoImage from "../../assets/images/fd_logo.png";

const SigninPage = () => {
  const navigate = useNavigate();

  const navToHomePage = () => {
    navigate("/Home-Page");
  };
  return (
    <Grid
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      minHeight={550}
      sx={{
        boxShadow: {
          xs: "",
          sm: "",
          md: "15px 2px 5px -5px",
          lg: "15px 2px 5px -5px",
          xl: "15px 2px 5px -5px",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 24, 57, 0.2)",
          display: "flex",
          border: "1px solid #012a44",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          borderRadius: {
            xs: "30px",
            sm: "30px",
            md: "30px 0 0 30px",
            lg: "30px 0 0 30px",
            xl: "30px 0 0 30px",
          },
        }}
      >
        <Box width="80%">
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* LOGO */}
            <Box
              sx={{
                mt: "60px",
                width: "50px",
                height: "50px",
                bgcolor: "primary.main",

                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 20px ${colors.lightBlue[500]}`,
              }}
            >
              <img
                src={logoImage}
                alt="FD Logo"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            {/* LOGO END */}

            <Typography color="white" fontWeight="bold" mt={7} mb={3}>
              Sign in to dashboard
            </Typography>
          </Box>

          {/* INPUTS */}
          <CustomInput
            label="Login"
            placeholder="Enter your login..."
            isIconActive={false}
          />
          <CustomInput
            label="Password"
            placeholder="Enter your password..."
            isIconActive={true}
          />
          <CustomInput
            label="MFA Code"
            placeholder="Enter your code..."
            isIconActive={true}
          />
          {/* INPUT END */}

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            mt={2}
            width="100%"
            color="white"
          >
            <div style={{ display: "flex" }}>
              <Checkbox disableRipple sx={{ p: 0, pr: 1 }} />
              <Typography>Remember me</Typography>
            </div>
            <a
              href="#yoyo"
              style={{
                color: colors.lightBlue[500],
                textDecoration: "none",
              }}
            >
              Forget password?
            </a>
          </Box>
          <Button
            variant="contained"
            fullWidth
            onClick={navToHomePage}
            sx={{ mt: 4, boxShadow: `0 0 20px ${colors.lightBlue[500]}` }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default SigninPage;
