import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(to right, #f5f7fa, #c3cfe2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 4,
          fontWeight: 600,
          color: "#333",
          maxWidth: "600px",
        }}
      >
        Get Hired or Hire Talented People – Completely Free!
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ minWidth: 160, borderRadius: "8px", textTransform: "none" }}
          component={Link}
          to="/employer/dashboard"
        >
          Hire Talent
        </Button>

        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{ minWidth: 160, borderRadius: "8px", textTransform: "none" }}
          component={Link}
          to="/employee/feed"
        >
          Get a Job Now
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
