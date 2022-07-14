import React from "react";
import { Box, Typography, Stack, Divider, Link } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" mt={2}>
      {"Copyright © "}
      Clockwork Inc.
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Typography variant="body2" gutterBottom>
          <Link
            color="inherit"
            href="https://github.com/GodsonAddy/my-portfolio/tree/main"
            underline="none"
            target="_blank"
          >
            Code Link
          </Link>{" "}
        </Typography>
      </Stack>
      <Divider color="white" />
      <Stack alignItems="center" justifyContent="center">
        <Copyright />
      </Stack>
    </Box>
  );
};

export default Footer;
