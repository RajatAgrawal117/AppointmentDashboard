import React from 'react';

const AppointmentDetails = ({ appointment }) => {
  if (!appointment) {
    return <div className="appointment-details">Select an appointment</div>;
  }

  return (
    <div className="appointment-details">
      <h3>Today's appointment at {appointment.time}</h3>
      <p><strong>Customer:</strong> {appointment.customer}</p>
      <p><strong>Phone:</strong> {appointment.phone}</p>
      <p><strong>Stylist:</strong> {appointment.stylist}</p>
      <p><strong>Service:</strong> {appointment.service}</p>
      <p><strong>Notes:</strong> {appointment.notes || 'No notes'}</p>
    </div>
  );
};

export default AppointmentDetails;