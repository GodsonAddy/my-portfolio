import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import SideProjects from "../util/SideProjects";

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
        <Grid container spacing={2} display="flex" direction="column">
          <Grid item display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h5" color="#f44336" sx={{ fontWeight: "700" }}>
              Projects
            </Typography>
          </Grid>
          <Grid item marginBottom={10} marginTop={3}>
            <Grid container spacing={2} display="flex" direction="row">
              {SideProjects.map(
                ({ id, link, title, github, description, skills }) => {
                  return (
                    <Grid item xs={4} key={id} style={{ display: "flex" }}>
                      <Card sx={{ minWidth: 275 }} variant="outlined">
                        <CardContent>
                          <Typography
                            color="#b71c1c"
                            variant="h5"
                            component="div"
                            gutterBottom
                          >
                            {title}
                          </Typography>
                          <Typography variant="h6" component="div">
                            Description
                          </Typography>
                          {description.map(({ type }, index) => {
                            return (
                              <ul key={index}>
                                <li>{type}</li>
                              </ul>
                            );
                          })}
                          <Typography variant="body2" component="span">
                            Skills: <i> {skills}</i>
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton
                            color="primary"
                            sx={{
                              "&:hover": {
                                backgroundColor: "#171515",
                              },
                            }}
                            href={github}
                            target="_blank"
                          >
                            <GitHubIcon />
                          </IconButton>
                          <IconButton
                            sx={{
                              color: "#ff5722",
                              "&:hover": {
                                backgroundColor: "#171515",
                              },
                            }}
                            href={link}
                            target="_blank"
                          >
                            <RssFeedRoundedIcon />
                          </IconButton>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
