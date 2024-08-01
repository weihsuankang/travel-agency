// src/components/Footer.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';


const Footer = () => {
  return (
    <Box sx={{
      width: '100%',
      backgroundColor: 'white',
      color: 'black',
      padding: 2,
      mt: 5,
      textAlign: 'center'
    }}>
        <Divider sx={{ my: 2, borderColor: 'rgba(0, 0, 0, 0.8)' }} />
        <Typography variant="body2">
        © {new Date().getFullYear()} Travel Agency. All rights reserved.
        </Typography>
        <Typography variant="body2">
        <Link href="/terms" color="inherit" underline="none">Terms of Service</Link> | <Link href="/privacy" color="inherit" underline="none">Privacy Policy</Link>
        </Typography>
    </Box>
  );
};

export default Footer;