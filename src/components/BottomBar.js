import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Home from '@mui/icons-material/Home';
import Work from '@mui/icons-material/Work';
import Info from '@mui/icons-material/Info';
import LinkIcon from '@mui/icons-material/Link';
import Project from '@mui/icons-material/IntegrationInstructions';
import Person from '@mui/icons-material/Person4';
import './Styles.css';
import { Person2Rounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
 
    const navigate=useNavigate();

    const goToAbout=()=>{
        navigate('/about');
    };
    const goToHome=()=>{
        navigate('/');
    }

  return (
    <>
      <Box 
        sx={{ 
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          maxWidth: '100%',
        }} 
        className="glass_bottom_bar"
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            backgroundColor: 'transparent',
            color: '#fff',
            width: { xs: '100%', sm: '500px' },
            mx: 'auto',
          }}
        >
          <BottomNavigationAction label="Home" onClick={goToHome}  icon={<Home />} />
          <BottomNavigationAction label="Projects"  icon={<Project/>} />
          <BottomNavigationAction label="About" onClick={goToAbout} icon={<Person/>} />
          <BottomNavigationAction label="Profiles" icon={<LinkIcon/>} />

        </BottomNavigation>
      </Box>
    </>
  );
}
