import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export function TopSection() {
  const navigate = useNavigate();
  return (
    <Box sx={{ ml: { xs: "5px", md: "80px" } }} className="parentDev">
      <h3 style={{ color: "#2e7d32" }}>
        <Zoom left cascade>
          HI, You can
        </Zoom>
        <Zoom left cascade>
          explore space now
        </Zoom>
      </h3>
      <p
        style={{ width: "80%", fontFamily: "sans-serif", fontStyle: "italic" }}
      >
        <Flip left cascade>
          We are a Team of developers interested in creating high-quality
          digital products for kids and adults We provide you with a range of
          digital products that the whole family will enjoy
        </Flip>
      </p>
      <Fade left>
        <Button
          onClick={() => {
            navigate("/home");
          }}
          sx={{ borderRadius: "20px 10px", padding: "20px 35px" }}
          color={"success"}
          variant="contained"
        >
          Learn More
        </Button>
      </Fade>
    </Box>
  );
}
