import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import JobExperience from "../util/JobExperience";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Experience = () => {
  return (
    <Box
      component="main"
      sx={{
        height: "100%",
        backgroundColor: "#343434",
        color: "white",
        py: "20px",
      }}
    >
      <Container>
        <Grid container spacing={2} display="flex" direction="column">
          <Grid item display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h5" color="#f44336" sx={{ fontWeight: "700" }}>
              Experience
            </Typography>
          </Grid>
          <Grid item>
            {JobExperience.map(
              ({ id, company, year, role, priority, skills }) => {
                return (
                  <Grid
                    container
                    spacing={2}
                    display="flex"
                    direction="row"
                    marginBottom="3rem"
                    key={id}
                  >
                    <Grid item xs={4}>
                      <Grid
                        container
                        spacing={2}
                        display="flex"
                        direction="column"
                      >
                        <Grid item xs={8} key={id}>
                          <Typography color="#1de9b6" variant="h6">
                            {role}
                          </Typography>

                          <Typography color="white" variant="subtitle1">
                            <AlternateEmailIcon
                              fontSize="small"
                              sx={{
                                display: "inline-flex",
                                verticalAlign: "top",
                                marginRight: "0.5rem",
                              }}
                              color="primary"
                            />
                            {company}
                          </Typography>

                          <Typography color="white" variant="subtitle2">
                            {year}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={8} key={id}>
                      <Grid
                        container
                        spacing={2}
                        display="flex"
                        direction="column"
                      >
                        <Grid item xs={8} key={id}>
                          <Typography
                            color="white"
                            variant="body1"
                            component="div"
                            gutterBottom
                          >
                            {priority}
                          </Typography>

                          <Typography
                            color="white"
                            variant="body2"
                            component="span"
                          >
                            Skills: <i>{skills.join("●")}</i>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              }
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
