import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import HotelIcon from '@mui/icons-material/Hotel';

const TripDetail = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const loadTripData = async () => {
      try {
        const response = await import(`../data/trip${id}.json`);
        setTrip(response.default);
      } catch (error) {
        console.error("Error loading trip data:", error);
      }
    };

    loadTripData();
  }, [id]);

  if (!trip) {
    return <Typography variant="h5" align="center">行程不存在</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom align="center">{trip.travelTitle}</Typography>
        <Typography variant="body1" gutterBottom align="center">{trip.travelTitleDescription}</Typography>
        <Divider sx={{ my: 2, borderColor: 'rgba(0, 0, 0, 0.8)' }} />
        <Typography variant="h6" gutterBottom align="center">參考航班</Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" align="center">去程</Typography>
            <Box sx={{ marginBottom: 2 }} textAlign="center">
              <Typography variant="body1">航班: {trip.airplane[0].airline} {trip.airplane[0].flightNumber}</Typography>
              <Typography variant="body1">出發城市: {trip.airplane[0].departureCity}</Typography>
              <Typography variant="body1">抵達城市: {trip.airplane[0].arrivalCity}</Typography>
              <Typography variant="body1">出發時間: {trip.airplane[0].departureTime}</Typography>
              <Typography variant="body1">到達時間: {trip.airplane[0].arrivalTime}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" align="center">回程</Typography>
            <Box sx={{ marginBottom: 2 }} textAlign="center">
              <Typography variant="body1">航班: {trip.airplane[1].airline} {trip.airplane[1].flightNumber}</Typography>
              <Typography variant="body1">出發城市: {trip.airplane[1].departureCity}</Typography>
              <Typography variant="body1">抵達城市: {trip.airplane[1].arrivalCity}</Typography>
              <Typography variant="body1">出發時間: {trip.airplane[1].departureTime}</Typography>
              <Typography variant="body1">到達時間: {trip.airplane[1].arrivalTime}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2, borderColor: 'rgba(0, 0, 0, 0.8)' }} />

        {trip.itinerary.map((day, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
              <StarIcon sx={{ color: 'orange' }} />
              <Typography variant="h6" align="center" sx={{ mx: 1 }}>
                {day.day}
              </Typography>
              <StarIcon sx={{ color: 'orange' }} />
            </Box>
            <Typography variant="body1" sx={{ mb: 1, fontWeight: 'bold' }} dangerouslySetInnerHTML={{ __html: day.dayDescription }} />
            <Grid container spacing={2} sx={{ mb: 2 }}>
              {day.attractions.map((attraction, idx) => (
                <Grid item xs={12} key={idx}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${idx}-content`}
                      id={`panel${idx}-header`}
                    >
                      <Typography variant="body1">{attraction.attractionTitle}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body1" dangerouslySetInnerHTML={{ __html: attraction.attractionDescription }}></Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body1"><BreakfastDiningIcon sx={{color: 'orange'}}/>  早餐: {day.meals.breakfast}</Typography>
              <Typography variant="body1"><LunchDiningIcon sx={{color: 'orange'}}/>  午餐: {day.meals.lunch}</Typography>
              <Typography variant="body1"><DinnerDiningIcon sx={{color: 'orange'}}/>  晚餐: {day.meals.dinner}</Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }}><HotelIcon sx={{color: 'orange'}}/>  酒店: {day.hotel}</Typography>
            <Divider sx={{ my: 2, borderColor: 'rgba(0, 0, 0, 0.8)' }} />
          </Box>
        ))}

        <Typography variant="body1" sx={{ mt: 2 }} dangerouslySetInnerHTML={{ __html: trip.remark }} />
      </Box>
    </Container>
  );
};

export default TripDetail;