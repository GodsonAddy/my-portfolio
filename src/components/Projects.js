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
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          container
          direction="column"
        >
          <Grid item>
            <Typography variant="h5" color="#f44336" sx={{ fontWeight: "700" }}>
              Projects
            </Typography>
          </Grid>
        </Grid>

        <Box mt={5}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            keyboard={{
              enabled: true,
            }}
            onSwiper={(swiper) => swiper.slideNext()}
            style={{ paddingBottom: "5rem" }}
            autoHeight={true}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },

              280: {
                slidesPerView: 1,
              },
            }}
          >
            {SideProjects.map(
              ({ id, link, title, github, description, skills }) => (
                <SwiperSlide key={id}>
                  <Card
                    sx={{
                      maxWidth: 275,

                      minHeight: 450,
                      "&:hover": {
                        backgroundColor: "silver[400]",
                        transform: "scale(1.0)",
                        boxShadow: "1px 1px 30px silver",
                      },
                    }}
                    variant="outlined"
                  >
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
                </SwiperSlide>
              )
            )}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
