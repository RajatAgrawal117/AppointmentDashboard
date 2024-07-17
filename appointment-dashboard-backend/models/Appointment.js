const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  customer: { type: String, required: true },
  time: { type: String, required: true },
  phone: { type: String, required: true },
  stylist: { type: String, required: true },
  service: { type: String, required: true },
  notes: { type: String }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
