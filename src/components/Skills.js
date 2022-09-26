import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import Stack from "../util/Stack";

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
        <Box>
          <Grid
            container
            spacing={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Grid item>
              <Typography
                variant="h5"
                color="#f44336"
                sx={{ fontWeight: "700" }}
              >
                Stack
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2} display="flex" direction="row">
                {Stack.map((el, id) => {
                  return (
                    <Grid item xs={6} key={id} sm={3}>
                      <Typography color="white">
                        <CheckBoxRoundedIcon
                          sx={{ display: "inline-flex", verticalAlign: "top" }}
                        />
                        {el}
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
