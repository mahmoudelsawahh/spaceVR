import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
const menuItems = [
  {
    icon: <HomeIcon />,
    text: "Home",
  },
  {
    icon: <InfoIcon />,
    text: "About",
  },

  {
    icon: <CallIcon />,
    text: "Contact",
  },
];
const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(4);
  const dataPlanets = props.dataPlanets;
  useEffect(() => {
    if (dataPlanets) {
      return dataPlanets(state);
    }
  }, [state]);
  const handelColor = () => {
    if (window.location.pathname === "/home") {
      return "#2e2e2eab";
    } else {
      return "black";
    }
  };
  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: handelColor(),
          position: "absolute",
          padding: "6px 0px",
        }}
      >
        <Toolbar>
          <Typography
            sx={{ flexGrow: 1, width: "40%", color: "#1890ff", fontSize: 40 }}
            variant="h4"
            fontSize={30}
            fontWeight={"bold"}
            component="div"
          >
            <Link to={"/"}>3D Space View</Link>
          </Typography>
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              width: "60%",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ textTransform: "capitalize" }}
              fontSize={18}
              fontWeight={500}
            >
              <NavLink to={"/home"}>Home</NavLink>
            </Typography>

            <Typography
              sx={{ textTransform: "capitalize" }}
              fontSize={18}
              fontWeight={500}
            >
              <NavLink to={"/issTracker"}>Iss Tracker</NavLink>
            </Typography>

            <Typography
              sx={{ textTransform: "capitalize" }}
              fontSize={18}
              fontWeight={500}
            >
              <NavLink to={"/satellite"}>Satellite Tracker</NavLink>
            </Typography>

            {/* <Typography
              sx={{ textTransform: "capitalize" }}
              fontSize={18}
              fontWeight={500}
            >
              <NavLink to={"/News"}>News</NavLink>
            </Typography> */}
            <Typography
              sx={{ textTransform: "capitalize" }}
              fontSize={18}
              fontWeight={500}
            >
              <NavLink to={"/exploreSpace"}>Explore Space</NavLink>
            </Typography>
            {dataPlanets ? (
              <details>
                <summary className="planets-dropdown fw-300">Planets</summary>
                <ul>
                  <li onClick={() => setState(1)}>
                    <i className="fa-solid fa-shuttle-space"></i>
                    <a href="#" className="nav-link">
                      Mercury
                    </a>
                  </li>

                  <li onClick={() => setState(2)}>
                    <i className="fa-solid fa-shuttle-space"></i>
                    <a href="#" className="nav-link">
                      Venus
                    </a>
                  </li>

                  <li onClick={() => setState(3)}>
                    <i className="fa-solid fa-shuttle-space"></i>
                    <a href="#" className="nav-link">
                      Earth
                    </a>
                  </li>

                  <li onClick={() => setState(4)}>
                    <i className="fa-solid fa-shuttle-space"></i>
                    <a href="#" className="nav-link">
                      Mars
                    </a>
                  </li>

                  <li onClick={() => setState(5)}>
                    <i className="fa-solid fa-shuttle-space"></i>
                    <a href="#" className="nav-link">
                      Jupiter
                    </a>
                  </li>

                  <li onClick={() => setState(6)}>
                    <i className="fa-solid fa-shuttle-space"></i>
                    <a href="#" className="nav-link">
                      Saturn
                    </a>
                  </li>

                  <li onClick={() => setState(7)}>
                    <i className="fa-solid fa-shuttle-space"></i>
                    <a href="#" className="nav-link">
                      Uranus
                    </a>
                  </li>

                  <li onClick={() => setState(8)}>
                    <i className="fa-solid fa-shuttle-space"></i>
                    <a href="#" className="nav-link">
                      Neptune
                    </a>
                  </li>

                  <li onClick={() => setState(9)}>
                    <i className="fa-solid fa-shuttle-space"></i>
                    <a href="#" className="nav-link">
                      Moon
                    </a>
                  </li>
                </ul>
              </details>
            ) : null}
          </Box>
          <Box sx={{ display: { md: "none", xs: "flex" } }}>
            <IconButton
              onClick={() => setOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <Box
                sx={{
                  width: "250px",
                  bgcolor: "#000",
                  height: "100%",
                  color: "white",
                }}
              >
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemButton>
                        <ListItemIcon sx={{ color: "white" }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider />
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
