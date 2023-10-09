import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

function PieChart() {
  // Dummy data for the pie chart
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [30, 40, 20], // Dummy data values
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colors for each segment
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colors on hover
      },
    ],
  };

  const legendOptions = {
    position: 'right',
    align: 'start', // Align the legend to the start of the container
    labels: {
      boxWidth: 10, // Adjust the width of the legend color box
    },
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
      <Pie data={data} options={{ legend: legendOptions }} />
    </div>
  );
}

export default PieChart;
