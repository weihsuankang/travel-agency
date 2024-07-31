import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <AppBar position="static" elevation = {0} sx={{ backgroundColor: 'white', color: 'orange',width: '50%' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            米康假期
          </Typography>
          <Button color="inherit" component={Link} to="/">首頁</Button>
          <Button color="inherit" component={Link} to="/about">聯絡我們</Button>
          {/* <Button color="inherit" component={Link} to="/trips">行程表</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;