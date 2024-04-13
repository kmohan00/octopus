import React, { useState, useEffect } from 'react';

function Feeding() {
  // Initial feeding log data
  const [log, setLog] = useState([
    { date: '2024-04-13', time: '10:00 AM', foodType: 'Shrimp', quantity: '3 oz' },
    { date: '2024-04-14', time: '11:30 AM', foodType: 'Squid', quantity: '2 oz' },
    { date: '2024-04-15', time: '12:15 PM', foodType: 'Fish', quantity: '4 oz' },
    { date: '2024-04-16', time: '09:45 AM', foodType: 'Crab', quantity: '1.5 oz' },
    // Add more log entries as needed
  ]);

  // State for form input fields
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    foodType: '',
    quantity: '',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new entry to the log
    setLog([...log, formData]);
    // Reset form fields
    setFormData({ date: '', time: '', foodType: '', quantity: '' });
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
                    <div>Food Type</div>
                    <div>Quantity (oz)</div>
                  </div>
                  <div className="log">
                    {log.map((entry, index) => (
                      <div key={index} className="log-entry">
                        <div>{entry.date}</div>
                        <div>{entry.time}</div>
                        <div>{entry.foodType}</div>
                        <div>{entry.quantity}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Form for adding new entries */}
                <form onSubmit={handleSubmit} className="add-entry-form">
                    <input className='inputElem' type="date" name="date" value={formData.date} onChange={handleChange} required />
                    <input className='inputElem' type="time" name="time" value={formData.time} onChange={handleChange} required />
                    <input className='inputElem' type="text" name="foodType" placeholder="Food Type" value={formData.foodType} onChange={handleChange} required />
                    <input className='inputElem' type="number" name="quantity" placeholder="Quantity (oz)" value={formData.quantity} onChange={handleChange} required />
                    <button className='inputElem' type="submit">Add Entry</button>
                  </form>
              </div>
            </div>
    </div>
  );
}

export default Feeding;