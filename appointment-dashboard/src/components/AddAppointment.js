import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAppointment = ({ fetchAppointments }) => {
  const [appointment, setAppointment] = useState({
    customer: "",
    phone: "",
    stylist: "",
    service: "Haircut", // Default to the first service
    notes: "",
    time: "09:00", // Default to 9:00 AM
  });

  const [bookedTimes, setBookedTimes] = useState([]);

  const timeOptions = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const serviceOptions = [
    "Haircut",
    "Hair Coloring",
    "Manicure",
    "Pedicure",
    "Facial",
    "Massage",
  ];

  useEffect(() => {
    const fetchBookedTimes = async () => {
      try {
        const response = await axios.get('https://appointmentdashboard.onrender.com/api/appointments');
        const booked = response.data.map(appointment => appointment.time);
        setBookedTimes(booked);
      } catch (error) {
        console.error('Error fetching booked times:', error);
      }
    };
    fetchBookedTimes();
  }, []);

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://appointmentdashboard.onrender.com/api/appointments/", appointment);
      fetchAppointments();
      toast.success("Appointment booking successful!");
      setAppointment({
        customer: "",
        phone: "",
        stylist: "",
        service: "Haircut",
        notes: "",
        time: "09:00",
      });
    } catch (error) {
      console.error('Error booking appointment:', error);
      toast.error("Failed to book appointment. Please try again.");
    }
  };

  const availableTimes = timeOptions.filter(time => !bookedTimes.includes(time));

  return (
    <>
      <form onSubmit={handleSubmit} className="appointment-form">
        <h3>New Appointment</h3>
        <p>Schedule a new appointment</p>
        <input
          type="text"
          name="customer"
          placeholder="Customer Name"
          value={appointment.customer}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={appointment.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="stylist"
          placeholder="Stylist"
          value={appointment.stylist}
          onChange={handleChange}
        />
        <select name="service" value={appointment.service} onChange={handleChange}>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        <textarea
          name="notes"
          placeholder="Notes"
          value={appointment.notes}
          onChange={handleChange}
        />
        <select name="time" value={appointment.time} onChange={handleChange}>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <button type="submit">Add Appointment</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default AddAppointment;
