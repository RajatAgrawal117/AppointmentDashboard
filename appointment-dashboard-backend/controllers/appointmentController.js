const Appointment = require('../models/Appointment');

const createAppointment = async (req, res) => {
  const { customer, time, phone, stylist, service, notes } = req.body;
  try {
    const newAppointment = new Appointment({ customer, time, phone, stylist, service, notes });
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment created successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAppointmentById = async (req, res) => {
  const appointmentId = req.params.id;
  try {
    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
  getAppointmentById,
};
