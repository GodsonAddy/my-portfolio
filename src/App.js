import React, { useState, useEffect } from "react";
import { Box, CssBaseline, Fab } from "@mui/material";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  const [pos, setPos] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setPos(true);
      } else {
        setPos(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Header />
      <Skills />
      <Experience />
      <Projects />
      {pos && (
        <Fab
          color="primary"
          size="small"
          style={{
            position: "fixed",
            bottom: 16,
            right: 16,
          }}
          onClick={scrollToTop}
        >
          <KeyboardArrowUpIcon color="white" />
        </Fab>
      )}
      <Footer />
    </Box>
  );
}

export default App;
