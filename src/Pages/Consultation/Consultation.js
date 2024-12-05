import React, { useState, useEffect } from 'react';
import './Consultation.css';

const Consultation = () => {
  const [consultations, setConsultations] = useState([]);
  const [newConsultation, setNewConsultation] = useState({
    date: '',
    time: '',
    description: '',
  });

  // Fetch consultations - replace with real API in production
  useEffect(() => {
    fetch('http://localhost:5000/consultations')
      .then((response) => response.json())
      .then((data) => setConsultations(data));
  }, []);

  // Handle new consultation form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Post new consultation - replace with real API call in production
    fetch('http://localhost:5000/consultations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newConsultation),
    })
      .then((response) => response.json())
      .then((data) => {
        setConsultations([...consultations, data]);
        setNewConsultation({ date: '', time: '', description: '' });
      });
  };

  return (
    <div className="content-container">

    <div className="consultation-container">
      <h1>Consultation Schedule</h1>

      <div className="consultation-list">
        <h2>Upcoming Consultations</h2>
        {consultations.length > 0 ? (
          consultations.map((consult) => (
            <div key={consult.id} className="consultation-card">
              <h3>{consult.date} at {consult.time}</h3>
              <p>{consult.description}</p>
            </div>
          ))
        ) : (
          <p>No consultations scheduled. Book a new consultation below.</p>
        )}
      </div>

      <div className="new-consultation-form">
        <h2>Schedule a New Consultation</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={newConsultation.date}
            onChange={(e) => setNewConsultation({ ...newConsultation, date: e.target.value })}
            required
          />

          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={newConsultation.time}
            onChange={(e) => setNewConsultation({ ...newConsultation, time: e.target.value })}
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            rows="3"
            value={newConsultation.description}
            onChange={(e) => setNewConsultation({ ...newConsultation, description: e.target.value })}
            placeholder="Describe what you'd like to discuss..."
            required
          ></textarea>

          <button type="submit">Schedule Consultation</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Consultation;


