import React from 'react';
import { Card } from 'react-bootstrap';

function SchoolInfoCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Micro-school Name</Card.Title>
        <Card.Text>
          Location: Nairobi, Kenya
          <br />
          Established: January 2024
          {/* Add more school information here */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SchoolInfoCard;
