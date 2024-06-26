import React, { useState, useEffect } from 'react';
import axios from 'axios';
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

function Feeding() {
  // Initial feeding log data
  const [log, setLog] = useState([
    { date: '2024-04-13', time: '10:00', enrichment: 'Social', duration: '30', foodType: 'Shrimp', quantity: '3', weight: '55' },
    { date: '2024-04-14', time: '11:30', enrichment: 'Food', duration: '35', foodType: 'Squid', quantity: '2', weight: '58' },
    { date: '2024-04-15', time: '12:15', enrichment: 'Sensory', duration: '28', foodType: 'Fish', quantity: '4', weight: '60' },
    { date: '2024-04-16', time: '09:45', enrichment: 'Physical', duration: '25', foodType: 'Crab', quantity: '1.5', weight: '57' },
    // Add more log entries as needed
  ]);

  // State for form input fields
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    enrichment: '',
    duration: '',
    foodType: '',
    quantity: '',
    weight: ''
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new entry to the log
    setLog([...log, formData]);
    // Reset form fields
    setFormData({ date: '', time: '', enrichment: '', duration: '', foodType: '', quantity: '',  weight: ''});
    // Make POST request to Python backend
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json'
        // Add any other headers if needed
      }
    };
    axios.post('http://localhost:5000/api/add_entry', { data: formData }, axiosConfig)
      .then(response => {
        console.log('Response:', response.data);
        // Handle response as needed
      })
      .catch(error => {
        console.error('Error submitting data:', error);
      });
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='main'>
            <h1>Feeding</h1>
            <div className='horiz'>
              <div className='flog'>
                <h3>
                  Feeding Log
                </h3>
                <div className="feeding-log-container">
                  <div className="header">
                    <div>Date</div>
                    <div>Time</div>
                    <div>Enrichment Type</div>
                    <div>Duration (min)</div>
                    <div>Food Type</div>
                    <div>Quantity (oz)</div>
                    <div>Weight (kgs)</div>
                  </div>
                  <div className="log">
                    {log.map((entry, index) => (
                      <div key={index} className="log-entry">
                        <div>{entry.date}</div>
                        <div>{entry.time}</div>
                        <div>{entry.enrichment}</div>
                        <div>{entry.duration}</div>
                        <div>{entry.foodType}</div>
                        <div>{entry.quantity}</div>
                        <div>{entry.weight}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Form for adding new entries */}
                <form onSubmit={handleSubmit} className="add-entry-form">
                    <input className='inputElem' type="date" name="date" value={formData.date} onChange={handleChange} required />
                    <input className='inputElem' type="time" name="time" value={formData.time} onChange={handleChange} required />
                    <input className='inputElem' type="text" name="enrichment" placeholder="Enrichment Type" value={formData.enrichment} onChange={handleChange} required />
                    <input className='inputElem' type="number" name="duration" placeholder="Duration (min)" value={formData.duration} onChange={handleChange} required />
                    <input className='inputElem' type="text" name="foodType" placeholder="Food Type" value={formData.foodType} onChange={handleChange} required />
                    <input className='inputElem' type="number" name="quantity" placeholder="Quantity (oz)" value={formData.quantity} onChange={handleChange} required />
                    <input className='inputElem' type="number" name="weight" placeholder="Weight (kgs)" value={formData.weight} onChange={handleChange} required />
                    <button className='inputElem' type="submit" >Add Entry</button>
                  </form>
              </div>
            </div>
    </div>
  );
}

export default Feeding;