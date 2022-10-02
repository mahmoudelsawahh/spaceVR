import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 90px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 500;
  max-width: 30%;
  text-align: center;
`;

const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #5c47d0;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 3em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
 display : flex;
 align-items: center;
  &:hover {
    background-color: transparent;
    border: 2px solid #5c47d0;
  }
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <Logo>ISS TRACKER</Logo>
      <Slogan>observe space like never before</Slogan>
      <Paragraph>
      a graphical 3D representation for the international space station, planets and satellites and with a live simulation.
      </Paragraph>
       <Link to='/home'>
       <DonateButton>Dive In <ArrowForwardIcon sx={{marginLeft : '3px'}}/></DonateButton>
       </Link>
    </TopSectionContainer>
  );
}
