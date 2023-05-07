import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import BodyHome from "../../component/BodyHome/BodyHome";
import Navbar from "../../component/layout/Navbar";
import NewsComp from "../../component/New/NewsComp";
import LandingStar from "../../component/star/Star";

const News = () => {
  return (
    <Box>
      <Navbar />
      <Canvas style={{ position: "fixed", backgroundColor: "#000" }}>
        <Suspense fallback={null}>
          <LandingStar />
        </Suspense>
      </Canvas>
      <NewsComp />
    </Box>
  );
};
export default News;
