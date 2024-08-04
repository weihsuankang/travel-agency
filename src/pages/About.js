import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ p: 3, width: '100%' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>米康假期</Typography>
          <Typography variant="body1" gutterBottom>聯絡人：糠進祿</Typography>
          <Typography variant="body1" gutterBottom>聯絡電話：0972-165827</Typography>
          <Typography variant="body1" gutterBottom>LINE ID：0972165827</Typography>
          <Typography variant="body1" gutterBottom>公司：昇燕旅行社股份有限公司</Typography>
          <Typography variant="body1" gutterBottom>公司地址：台中市西屯區重慶路 99 號 4 樓 - 3</Typography>
          <Typography variant="body1" gutterBottom>公司電話：04-23101966</Typography>
          <Typography variant="body1" gutterBottom>公司傳真：04-23101967</Typography>
          <Typography variant="body1" gutterBottom>統編：53176554</Typography>
          <Typography variant="body1" gutterBottom>註冊：交觀甲 7229 號</Typography>
          <Typography variant="body1" gutterBottom>品保：中 0323 號</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;