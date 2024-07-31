import React from 'react';
import TripCard from '../components/TripCard';

const trips = [
  { id: 1, title: 'Trip 1', description: 'Description of Trip 1', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Trip 2', description: 'Description of Trip 2', image: 'https://via.placeholder.com/150' },
];

const Home = () => {
  return (
    <div className="container mt-5">
        <div className="row">
            {trips.map((trip, index) => (
                <div key={index} className="col-md-4">
                    <TripCard {...trip} />
                </div>
            ))}
        </div>
    </div>
  );
};

export default Home;