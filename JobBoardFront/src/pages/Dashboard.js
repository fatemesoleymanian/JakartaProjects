import * as React from "react";
import {
  Box,
  Tab,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Link } from "react-router-dom";
import Create from "./Create";

export default function Home() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #eef2f3, #8e9eab)",
        padding: isMobile ? "2rem 1rem" : "3rem 4rem",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: isMobile ? "1rem" : "2rem",
          borderRadius: "16px",
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            mb: 3,
          }}
        >
          <Typography variant="h4" fontWeight={600} color="primary">
            Employer Dashboard
          </Typography>
          <Button
            variant="outlined"
            sx={{ mt: isMobile ? 2 : 0 }}
            component={Link}
            to="/"
          >
            Go Home
          </Button>
        </Box>

        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="Employer Dashboard Tabs"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="Create Post" value="1" />
              {/* You can add more tabs here later if needed */}
            </TabList>
          </Box>
          <TabPanel value="1">
            <Create />
          </TabPanel>
        </TabContext>
      </Paper>
    </Box>
  );
}
