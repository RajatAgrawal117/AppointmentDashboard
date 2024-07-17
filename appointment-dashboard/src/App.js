import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddAppointment from './components/AddAppointment';
import Sidebar from './components/Sidebar';
import AppointmentDetails from './components/AppointmentDetails';
import './App.css';

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleAppointmentSelect = async (appointment) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:9000/api/appointments/${appointment._id}`);
      setSelectedAppointment(response.data);
    } catch (error) {
      console.error('Error fetching appointment details:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Appointment Scheduler</h1>
      <header>Welcome to Appointment Scheduler</header>
      <div className="main-content">
        <div className="left-panel">
          {showForm && <AddAppointment fetchAppointments={fetchAppointments} />}
          <Sidebar appointments={appointments} setSelectedAppointment={handleAppointmentSelect} />
        </div>
        <div className="right-panel">
          {loading ? (
            <div>Loading appointment details...</div>
          ) : (
            <AppointmentDetails appointment={selectedAppointment} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
