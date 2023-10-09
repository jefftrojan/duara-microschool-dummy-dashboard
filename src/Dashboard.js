import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionCard from './SectionCard';
import PieChart from './PieChart';

function Dashboard() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={4} className="mb-3"> {/* Add margin-bottom for spacing */}
          <SectionCard title="Key Performance Indicators (KPIs)" content="Enrollment: 150 students
          | Attendance Rate: 95% | Teacher-Student Ratio: 1:20
          " />
        </Col>
        <Col md={4} className="mb-3"> {/* Add margin-bottom for spacing */}
          <SectionCard title="Financial Overview" content="Total Budget: $50,000 | Expenditures: $30,000 | Available Funds: $20,000" />
        </Col>
        <Col md={4} className="mb-3"> {/* Add margin-bottom for spacing */}
          <SectionCard title="Student Progress Tracking" content="Student 1: Math - 90%, Science - 88% | " />
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
