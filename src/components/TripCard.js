// src/components/TripCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TripCard = ({ title, description, image }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default TripCard;