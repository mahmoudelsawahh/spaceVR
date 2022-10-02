import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useParams } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import { Button } from '@mui/material';
const menuItems = [
  {
    icon: (<HomeIcon />),
    text: "Home",
  },
  {
    icon: (<InfoIcon />),
    text: "About",
  },

  {
    icon: (<CallIcon />),
    text: "Contact",
  }
]
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [home , setHome] = useState(true);
  const [iss , setIss] = useState(false);
  const [satellite , setSatellite] = useState(false);
  const [last , setLast] = useState(false);
  return (
    <Box>
      <AppBar sx={{backgroundColor : '#2e2e2eab', position : 'absolute' , padding : '6px 0px'}}>
        <Toolbar>
            <Typography sx={{ flexGrow: 1 , width : '30%' , color :'#1890ff' , fontSize : 40 }} variant="h4" fontSize={30} fontWeight={'bold'} component="div">
              <Link to={'/'}>
                SpaceVR
              </Link>
            </Typography>
          <Box sx={{ display: { md: 'flex', xs: 'none' }, width: { xl : '30%' , lg : '40%' ,  md : '50%'} ,justifyContent: 'space-between', alignItems: 'center' }}>
             <Button onClick={()=>{
              setHome(true)
              setIss(false)
              setSatellite(false)
              setLast(false)
             }}>
             <Typography  sx={{textTransform : 'capitalize'}}  fontSize={18} fontWeight={500} color={home ? '#1890ff' : '#fff'}><Link to={'/home'}>Home</Link></Typography>
             </Button>
             <Button onClick={()=>{
              setHome(false)
              setIss(true)
              setSatellite(false)
              setLast(false)
             }}>            
               <Typography  sx={{textTransform : 'capitalize'}}  fontSize={18} fontWeight={500} color={iss ? '#1890ff' : '#fff'}><Link to={'/issTracker'}>Iss Tracker</Link></Typography>
              </Button>
              <Button onClick={()=>{
              setHome(false)
              setIss(false)
              setSatellite(true)
              setLast(false)
             }}>          
                 <Typography  sx={{textTransform : 'capitalize'}} fontSize={18} fontWeight={500} color={satellite ? '#1890ff' : '#fff'}><Link to={'/satellite'}>Satellite Tracker</Link></Typography>
  
              </Button>
              <Button onClick={()=>{
              setHome(false)
              setIss(false)
              setSatellite(false)
              setLast(true)
             }}>            
                <Typography sx={{textTransform : 'capitalize'}} fontSize={18} fontWeight={500} color={last ? '#1890ff' : '#fff'}>contact</Typography>
               </Button>
               
          </Box>
          <Box sx={{ display: { md: 'none', xs: 'flex' } }}>
            <IconButton onClick={() => setOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            {/* <Drawer anchor='right' open={open} onClose={() => setOpen(false)} >
              <Box sx={{ width: '250px', bgcolor: '#000', height: '100%', color: 'white' }}>
                <List >
             
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
            </Drawer> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar