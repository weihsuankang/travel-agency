import React from 'react';
import { useParams } from 'react-router-dom';

const tripDetails = {
  1: { id: 1, title: 'Trip 1', description: 'Detailed description of Trip 1', image: 'https://via.placeholder.com/150' },
  2: { id: 2, title: 'Trip 2', description: 'Detailed description of Trip 2', image: 'https://via.placeholder.com/150' },
};

const TripDetail = () => {
  const { id } = useParams();
  const trip = tripDetails[id];

  if (!trip) {
    return <div className="container mt-5">Trip not found</div>;
  }

  return (
    <div className="container mt-5">
      <h1>{trip.title}</h1>
      <img src={trip.image} alt={trip.title} />
      <p>{trip.description}</p>
    </div>
  );
};

export default TripDetail;