import React, { useState, useEffect, Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// var dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}, {x: 5, y: 17},{x: 6, y: 10}, {x: 7, y: 13}, {x: 8, y: 18}, {x: 9, y: 20}, {x: 10, y: 17}];   //dataPoints.
// var xVal = dps.length + 1;
// var yVal = 15;
// var updateInterval = 1000;

function Activity() {
  const data = {
    labels: ['10am', '11am', '12pm', '01pm', '02pm', '03pm', '04pm'],
    datasets: [
      {
        label: 'Sample Data',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className='main'>
            <h1>Activity</h1>
            <div className='chart'>
              <p>
                Activity Graph
              </p>
              <Line className='line' data={data} options={options} />
            </div>
            <div className='log'>
              <p>
                Activity Log
              </p>
              
            </div>
    </div>
  );
}

export default Activity;