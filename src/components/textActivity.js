import React from 'react';
import { Card } from 'react-bootstrap';
import './textActivity.css'; // Custom styles if needed

const CardComponent = ({ word }) => {
  return (
    <Card className="text-activity-card">
      <Card.Body className="d-flex align-items-center justify-content-center">
        <Card.Title className='card-activity-title'>{word}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
