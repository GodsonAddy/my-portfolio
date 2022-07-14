import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";

const stack = [
  "Javascript",
  "HTML",
  "CSS",
  "React",
  "Vue",
  "NodeJs",
  "MongoDB",
  "Express",
  "Redux Toolkit",
  "Storybook",
  "Firebase",
  "Typescript",
  "Agile",
  "D3.js",
  "Babel",
  "JQuery",
  "Sass",
  "Bootstrap",
  "Material-UI",
  "Jest",
  "React-testing library",
  "CI/CD",
  "Vuex",
  "Git & Github",
  "Agile",
];

const Skills = () => {
  return (
    <Box
      component="main"
      sx={{
        height: "100%",
        backgroundColor: "#36454F",
        color: "white",
        py: "20px",
      }}
    >
      <Container>
        <Grid container spacing={2} display="flex" direction="column">
          <Grid item display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h5" color="#f44336" sx={{ fontWeight: "700" }}>
              Stack
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2} display="flex" direction="row">
              {stack.map((el, id) => (
                <Grid item xs={3} key={id}>
                  <Typography color="white">
                    <CheckBoxRoundedIcon
                      sx={{ display: "inline-flex", verticalAlign: "top" }}
                    />
                    {el}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
