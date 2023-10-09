import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

function SchoolInfoCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [schoolName, setSchoolName] = useState('Micro-school Name');
  const [location, setLocation] = useState('Nairobi, Kenya');
  const [established, setEstablished] = useState('January 2024');

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can add logic here to save the edited details
  };

  return (
    <Card className="w-75 mx-auto">
      <Card.Header className="text-center">
        <h5>School Information</h5>
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-center">
          {isEditing ? (
            <Form.Control
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
          ) : (
            schoolName
          )}
        </Card.Title>
        <Card.Text className="text-center">
          {isEditing ? (
            <>
              <Form.Control
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Form.Control
                type="text"
                value={established}
                onChange={(e) => setEstablished(e.target.value)}
              />
            </>
          ) : (
            <>
              Location: {location}
              <br />
              Established: {established}
            </>
          )}
        </Card.Text>
        <div className="text-center">
          {isEditing ? (
            <Button variant="success" onClick={handleSaveClick}>
              Save
            </Button>
          ) : (
            <Button variant="outline-primary" onClick={handleEditClick}>
              Edit
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default SchoolInfoCard;
