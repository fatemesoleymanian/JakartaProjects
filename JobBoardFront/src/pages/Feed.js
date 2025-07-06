import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
  Chip,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/posts/search/${query}`
        );
        setPost(response.data);
      } catch (err) {
        console.error("Error fetching search results:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchInitialPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/posts`);
        setPost(response.data);
      } catch (err) {
        console.error("Error fetching initial posts:", err);
      } finally {
        setLoading(false);
      }
    };

    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);

  return (
    <Box sx={{ padding: "2rem", maxWidth: "1200px", margin: "auto" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Button variant="outlined" component={Link} to="/">
          Home
        </Button>
        <TextField
          placeholder="Search job title, description or skill..."
          variant="outlined"
          onChange={(e) => setQuery(e.target.value)}
          sx={{ width: "70%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 6,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {post && post.length > 0 ? (
            post.map((p) => (
              <Grid key={p.id} item xs={12} md={6} lg={4}>
                <Card
                  sx={{
                    padding: "1.5rem",
                    borderRadius: "16px",
                    boxShadow: 3,
                    transition: "0.3s",
                    height: "100%",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography variant="h6" gutterBottom color="primary">
                    {p.profile}
                  </Typography>

                  <Typography
                    sx={{ color: "text.secondary", mb: 2 }}
                    variant="body2"
                  >
                    {p.desc}
                  </Typography>

                  <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                    Experience:{" "}
                    <Box component="span" fontWeight="bold">
                      {p.exp} year{p.exp > 1 ? "s" : ""}
                    </Box>
                  </Typography>

                  <Typography sx={{ mt: 1 }} variant="subtitle2">
                    Skills:
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}
                  >
                    {p?.techs?.map((skill, i) => (
                      <Chip key={i} label={skill} color="info" size="small" />
                    ))}
                  </Box>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography
                variant="h6"
                align="center"
                sx={{ mt: 5 }}
                color="text.secondary"
              >
                No posts found.
              </Typography>
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default Feed;
