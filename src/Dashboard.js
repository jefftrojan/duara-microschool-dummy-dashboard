import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SectionCard from './SectionCard';
import PieChart from './PieChart';

function generateReport() {
  // Create a table with border lines and a header description
  const table = `
    <table style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th colspan="2" style="border: 1px solid #000; padding: 10px; text-align: center; background-color: #f0f0f0;">Your Report for Your Microschool</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #000; padding: 5px;">Section</td>
          <td style="border: 1px solid #000; padding: 5px;">Data</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 5px;">Key Performance Indicators (KPIs)</td>
          <td style="border: 1px solid #000; padding: 5px;">Enrollment: 150 students | Attendance Rate: 95% | Teacher-Student Ratio: 1:20</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 5px;">Financial Overview</td>
          <td style="border: 1px solid #000; padding: 5px;">Total Budget: $50,000 | Expenditures: $30,000 | Available Funds: $20,000</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 5px;">Student Progress Tracking</td>
          <td style="border: 1px solid #000; padding: 5px;">Student 1: Math - 90%, Science - 88%</td>
        </tr>
      </tbody>
    </table>
  `;

  // Create a new window for printing
  const printWindow = window.open('', '', 'width=600,height=600');
  printWindow.document.open();
  printWindow.document.write('<html><head><title>Report</title></head><body>');
  printWindow.document.write(table);
  printWindow.document.write('</body></html>');
  printWindow.document.close();

  // Trigger the print dialog
  printWindow.print();
}

function Dashboard() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={4} className="mb-3">
          <SectionCard title="Key Performance Indicators (KPIs)" content="Enrollment: 150 students | Attendance Rate: 95% | Teacher-Student Ratio: 1:20" />
        </Col>
        <Col md={4} className="mb-3">
          <SectionCard title="Financial Overview" content="Total Budget: $50,000 | Expenditures: $30,000 | Available Funds: $20,000" />
        </Col>
        <Col md={4} className="mb-3">
          <SectionCard title="Student Progress Tracking" content="Student 1: Math - 90%, Science - 88%" />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={12} className="text-center">
          <PieChart />
          <Button variant="primary" onClick={generateReport} className="mt-3">
            Generate Report
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
