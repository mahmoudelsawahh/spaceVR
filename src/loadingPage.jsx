import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./component/earth";
import { TopSection } from "./component/earth/topSection";
import { Box } from "@mui/material";
import { Stars } from "@react-three/drei";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;
function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "transparent",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50% , -50%)",
        width: "100%",
        height: "700px",
      }}
    >
      <Box>
        <TopSection />
      </Box>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </Box>
  );
}

export default App;
