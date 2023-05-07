import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LoadingProvider } from "./component/issTrack/lib/loading";
import * as serviceWorker from "./serviceWorker";
import { Canvas } from "@react-three/fiber";
import LandingStar from "./component/star/Star";
import { Box } from "@mui/material";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: "100vh",
      backgroundColor: "#000",
    }}
  >
    <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
      <Canvas style={{ position: "absolute" }}>
        <LandingStar />
      </Canvas>
      <BrowserRouter>
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </BrowserRouter>
    </Box>
  </Box>
);
serviceWorker.unregister();
