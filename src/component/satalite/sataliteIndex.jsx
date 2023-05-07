import React from "react";
import { Layout } from "antd";
import Title from "antd/lib/typography/Title";
import satelliteLogo from "../../assets/satalites/satellite-1.svg";
import Main from "./Main";
import "./styles/index.css";
const { Header, Footer, Content } = Layout;

function SatelliteIndex() {
  return (
    <>
      <Content>
        <Main />
      </Content>
    </>
  );
}

export default SatelliteIndex;
