import React, { useEffect, useRef, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { Route, Routes } from "react-router-dom";
import ISS from "./component/issTrack/ISS";
import LoadingPage from "./loadingPage";
import Home from "./pages/Home/home";
import News from "./pages/News";
import SubHome from "./pages/subHome/SubHome";
import ExplorSpace from "./pages/ExplorSpace/ExplorSpace";
import SatelliteIndex from "./component/satalite/sataliteIndex";
const App = () => {
  const [state, setstate] = useState(null);
  const alanBtnRef = useRef({}).current;
  // alanBtnRef.btnInstance = alanBtn({
  //   key: "2afb491f51183e708ad9f01a02831952f2e956eca572e1d8b807a3e2338fdd0dc/stage",
  // });

  // useEffect(() => {
  //   alanBtnRef.btnInstance.activate();
  //   alanBtnRef.btnInstance.playText("Hello Mahmoud, how are you today? ");
  //   alanBtnRef.btnInstance.playText(
  //     "Do you want to know the weather news today?"
  //   );
  // }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setstate(data));
  }, []);
  if (state) {
    console.log(state);
  }
  return (
    <Routes>
      <Route path="/" element={<LoadingPage />} />
      <Route path="/home" element={<SubHome />} />
      <Route path="/issTracker" element={<ISS />} />
      <Route path="/satellite" element={<SatelliteIndex />} />
      <Route path="/News" element={<News />} />
      <Route path="/exploreSpace" element={<ExplorSpace />} />
    </Routes>
  );
};
export default App;
