import { Box } from "@mui/material";
import React from "react";
import Navbar from "../../component/layout/Navbar";

const ExplorSpace = () => {
  return (
    <div>
      <div style={{ position: "absolute", width: "100%" }}>
        <Navbar />
      </div>
      <Box sx={{ width: "100%", position: "absolute", height: "100%" }}>
        <iframe
          src="https://eyes.nasa.gov/apps/solar-system/#/home"
          width="100%"
          height={"100%"}
          title="Iframe Example"
          scrolling="no"
        ></iframe>
      </Box>
    </div>
  );
};

export default ExplorSpace;
