import React from "react";
import { Box, Typography, Stack, Container, IconButton } from "@mui/material";
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
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Stack direction="column">
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
            <Typography
              variant="h6"
              sx={{
                fontWeight: "700",
              }}
            >
              Godson Addy
            </Typography>
            <Stack
              flexDirection="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              space={2}
            >
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
            </Stack>
            <Typography component="p" variant="body2" mt={4} gutterBottom>
              I'm a self-taught software developer and identifying innovative
              approaches and improved solutions to business challenges both
              motivate and drive me. Observation, inspiration, and determination
              are my foundation for success. My philosophy is that introducing
              fresh perspectives and new techniques allow businesses to evolve
              and grow. My goal is to remain on the cutting-edge of
              advancements. Currently, in my Software Developer journey, my
              successes have stemmed from essential skills, including UI updates
              and programming. I have enhanced my communication abilities and
              cultivated a reputation as a major contributor through teamwork
              and team-building. I am a collaborative team player who is always
              searching for opportunities to impart valuable insights. With
              these qualities, I am able to facilitate positive change and
              impact outcomes.
            </Typography>
          </Stack>
          <img src={mypic} alt="my pic" className="my-pic" />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
