import React from 'react';

const Sidebar = ({ appointments, setSelectedAppointment }) => {
  const sortedAppointments = [...appointments].sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateA - dateB;
  });

  return (
    <div className="sidebar">
      {sortedAppointments.map((appt) => (
        <button key={appt._id} onClick={() => setSelectedAppointment(appt)}>
          {appt.date} {appt.time}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
