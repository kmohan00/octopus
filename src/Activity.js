import React, { useState, useEffect, Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Activity() {
  const [timeView, setTimeView] = useState('days'); // Initial time view state

  // Sample data for different time views
  const dataByHours = {
    labels: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'],
    datasets: [
      {
        label: 'Sample Data',
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 100)), // Random data for 24 hours
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const dataByDays = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Sample Data',
        data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 100)), // Random data for 7 days
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const dataByWeeks = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Sample Data',
        data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)), // Random data for 4 weeks
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const dataByMonths = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sample Data',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)), // Random data for 12 months
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Options for the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Function to handle time view change
  const handleTimeViewChange = (event) => {
    setTimeView(event.target.value);
  };

  // Selecting data based on the current time view
  let selectedData;
  if (timeView === 'hours') {
    selectedData = dataByHours;
  } else if (timeView === 'days') {
    selectedData = dataByDays;
  } else if (timeView === 'weeks') {
    selectedData = dataByWeeks;
  } else if (timeView === 'months') {
    selectedData = dataByMonths;
  }

  //Log below!

  // Initial log data
  const [log, setLog] = useState([
    {
      timeStamp: '2024-04-13 10:00:00',
      duration: '30m 15s',
      type: 'Enrichment - Toy',
      level: 'Low',
      sleepState: 'No',
    },
    {
      timeStamp: '2024-04-13 11:00:00',
      duration: '20m 30s',
      type: 'Enrichment - Toy',
      level: 'Medium',
      sleepState: 'Yes',
    },
    // Add more log entries as needed
  ]);

  return (
    <div className='main'>
            <h1>Activity</h1>
            <div className='chart'>
              <p>
                Activity Graph
              </p>
              {/* <Line className='line' data={data} options={options} /> */}
              <div>
                <label className='infoLabelSel' htmlFor="time-view">Select Time View:</label>
                <select id="time-view" value={timeView} onChange={handleTimeViewChange}>
                  <option value="hours">Hour</option>
                  <option value="days">Day</option>
                  <option value="weeks">Week</option>
                  <option value="months">Month</option>
                </select>
              </div>
              <Line className='line' data={selectedData} options={options} />
            </div>
            <div className='mlog'>
              <p>
                Activity Log
              </p>
              <div className="activity-log-container">
                <div className="header">
                  <div>Time Stamp</div>
                  <div>Duration</div>
                  <div>Activity Type</div>
                  <div>Activity Level</div>
                  <div>Sleep State</div>
                </div>
                <div className="log">
                  {log.map((entry, index) => (
                    <div key={index} className="log-entry">
                      <div>{entry.timeStamp}</div>
                      <div>{entry.duration}</div>
                      <div>{entry.type}</div>
                      <div>{entry.level}</div>
                      <div>{entry.sleepState}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
    </div>
  );
}

export default Activity;