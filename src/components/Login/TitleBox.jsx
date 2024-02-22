import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; //!change

const TitleBox = () => {
  return (
    <Grid xs={0} sm={0} md={6} lg={6} xl={6} minHeight={550}>
      <Box
        sx={{
          backgroundImage: `
      radial-gradient(
        circle at 50% 0,
        rgba(68, 68, 68, 0.6),
        #020202 79%,
        rgba(0, 40, 53, 0.66)
      ),
      linear-gradient(rgba(1, 0, 15, 0.89), rgba(1, 0, 15, 0.89))
    `,
          padding: "20px",
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "95%", //! originally was 100%, on bigger screens, Titlebox, is a bit smaller than SigninPage
          borderRadius: "0px 30px 30px 0",
          border: "0.5px solid #2A2C2E",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography variant="h4" fontWeight="bold" color="whitesmoke" mb={3}>
            Welcome to the
            <br /> Fielddock Experience
          </Typography>
          <Typography variant="body1" fontWeight="" color="whitesmoke">
            Technology for High Throughput Phenotyping
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default TitleBox;
