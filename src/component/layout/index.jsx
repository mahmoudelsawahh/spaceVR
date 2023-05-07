import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import BodyHome from "../BodyHome/BodyHome";
import LandingStar from "../star/Star";
import Navbar from "./Navbar";
// #07073a
const Layout = () => {
  return (
    <Box>
      <Navbar />
      <Canvas style={{ position: "fixed", backgroundColor: "#000" }}>
        <Suspense fallback={null}>
          <LandingStar />
        </Suspense>
      </Canvas>
      <BodyHome />
    </Box>
  );
};
export default Layout;
