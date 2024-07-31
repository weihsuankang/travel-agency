import React from 'react';
import TripCard from '../components/TripCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const trips = [
  { id: 1, title: 'Trip 1', description: 'Description of Trip 1', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Trip 2', description: 'Description of Trip 2', image: 'https://via.placeholder.com/150' },
];

const Home = () => {
  return (
    <Box>
      <Box sx={{ width: '100%', height: '300px', position: 'relative' }}>
        <img
          src="homepage.jpg"
          alt="Travel"
          style={{ width: '100%', height: '300px', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
        />
        <Typography
          variant="h2"
          color="white"
          align="center"
          sx={{ position: 'relative', zIndex: 1, paddingTop: '100px' }}
        >
          Welcome to Our Travel Agency
        </Typography>
      </Box>
      <Grid container spacing={2} className="container mt-5">
        {trips.map((trip) => (
          <Grid item key={trip.id} xs={12} sm={6} md={4}>
            <TripCard {...trip} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;