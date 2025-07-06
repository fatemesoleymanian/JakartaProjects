import React, { useState } from "react";
import {
  Typography,
  TextField,
  Paper,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Chip,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";

const initial = { profile: "", exp: 0, techs: [], desc: "" };

const Create = () => {
  const skillSet = ["Javascript", "Java", "Python", "Django", "Rust"];
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log("Success:", data);
        navigate("/employee/feed");
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (e) => {
    const { value, checked } = e.target;
    setForm((prevForm) => {
      const updatedTechs = checked
        ? [...prevForm.techs, value]
        : prevForm.techs.filter((tech) => tech !== value);
      return { ...prevForm, techs: updatedTechs };
    });
  };

  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: 700,
        margin: "3rem auto",
        padding: "3rem",
        borderRadius: "16px",
        background: "#f9f9f9",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Create a Job Post
      </Typography>

      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Job Profile"
              fullWidth
              required
              variant="outlined"
              value={form.profile}
              onChange={(e) => setForm({ ...form, profile: e.target.value })}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Years of Experience"
              type="number"
              inputProps={{ min: 0 }}
              fullWidth
              required
              variant="outlined"
              value={form.exp}
              onChange={(e) => setForm({ ...form, exp: e.target.value })}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Job Description"
              multiline
              rows={4}
              fullWidth
              required
              variant="outlined"
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Required Skills
            </Typography>
            <Grid container spacing={1}>
              {skillSet.map((skill, index) => (
                <Grid item key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={skill}
                        checked={form.techs.includes(skill)}
                        onChange={handleChange}
                      />
                    }
                    label={skill}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {form.techs.length > 0 && (
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                Selected Skills:
              </Typography>
              <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                {form.techs.map((tech, i) => (
                  <Chip label={tech} key={i} color="primary" />
                ))}
              </Box>
            </Grid>
          )}

          <Grid item xs={12}>
            <LoadingButton
              loading={loading}
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                py: 1.5,
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Post Job
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Create;
