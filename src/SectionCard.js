import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import EditModal from './EditModal';

function SectionCard({ title, content }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary" onClick={handleEditClick}>Edit</Button>
      </Card.Body>
      
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        content={content}
      />
    </Card>
  );
}

export default SectionCard;
