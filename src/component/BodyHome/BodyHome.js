import './BodyHome.css'
import { Box, Typography, Button } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react'
import Earth from '../planets/earch.js';
import Moon from '../planets/moon';
import Venus from '../planets/venus';
import Neptune from '../planets/neptune';
import PlanetsData from './descPlanets';

const BodyHome = () => {
  const [moon, setMoon] = useState(true);
  const [earth, setEarth] = useState(false);
  const [venus, setVenus] = useState(false);
  const [neptune, setNeptune] = useState(false);

  const planets = () => {
    if (moon) {

      return <Moon />
    } else if (earth) {
      return <Earth />
    } else if (venus) {
      return <Venus />
    } else if (neptune) {
      return <Neptune />
    }
  }
  function resetAll(i) {
    if (i === 0) {
      setMoon(true)
      setEarth(false)
      setVenus(false)
      setNeptune(false)
    } else if (i === 1) {
      setEarth(true)
      setVenus(false)
      setNeptune(false)
      setMoon(false)
    } else if (i === 2) {
      setVenus(true)
      setNeptune(false)
      setMoon(false)
      setEarth(false)

    } else {
      setNeptune(true)
      setMoon(false)
      setEarth(false)
      setVenus(false)
    }
  }
  const options = [
    {
      text: "Moon",


    },
    {
      text: "Earth",


    },
    {
      text: "Venus",


    },
    {
      text: "Neptune",


    }
  ]
    
  const desPlanets = ()=>{
    if (moon){
      return PlanetsData.descPlanets[0]
    }else if (earth){
       return PlanetsData.descPlanets[1]
    }else if(venus){
      return PlanetsData.descPlanets[2]
    }else if (neptune){
      return PlanetsData.descPlanets[3]
    }
  }
  return (
    <Box sx={{position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    }}>
      <Box sx={{ width: { xl: '80%', xs: ' 80%' }, margin: 'auto', display: { lg: 'flex', xs: 'block' }, justifyContent: 'center', 
      alignItems: 'center', color: '#fff' }}>
        <Box sx={{ width: { lg: '50%', xs: '100%' }, height: { lg: '500px', xs: '400px' } }} className="planetBox">
          <h1 className='headerImg' style={{color : '#fff' , fontSize : '25px'}}><span>01</span> Pick your  DESTINATiON</h1>
          <Canvas className='canvas'>
            <Suspense fallback={null}>
              {planets()}
            </Suspense>
          </Canvas>
        </Box>
        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ width: { lg: '40%', xs: '100%' } }} className="test">
          <Box>


          <Box sx={{display : 'flex' , width : {xl : "80%" ,xs : '100%'} , justifyContent :'space-between' ,  alignItems : 'center' , marginBottom : '15px'}}>
                  <h2 style={{color :  moon ? '#1890ff' : '#fff' , cursor : 'pointer'}} className={moon ?  'borderBottom' : null} onClick={()=> {
                    setEarth(false)
                    setVenus(false)
                    setNeptune(false)
                    setMoon(true)
                  }}>MOON</h2>
                  <h2 style={{color : earth ? '#1890ff' : '#fff' , cursor : 'pointer'}} className={earth ?  'borderBottom' : 'null'} onClick={()=> {
                    setEarth(true)
                    setVenus(false)
                    setNeptune(false)
                    setMoon(false)
                  }}>EARTH</h2>
                  <h2 style={{color :  venus ? '#1890ff' : '#fff'}} className={venus ?  'borderBottom' : null} onClick={()=> {
                    setEarth(false)
                    setVenus(true)
                    setNeptune(false)
                    setMoon(false)
                  }}>VENUS</h2>
                  <h2 style={{color : neptune ? '#1890ff' : '#fff' , cursor : 'pointer'}} className={neptune ?  'borderBottom' : null} onClick={()=> {
                    setEarth(false)
                    setVenus(false)
                    setNeptune(true)
                    setMoon(false)
                  }}>NEPTUNE</h2>
                  </Box>  

          </Box>
          <Typography sx={{color : '#fff'}} variant='h1' >{desPlanets().name}</Typography>
          <Typography sx={{ lineHeight: '2.1', marginBottom: '25px' }}>
            {desPlanets().desc}
          </Typography>
          <hr style={{ marginBottom: '30px' }} />

          <Box sx={{ display: 'flex', alignItems: 'center', width: '95%' }}>
            <Box sx={{ width: '50%' }}>
              <Typography sx={{color : '#fff'}} variant='h6' mb={2}>AVG, distance</Typography>
              <h2 style={{color : '#fff'}} variant='h4'>{desPlanets().distance}</h2>
            </Box>
            <Box sx={{ width: '50%' }}>
              <Typography  sx={{color : '#fff'}} variant='h6' mb={2}>EST, travel time</Typography>
              <h2 style={{color : '#fff'}}>{desPlanets().time}</h2>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default BodyHome;