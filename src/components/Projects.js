import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Box
      component="main"
      sx={{
        height: "100%",
        backgroundColor: "#28282B",
        color: "white",
        py: "20px",
      }}
    >
      <Container>
        <Typography variant="h5" color="#f44336" sx={{ fontWeight: "700" }}>
          Projects
        </Typography>
      </Container>
    </Box>
  );
};

export default Projects;
