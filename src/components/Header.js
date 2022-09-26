import React from "react";
import { Box, Typography, Grid, Container, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import mypic from "../assets/mypic.jpg";
import "../App.css";

const Header = () => {
  return (
    <Box
      component="main"
      sx={{
        height: "100%",
        backgroundColor: "#353935",
        color: "white",
        py: "20px",
      }}
    >
      <Container>
        <Box>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            display="flex"
          >
            <Grid item xs={12} sm={6}>
              <Grid container flexDirection="column" display="flex">
                <Grid item>
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{
                      color: "#1de9b6",
                      fontWeight: "700",
                    }}
                  >
                    SOFTWARE DEVELOPER
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "700",
                    }}
                  >
                    Godson Addy
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <Grid item xs={4} sm={4}>
                      <IconButton
                        sx={{
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "#1DA1F2",
                          },
                        }}
                        href="https://www.twitter.com/godsonaddy"
                        target="_blank"
                      >
                        <TwitterIcon />
                      </IconButton>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <IconButton
                        sx={{
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "#0072b1",
                          },
                        }}
                        href="https://www.linkedin.com/in/godson-addy/"
                        target="_blank"
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <IconButton
                        sx={{
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "#171515",
                          },
                        }}
                        href="https://www.github.com/GodsonAddy"
                        target="_blank"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Typography component="p" variant="body2" mt={4} gutterBottom>
                    I'm a self-taught software developer and identifying
                    innovative approaches and improved solutions to business
                    challenges both motivate and drive me. Observation,
                    inspiration, and determination are my foundation for
                    success. My philosophy is that introducing fresh
                    perspectives and new techniques allow businesses to evolve
                    and grow. My goal is to remain on the cutting-edge of
                    advancements. Currently, in my Software Developer journey,
                    my successes have stemmed from essential skills, including
                    UI updates and programming. I have enhanced my communication
                    abilities and cultivated a reputation as a major contributor
                    through teamwork and team-building. I am a collaborative
                    team player who is always searching for opportunities to
                    impart valuable insights. With these qualities, I am able to
                    facilitate positive change and impact outcomes.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <img src={mypic} alt="my pic" className="my-pic" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
