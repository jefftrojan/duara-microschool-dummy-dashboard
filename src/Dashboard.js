import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionCard from './SectionCard';
import PieChart from './PieChart';

function Dashboard() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={4} className="mb-3"> {/* Add margin-bottom for spacing */}
          <SectionCard title="Key Performance Indicators (KPIs)" content="KPI content goes here" />
        </Col>
        <Col md={4} className="mb-3"> {/* Add margin-bottom for spacing */}
          <SectionCard title="Financial Overview" content="Financial content goes here" />
        </Col>
        <Col md={4} className="mb-3"> {/* Add margin-bottom for spacing */}
          <SectionCard title="Student Progress Tracking" content="Student progress content goes here" />
        </Col>
      </Row>
      <Row className="mt-3"> {/* Add margin-top for spacing */}
        <Col md={12}>
          <PieChart />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
